!DOCTYPE html>
<html lang="en">



    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Factura de envios</title>

        <!-- Favicon -->
        <link rel="icon" href="./images/favicon.png" type="image/x-icon" />
        

        <!-- Invoice styling -->
        <style>
            body {
                font-family: 'Montserrat', sans-serif !important;
                text-align: center;
                color: #777;
                text-transform: uppercase;
            }

            body h1 {
                font-weight: 300;
                margin-bottom: 0px;
                padding-bottom: 0px;
                color: #000;
            }

            body h3 {
                font-weight: 300;
                margin-top: 5px;
                margin-bottom: 10px;
                font-style: italic;
                color: #555;
            }

            body a {
                color: #06f;
            }

            .invoice-box {
                max-width: 800px;
                margin: auto;
                padding: 2px;
                /*border: 1px solid #ccc;*/
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                font-size: 16px;
                line-height: 24px;
                font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                color: #555;
            }

            .invoice-box table {
                width: 100%;
                line-height: inherit;
                text-align: left;
                border-collapse: collapse;
                border-spacing: 1px;
            }

            .invoice-box table td {
                padding: 3px;
                vertical-align: top;
            }

            .invoice-box table tr td:nth-child(2) {
                text-align: right;
            }

            .invoice-box table tr.top table td {
                padding-bottom: 10px;
            }

            .invoice-box table tr.top table td.title {
                font-size: 45px;
                line-height: 45px;
                color: #333;
            }

            .invoice-box table tr.information table td {
                padding-bottom: 2px !important;
                padding-top: 2px !important;
                margin-top: 3px !important;
            }

            .invoice-box table tr.heading td {
                background: #eee;
                border-bottom: 1px solid #ddd;
                font-weight: bold;
            }

            .invoice-box table tr.details td {
                padding-bottom: 20px;
            }

            .invoice-box table tr.item td {
                border-bottom: 1px solid #eee;
            }

            .invoice-box table tr.item.last td {
                border-bottom: none;
            }

            .invoice-box table tr.total td:nth-child(2) {
                border-top: 2px solid #eee;
                font-weight: bold;
            }

            @media only screen and (max-width: 600px) {
                .invoice-box table tr.top table td {
                    width: 100%;
                    display: block;
                    text-align: center;
                }

                .invoice-box table tr.information table td {
                    width: 100%;
                    display: block;
                    text-align: center;
                }
            }

            .f12{
                font-size: 12px;
                line-height: 14px;
                font-style: bold;
            }
            .f18{
                font-size: 18px;
                line-height: 14px;
                font-style: bold;
            }
            .f14{
                font-size: 14px;
                line-height: 20px;
                font-style: bold;
            }

            .table-destina{
                text-align: left !important;
                background-color: #EAECEE;
                border: solid 1px;

            }
            .ulist{
                list-style: none;
            }
            .fblue{
                color: blue;
            }
            .fred{
                color: red;
            }
            .fgreen{
                color: green;
            }
            .fcolor{
                color:#23298a
            }

            #watermark {
                position: fixed;

                /** 
                    Establece una posición en la página para tu imagen
                    Esto debería centrarlo verticalmente
                **/
                bottom:   6cm;
               right:     -1.5cm;

                /** Cambiar las dimensiones de la imagen **/
                width:    12cm;
                height:   12cm;

                /** Tu marca de agua debe estar detrás de cada contenido **/
                z-index:  -1000;
            }

            #paid_mark {
                position: fixed;

                /** 
                    Establece una posición en la página para tu imagen
                    Esto debería centrarlo verticalmente
                **/
                bottom:   6cm;
                left:     -1.5cm;

                /** Cambiar las dimensiones de la imagen **/
                width:    12cm;
                height:   12cm;

                /** Tu marca de agua debe estar detrás de cada contenido **/
                z-index:  -1000;
            }

            header {
            position: relative;
            /*top: -1cm !important;
            bottom: 10cm !important;
            z-index: 1000 !important;*/
        }

        footer {
            position: relative;
            /*bottom: -1cm;
            z-index: 1000 !important;*/
        }
        </style>
    </head>

    <body>
    <div id="watermark">
        <img src="../public/images/marca-de-agua.png" height="100%" width="100%"/>
    </div>
    <header style="width: 100% !important;">
        <div class="invoice-box">
            <table border="0">
                <tr>
                    <td width="30%" style="text-align: center;">
                        <img src="../public/images/logo_reporte.svg" width="130" height="76"
                            style="padding-top:20px;">
                    </td>
                    <td width="90%" style="text-align: left; padding-top: 5px">

                        <table style="border:1px solid #ccc !important;">
                            <tr>
                                <td style="font-size: 11; line-height: 0.6em; padding-left: 10px">
                                    <p>venezuelacargo.com</p>
                                    <p>6994 NW 82 Ave. Miami, FL 33166</p>
                                    <p>+ 58 (412) 181 2469</p>

                                </td>
                                <td style="padding-left: 7px; padding-right: 7px; font-size: 11; line-height: 0.5em;">
                                    <p><b class="fcolor">FACTURA - {{ $invoice['nro_factura'] }}</b></p>
                                    <p>{{ \Carbon\Carbon::parse($invoice['fecha_creado'])->format('d-m-Y') }} </p>
                                    <p><b @if ( $invoice['pago'] == 'VERIFICANDO PAGO' ) class="fblue" @elseif($invoice['pago'] == 'FACTURA PAGADA') class="fgreen" @else class="fred" @endif >{{ $invoice['pago'] }}</b></p>
                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>
            </table>

            <!--tabla de datos usuario-->
            <table
                style="border-right:1px solid #ccc !important; border-left:1px solid #ccc !important; border-bottom:1px solid #ccc !important; border-top: 1px solid #ccc !important; margin-right: 3px; margin-top: 5px;">
                <tr>
                    <td colspan="2" style="text-align: left; padding-left: 10px;">
                        <b class="fcolor">COD - {{ $user->cod_usuario }}</b>
                    </td>
                </tr>
                <tr style="font-size: 11; line-height: 0.7em;">
                    <td colspan="2" style="text-align: left; padding-left: 10px;">
                        {{  \Str::upper($user->nombres.' '.$user->apellidos.'. C.I: '.$user->cedula.'. TLF: '.$user->telefono) }}
                    </td>
                </tr>

                <tr>
                    <td colspan="2" style="text-align: left; padding-left: 10px; font-size:13px;">
                        {{ \Str::upper($user->direccion.', '.$user->estado_ve.' '. $user->zona.' '.$user->codigo_postal) }}
                    </td>
                </tr>
            </table>


            <!--tabla de trackings-->
            <table
                style="border-right:1px solid #ccc !important; border-left:1px solid #ccc !important; border-bottom:1px solid #ccc !important; border-top: 1px solid #ccc !important; margin-right: 3px; margin-top: 10px; line-height: 1.2em;">
                <thead>
                    <tr>
                        <th width="33%" class="fcolor"
                            style="text-align: center; padding-left: 10px; border-right: 1px solid #ccc !important; font-size:13px;">
                            FECHA ESTIMADA DE LLEGADA</th>
                        <th width="33%" class="fcolor"
                            style="text-align: center; padding-left: 10px; border-right: 1px solid #ccc !important; font-size:13px;">
                            TIPO DE VIAJE</th>
                        <th width="33%" class="fcolor"
                            style="ext-align: center; padding-left: 10px; border-right: 1px solid #ccc !important; font-size:13px;">
                            NÚMERO DE CONTENEDOR</th>
                    </tr>
                </thead>
                <tr style="font-size: 11; line-height: 1.2em;">
                    <td
                        style="text-align: center; padding-left: 10px; border-right: 1px solid #ccc !important; border-top: 1px solid #ccc !important;">
                        {{ $invoice['fecha_estimada'] }}
                    </td>
                    <td
                        style="text-align: center; padding-left: 10px; border-right: 1px solid #ccc !important; border-top: 1px solid #ccc !important;">
                        {{ $invoice['tipo_envio'] }}
                    </td>
                    <td
                        style="text-align: center; padding-left: 10px; border-right: 1px solid #ccc !important; border-top: 1px solid #ccc !important;">
                        {{ $invoice['nro_container'] }}
                    </td>
                </tr>
            </table>
        </div>
    </header>
    <main style="margin-top:5px !important;">
        <div class="invoice-box">
            <p class="fcolor" style="text-align: left; font-size:13px;"><b>INFORMACIÓN DEL PAQUETE</b></p>
            
                <!--tabla de datos del paquete-->
            <table style="border-right:1px solid #ccc !important; border-left:1px solid #ccc !important; border-bottom:1px solid #ccc !important; border-top: 1px solid #ccc !important; margin-right: 3px; margin-top: 5px;">
                <thead>
                    <tr>
                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:12px;"
                            width="25%" class="fcolor">NRO. WH</th>
                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:12px;"
                            width="25%" class="fcolor">WH Secundario</th>
                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:12px;"
                            width="10%" class="fcolor">CAJA/CAJAS</th>
                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:12px;"
                            width="10%" class="fcolor">PESO</th>
                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:12px;"
                            width="10%" class="fcolor">VOLUMEN</th>
                        <th width="10%" class="fcolor" style="border-right:1px solid #ccc !important; text-align: center; font-size:12px;">PIE CÚB</th>
                        
                        <th width="10%" class="fcolor" style="text-align: center; font-size:12px;">TOTAL SEGURO</th>
                    </tr>
                </thead>
                @foreach ($invoice_info_trackings as $tracking)
                    <tr style="font-size: 11; text-align: center;">
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <b>{{ $tracking->warehouse }}</b>
                        </td>
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            @if( $invoice['type_envio'] == 'reempaque' )
                                <b>{{ $tracking->wh_second }}</b>
                            @endif
                        </td>
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <b>{{ number_format($tracking->num_piezas,2) }}</b>
                        </td>
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <b>{{ number_format($tracking->peso,2) }}</b>
                        </td>
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <b>{{ number_format($tracking->volumen,2) }}</b>
                        </td>
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <b>{{ number_format($tracking->pie_cubico,2) }}</b>
                        </td>
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <b>{{ number_format($tracking->total_seguro,2, '.', ',') }}</b>
                        </td>
                    </tr>
                @endforeach
            </table>

            <!--tabla de datos del paquete-->
            <table style="border-right:1px solid #ccc !important; border-left:1px solid #ccc !important; border-bottom:1px solid #ccc !important; border-top: 1px solid #ccc !important; margin-right: 3px; margin-top: 20px;">
                <thead>
                    <tr>
                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;"
                            width="20%">
                            WH
                        </th>
                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;"
                            width="10%">
                            VOL
                        </th>
                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;"
                            width="10%">
                            PESO</th>
                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;"
                            width="10%">
                            Pie Cubico
                        </th>
                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;"
                            width="10%">
                            LB/VOL
                        </th>
                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;"
                            width="10%">
                            COSTO ENV
                        </th>
                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;"
                            width="10%">
                            SEGURO
                        </th>
                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;"
                            width="20%">
                            SUB TOTAL
                        </th>
                    </tr>
                </thead>
                @foreach ($invoice_contents as $tracking)
                    <tr style="font-size: 9; text-align: center; line-height: 0.5em;">
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <p style="Line-height:0.5cm">
                               {{ $tracking->warehouse }}
                            </p>
                        </td>
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <p style="Line-height:0.5cm">
                               {{ $tracking->volumen }}
                            </p>
                        </td>
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <p style="Line-height:0.5cm">
                                {{ $tracking->peso }}
                            </p>
                        </td>
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <p style="Line-height:0.5cm">
                                {{ $tracking->pie_cubico }}
                            </p>
                        </td>
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <p style="Line-height:0.5cm">
                                {{ $tracking->total_lb }}
                            </p>
                        </td>
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <p style="Line-height:0.5cm">
                                {{ $tracking->cost_env }}
                            </p>
                        </td>
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <p style="Line-height:0.5cm">
                                {{ $tracking->seguro }}
                            </p>
                        </td>
                        <td
                            style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <p style="Line-height:0.5cm">
                                {{ $tracking->sub_total }}
                            </p>
                        </td>
                    </tr>

                @endforeach
                <tr style="font-size: 11; text-align: center; line-height: 1.2em;">
                    <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                        <b>TIPO DE CAJA</b>
                    </td>
                    <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                        <b>CANTIDAD</b>
                    </td>
                    <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                        <b>COSTO</b>
                    </td>
                    <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">

                    </td>
                    <td style="text-align: left; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                    </td>
                    <td style="text-align: left; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                    </td>
                    <td style="text-align: left; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                    </td>
                    <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                        <b>SUB TOTAL</b>
                    </td>
                </tr>
                @foreach ($invoice_info_extras as $info_extra)
                    <tr  style="font-size: 9; text-align: center; line-height: 0.5em;">
                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <p style="Line-height:0.5cm">
                                <small>{{ $info_extra->nombre }}</small>
                            </p>
                        </td>
                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <p style="Line-height:0.5cm">
                                <small>{{ $info_extra->cant }}</small>
                            </p>
                        </td>
                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                            <p style="Line-height:0.5cm">
                                <small>{{ $info_extra->monto_gasto_extra }}</small>
                            </p>
                        </td>
                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                        </td>
                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                        </td>
                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;">
                        </td>
                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;text-align-last: center;    vertical-align: middle;">
                        </td>
                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;text-align-last: center;    vertical-align: middle;">
                            <small>$ {{ $info_extra->sub_total }}</small>
                        </td>
                    </tr>
                @endforeach
            </table>
            
            <!--tabla totales-->
            

            <table>


                <tr style="font-size: 11; text-align: center; line-height: 1em;">
                    <td width="42%">
                    </td>
                    <td width="58%" style="text-align: left; ">
                        <table>
                            <tr>
                                <td
                                    style="text-align: left; border-right:1px solid #ccc !important; border-left:1px solid #ccc !important; padding-left: 10px; font-size:13px;">
                                    <b class="fcolor">COSTOS EXTRAS</b>
                                </td>
                                <td
                                    style="text-align: right; border-right:1px solid #ccc !important; border-left:1px solid #ccc !important; padding-left: 10px; font-size:13px;">
                                    $ {{ $invoice['gastos_extras'] }}
                                </td>
                            </tr>
                        </table>

                    </td>

                </tr>
            </table>

            <table>
                <tr style="font-size: 11; text-align: center; line-height: 1em;">
                    <td width="42%">
                    </td>
                    <td width="58%" style="text-align: left; ">
                        <table>
                            <tr>
                                <td
                                    style="text-align: left; border-right:1px solid #ccc !important; border-left:1px solid #ccc !important; padding-left: 10px; font-size:13px;">
                                    <b class="fcolor">Costo Por WH</b>
                                </td>
                                <td
                                    style="text-align: right; border-right:1px solid #ccc !important; border-left:1px solid #ccc !important; padding-left: 10px; font-size:13px;">
                                    $ {{ $invoice['cost_x_tracking'] }}
                                </td>
                            </tr>
                        </table>

                    </td>

                </tr>
            </table>

            @if( $invoice['type_envio'] == 'reempaque' )
                <table>
                    <tr style="font-size: 11; text-align: center; line-height: 1em;">
                        <td width="42%">
                        </td>
                        <td width="58%" style="text-align: left; ">
                            <table>
                                <tr>
                                    <td
                                        style="text-align: left; border-right:1px solid #ccc !important; border-left:1px solid #ccc !important; padding-left: 10px; font-size:13px;">
                                        <b class="fcolor">Costo Por Reempaque</b>
                                    </td>
                                    <td
                                        style="text-align: right; border-right:1px solid #ccc !important; border-left:1px solid #ccc !important; padding-left: 10px; font-size:13px;">
                                        $ {{ $invoice['cost_reempaque'] }}
                                    </td>
                                </tr>
                            </table>

                        </td>

                    </tr>
                </table>
            @endif

            <!--totales-->
            <table>


                <tr style="font-size: 11; text-align: center; line-height: 1.2em;">
                    <td width="42%">
                    </td>
                    <td width="58%" style="text-align: left; ">
                        <table style="background: #ccc">
                            <tr>
                                <td
                                    style="text-align: left; border-right:1px solid #ccc !important; border-bottom:1px solid #ccc !important;border-left:1px solid #ccc !important; padding-left: 10px;">
                                    <b class="fcolor">TOTAL USD</b>
                                </td>
                                <td
                                    style="text-align: right; border-right:1px solid #ccc !important; border-left:1px solid #ccc !important; padding-left: 10px; border-bottom:1px solid #ccc !important;">
                                    {{ $invoice['total_usd'] }}
                                </td>
                            </tr>
                        </table>

                    </td>

                </tr>
            </table>
            <p class="fred" style="text-align: left; font-size:13px;"><b>RECIBES {{ $invoice['cajas'] }} CAJA/CAJAS</b></p>
        </div>    
    </main>
    <footer style="margin-top:0cm !important;">
        <hr style="">
        <table>

            <tr>
                <td valign="top" style="text-align: left; padding-left: 10px;">
                    <li class="fcolor"
                        style="text-align: left; font-size: 6;  line-height: 1.2em; list-style-type: none;">
                        <strong>MÉTODOS DE PAGO</strong></li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em"><strong>TITULAR:
                        Venezuela Cargo C.A - CI: J-501734542 - TELÉFONO: (0412)1812469</strong></li>
                    <hr style="color: #ccc; line-height: 0.5em">
                    <li class="fcolor"
                        style="text-align: left; font-size: 6;  line-height: 1.2em; list-style-type: none;">
                        <strong>BANCOS VENEZOLANOS (PAGOS EN BOLÍVARES)</strong></li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">BANCA AMIGA
                    </li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">NRO DE CUENTA:
                        0172-0802-17-8025350409 TIPO: CTA CORRIENTE</li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">NOTAS: PAGOS POR
                        TRANSFERENCIAS Y PAGO MÓVIL</li>
                    <hr style="color: #ccc; line-height: 0.5em">
                    <li class="fcolor"
                        style="text-align: left; font-size: 6;  line-height: 1.2em; list-style-type: none;">
                        <strong>BANCOS AMERICANOS (PAGOS EN DIVISAS)</strong></li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">BANK OF AMERICA
                    </li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">NRO DE CUENTA:
                        3340 6659 9986 TIPO: CTA CORRIENTE</li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">ABA ROUTING
                        NUMBER: 061000052</li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">NOTAS: NO COLOCAR
                        NADA EN EL ASUNTO DE LA TRANSFERENCIA</li>
                </td>

                <td valign="top" style="text-align: left; padding-left: 10px;">
                <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">ZELLE</li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">CORREO
                        ELECTRÓNICO: venezuelacargo@icloud.com</li>
                    <hr style="color: #ccc; line-height: 0.5em">
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">BINANCE</li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">Importacionesreca@hotmail.com</li>
                    <hr style="color: #ccc; line-height: 0.5em">
                    <li class="fcolor"
                        style="text-align: left; font-size: 6;  line-height: 1.2em; list-style-type: none;">
                        <strong>CONDICIONES DE ENVÍO</strong></li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">EL PRESENTE INVOICE ESTA SUJETO A CAMBIOS EN SU TARIFA Y COSTO FINAL, SEGÚN GASTOS ADICIONALES QUE SE PRESENTEN EN LA ADUANA DE VENEZUELA, EL CLIENTE ESTARÁ EN LA OBLIGACIÓN DE CANCELAR DICHOS GASTOS.</li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">Su fecha estimada
                        de entrega será considerada tan pronto su factura sea cancelada.</li>
                    <li style="text-align: left; padding-left: 10px; color: red; font-size: 6; line-height: 1.2em">LA
                        FECHA DE LLEGADA ES UNA ESTIMACIÓN DEL INGRESO DEL PAQUETE A VENEZUELA.</li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">En caso de
                        realizar el pago por transferencia en BS al cambio consultar la tasa actual del $.</li>
                    <li style="text-align: left; padding-left: 10px; color: red; font-size: 6; line-height: 1.2em">Antes
                        de registrar el pago de la factura consultar su monto actualizado.</li>
                    <li style="text-align: left; padding-left: 10px; font-size: 6; line-height: 1.2em">CADA DIA DE
                        RETRASO EN SU PAGO SE CONSIDERA UN DIA DE RETRASO EN SU ENTREGA.</li>
                </td>
            </tr>
        </table>
    </footer>
</body>
</html>
