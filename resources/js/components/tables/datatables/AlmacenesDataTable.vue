<template>
        <tbody>
            <tr v-for="(item, index) in data" :key="index">
                <td>
                    <input class="form-check-input m-0 align-middle" v-model="getId" :type="type"  name="id" aria-label="Select invoice" style="border: 1px solid #b9b9b9;cursor:pointer;" :value="item.id_almacen" @click="changeId($event)" v-show="item.status == 1">
                </td>
                <td>
                    <span class=""> {{ item.nombres }} {{ item.apellidos }}</span>
                </td>
                <td>
                    <span class=""> {{ item.warehouse }}</span>
                </td>
                <td>
                    <span class=""> {{ item.tracking }}</span>
                </td>
                <td>
                    <span class=""> {{ item.peso }}</span>
                </td>
                <td>
                    <span class=""> {{ item.volumen }}</span>
                </td>
                <td>
                    <span class=""> {{ item.pie_cubico }}</span>
                </td>
                <td>
                    <span class=""> {{ item.tipo_envio }}</span>
                </td>
                <td>
                    <span class="" v-show="item.status == 1"> {{`${ item.reempaque == 'no' ? 'Directo' : 'Reempaque'}`}}</span>
                </td>
                <td>
                    <span class="avatar bg-green-lt status-vzla"> {{ item.estado }}</span>
                </td>
                <td>
                    <div class="btn-list flex-nowrap m-0-all" style="align-items: center;">
                        <router-link style="margin-bottom: 0 !important;" :to="{ name: 'InstructAlmacen', params:{id: item.id_solicitud}, query: { estado: item.estado_prealerta } }"  class="btn semaforo-btn align-text-top me-2" :class="{'btn-danger': item.status == 0, 'btn-success': item.status == 1 }" :title="(item.status == 0 ? 'Por Asignar' : 'Asigando')" v-title></router-link>
                        <router-link  
                            :to="{ 
                                name: 'EditarWarehose', 
                                params:{id: item.id_almacen},
                            }"  
                            class="align-text-top nav-link m-0" 
                            style="padding: 0;margin-bottom: 0 !important;"
                            title="Editar WareHouse" 
                            v-title
                           
                        >
                        <i class="ti ti-edit" style="font-size: 21px;"></i>
                        </router-link>
                        <button
                            type="button"
                            :value="item.id_almacen" 
                            class="align-text-top nav-link m-0"
                            style="padding: 0;margin-bottom: 0 !important;"
                            title="Eliminar WH" 
                            @click="destroy_wh($event)"
                            v-title
                        >
                            <i class="ti ti-trash fs-19"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
</template>

<script>

const reItemAlmacen = (data = [], id = 1) => {
    for (let i = 0; i < data.length; i++) {
        if( data[i].id_almacen === id ) return data[i];
    }
}

export default {
    name: 'AlmacenesDataTable',
    props: ['data'], 
    data(){
        return {
            getId: [],
        }
    },
    computed: {
        type(){
            return (Object.keys(this.$store.getters['tableadmin/getRequest'].params).length !== 0 && this.$store.getters['tableadmin/getRequest'].params.query.hasOwnProperty('instrucciones') && this.$store.getters['tableadmin/getRequest'].params.query.instrucciones == 'si' && this.$route.name == 'IndexAlmacen') ? 'checkbox' : 'radio';
        }
    },
    beforeCreate() {
        this.$nextTick(async function () {
            if( this.$store.getters['tableadmin/getRequest'].params.query.instrucciones == 'si' ){
                this.getId = this.getStorage();
                this.$emit('getId', this.getId)
            }else{
                window.sessionStorage.removeItem('idLocalStorage');
            }
                
        })
    },
    methods: {
        destroy_wh(e){
            const { value } = e.target.parentNode;
            this.$emit('destroyWH', value);
        },
        getStorage(){
            if( window.sessionStorage.getItem('idLocalStorage') !== undefined && window.sessionStorage.getItem('idLocalStorage') ){
                return JSON.parse(sessionStorage.getItem('idLocalStorage')).data;
            }

            return []
        },
        changeId(e) {
            const value = e.target.value;
            let getDataLocalStorage = {};
            if( window.sessionStorage.getItem('idLocalStorage') !== undefined && window.sessionStorage.getItem('idLocalStorage') ){
                getDataLocalStorage = JSON.parse(sessionStorage.getItem('idLocalStorage'));
            }

            const { usuario_id, tipo_envio, reempaque } = reItemAlmacen(this.data, value);
            
            if( this.getId.includes(value) ){
                let newGetId = []; 
                for (let i = 0; i < this.getId.length; i++) {
                    if( this.getId[i] != value ) newGetId.push(this.getId[i])
                }

                this.getId = newGetId;
            }else{
                
                if( Object.keys(getDataLocalStorage).length !== 0){
                    if( getDataLocalStorage.usuario_id  !== usuario_id){
                        alert('Por favor, debe agregar los WareHouse que pertenezca a un solo cliente');
                        e.preventDefault();
                        return;
                    }else if( getDataLocalStorage.tipo_envio != tipo_envio ){
                        alert('Por favor, debe agregar los WareHouse que pertenezca a un solo tipo de envio');
                        e.preventDefault();
                        return;
                    }else if( getDataLocalStorage.reempaque != reempaque ){
                        alert('Por favor, los envios con reempaque se factura por separdo y los directos igual');
                        e.preventDefault();
                        return;
                    }
                }

                this.getId.push(value);
            }

            

            
            

            window.sessionStorage.removeItem('idLocalStorage');
            getDataLocalStorage.usuario_id = usuario_id;
            getDataLocalStorage.tipo_envio = tipo_envio;
            getDataLocalStorage.reempaque = reempaque;
            getDataLocalStorage.data = this.getId;
            
            if( this.getId.length > 0 ){
                window.sessionStorage.setItem('idLocalStorage', JSON.stringify(getDataLocalStorage))
            }

            this.$emit('getId', this.getId)
            
        }
    },
}
</script>
