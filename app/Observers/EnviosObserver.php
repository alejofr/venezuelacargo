<?php

namespace App\Observers;

use App\Mail\NotificationEnvioStatus;
use App\Mail\NotificationInvoiceResend;
use App\Models\Almacenes;
use App\Models\Envios;
use App\Models\Facturas\Facturas;
use App\Models\Facturas\FacturasContent;
use App\Models\Facturas\FacturasInfoExtras;
use App\Models\Facturas\FacturasInfoTrackings;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Barryvdh\DomPDF\Facade\Pdf;

class EnviosObserver
{
    /**
     * Handle the Envios "created" event.
     *
     * @param  \App\Models\Envios  $envios
     * @return void
     */
    public $status = [
        [
            'title' => 'ALMACÉN MIAMI',
            'valor' => 'FACTURADO',
        ],
        [
            'title' => 'ENVIADO HACIA VENEZUELA',
            'valor' => 'ENVIO-VENEZUELA',
        ],
        [
            'title' => 'EN TRÁNSITO HACIA VENEZUELA',
            'valor' => 'ENTRANSITO-VENEZUELA',
        ],
        [
            'title' => 'ADUANA DE VENEZUELA',
            'valor' => 'ADUANA-VENEZUELA',
        ],
        [
            'title' => 'ALMACÉN VENEZUELA',
            'valor' => 'ALMACEN-VENEZUELA',
        ],
        [
            'title' => 'ENTREGADO',
            'valor' => 'ENTREGADO'
        ]
    ];
    

    public function created(Envios $envios)
    {
        //
    }

    /**
     * Handle the Envios "updated" event.
     *
     * @param  \App\Models\Envios  $envios
     * @return void
     */
    public function updated(Envios $envios)
    {
        $estado = 'ENVIADO';
        $activo = true;
        $info = [];

        if( $envios->estado == 'ENVIO-VENEZUELA'  ){
            $factura = Facturas::find($envios->id_factura);

            $invoice = [
                'nro_factura' => $factura->nro_factura,
                'fecha_estimada' => $envios->fecha_estimada,
                'tipo_envio' => $factura->tipo_envio,
                'nro_container' => $factura->nro_container,
                'gastos_extras' => $factura->gastos_extras,
                'total_usd' => $factura->total_usd,
                'total_ves' => $factura->total_ves,
                'fecha_creado' => $factura->fecha_creado,
                'monto_tc' => '',
                'cost_reempaque' => $factura->cost_reempaque,
                'cost_x_tracking' => $factura->cost_x_tracking,
                'pago' => 'POR PAGAR'
            ];

            
            if( $factura->estado == 'Verificacion-Pago'  ){
                $invoice['pago'] = 'VERIFICANDO PAGO';
            }else if( $factura->estado == 'Pago-Verificado' ){
                $invoice['pago'] = 'FACTURA PAGADA';
            }


            $invoice_info_trackings = FacturasInfoTrackings::where([['id_factura', $factura->id_factura]])->get()->toArray();
            $invoice_info_extras = FacturasInfoExtras::where([['id_factura', $factura->id_factura]])->get()->toArray();
            $invoice_contents = FacturasContent::where([['id_factura', $factura->id_factura]])->get()->toArray();

            $type_envio = $factura->reempaque == 'si' ? 'reempaque' : 'directo';
            $invoice['type_envio'] = $type_envio; 
            $cajas = 0;

            for ($i=0; $i < count($invoice_info_extras) ; $i++) { 
                $invoice_info_extras[$i] = json_decode($invoice_info_extras[$i]['detalles']);
            }

            $invoice_info_trackings = $this->wharehouses($invoice_info_trackings, $type_envio);
            $invoice_contents = $this->contents_wh($invoice_contents, $invoice_info_trackings);

            for ($i=0; $i < count($invoice_info_trackings); $i++) { 
                $invoice_info_trackings[$i] = json_encode($invoice_info_trackings[$i]);
                $invoice_info_trackings[$i] = json_decode($invoice_info_trackings[$i]);
            }

            for ($i=0; $i < count($invoice_contents) ; $i++) { 
                if( $invoice_contents[$i]['id_factura_tracking'] !== null ){
                    $cajas++;
                }
                

                $invoice_contents[$i] = json_encode($invoice_contents[$i]);
                $invoice_contents[$i] = json_decode($invoice_contents[$i]);
            }
            
            $client = json_decode($factura->cliente);
            $invoice['cajas'] = $cajas;
            $data = [
                "invoice" => $invoice,
                "user" => $client,
                "invoice_info_trackings" => $invoice_info_trackings,
                "invoice_info_extras" => $invoice_info_extras,
                "invoice_contents" => $invoice_contents
            ];
            
            $user = User::find($factura->usuario_id);
            

            if( $user != null ){
                $pdf = PDF::loadView('reports.invoice', $data);
                Mail::to($user->email)
                    ->send(new NotificationInvoiceResend($invoice, $pdf->output()));
            }
     
        }

        if( $envios->estado != 'FACTURADO' && $envios->estado != 'ENTREGADO' ){
            $factura = Facturas::find($envios->id_factura);
            $client = json_decode($factura->cliente);
            $user = User::find($factura->usuario_id);

            $arreglo = [
                'status' => $this->reStatus($envios->estado),
                'nro_factura' => $factura->nro_factura,
                'fecha_creado' => $factura->fecha_creado,
                'fecha_estimada' => $envios->fecha_estimada,
            ];

            Mail::to($user->email)->send(new NotificationEnvioStatus($arreglo));
        }

        if( $envios->estado == 'ENVIO-VENEZUELA' || $envios->estado == 'ENTREGADO'){
            $info = FacturasInfoTrackings::select(['warehouse'])->where('id_factura', '=', $envios->id_factura)->get()->toArray();

            /*if( $envios->estado == 'ENTREGADO' ){
                $activo = false;
            }*/
        }

        for ($i=0; $i < count($info) ; $i++) { 
            $almacen = Almacenes::where('warehouse', '=', $info[$i]['warehouse'])->first();
            if( $almacen != null ){
                $almacen->estado = $estado;
                $almacen->activo = $activo;

                $almacen->update();
            }
        }
    }

