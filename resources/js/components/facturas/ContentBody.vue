<template>
<div class="mb-3 table-responsive">
    <table class="table table-transparent table-responsive">
        <thead>
            <tr>
                <th style="width: 20%;">Nro. WareHouse</th>
                <th style="width: 10%;" class="text-center">Volumen</th>
                <th style="width: 10%;" class="text-center">Peso</th>
                <th style="width: 10%;" class="text-center">Pie Cubico</th>
                <th style="width: 10%;" class="text-center">TOTAL LB/VOL</th>
                <th style="width: 10%;" class="text-center">Costo Env.</th>
                <th style="width: 10%;" class="text-center">Seguro</th>
                <th style="width: 20%;" class="text-end">Sub Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in dataContent" :key="index">
                <td>{{ item.warehouse }}</td>
                <td class="text-center">{{ item.volumen }}</td>
                <td class="text-center">{{ item.peso }}</td>
                <td class="text-center">{{ item.pie_cubico }}</td>
                <td class="text-center">{{ item.total_lb }}</td>
                <td class="text-center">{{ item.cost_env }}</td>
                <td class="text-center">{{ item.seguro }}</td>
                <td class="text-end"> {{ item.sub_total }} </td>
            </tr>
        </tbody>
    </table> 
</div>
</template>

<script>
export default {
    name: 'ContentBody',
    props: ['dataContent'],
};
</script>

<style>

</style>