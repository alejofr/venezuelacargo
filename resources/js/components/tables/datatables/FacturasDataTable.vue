<template>
    <tbody>
        <tr v-for="(item, index) in data" :key="index">
            <td>
                <input class="form-check-input m-0 align-middle" v-model="getId" type="radio"  name="id" aria-label="Select invoice" style="border: 1px solid #b9b9b9;cursor:pointer;" :value="item.id_factura">
            </td>
            <td>
                <span class=""> {{ item.nro_factura }}</span>
            </td>
            <td>
                <span> {{ item.nro_container }} </span>
            </td>
             <td>
                <span class=""> {{ item.cliente.nombres }} {{ item.cliente.apellidos }}</span>
            </td>
            <td>
                <span class="avatar status-vzla" :class="{'bg-red-lt': item.estado == 'Pendiente', 'bg-yellow-lt': item == 'Verificacion-Pago', 'bg-teal-lt': item.estado == 'Pago-Verificado'}">{{`${item.estado == 'Pendiente' ? 'Pendiente por Pago' : item.estado == 'Verificacion-Pago' ? 'Verificando Pago' : 'Pago Verificado'}`}}</span>
            </td>
            <td>
                <span class="" style="text-transform: uppercase;"> {{ item.tipo_envio }}</span>
            </td>
            <td>
                <span class=""> {{ item.total_usd }}</span>
            </td>
            <td>
                <span class="" v-if="item.pago != null && !Array.isArray(item.pago)" style="text-transform: uppercase;"> {{ item.pago.tipo_moneda }}</span>
            </td>
            <td>
                <span class=""> {{ item.fecha_creado }}</span>
            </td> 
            <td>
                <div class="btn-list flex-nowrap">
                    <router-link
                        class="nav-link"
                        style="padding: 0;"
                        :to="{
                            name: 'ShowFactura',
                            query: { id: item.id_factura, envio: item.reempaque, type: 'show' }
                        }"
                        title="Ver detalles de factura" 
                        v-title
                    >
                        <i class="ti ti-file-info fs-19"></i>
                    </router-link>
                    <a v-if="item.pago != null && !Array.isArray(item.pago)" :href="item.pago.comprobante" target="_blank" rel="noopener noreferrer" class="nav-link" style="padding: 0;"  title="Ver Comprobante" v-title>
                        <i class="ti ti-photo fs-19"></i>
                    </a>
                    <button
                        v-if="item.pago != null && !Array.isArray(item.pago) && item.estado == 'Verificacion-Pago'"
                        :value="item.id_factura" 
                        @click="showModal($event)"
                        class="nav-link"
                        style="padding: 0;"
                        title="Pago Verificado" 
                        v-title
                    >
                        <i class="ti ti-checklist fs-19"></i>
                    </button>
                    <router-link v-if="item.estado == 'Pendiente'" 
                        :to="{ 
                            name: 'EditarFactura', 
                            query: { id: item.id_factura, envio: item.reempaque, type: 'edit' }
                        }"  
                        class="align-text-top nav-link me-2" 
                         style="padding: 0;"
                        title="Editar Factura" 
                        v-title
                    >
                     <i class="ti ti-edit fs-19"></i>
                    </router-link>
                    <button
                        type="button"
                        class="nav-link"
                        style="padding: 0;"
                        :value="item.id_factura"
                        @click="download($event)"
                    >
                        <i class="ti ti-file-download fs-19"></i>
                    </button>
                    <button
                        type="button"
                        class="nav-link"
                        style="padding: 0;"
                        :value="item.id_factura"
                        @click="sendInvoice($event)"
                        v-if="item.estado_envio != 'FACTURADO' && item.estado == 'Pendiente'"
                    >
                        <i class="ti ti-send fs-19"></i>
                    </button>
                </div>
            </td>
        </tr>
    </tbody>
</template>

<script>
const check = (data = [], value, prop = '') => {
    for (let i = 0; i < data.length; i++) {
        for (const key in data[i]) {
            if( key == prop && data[i][key] == value ){
                return data[i];
            }
        }
    }

    return null
}


const LoaderComponent = () => import('../../LoaderComponent.vue');
const AlertMessageComponent = () => import('../../AlertMessageComponent.vue');
export default {
    name: 'FacturasDataTable',
    props: ['data'],
    data(){
        return {
            getId: '',
        }
    },
    methods: {
        showModal(e){
            const { value } = e.target.parentNode;
            this.$emit('sendCheckPago', check(this.data, value, 'id_factura'));
        },
        async download(e){
            const { value } = e.target.parentNode;
            const data = this.data.filter(item => item.id_factura)[0];
            this.$emit('exporDonwload_pdf', { data, value });
        },
        async sendInvoice(e){
            const { value } = e.target.parentNode;
            this.$emit('send_invoice_pdf', value);
        }
    },
    components: {
        loader: LoaderComponent,
    },
    watch: {
        getId: function (){
            this.$emit('getId', this.getId)
        }
    }
}
</script>
<style>
    .modal.show{
        display: block;
    }
</style>