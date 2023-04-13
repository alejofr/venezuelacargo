<template>
    <div class="container-xl">
       <div class="row row-cards">
            <div class="col-12">
                <div class="card card-lg" style="background: #fff;position:relative;">
                    <div ref="pdfHtml" class="w-100 h-100">
                          <div  class="img-marca-agua" style="position: absolute;width: 100%;height: 100%;display: flex;align-items:center;justify-content: center;"><img src="/images/marca-de-agua.png" style="max-width: 100%;max-height:100%;opacity: 0.6;" /></div>
                           <div  class="card-body wrapper-vzlacargo">
                        <div class="row mb-3 wrapper-vzlacargo-header">
                            <div class="col-4">
                                <div class="img"><img src="/images/venezuela-cargo-1.png" height="105" /></div>
                            </div>
                            <div class="col-8">
                                <div class="wrapper-vzlacargo-text">
                                    <div class="row pt-3 px-3">
                                        <div class="col-8">
                                            <address style="color: #1e293b;">
                                                <p style="color: #1e293b;" class="mb-1">Venezuela Cargo</p>
                                                <p style="color: #1e293b;" class="mb-1">8601 NW 72nd Miami, FL - 33166</p>
                                                <p style="color: #1e293b;" class="mb-1">+ 58 (412) 181 2469</p>
                                            </address>
                                        </div>
                                        <div class="col-4 text-end">
                                            <p class="h3 textTitlepdf" style="color:#23298a;"><strong>RECIBO - {{data.recibo}}</strong></p>
                                            <address style="color: #1e293b;">
                                                <p style="color: #1e293b;" >{{data.fecha_recibo}}</p>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col 6 mt-3">
                                <div class="wrapper-vzlacargo-text h-100">
                                    <div class="row pt-3 px-3">
                                        <div class="col-8">
                                            <address style="color: #1e293b;">
                                                <p style="color: #1e293b;" class="mb-1">{{data.cliente.nombres}}</p>
                                                <p style="color: #1e293b;" class="mb-1">{{data.cliente.apellidos}}</p>
                                                <p style="color: #1e293b;">{{data.cliente.cedula}}</p>
                                            </address>
                                        </div>
                                        <div class="col-4 text-end">
                                            <address style="color: #1e293b;">
                                                <p style="color: #1e293b;" class="mb-1">{{data.cliente.estado}}</p>
                                                <p style="color: #1e293b;" class="mb-1">{{data.cliente.zona}}, {{data.cliente.codigo_postal}}</p>
                                                <p style="color: #1e293b;">{{data.cliente.zona}}</p>
                                            </address>
                                        </div>
                                        <div class="col-12">
                                            <address style="color: #1e293b;">
                                                <p style="color: #1e293b;">{{data.cliente.ref_direccion}}</p>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col 6 mt-3">
                                <div class="wrapper-vzlacargo-text h-100">
                                    <div class="row pt-3 px-3">
                                        <div class="col-7">
                                            <p class="h3 textTitlepdf" style="color:#23298a;"><strong>Trackings</strong></p>
                                            <address style="color: #1e293b;">
                                                <p style="color: #1e293b;" class="mb-1" v-for="(item, index) in data.trackings" :key="index">
                                                    <span class="me-1"><strong>{{index}}.</strong></span> 
                                                    <span>{{item.tracking}}</span>  
                                                </p>
                                            </address>
                                        </div>
                                        <div class="col-5 text-end">
                                            <p class="h3 textTitlepdf" style="color:#23298a;"><strong>Transportista</strong></p>
                                            <address style="color: #1e293b;" >
                                                <p style="color: #1e293b;">{{data.transporte}}</p>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 col-12">
                                <p class="h3 textTitlepdf" style="color:#23298a;"><strong>INFORMACIÓN GENERAL DE LOS PAQUETES</strong></p>
                                <table  style="border-right:1px solid #ccc !important; border-left:1px solid #ccc !important; border-bottom:1px solid #ccc !important; border-top: 1px solid #ccc !important; width: 100%;">  
                                    <thead>
                                        <tr>
                                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;color:#23298a;padding: 5px;vertical-align: top;" width="25%" >TOTAL PIEZAS</th>
                                        <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;color:#23298a;padding: 5px;vertical-align: top;" width="25%" >TOTAL PESO LB</th>
                                            <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;color:#23298a;padding: 5px;vertical-align: top;" width="25%" >TOTAL VOLUME LB</th>
                                            <th width="25%"  style="text-align: center; font-size:13px;color:#23298a;padding: 5px;vertical-align: top;">TOTAL PIE CÚB</th>
                                        </tr>
                                    </thead>   
                                    <tr style="font-size: 11; text-align: center;">
                                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;padding: 5px;vertical-align: top;color: #1e293b;">
                                            <b>{{data.total_piezas}}</b>
                                        </td>
                                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;padding: 5px;vertical-align: top;color: #1e293b;">
                                            <b>{{data.total_peso}}</b>
                                        </td>
                                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;padding: 5px;vertical-align: top;color: #1e293b;">
                                            <b>{{data.total_volumen}}</b>
                                        </td>
                                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;padding: 5px;vertical-align: top;color: #1e293b;">
                                            <b>{{data.total_piecub}}</b>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                             <div class="mt-3 col-12">
                                <p class="h3 textTitlepdf" style="color:#23298a;"><strong>INFORMACIÓN De cada paquete</strong></p>
                                 <table style="border-right:1px solid #ccc !important; border-left:1px solid #ccc !important; border-bottom:1px solid #ccc !important; border-top: 1px solid #ccc !important;width: 100%;">  
                                    <thead>
                                        <tr>
                                            <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;color:#23298a;padding: 5px;vertical-align: top;" width="5%"></th>
                                            <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;color:#23298a;padding: 5px;vertical-align: top;" width="5%">PIEZAS</th>
                                            <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;color:#23298a;padding: 5px;vertical-align: top;" width="10%">ALTO</th>
                                            <th style="border-right:1px solid #ccc !important;; text-align: center; font-size:13px;color:#23298a;padding: 5px;vertical-align: top;" width="10%">ANCHO</th>
                                            <th width="10%" style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;color:#23298a;padding: 5px;vertical-align: top;">LARGO</th>
                                            <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;color:#23298a;padding: 5px;vertical-align: top;" width="10%" >PESO LB</th>
                                            <th style="border-right:1px solid #ccc !important; text-align: center; font-size:13px;color:#23298a;padding: 5px;vertical-align: top;" width="10%" >VOL LB</th>
                                            <th width="10%" style="text-align: center; border-right:1px solid #ccc !important; font-size:13px;color:#23298a;padding: 5px;vertical-align: top;">FT<sup>3</sup></th>
                                            <th width="30%" style="text-align: center; border-right:1px solid #ccc !important; font-size:13px;color:#23298a;padding: 5px;vertical-align: top;">DESCRIPCIÓN</th>
                                        </tr>
                                    </thead>   
                                    <tr style="font-size: 11; text-align: center;" v-for="(item, index) in data.trackings" :key="index" >
                                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;padding: 5px;vertical-align: top;color: #1e293b;">
                                            <b>{{index}}</b>
                                        </td>
                                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;padding: 5px;vertical-align: top;color: #1e293b;">
                                            <b>{{ item.num_piezas }}</b>
                                        </td>
                                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;padding: 5px;vertical-align: top;color: #1e293b;">
                                            <b>{{ item.alto }}</b>
                                        </td>
                                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;padding: 5px;vertical-align: top;color: #1e293b;">
                                            <b>{{ item.ancho }}</b>
                                        </td>
                                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;padding: 5px;vertical-align: top;color: #1e293b;">
                                            <b>{{ item.largo }}</b>
                                        </td>
                                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;padding: 5px;vertical-align: top;color: #1e293b;">
                                            <b>{{ item.peso }}</b>
                                        </td>
                                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;padding: 5px;vertical-align: top;color: #1e293b;">
                                            <b>{{ item.volumen }}</b>
                                        </td>
                                        <td style="text-align: center; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;padding: 5px;vertical-align: top;color: #1e293b;">
                                            <b>{{item.pie_cubico}} </b>
                                        </td>
                                        <td style="text-align: left; border-right:1px solid #ccc !important; border-top:1px solid #ccc !important;padding: 5px;vertical-align: top;color: #1e293b;">
                                            <b>{{item.descripcion}}</b>
                                        </td>

                                    </tr>
                                </table>
                            </div>
                        </div>
                     </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4">
                <input type="file" name="filePDF" id="filePDF" @change="setFilePdf($event)">
            </div>
            <div class="col-12 mt-4">
                <div class="d-flex align-items-center w-100">
                    <btn-volver :classe="'btn-light'"></btn-volver>
                     <div class="col-auto ms-auto d-print-none">
                        <div class="btn-list">
                            <button type="button" class="btn btn-outline-danger" @click="downloadPdf">
                                    <i class="ti ti-file-download me-2" style="font-size: 16px;"></i>
                                    <span class="d-none d-sm-inline-block">Descargar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
