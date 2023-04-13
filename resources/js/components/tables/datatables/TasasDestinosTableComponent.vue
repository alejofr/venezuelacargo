<template>
    <tbody>
        <tr v-for="(item, index) in data" :key="index">
            <td>
                <input class="form-check-input m-0 align-middle" v-model="getId" type="radio"  name="id" aria-label="Select invoice" style="border: 1px solid rgb(1 5 12 / 34%);cursor:pointer;" :value="item.id_tasa_destino">
            </td>
            <td>
                <span  v-if="item.estados.length > 5">Otros Estados</span>
                <span  v-else style="display:inline-flex;"><p class="me-1" v-for="(contry, n) in item.estados" :key="n" >{{contry.estado}},</p></span>
            </td>
            <td>
                <span class=""> {{ item.tarifa_aereo }}</span>
            </td>
            <td>
                <span class=""> {{  item.tarifa_maritimo }}</span>
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
import {formatPrice} from '../../../formatPrice.js';
export default {
    name: 'TasasDestinosTableComponent',
    props: ['data'], 
    data(){
        return {
            getId: '',
        }
    },
    beforeCreate(){
        this.$nextTick(async function () {
            for (let i = 0; i < this.data.length; i++) {
                this.data[i].tarifa_aereo = (this.data[i].tarifa_aereo != null) ? formatPrice.constPrice(this.data[i].tarifa_aereo, ',', '.') : this.data[i].tarifa_aereo;
                this.data[i].tarifa_maritimo = (this.data[i].tarifa_maritimo != null) ? formatPrice.constPrice(this.data[i].tarifa_maritimo, ',', '.') : this.data[i].tarifa_maritimo;
            }
        })
    },
    watch: {
        getId: function (){
            this.$emit('getId', this.getId)
        }
    }
}
</script>