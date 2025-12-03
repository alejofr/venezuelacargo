<?php

namespace App\Http\Controllers\Admin;

class FacturaProcessorController {
    
    // Detalles de la factura
    private $details = [
        'tarifa' => '0.00',
        'fecha_factura' => '',
        'nro_factura' => '',
        'tipo_envio' => '',
        'monto_tc' => '0,00',
        'nro_container' => ''
    ];
    
    private $valueMinAereo = 8;
    private $valueMinMartimo = 1.62;
    
    /**
     * Procesa los datos de la factura similar a la función JavaScript
     */
    public function processFacturaData($responseData) {
        // Debug: Log type of responseData
        error_log('Type of responseData: ' . gettype($responseData));
        if (is_object($responseData)) {
            error_log('responseData is object: ' . json_encode($responseData));
        } elseif (is_array($responseData)) {
            error_log('responseData is array');
        } else {
            error_log('responseData is neither object nor array');
        }
        // Extraer datos del response
        $result = $responseData['result'];
        $tasa = $responseData['tasa'];
        $extrasData = $responseData['extras'];
        
        $id_factura = $result['id_factura'];
        $cliente = $result['cliente'];
        $tarifa_envio = $result['tarifa_envio'];
        $total_usd = $result['total_usd'];
        $tipo_envio = $result['tipo_envio'];
        $nro_factura = $result['nro_factura'];
        $nro_container = $result['nro_container'];
        $warehouses = $result['warehouses'];
        $pago = $result['pago'];
        $extras = $result['extras'];
        $cost_x_tracking = $result['cost_x_tracking'];
        $cost_reempaque = $result['cost_reempaque'];
        $gastos_extras = $result['gastos_extras'];
        
        // Manejar tasa de cambio (puede venir de la factura o de la tasa actual)
        $monto_tc = !empty($tasa) && isset($tasa['monto_tc']) ? $tasa['monto_tc'] : ($result['monto_tc'] ?? '0.00');
        $fecha_tc = !empty($tasa) && isset($tasa['fecha_tc']) ? $tasa['fecha_tc'] : ($result['fecha_tc'] ?? date('Y-m-d'));
        
        // Configurar detalles (siguiendo la lógica del componente LayoutFormFacturar.vue)
        $this->details['tipo_envio'] = $tipo_envio;
        $this->details['tarifa'] = $this->formatPrice($tarifa_envio, ',', '.');
        $this->details['nro_factura'] = $nro_factura;
        $this->details['nro_container'] = $nro_container;
        // Si hay pago, usar la tasa de la factura, sino usar la tasa actual
        $this->details['monto_tc'] = !empty($pago) && is_array($pago) && count($pago) > 0 
            ? $this->formatPrice($result['monto_tc'] ?? $monto_tc, '.', ',') 
            : $this->formatPrice($monto_tc, '.', ',');
        $this->details['fecha_tc'] = !empty($pago) && is_array($pago) && count($pago) > 0 
            ? ($result['fecha_tc'] ?? $fecha_tc) 
            : $fecha_tc;
        $this->details['id_factura'] = $id_factura;
        
        $client = $cliente;
        // Determinar tipo de envío basándose en el campo reempaque de la factura
        $envio = (isset($result['reempaque']) && $result['reempaque'] == 'si') ? 'reempaque' : 'directo';
        
        // Procesar warehouses
        $warehousesResult = $this->warehouses_data($warehouses, $envio);
        $wh_old = $warehousesResult['wh_old'];
        $wh_new = $warehousesResult['wh_new'];
        
        // Configurar warehouses según el tipo de envío
        $warehousesFinal = $wh_old;
        $warehousesNew = [];
        
        // Procesar data content
        if ($envio === 'directo') {
            $dataContent = $this->data_contents($wh_old, $this->details['tipo_envio'], $this->details['tarifa'], $envio);
        } else {
            $dataContent = $this->data_contents($wh_new, $this->details['tipo_envio'], $this->details['tarifa'], $envio);
            $warehousesNew = $wh_new;
        }
        
        // Procesar cajas
        $cajas = $this->cajas($extrasData);
        
        // Procesar listado de cajas extras
        $list_cajas = [];
        foreach ($extras as $element) {
            $detalles = json_decode(json_encode($element['detalles']), true);
            $list_cajas = $this->add_box($list_cajas, $detalles['id_gasto_extra'], $detalles['nombre'], $detalles['monto_gasto_extra'], $detalles['cant']);
        }
        
        // Configurar costos
        $costo_trackings = $this->formatPrice($cost_x_tracking, ',', '.');
        $costo_reempaque = null;
        
        if ($envio === 'reempaque') {
            $costo_reempaque = $this->formatPrice($cost_reempaque, ',', '.');
        }
        
        $gastos_extras_formatted = $this->formatPrice($gastos_extras, ',', '.');
        $total_usd_formatted = $this->formatPrice($total_usd, ',', '.');
        
        // Calcular total VES (siguiendo la lógica del componente)
        $total_ves = $this->calc_total_ves($total_usd_formatted, $this->details['monto_tc']);
        
        // Formatear fecha de factura
        $this->details['fecha_factura'] = !empty($result['fecha_creado']) 
            ? date('d-m-Y', strtotime($result['fecha_creado'])) 
            : '';
        
        // Calcular total de cajas recibidas
        // Lógica: contar los items de dataContent que tienen warehouse no vacío
        // Esto replica: dataContent.filter(item => item.warehouse && item.warehouse !== '').length
        // Y también replica la lógica de print_invoice: contar contents con id_factura_tracking !== null
        $total_cajas_recibidas = $this->calc_total_cajas_recibidas($dataContent);
        
        // Retornar todos los datos procesados
        return [
            'details' => $this->details,
            'client' => $client,
            'warehouses' => $warehousesFinal,
            'warehousesNew' => $warehousesNew,
            'dataContent' => $dataContent,
            'cajas' => $cajas,
            'list_cajas' => $list_cajas,
            'costo_trackings' => $costo_trackings,
            'costo_reempaque' => $costo_reempaque,
            'gastos_extras' => $gastos_extras_formatted,
            'total_usd' => $total_usd_formatted,
            'total_ves' => $total_ves,
            'envio' => $envio,
            'total_cajas_recibidas' => $total_cajas_recibidas
        ];
    }
    