    /**
     * Handle the Envios "deleted" event.
     *
     * @param  \App\Models\Envios  $envios
     * @return void
     */
    public function deleted(Envios $envios)
    {
        //
    }

    /**
     * Handle the Envios "restored" event.
     *
     * @param  \App\Models\Envios  $envios
     * @return void
     */
    public function restored(Envios $envios)
    {
        //
    }

    /**
     * Handle the Envios "force deleted" event.
     *
     * @param  \App\Models\Envios  $envios
     * @return void
     */
    public function forceDeleted(Envios $envios)
    {
        //
    }

    public function reStatus($valor)
    {
        $status = Envios::shippingStates();

        for ($i=0; $i < count($status) ; $i++) { 
            if( $status[$i]['valor'] == $valor ){
                return $status[$i]['title'];
            }
        }
    }

    public function wharehouses($data = [], $envio = 'directo')
    {
        $warehouses = [];
        for ($i=0; $i <count($data) ; $i++) { 
            if( $data[$i]['warehouse_padre'] == null && $envio == 'directo' ){
                array_push($warehouses, $data[$i]);
            }

            if( $envio == 'reempaque' && $data[$i]['warehouse_padre'] == null ){
                $wh = '';
                for ($j=0; $j <count($data) ; $j++) { 
                    if(  $data[$i]['id_factura_tracking'] == $data[$j]['warehouse_padre'] ){
                        $wh = ( $wh == '' ) ? $data[$j]['warehouse'] : $wh.','.$data[$j]['warehouse'];
                    }
                }

                $data[$i]['wh_second'] = $wh;

                array_push($warehouses, $data[$i]);
            }
        }

        return $warehouses;
    }

    //
    public function contents_wh($contents = [], $wh = [])
    {
        
        for ($i=0; $i <count($contents) ; $i++) { 
            for ($j=0; $j <count($wh) ; $j++) { 
                if( $contents[$i]['id_factura_tracking'] == $wh[$j]['id_factura_tracking'] ){
                    $contents[$i]['warehouse'] = $wh[$j]['warehouse'];
                    break 1;
                }
            }

            if( $contents[$i]['id_factura_tracking'] === null ){
                $contents[$i]['warehouse'] = '';
            }
        }

        return $contents;
    }
}
