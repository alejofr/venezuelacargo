<template>
    <tbody>
        <tr v-for="(item, index) in data" :key="index">
            <td>
                <input class="form-check-input m-0 align-middle" v-model="getId" type="radio"  name="id" aria-label="Select invoice" style="border: 1px solid #b9b9b9;cursor:pointer;" :value="item.id_envio">
            </td>
            <td>
                <span class=""> {{ item.nro_factura }}</span>
            </td>
            <td>
                <span> {{ item.nro_container }} </span>
            </td>
            <td>
                <span class=""> {{ item.nombres }} {{ item.apellidos }}</span>
            </td>
             <td>
                <span class="" style="text-transform: uppercase;"> {{ item.tipo_envio }}</span>
            </td>
            <td>
                <span class="" style="text-transform: uppercase;"> {{ showStateTitle(item.estado)  }} </span>
            </td>
             <td>
                <span class=""> {{ item.fecha_editado}}</span>
            </td>
            <td>
                <span v-if="item.historial_estado != null">{{item.historial_estado.historial[item.historial_estado.historial.length - 1].title}}</span> 
            </td>
            <td>
                <button 
                    type="button" 
                    class="btn btn-light"
                    v-if="item.nota"
                    @click="openNota"
                >
                    Ver Nota
                </button>
                <div class="modal fade show" v-if="showNota" tabindex="-1" aria-modal="true" role="dialog" style="display: block; background-color: #0000007a;">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Factura: {{ item.nro_factura }}</h5>
                                <button  @click="closeNota" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>{{ item.nota }}</p>
                            </div>
                            <div class="modal-footer">
                                <button @click="closeNota" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <router-link
                        :to="{ 
                            name: 'ChangeEstadoEnvio', 
                            params:{id: item.id_envio}, 
                            query: { estado: item.estado }
                        }"  
                        class="align-text-top me-2" 
                        title="Cambiar el estado de este envio" 
                        v-title
                    >
                    <i class="ti ti-edit fs-19"></i>
                </router-link>
            </td>
        </tr>
    </tbody>
</template>

<script>
import { shippingStates } from '../../../helpers/shippingStates';


export default {
    name: 'EnviosDataTable',
    props: ['data'], 
    data(){
        return {
            getId: '',
            showNota: false
        }
    },
    methods: {
        showStateTitle: function(valueState){
            const state = shippingStates.find(value => value.valor === valueState);

            if( state ){
                return state.title;
            }

            return valueState;
        },
        openNota(){
            this.showNota = true;
        },
        closeNota(){
            this.showNota = false;
        }
    },
    watch: {
        getId: function (){
            this.$emit('getId', this.getId)
        }
    }
}
</script>