    /**
     * Equivalente a warehouses_data de JavaScript
     */
    private function warehouses_data($data = [], $envio = 'directo') {
        $wh_old = [];
        $wh_new = [];
        
        foreach ($data as $element) {
            // Procesar seguros
            if (!empty($element['total_seguro'])) {
                $total_seguro = $this->parseNum($element['total_seguro']);
                $element['total_seguro'] = $this->formatPrice(number_format($total_seguro, 2), ',', '.');
            }
            
            if (!empty($element['seguro'])) {
                $seguro = $this->parseNum($element['seguro']);
                $element['seguro'] = $this->formatPrice(number_format($seguro, 2), ',', '.');
            }
            
            if ($envio == 'reempaque') {
                if (empty($element['warehouse_padre'])) {
                    $almacen_ids = [];
                    $warehouse_children = '';
                    $wh_child = [];
                    
                    foreach ($data as $item) {
                        if ($element['id_factura_tracking'] == $item['warehouse_padre']) {
                            $id_almacen = $this->generateRandomString(46);
                            $wh_old[] = array_merge($item, ['id_almacen' => $id_almacen]);
                            $almacen_ids[] = $id_almacen;
                            $wh_child[] = $item['warehouse'];
                        }
                    }
                    
                    $warehouse_children = implode(', ', $wh_child);
                    $id_almacen = $this->generateRandomString(46);
                    
                    $wh_new[] = array_merge($element, [
                        'almacen_ids' => $almacen_ids,
                        'warehouse_children' => $warehouse_children,
                        'id_almacen' => $id_almacen
                    ]);
                }
            } else {
                $wh_old[] = $element;
            }
        }
        
        return ['wh_old' => $wh_old, 'wh_new' => $wh_new];
    }
    
