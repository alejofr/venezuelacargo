<template>
    <tbody>
        <tr v-for="(item, index) in data" :key="index">
            <td>
                <input class="form-check-input m-0 align-middle" v-model="getId" type="radio"  name="id" aria-label="Select invoice" style="border: 1px solid rgb(1 5 12 / 34%);cursor:pointer;" :value="item.id_gasto_extra">
            </td>
            <td>
                <span class=""> {{ item.nombre }}</span>
            </td>
            <td>
                <span class=""> {{ item.tipo }}</span>
            </td>
            <td>
                <span class=""> {{ item.monto_gasto_extra }}</span>
            </td>
            <td>
                <span class=""> {{ item.accion }}</span>
            </td>
            <td>
                <span class="" v-if="item.condicion == true">
                   {{item.variable_cond}} 
                   <span v-if="item.tipo_cond == 'MAYOR'" class="me-1 ms-1"> > </span>
                   <span v-else class="me-1 ms-1"> <  </span>
                   {{item.cant_cond}} = {{item.monto_cond}}
                </span>
            </td>
        </tr>
    </tbody>
</template>

<script>
export default {
    name: 'GastosExtrasDataTable',
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