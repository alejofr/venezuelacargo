<template>
    <tbody>
        <tr v-for="(item, index) in data" :key="index">
            <td>
                <input class="form-check-input m-0 align-middle" v-model="getId" type="radio"  name="id" aria-label="Select invoice" style="border: 1px solid #b9b9b9;cursor:pointer;" :value="item.id_empresa_transporte">
            </td>
            <td>
                <span class=""> {{ item.nombre }}</span>
            </td>
            <td>
                <span class=""> {{ item.codigo }}</span>
            </td>
            <td>
                <span class=""> {{ item.descripcion }}</span>
            </td>
        </tr>
    </tbody>
</template>

<script>

export default {
    name: 'EmpresasTransportesDataTable',
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