    /**
     * Equivalente a data_contents de JavaScript
     */
    private function data_contents($wh = [], $type_envio = 'aereo', $tarifa = '0.00', $envio = 'directo') {
        $data = [];
        $costo_envio = $this->desctPrice($tarifa, ',');
        $costo_envio = $this->parseNum($costo_envio);
        
        foreach ($wh as $element) {
            $ft = 0; $vol = 0; $secure = 0; $sub_total = 0; $cost_env = 0; $pieFt = 0;
            
            $pie_cubico = $element['pie_cubico'];
            $volumen = $element['volumen'];
            $seguro = $element['seguro'];
            $warehouse = $element['warehouse'];
            $peso = $element['peso'];
            
            $ft = $this->parseNum($pie_cubico);
            $pieFt = $this->parseNum($pie_cubico);
            $vol = $this->parseNum($volumen);
            $secure = $this->desctPrice($seguro, ',');
            $secure = $this->parseNum($secure);
            
            // Calcular costo de envío: pie_cubico * tarifa
            $cost_env = $ft * $costo_envio;
            
            $sub_total = $cost_env + $secure;
            $cost_env = $this->formatPrice(number_format($cost_env, 2), ',', '.');
            $secure = $this->formatPrice(number_format($secure, 2), ',', '.');
            $sub_total = $this->formatPrice(number_format($sub_total, 2), ',', '.');
            
            $data[] = [
                'warehouse' => $warehouse,
                'pie_cubico' => $pieFt,
                'volumen' => $volumen,
                'peso' => $peso,
                'total_lb' => '',
                'cost_env' => $cost_env,
                'seguro' => $secure,
                'sub_total' => $sub_total
            ];
        }
        
        if ($type_envio === 'maritimo' && !empty($data)) {
            $data = $this->calc_cost_maritimo($data, $costo_envio);
        }
        
        return ($type_envio == 'aereo' && !empty($data)) ? 
               $this->calc_cost_env_aereo($data, $envio, $costo_envio) : $data;
    }
    
    /**
     * Equivalente a cajas de JavaScript
     */
    private function cajas($extras = []) {
        $box = [];
        
        foreach ($extras as $element) {
            $id_gasto_extra = $element['id_gasto_extra'];
            $nombre = $element['nombre'];
            $monto_gasto_extra = $element['monto_gasto_extra'];
            $tipo = $element['tipo'];
            
            if ($tipo === 'CAJA') {
                $box[] = [
                    'id_gasto_extra' => $id_gasto_extra,
                    'nombre' => $nombre,
                    'monto_gasto_extra' => $this->formatPrice($monto_gasto_extra, ',', '.')
                ];
            }
        }
        
        return $box;
    }
    
    /**
     * Equivalente a add_box de JavaScript
     */
    private function add_box($listCajas = [], $id_gasto_extra = '', $nombre = '', $monto_gasto_extra = '0.00', $cant_caja = 0) {
        $monto = $this->parseNum($this->desctPrice($monto_gasto_extra, ','));
        $cant = $this->parseNum($cant_caja);
        
        $check = array_filter($listCajas, function($caja) use ($id_gasto_extra) {
            return $caja['id_gasto_extra'] == $id_gasto_extra;
        });
        
        if (empty($check)) {
            $sub_total = $cant * $monto;
            
            $listCajas[] = [
                'id_gasto_extra' => $id_gasto_extra,
                'nombre' => $nombre,
                'monto_gasto_extra' => $monto_gasto_extra,
                'cant' => $cant,
                'sub_total' => $this->formatPrice(number_format($sub_total, 2), ',', '.')
            ];
        } else {
            foreach ($listCajas as &$caja) {
                if ($caja['id_gasto_extra'] == $id_gasto_extra) {
                    $cant = $cant + $this->parseNum($caja['cant']);
                    $sub_total = $cant * $monto;
                    $caja['cant'] = $cant;
                    $caja['sub_total'] = $this->formatPrice(number_format($sub_total, 2), ',', '.');
                    break;
                }
            }
        }
        
        return $listCajas;
    }
    
