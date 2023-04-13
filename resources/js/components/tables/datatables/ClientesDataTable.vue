<template>
    <tbody>
        <tr v-for="(item, index) in data" :key="index">
            <td>
                <input class="form-check-input m-0 align-middle" v-model="getId" type="radio"  name="id" aria-label="Select invoice" style="border: 1px solid #b9b9b9;cursor:pointer;" :value="item.usuario_id">
            </td>
            <td>
                <span class=""> {{ item.estado }}</span>
            </td>
            <td>
                <span class=""> {{ item.cod_usuario }}</span>
            </td>
            <td>
                <span class=""> {{ item.nombres }}</span>
            </td>
            <td>
                <span> {{ item.apellidos }} </span>
            </td>
            <td>
                <span> {{ item.email }} </span>
            </td>
            <td>
                <span class=""> {{ item.fecha_creado }}</span>
            </td>
        </tr>
    </tbody>
</template>

<script>

export default {
    name: 'ClientesDataTable',
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