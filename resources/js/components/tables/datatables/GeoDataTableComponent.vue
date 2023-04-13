<template>
    <tbody>
        <tr v-for="(item, index) in data" :key="index">
            <td>
                <input class="form-check-input m-0 align-middle" v-model="getId" type="radio"  name="id" aria-label="Select invoice" style="border: 1px solid rgb(1 5 12 / 34%);cursor:pointer;" :value="item.id_ubigeo">
            </td>
            <td>
                <span class=""> {{ item.estado }}</span>
            </td>
            <td>
                <span class=""> {{ item.zona }}</span>
            </td>
            <td>
                <span class=""> {{ item.codigo_postal }}</span>
            </td>
            <td>
                <span class="btn badge-status cl1 hover-cl0" :class="{'bg-success': item.activo == 1, 'bg-danger': item.activo == 0 }">
                    <p v-if="item.activo == 1">Visible</p>
                    <p v-else-if="item.activo == 0">Inactivo</p>
                </span>
            </td>
        </tr>
    </tbody>
</template>

<script>

export default {
    name: 'GeoDataTableComponent',
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