    /**
     * Cálculo de costo marítimo
     */
    private function calc_cost_maritimo($data = [], $costo_envio = 0) {
        $pie_cubico = 0;
        
        foreach ($data as $element) {
            $pie_cubico += $this->parseNum($element['pie_cubico']);
        }
        
        if ($this->valueMinMartimo > $pie_cubico) {
            $pie_cubico = $this->valueMinMartimo;
        }
        
        $cost_env = $pie_cubico * $costo_envio;
        $sub_total = $cost_env;
        $cost_env_formatted = $this->formatPrice(number_format($cost_env, 2), ',', '.');
        $sub_total_formatted = $this->formatPrice(number_format($sub_total, 2), ',', '.');
        
        $dataContentAereo = [
            'warehouse' => '',
            'pie_cubico' => '',
            'volumen' => '',
            'peso' => '',
            'total_lb' => '',
            'cost_env' => '0.00',
            'seguro' => '',
            'sub_total' => '0.00'
        ];
        
        $data[] = array_merge($dataContentAereo, [
            'pie_cubico' => $pie_cubico,
            'cost_env' => $cost_env_formatted,
            'sub_total' => $sub_total_formatted
        ]);
        
        return $data;
    }
    
    /**
     * Cálculo de costo aéreo
     */
    private function calc_cost_env_aereo($data = [], $envio = 'directo', $costo_envio = 0) {
        $vol = 0; $peso = 0; $total_lb = 0;
        
        foreach ($data as $element) {
            $volumen = $this->parseNum($element['volumen']);
            $weight = $this->parseNum($element['peso']);
            
            if ($envio === 'directo') {
                if ($volumen >= $weight) {
                    $total_lb += $volumen;
                } else {
                    $total_lb += $weight;
                }
            } else {
                $vol += $volumen;
                $peso += $weight;
            }
        }
        
        if ($envio === 'directo') {
            $total_lb = ($total_lb <= $this->valueMinAereo) ? $this->valueMinAereo : $total_lb;
        } else {
            if ($vol > $peso && $vol > $this->valueMinAereo) {
                $total_lb = $vol;
            } else if ($peso > $vol && $peso > $this->valueMinAereo) {
                $total_lb = $peso;
            } else {
                $total_lb = $this->valueMinAereo;
            }
        }
        
        $cost_env = $total_lb * $costo_envio;
        $sub_total = $cost_env;
        $cost_env_formatted = $this->formatPrice(number_format($cost_env, 2), ',', '.');
        $sub_total_formatted = $this->formatPrice(number_format($sub_total, 2), ',', '.');
        
        $dataContentAereo = [
            'warehouse' => '',
            'pie_cubico' => '',
            'volumen' => '',
            'peso' => '',
            'total_lb' => '',
            'cost_env' => '0.00',
            'seguro' => '',
            'sub_total' => '0.00'
        ];
        
        $data[] = array_merge($dataContentAereo, [
            'total_lb' => $total_lb,
            'cost_env' => $cost_env_formatted,
            'sub_total' => $sub_total_formatted
        ]);
        
        return $data;
    }
    
    // ========== FUNCIONES HELPER ==========
    
    /**
     * Equivalente a formatPrice.constPrice de JavaScript
     */
    private function formatPrice($value, $spdor_unid, $spdor_decimal) {
        return $this->constructPrice($value, $spdor_unid, $spdor_decimal);
    }
    
    /**
     * Equivalente a formatPrice.desctPrice de JavaScript
     */
    private function desctPrice($precio, $spdor_unid) {
        return str_replace($spdor_unid, '', $precio);
    }
    