import { jsPDF } from "jspdf";
import BtnVolver from '../../components/BtnVolver.vue';


const createPdf = (html, recibo = 1 ) => {
    const namePDF = `paquete-recibido-${recibo}.pdf`;
    const doc = new jsPDF({
        orientation: 'p',
        unit: 'pt',
        format: 'letter',
    });
    const  margin = 10;
    const scale = ( doc.internal.pageSize.getWidth() - margin * 2) / html.clientWidth;

    const result = doc.html(html, {
        x: margin,
        y: margin,
        html2canvas: {
            scale: scale
        },
        /*callback: function (doc) {
            //console.log(doc)prealertas/save-recibo
            const pdf = doc.output('datauristring', {filename: namePDF });
            const file = new File([pdf], namePDF);
            //doc.save(namePDF);
            
            
            return { file: file, name: namePDF }
            const save = doc.save(namePDF);
            console.log(save);
        }*/
    })

    result
    .then(resp => {
        console.log('doc then', doc.output('datauristring', {filename: namePDF }))
        doc.save(namePDF);
    }).catch(err => console.log(err))

    console.log('result', result)
}

export default {
    name: 'SolicitudEnvioRecibido',
    props:['data'],
    data() {
        return {
            fileP: null
        };
    },
    components: {
        BtnVolver
    },
    methods: {
        downloadPdf(){
            if( this.data.ruta_pdf == '' ){
                this.generarPdf()
            }   
        },
        setFilePdf(e){
            console.log(e)
            this.fileP = e.target.files[0];
        },
        generarPdf(recibo = 1){
            const namePDF = `paquete-recibido-${recibo}.pdf`;
            const doc = new jsPDF({
                orientation: 'p',
                unit: 'pt',
                format: 'letter',
            });
            const  margin = 10;
            const scale = ( doc.internal.pageSize.getWidth() - margin * 2) / this.$refs.pdfHtml.clientWidth;

            const result = doc.html(this.$refs.pdfHtml, {
                x: margin,
                y: margin,
                html2canvas: {
                    scale: scale
                },
                /*callback: function (doc) {
                    //console.log(doc)prealertas/save-recibo
                    const pdf = doc.output('datauristring', {filename: namePDF });
                    const file = new File([pdf], namePDF);
                    //doc.save(namePDF);
                    
                    
                    return { file: file, name: namePDF }
                    const save = doc.save(namePDF);
                    console.log(save);
                }*/
            })

            result.then(async () => {
                const pdf = doc.output('datauristring', {filename: namePDF });
                await sendPdf(new File([pdf], namePDF, { type: 'application/pdf' }))
                //doc.save(namePDF);
            })
            .catch(err => {
                console.log(err)
            })

            const sendPdf = async (file) => {
                console.log(file)
                let formData = new FormData();
                formData.append('filePdf', file);

                console.log(formData.get('filePdf'));


                this.axios.post('prealertas/save-recibo', formData, {headers: { "content-type": "multipart/form-data" } } )
                .then(response => { console.log(response.data) })
                .catch(error => { console.log(error)});
            }
            
        },
        async savePdf(file){
            
        }
    },
};
</script>

<style>
    .textTitlepdf{
        text-transform: uppercase;
        font-weight: 700;
    }
    .img{
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .wrapper-vzlacargo-text{
        border: 1px solid #ccc;
    }
</style>