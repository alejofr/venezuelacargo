<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factura PDF</title>
    <style>
        @page {
            size: landscape;
            margin: 10mm;
        }

        /* Estilos optimizados para PDF */
        body {
            font-family: 'DejaVu Sans', sans-serif;
            font-size: 10px;
            line-height: 1.3;
            margin: 0;
            padding: 0;
        }
        .pdf-content {
            width: 100%;
        }
        .row {
            display: inline-flex;
            margin-bottom: 15px;
            width: 100%;
        }
        .col-6 {
            width: 48%;
            display: inline-flex;
        }
        .text-end {
            text-align: right;
        }
        .h3 {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        address p {
            margin: 5px 0;
        }
        .table-responsive {
            overflow-x: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f5f5f5;
            font-weight: bold;
        }
        .text-center {
            text-align: center;
        }
        .mb-3 {
            margin-bottom: 15px;
        }
        .mt-4 {
            margin-top: 20px;
        }
        .ms-auto {
            margin-left: auto;
        }
        .d-flex {
            display: flex;
        }
        .align-items-center {
            align-items: center;
        }
        .justify-content-end {
            justify-content: flex-end;
        }
        .me-2 {
            margin-right: 10px;
        }
        .w-100 {
            width: 100%;
        }
    </style>
</head>
<body>
    <section class="w-100 pdf-content">
        @php
            // Función helper para acceder a propiedades tanto de arrays como objetos
            function getValue($data, $key, $default = 'N/A') {
                if (is_array($data)) {
                    return $data[$key] ?? $default;
                } elseif (is_object($data)) {
                    return $data->$key ?? $default;
                }
                return $default;
            }

            // Función para convertir string de precio a número
            function parsePrice($price) {
                if (is_numeric($price)) {
                    return floatval($price);
                }
                // Remover separadores de miles y convertir decimales
                $cleanPrice = str_replace(['.', ','], '', $price);
                return floatval($cleanPrice) / 100;
            }

            // Acceder a los datos procesados
            $data = $processedData;
            $details = getValue($data, 'details', []);
            $client = getValue($data, 'client', []);
            $warehouses = getValue($data, 'warehouses', []);
            $dataContent = getValue($data, 'dataContent', []);
            $list_cajas = getValue($data, 'list_cajas', []);
            $costo_trackings = getValue($data, 'costo_trackings', '0.00');
            $gastos_extras = getValue($data, 'gastos_extras', '0.00');
            $total_usd = getValue($data, 'total_usd', '0.00');
            $total_cajas_recibidas = getValue($data, 'total_cajas_recibidas', 0);
            
            // Calcular total VES
            $total_ves = '0.00';
            $monto_tc = getValue($details, 'monto_tc', '0');
            if (!empty($monto_tc)) {
                $total_usd_num = parsePrice($total_usd);
                $tasa_num = parsePrice($monto_tc);
                $total_ves = number_format($total_usd_num * $tasa_num, 2, ',', '.');
            }
        @endphp

        <div class="row mb-3">
            <div class="col-6">
                <p class="h3">Detalles</p>
                <address>
                    <p style="display: none;">Fecha Factura: <span style="text-transform: uppercase;"></span></p>
                    <p>Numero Factura: {{ getValue($details, 'nro_factura', 'N/A') }}</p>
                    <p>Numero Container: {{ getValue($details, 'nro_container', 'N/A') }}</p>
                    <p>Tarifa Envio: {{ getValue($details, 'tarifa', '0.00') }} USD</p>
                    <p>Tipo Envio: <span style="text-transform: uppercase;">{{ getValue($details, 'tipo_envio', 'N/A') }}</span></p>
                    <p>Tasa Bs: {{ getValue($details, 'monto_tc', '0,00') }} VES</p>
                    <p>Fecha Tasa: {{ getValue($details, 'fecha_tc', 'N/A') }}</p>
                </address>
            </div>
            <div class="col-6 text-end">
                <p class="h3">Cliente</p>
                <address>
                    <p>Nombre Completo: {{ getValue($client, 'nombre', 'N/A') }}</p>
                    <p>Código Usuario: {{ getValue($client, 'codigo', 'N/A') }}</p>
                    <p>Teléfono: {{ getValue($client, 'telefono', 'N/A') }}</p>
                    <p>Cédula: {{ getValue($client, 'cedula', 'N/A') }}</p>
                    <p>Dirección: {{ getValue($client, 'direccion', 'N/A') }}</p>
                </address>
            </div>
        </div>
        
        <!-- Tabla de Warehouses/Trackings -->
        <div class="mb-3 table-responsive">
            <table class="table table-transparent">
                <thead>
                    <tr>
                        <th style="width: 10%;"></th>
                        <th style="width: 15%;">Nro. WareHouse</th>
                        <th style="width: 20%;">Nro. Tracking</th>
                        <th style="width: 20%;">Descripcion</th>
                        <th style="width: 5%;">Alto</th>
                        <th style="width: 5%;">Ancho</th>
                        <th style="width: 5%;">Largo</th>
                        <th style="width: 5%;">Peso</th>
                        <th style="width: 5%;background-color: #fee6c0;">Caja/Cajas</th>
                        <th style="width: 10%;">Total Seguro</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($warehouses as $warehouse)
                        @php
                            $warehouseData = is_object($warehouse) ? (array) $warehouse : $warehouse;
                            $trackings = getValue($warehouseData, 'trackings', []);
                            $singleTracking = getValue($warehouseData, 'tracking', '');
                        @endphp
                        
                        @if(!empty($trackings) && is_array($trackings))
                            @foreach($trackings as $tracking)
                                @php
                                    $trackingData = is_object($tracking) ? (array) $tracking : $tracking;
                                @endphp
                                <tr>
                                    <td></td>
                                    <td><span>{{ getValue($warehouseData, 'warehouse', 'N/A') }}</span></td>
                                    <td><span>{{ getValue($trackingData, 'tracking', 'N/A') }}</span></td>
                                    <td><span>{{ getValue($trackingData, 'descripcion', 'N/A') }}</span></td>
                                    <td><span>{{ getValue($trackingData, 'alto', '0') }}</span></td>
                                    <td><span>{{ getValue($trackingData, 'ancho', '0') }}</span></td>
                                    <td><span>{{ getValue($trackingData, 'largo', '0') }}</span></td>
                                    <td><span>{{ getValue($trackingData, 'peso', '0') }}</span></td>
                                    <td><span>{{ getValue($trackingData, 'num_piezas', '0') }}</span></td>
                                    <td><span>{{ getValue($trackingData, 'total_seguro', '0.00') }}</span></td>
                                </tr>
                            @endforeach
                        @elseif(!empty($singleTracking))
                            <tr>
                                <td></td>
                                <td><span>{{ getValue($warehouseData, 'warehouse', 'N/A') }}</span></td>
                                <td><span>{{ $singleTracking }}</span></td>
                                <td><span>{{ getValue($warehouseData, 'descripcion', 'N/A') }}</span></td>
                                <td><span>{{ getValue($warehouseData, 'alto', '0') }}</span></td>
                                <td><span>{{ getValue($warehouseData, 'ancho', '0') }}</span></td>
                                <td><span>{{ getValue($warehouseData, 'largo', '0') }}</span></td>
                                <td><span>{{ getValue($warehouseData, 'peso', '0') }}</span></td>
                                <td><span>{{ getValue($warehouseData, 'num_piezas', '0') }}</span></td>
                                <td><span>{{ getValue($warehouseData, 'total_seguro', '0.00') }}</span></td>
                            </tr>
                        @else
                            <tr>
                                <td></td>
                                <td><span>{{ getValue($warehouseData, 'warehouse', 'N/A') }}</span></td>
                                <td><span>N/A</span></td>
                                <td><span>{{ getValue($warehouseData, 'descripcion', 'N/A') }}</span></td>
                                <td><span>{{ getValue($warehouseData, 'alto', '0') }}</span></td>
                                <td><span>{{ getValue($warehouseData, 'ancho', '0') }}</span></td>
                                <td><span>{{ getValue($warehouseData, 'largo', '0') }}</span></td>
                                <td><span>{{ getValue($warehouseData, 'peso', '0') }}</span></td>
                                <td><span>{{ getValue($warehouseData, 'num_piezas', '0') }}</span></td>
                                <td><span>{{ getValue($warehouseData, 'total_seguro', '0.00') }}</span></td>
                            </tr>
                        @endif
                    @empty
                    <tr>
                        <td colspan="10" class="text-center">No hay warehouses registrados</td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        
        <div class="w-100 mb-3"></div>
        
        <!-- Tabla de Resumen/Data Content -->
        <div class="mb-3 table-responsive">
            <table class="table table-transparent">
                <thead>
                    <tr>
                        <th style="width: 20%;">Nro. WareHouse</th>
                        <th class="text-center" style="width: 10%;">Volumen</th>
                        <th class="text-center" style="width: 10%;">Peso</th>
                        <th class="text-center" style="width: 10%;">Pie Cubico</th>
                        <th class="text-center" style="width: 10%;">TOTAL LB/VOL</th>
                        <th class="text-center" style="width: 10%;">Costo Env.</th>
                        <th class="text-center" style="width: 10%;">Seguro</th>
                        <th class="text-end" style="width: 20%;">Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $totalDataContent = 0;
                    @endphp
                    
                    @forelse($dataContent as $item)
                        @php
                            $itemData = is_object($item) ? (array) $item : $item;
                            $subtotal = parsePrice(getValue($itemData, 'sub_total', '0'));
                            $totalDataContent += $subtotal;
                        @endphp
                        <tr>
                            <td>{{ getValue($itemData, 'warehouse', 'N/A') }}</td>
                            <td class="text-center">{{ getValue($itemData, 'volumen', '0.00') }}</td>
                            <td class="text-center">{{ getValue($itemData, 'peso', '0.00') }}</td>
                            <td class="text-center">{{ getValue($itemData, 'pie_cubico', '0.00') }}</td>
                            <td class="text-center">{{ getValue($itemData, 'total_lb', '0.00') }}</td>
                            <td class="text-center">{{ getValue($itemData, 'cost_env', '0.00') }}</td>
                            <td class="text-center">{{ getValue($itemData, 'seguro', '0.00') }}</td>
                            <td class="text-end">{{ getValue($itemData, 'sub_total', '0.00') }}</td>
                        </tr>
                    @empty
                    <tr>
                        <td colspan="8" class="text-center">No hay datos de contenido</td>
                    </tr>
                    @endforelse
                    
                    <!-- Fila de totales -->
                    @if(count($dataContent) > 0)
                    <tr>
                        <td colspan="4" class="text-end"><strong>Total Data Content:</strong></td>
                        <td class="text-center"><strong>{{ number_format($totalDataContent, 2) }}</strong></td>
                        <td colspan="2"></td>
                        <td class="text-end"><strong>{{ number_format($totalDataContent, 2) }}</strong></td>
                    </tr>
                    @endif
                </tbody>
            </table>
        </div>
        
        <!-- Tabla de Cajas -->
        @if(count($list_cajas) > 0)
        <div class="table-responsive">
            <table class="table table-transparent">
                <thead>
                    <tr>
                        <th style="width: 5%;"></th>
                        <th class="text-center" style="width: 25%;">Tipo de caja</th>
                        <th class="text-center" style="width: 10%;">Costo</th>
                        <th class="text-center" style="width: 10%;">Cantidad</th>
                        <th class="text-center" style="width: 10%;"></th>
                        <th class="text-center" style="width: 10%;"></th>
                        <th class="text-center" style="width: 10%;"></th>
                        <th class="text-end" style="width: 20%;">Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $totalCajas = 0;
                    @endphp
                    @foreach($list_cajas as $caja)
                        @php
                            $cajaData = is_object($caja) ? (array) $caja : $caja;
                            $subtotalCaja = parsePrice(getValue($cajaData, 'sub_total', '0'));
                            $totalCajas += $subtotalCaja;
                        @endphp
                        <tr>
                            <td></td>
                            <td class="text-center">{{ getValue($cajaData, 'nombre', 'N/A') }}</td>
                            <td class="text-center">{{ getValue($cajaData, 'monto_gasto_extra', '0.00') }}</td>
                            <td class="text-center">{{ getValue($cajaData, 'cant', '0') }}</td>
                            <td class="text-center"></td>
                            <td class="text-center"></td>
                            <td class="text-center"></td>
                            <td class="text-end">{{ getValue($cajaData, 'sub_total', '0.00') }}</td>
                        </tr>
                    @endforeach
                    @if($totalCajas > 0)
                    <tr>
                        <td colspan="7" class="text-end"><strong>Total Cajas:</strong></td>
                        <td class="text-end"><strong>{{ number_format($totalCajas, 2) }}</strong></td>
                    </tr>
                    @endif
                </tbody>
            </table>
        </div>
        @endif
        
        <!-- Resumen Final -->
        <div class="row mt-4">
            <div class="col-12 col-md-6 mb-3">
                <div class="m-0" style="width: 330px;">
                    <div class="form-floating mb-3 w-100">
                        <div class="d-flex flex-column">
                            <span class="me-2">Nro. Factura</span>
                            <span><strong>{{ getValue($details, 'nro_factura', 'N/A') }}</strong></span>
                        </div>
                    </div>
                    <div class="form-floating mb-3 w-100">
                        <div class="d-flex flex-column">
                            <span class="me-2">Nro. Container</span>
                            <span><strong>{{ getValue($details, 'nro_container', 'N/A') }}</strong></span>
                        </div>
                    </div>
                    <div class="form-floating mb-3 w-100">
                        <div class="d-flex flex-column">
                            <span class="me-2">Tarifa de Envío ( {{ getValue($details, 'tipo_envio', 'N/A') }} )</span>
                            <span><strong>{{ getValue($details, 'tarifa', '0.00') }} USD</strong></span>
                        </div>
                    </div>
                    <div class="form-floating mb-3 w-100">
                        <div class="d-flex flex-column">
                            <span class="me-2">Costo Por WH</span>
                            <span><strong>{{ $costo_trackings }} USD</strong></span>
                        </div>
                    </div>
                    @if(isset($data['costo_reempaque']))
                    <div class="form-floating mb-3 w-100">
                        <div class="d-flex flex-column">
                            <span class="me-2">Costo Reempaque</span>
                            <span><strong>{{ getValue($data, 'costo_reempaque', '0.00') }} USD</strong></span>
                        </div>
                    </div>
                    @endif
                </div>
            </div>
            <div class="col-12 col-md-6 mb-3">
                <div class="m-0 ms-auto">
                    <div class="d-flex align-items-center mb-3 justify-content-end" style="color: red;">
                        <span class="me-2">Recibes Caja/Cajas:</span>
                        <span style="max-width: 80px;">
                            <span disabled style="padding: 0.4375rem 5px; text-align: end;">
                                <strong>{{ $total_cajas_recibidas }}</strong>
                            </span>
                        </span>
                    </div>
                    <div class="d-flex align-items-center mb-3 justify-content-end">
                        <span class="me-2">Gastos Extras:</span>
                        <span style="max-width: 80px;">
                            <span disabled style="padding: 0.4375rem 5px; text-align: end;">
                                <strong>{{ $gastos_extras }} USD</strong>
                            </span>
                        </span>
                    </div>
                    <div class="d-flex align-items-center mb-3 justify-content-end">
                        <span class="me-2">Total USD:</span>
                        <span class="text-end" style="width: 80px;">
                            <strong>{{ $total_usd }} USD</strong>
                        </span>
                    </div>
                    <div class="d-flex align-items-center mb-3 justify-content-end">
                        <span class="me-2">Total VES:</span>
                        <span class="text-end" style="width: 80px;">
                            <strong>{{ $total_ves }} VES</strong>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>