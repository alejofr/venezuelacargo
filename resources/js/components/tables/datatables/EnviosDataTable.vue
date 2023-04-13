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
                <span class="" style="text-transform: uppercase;" v-if="item.estado == 'ENVIO-VENEZUELA'"> ENVIADO A VENEZUELA </span>
                <span class="" style="text-transform: uppercase;" v-else-if="item.estado == 'ENTRANSITO-VENEZUELA'"> EN TRÁNSITO HACIA VENEZUELA </span>
                <span class="" style="text-transform: uppercase;" v-else-if="item.estado == 'ADUANA-VENEZUELA'"> ADUANA DE VENEZUELA </span>
                <span class="" style="text-transform: uppercase;" v-else-if="item.estado == 'ALMACEN-VENEZUELA'"> EN ALMACÉN DE VENEZUELA </span>
                <span class="" style="text-transform: uppercase;" v-else-if="item.estado == 'ENTREGADO'"> ENTREGADO </span>
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

export default {
    name: 'EnviosDataTable',
    props: ['data'], 
    data(){
        return {
            getId: '',
        }
    },
    watch: {
        getId: function (){
            this.$emit('getId', this.getId)
        }
    }
}
</script>