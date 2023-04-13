<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
        body,
        table,
        td,
        a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        table {
            border-collapse: collapse !important;
        }

        body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        @media screen and (max-width: 480px) {
            .mobile-hide {
                display: none !important;
            }

            .mobile-center {
                text-align: center !important;
            }
        }

        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }
    </style>

<body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">
    <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Open Sans, Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    </div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px;">
                    <tr>
                        <td align="center" valign="top" style="font-size:0; padding: 15px;" bgcolor="#24298D">
                            <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%; max-height: 50px;">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                                    <tr>
                                    <td align="center" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 800; line-height: 48px;" class="mobile-center">
                                            <h1 style="font-size: 32px; font-weight: 900; margin: 0; color: #ffb901;">Venezuelacargo</h1>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    <td align="center" style="padding: 5px 35px 10px 35px; background-color: #ffffff;" bgcolor="#ffffff">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                                <tr>
                                    <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 5px;"> <img src="https://img.icons8.com/carbon-copy/100/000000/checked-checkbox.png" width="80" height="80" style="display: block; border: 0px;" /><br>
                                        <h2 style="font-size: 25px; font-weight: 800; line-height: 26px; color: #333333; margin: 0;"> ¡Notificación de Factura! </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                        <p style="font-size: 16px; font-weight: 400; line-height: 24px; color: #777777; text-align: justify;"> Se ha generado una nueva factura por conceptos de envio de paquetes. Se adjunta comprobante</p>
                                    </td>
                                </tr>
                                <tr >
                                    <td align="left" style="padding-top: 20px;">
                                        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="border-top: solid 1px;">
                                            <tr>
                                                <td width="75%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;"> Nro # </td>
                                                <td width="25%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; text-align: right;"> {{  $invoice['nro_factura'] }}</td>
                                            </tr>

                                            <tr>
                                               <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px; text-align: left;"> Fecha </td>
                                                <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px; text-align: right;"> {{ \Carbon\Carbon::parse($invoice['fecha_creado'])->format('d-m-Y') }}</td>
                                            </tr>
                                  
                                            <tr style="border-top: solid 1px;">
                                                <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px; text-align: right;"> COSTO TOTAL </td>
                                                <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px; text-align: right;"> $ {{ $invoice['total_usd'] }}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td width="100%" align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px; color:red;"> En caso de pagar en Bs confirme el monto de la factura dentro del sistema antes de realizar el pago, INGRESE A FACTURACIÓN, BUSQUÉ SU FACTURA Y CONSULTE EL COMPROBANTE.</td>
                    </tr>

                    <tr>
                        
                        <td align="center" style="padding: 5px; background-color: #CCCCCC;  border-top: solid   1px;" bgcolor="#CCCCCC">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px;">
                                <tr>
                                    <td align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 300; line-height: 14px;">
                                        <center>
                                        <p style="font-size: 14px; font-weight: 600; line-height: 10px; color: #000;">venezuelacargo.com</p>
                                        </center>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>