<template>
    <tbody>
        <tr v-for="(item, index) in data" :key="index">
            <td>
                
            </td>
            <td>
                <span class=""> {{ item.nombre }}</span>
            </td>
            <td>
                <span> {{ item.tracking }} </span>
            </td>
            <td class="text-lg-dcam">
                <span > {{ item.descripcion }} </span>
            </td>
             <td>
                <span class=""> {{ item.fecha_creado }}</span>
            </td>
            <td>
                <span class=""> {{ item.fecha_llegada }}</span>
            </td>
            <td>
                <div class="btn-list flex-nowrap">
					<div v-if="item.hasOwnProperty('status_instruct')" style="margin-bottom: 0 !important;" class="btn semaforo-btn align-text-top me-2" :class="{'btn-danger': item.status_instruct == 0, 'btn-success': item.status_instruct == 1 }" :title="(item.status_instruct == 0 ? 'Instrucción Por Asignar' : 'Instrucción Asignada')" v-title></div>
                    <router-link
                        :to="{ 
                            name: 'InfoPrelaerta', 
                            params:{id: item.id_solicitud},
                            query: { estado: item.estado } 
                        }"  
                        class="align-text-top me-2 nav-link mb-0" 
                        title="Ver Solicitud" 
                        v-title
                        style="padding:0;"
                    >
                     <i class="ti ti-file-info fs-19"></i>
                    </router-link>
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