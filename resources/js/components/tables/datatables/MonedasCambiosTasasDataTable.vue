<template>
    <tbody>
        <tr v-for="(item, index) in data" :key="index">
            <td>
                <input class="form-check-input m-0 align-middle" v-model="getId" type="radio"  name="id" aria-label="Select invoice" style="border: 1px solid rgb(1 5 12 / 34%);cursor:pointer;" :value="item.id_cambio_tasa">
            </td>
           <td>
                <span class=""> {{ item.nombre_moneda_nc }} - {{ item.abreviatura_moneda_nc }}</span>
            </td>
            <td>
                <span class=""> {{ item.nombre_moneda_divisa }} - {{ item.abreviatura_moneda_divisa }}</span>
            </td>
             <td>
                <span class="" > 1 {{ item.abreviatura_moneda_divisa }} = {{ item.monto_tc }} {{ item.abreviatura_moneda_nc }}</span>
            </td>
            <td>
                <span class="" > {{ item.fecha_tc }}</span>
            </td>
        </tr>
    </tbody>
</template>

<script>
import {formatPrice} from '../../../formatPrice.js';
export default {
    name: 'MonedasCambiosTasasDataTable',
    props: ['data'], 
    data(){
        return {
            getId: [],
        }
    },
    beforeCreate(){
        this.$nextTick(async function () {
            for (let i = 0; i < this.data.length; i++) {
                this.data[i].monto_tc = (this.data[i].monto_tc != null) ? formatPrice.constPrice(this.data[i].monto_tc, '.', ',') : this.data[i].monto_tc;
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