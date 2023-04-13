<template>
<div class="table-responsive">
    <table class="table table-transparent table-responsive">
        <thead>
            <tr>
                 <th style="width: 5%;"></th>
                <th style="width: 25%;" class="text-center">Tipo de caja</th>
                <th style="width: 10%;" class="text-center">Costo</th>
                <th style="width: 10%;" class="text-center">Cantidad</th>
                <th style="width: 10%;" class="text-center"></th>
                <th style="width: 10%;" class="text-center"></th>
                <th style="width: 10%;" class="text-center"></th>
                <th style="width: 20%;" class="text-end">Sub Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in listCajas" :key="index">
                <td>    
                    <button class="btn-acticon_spalert" v-if="type_form != 'show'" type="button" :value="item.id_gasto_extra" @click="delete_box($event)" title="Elimnar Caja" v-title>
                        <i class="ti ti-trash" style="font-size: 21px;"></i>
                    </button>
                </td>
                <td class="text-center">{{ item.nombre }}</td>
                <td class="text-center">{{ item.monto_gasto_extra }}</td>
                <td class="text-center">{{ item.cant }}</td>
                <td class="text-center"></td>
                <td class="text-center"></td>
                <td class="text-center"></td>
                <td class="text-end"> {{ item.sub_total }} </td>
            </tr>
        </tbody>
    </table> 
</div>
</template>

<script>
export default {
    name: 'ListCajas',
    props: ['listCajas', 'type_form'],
    methods: {
        delete_box(e){
            const { value } = e.target.parentNode;
            let newExtrasCajas = [];

            for (let i = 0; i < this.listCajas.length; i++) {
               if( this.listCajas[i].id_gasto_extra != value ){
                    newExtrasCajas.push(this.listCajas[i]);
               }
            }

            this.$emit('removeCaja', newExtrasCajas);
        }
    },
};
</script>

<style lang="scss" scoped>

</style>