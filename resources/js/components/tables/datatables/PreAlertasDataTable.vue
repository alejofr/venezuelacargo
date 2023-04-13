<template>
    <tbody>
        <tr v-for="(item, index) in data" :key="index">
            <td>
                <input class="form-check-input m-0 align-middle" v-model="getId" type="radio"  name="id" aria-label="Select invoice" style="border: 1px solid #b9b9b9;cursor:pointer;" :value="item.id_solicitud">
            </td>
            <td>
                <span class=""> {{ item.nombres }} {{ item.apellidos }}</span>
            </td>
            <td>
                <span> {{ item.tracking }} </span>
            </td>
            <td>
                <span> {{ item.fecha_creado }} </span>
            </td>
             <td>
                <span class=""> {{ item.nombre }}</span>
            </td>
            <td>
                <span class=""> {{ item.fecha_llegada }}</span>
            </td>
            <td>
                <div class="btn-list flex-nowrap">
                    <router-link :to="{ 
                        name: 'ProcesosPrealertas', 
                        params:{id: item.id_solicitud}, 
                        query: { estado: item.estado }
                    }"  
                    class="btn semaforo-btn align-text-top me-2" 
                    :class="{'btn-danger': item.estado == 'pendiente', 'btn-success': item.estado == 'recibido' }" 
                    :title="(item.estado == 'pendiente' ? 'Pendiente por procesar' : 'Esta en el almacen de Miami')" 
                    v-title></router-link>
                </div>
            </td>
        </tr>
    </tbody>
</template>

<script>

export default {
    name: 'PreAlertasDataTable',
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