    /**
     * Equivalente a parseNum de JavaScript
     */
    private function parseNum($val) {
        $val = str_replace(',', '.', $val);
        return (float) $val;
    }
    
    /**
     * Equivalente a generateRandomString de JavaScript
     */
    private function generateRandomString($num) {
        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678.59';
        $result = '';
        $charactersLength = strlen($characters);
        
        for ($i = 0; $i < $num; $i++) {
            $result .= $characters[rand(0, $charactersLength - 1)];
        }
        
        return $result;
    }
    
    /**
     * Equivalente a calc_total_ves de JavaScript
     * Calcula el total en VES basándose en el total USD y la tasa de cambio
     */
    private function calc_total_ves($total_usd, $tasa) {
        $total_usd_num = $this->parseNum($this->desctPrice($total_usd, ','));
        $tasa_ves = $this->desctPrice($tasa, '.');
        $tasa_ves = str_replace(',', '.', $tasa_ves);
        $tasa_ves = $this->parseNum($tasa_ves);
        
        $total_ves = $total_usd_num * $tasa_ves;
        $total_ves = number_format($total_ves, 2, '.', '');
        $total_ves = str_replace('.', ',', $total_ves);
        
        return $this->formatPrice($total_ves, '.', ',');
    }
    
    /**
     * Calcula el total de cajas recibidas basándose en dataContent
     * 
     * Replica la lógica del componente Vue:
     * dataContent.filter(item => item.warehouse && item.warehouse !== '').length
     * 
     * Y también replica la lógica de print_invoice:
     * contar los contents con id_factura_tracking !== null
     * 
     * @param array $dataContent Array de contenido de la factura
     * @return int Total de cajas recibidas
     */
    private function calc_total_cajas_recibidas($dataContent = []) {
        $total = 0;
        
        foreach ($dataContent as $item) {
            // Contar items que tienen warehouse no vacío
            // Esto indica que están vinculados a un warehouse (caja recibida)
            if (isset($item['warehouse']) && $item['warehouse'] !== '' && $item['warehouse'] !== null) {
                $total++;
            }
        }
        
        return $total;
    }
    
    /**
     * Función auxiliar para construir precios (similar a JavaScript)
     */
    private function constructPrice($value, $spdor_unid, $spdor_decimal) {
        // Implementación simplificada - puedes expandir según necesites
        $cleanValue = preg_replace('/[^0-9]/', '', $value);
        
        if (strlen($cleanValue) < 3) {
            $cleanValue = str_pad($cleanValue, 3, '0', STR_PAD_LEFT);
        }
        
        $integerPart = substr($cleanValue, 0, -2);
        $decimalPart = substr($cleanValue, -2);
        
        // Formatear parte entera con separadores
        $integerPart = number_format((float) $integerPart, 0, '', $spdor_unid);
        
        return $integerPart . $spdor_decimal . $decimalPart;
    }
}

// ========== USO DE LA CLASE ==========

/*
// Ejemplo de uso:
$processor = new FacturaProcessor();

// Tu response data debería tener esta estructura:
$responseData = [
    'result' => [
        'id_factura' => '123',
        'cliente' => 'Cliente Ejemplo',
        'tarifa_envio' => '150.50',
        'total_usd' => '500.75',
        'tipo_envio' => 'aereo',
        'nro_factura' => 'FAC-001',
        'nro_container' => 'CONT-001',
        'warehouses' => [...],
        'pago' => [],
        'extras' => [...],
        'cost_x_tracking' => '25.00',
        'cost_reempaque' => '15.00',
        'gastos_extras' => '50.00'
    ],
    'tasa' => [
        'monto_tc' => '4.50',
        'fecha_tc' => '2023-12-01'
    ],
    'extras' => [...]
];

$processedData = $processor->processFacturaData($responseData);
print_r($processedData);
*/