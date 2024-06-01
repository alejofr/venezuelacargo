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
        }
    },
    methods: {
        showStateTitle: function(valueState){
            const state = shippingStates.find(value => value.valor === valueState);

            if( state ){
                return state.title;
            }

            return valueState;
        }
    },
    watch: {
        getId: function (){
            this.$emit('getId', this.getId)
        }
    }
}
</script>