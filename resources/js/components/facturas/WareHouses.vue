<template>
<div class="mb-4 table-responsive">
    <div class="d-flex align-items-center mb-3" v-if="envio === 'reempaque' && type_form != 'show'">
        <button @click="reempaque" type="button" class="btn btn-info ms-auto">
            <span>Reempacar</span>
        </button>
    </div>
    <table class="table table-transparent table-responsive mb-3">
        <thead>
            <tr>
                <th style="width: 10%;"></th>
                <th style="width: 15%;">Nro. WareHouse</th>
                <th style="width: 20%;">Nro. Tracking</th>
                <th style="width: 20%;">Descripcion</th>
                <th style="width: 5%;">Alto</th>
                <th style="width: 5%;">Ancho</th>
                <th style="width: 5%;">Largo</th>
                <th style="width: 5%;">Peso</th>
                <th style="width: 5%;">Piezas</th>
                <th style="width: 10%;">Total Seguro</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in warehouses" :key="index">
                <td>
                    <span class="" v-if="envio === 'reempaque' && type_form != 'show'"><input class="form-check-input m-0 align-middle" v-model="getId" type="checkbox"  name="id" aria-label="Select invoice" style="border: 1px solid #b9b9b9;cursor:pointer;" :value="item.id_almacen"></span>
                </td>
                <td>
                    <span class="">{{ item.warehouse }}</span>
                </td>
                <td>
                    <span class="">{{ item.tracking }}</span>
                </td>
                <td>
                    <span class="">{{ item.descripcion}}</span>
                </td>
                <td>
                    <span class="">{{ item.alto }}</span>
                </td>
                <td>
                    <span class="">{{ item.ancho }}</span>
                </td>
                <td>
                    <span class="">{{ item.largo }}</span>
                </td>
                <td>
                    <span class="">{{ item.peso }}</span>
                </td>
                <td>
                    <span class="">{{ item.num_piezas }}</span>
                </td>
                <td>
                    <span class="">{{ item.total_seguro }}</span>
                </td>
            </tr>
        </tbody>
    </table> 
    <table class="table table-transparent table-responsive mb-3" v-if="envio === 'reempaque'">
        <thead>
            <tr>
                <th style="width: 5%;"></th>
                <th style="width: 20%;">Nro. WareHouse</th>
                <th style="width: 20%;">WH secundarios</th>
                <th style="width: 10%;">Alto</th>
                <th style="width: 10%;">Ancho</th>
                <th style="width: 10%;">Largo</th>
                <th style="width: 10%;">Peso</th>
                <th style="width: 5%;">Piezas</th>
                <th style="width: 10%;">Total Seguro</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in warehousesNew" :key="index">
                <td>
                    <button v-if="type_form != 'show'" class="btn-acticon_spalert" type="button" :value="item.id_almacen" @click="delete_wh($event)" title="Elimnar WH" v-title>
                        <i class="ti ti-trash" style="font-size: 21px;"></i>
                    </button>
                </td>
                <td>
                    <span class="">{{ item.warehouse }}</span>
                </td>
                <td>
                    <span class="">{{ item.warehouse_children }}</span>
                </td>
                <td>
                    <span class="">{{ item.alto }}</span>
                </td>
                <td>
                    <span class="">{{ item.ancho }}</span>
                </td>
                <td>
                    <span class="">{{ item.largo }}</span>
                </td>
                <td>
                    <span class="">{{ item.peso }}</span>
                </td>
                <td>
                    <span class="">{{ item.num_piezas }}</span>
                </td>
                <td>
                    <span class="">{{ item.total_seguro }}</span>
                </td>
            </tr>
        </tbody>
    </table> 
    <form class="modal modal-blur fade" :class="{'show': show == true}"  id="paquete" tabindex="-1" aria-modal="true" role="dialog" >
        <div name="paquete"  class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Reempacar</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenModal()"></button>
                </div>
                <div class="modal-body">
                    <div class="form-floating mb-3 w-100">
                        <input type="text" class="form-control" name="warehouse" v-model="dato.warehouse" id="warehouse" v-validate="'required'" :class="{'is-invalid': errors.first('warehouse')}">
                        <label for="warehouse">Warehouse</label>
                        <div v-if="errors.has('warehouse')" class="invalid-feedback">{{errors.first('warehouse')}}</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" v-validate="'required|numeric'" name="ancho" class="form-control" :class="{'is-invalid': errors.first('ancho')}" id="ancho" v-model="dato.ancho" 
                        :data-vv-validate-on="'change'">
                        <label for="ancho">Ancho</label>
                        <div v-if="errors.has('ancho')" class="invalid-feedback">{{errors.first('ancho')}}</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" v-validate="'required|numeric'" name="alto" class="form-control" :class="{'is-invalid': errors.first('alto')}" id="alto" v-model="dato.alto" 
                        :data-vv-validate-on="'change'">
                        <label for="alto">Alto</label>
                        <div v-if="errors.has('alto')" class="invalid-feedback">{{errors.first('alto')}}</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" v-validate="'required|numeric'" name="largo" class="form-control" :class="{'is-invalid': errors.first('largo')}" id="largo" v-model="dato.largo" 
                        :data-vv-validate-on="'change'">
                        <label for="largo">Largo</label>
                        <div v-if="errors.has('largo')" class="invalid-feedback">{{errors.first('largo')}}</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" v-validate="'required'" name="peso" class="form-control" :class="{'is-invalid': errors.first('peso')}" id="largo" v-model="dato.peso" 
                        :data-vv-validate-on="'change'">
                        <label for="peso">Peso</label>
                        <div v-if="errors.has('peso')" class="invalid-feedback">{{errors.first('peso')}}</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" v-validate="'required|numeric'" name="num_piezas" class="form-control" :class="{'is-invalid': errors.first('num_piezas')}" id="largo" v-model="dato.num_piezas" 
                        :data-vv-validate-on="'change'">
                        <label for="num_piezas">Numero de Piezas</label>
                        <div v-if="errors.has('num_piezas')" class="invalid-feedback">{{errors.first('num_piezas')}}</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn me-auto" data-bs-dismiss="modal" @click="hiddenModal()">Cerrar</button>
                    <button type="button" id="paquete" class="btn btn-primary" data-bs-dismiss="modal" @click="saveData">Guardar</button>
                </div>
            </div>
        </div>
    </form>
</div>
</template>



<script>
import { formatPrice } from '../../formatPrice';
import { parseNum, generateRandomString } from '../../helpers/calcInvoice';

export default {
    name: 'WareHouse',
    props: ['warehouses', 'envio', 'whNew', 'type_form'],
    data() {
        return {
            warehousesNew: [],
            getId: [],
            dato: {
                id_almacen: '',
                almacen_ids: [],
                warehouse: '',
                warehouse_children: '',
                ancho: '',
                alto: '',
                largo: '',
                peso: '',
                pie_cubico: '',
                volumen: '',
                total_seguro: '',
                seguro: '',
            },
            show: false,
        };
    },
    beforeCreate(){
        this.$nextTick(async function () {
            this.warehousesNew = [...this.whNew];
        });
    },
    methods: {
        hiddenModal(){
            this.show = false;
        },
        reempaque(){
            if( this.getId.length === 0 ){
                alert('Error, debe seleccionar el o los WareHouse a reempacar');
                return;
            } 
            
            if( this.checkIdAlmacen() ){
                alert('Error, ya existe un warehouse, agregado a el rempaque');
                return;
            }
            
            this.show = true;
        },
        saveData(){
            this.$validator.validate().then(valid => {
                if( valid ){
                    this.dato.almacen_ids = this.getId;
                    this.dato.id_almacen = generateRandomString(46);

                    const wh = this.warehouses;
                    const ids = this.getId;

                    let total_seguro = 0;
                
                    wh.forEach((element) => {
                        let totalseguro = parseNum(formatPrice.desctPrice(element.total_seguro, ','));

                        for (let i = 0; i < ids.length; i++) {
                            if( ids[i] === element.id_almacen ){
                                total_seguro = total_seguro + totalseguro;
                            this.dato.warehouse_children = this.dato.warehouse_children + '' + `${i !== ids.length - 1 ? ', ' + element.warehouse : element.warehouse}`;
                            }
                        }
                    });

                    let seguro = (total_seguro * 10) / 100;

                    this.dato.total_seguro = formatPrice.constPrice(`${total_seguro.toFixed(2)}`, ',', '.');
                    this.dato.seguro = formatPrice.constPrice(`${seguro.toFixed(2)}`, ',', '.');

                    let volumen = 0;
                    let pie_cubico = 0;
                    const { alto, ancho, largo } = this.dato;
                    volumen = (parseNum(alto) * parseNum(ancho) * parseNum(largo)) / 166;
                    pie_cubico = (parseNum(alto) * parseNum(ancho) * parseNum(largo)) / 1728;

                    if( volumen < 1 ){
                        volumen = 1;
                    }

                    if( pie_cubico < 1.37 ){
                        pie_cubico = 1.37
                    }

                    this.dato.volumen = volumen.toFixed(2);
                    this.dato.pie_cubico = pie_cubico.toFixed(2);

                    this.warehousesNew.push(this.dato);
                    
                    this.show = false;
                    this.getId = [];
                    this.dato = {
                        id_almacen: '',
                        almacen_ids: [],
                        warehouse: '',
                        warehouse_children: '',
                        ancho: '',
                        alto: '',
                        largo: '',
                        peso: '',
                        total_seguro: '',
                        seguro: '',
                    };

                    this.$emit('add_new_wh', this.warehousesNew);
                }
            });
        },
        delete_wh(e){
            const { value } = e.target.parentNode;
            let warehouseNew = [];

            this.warehousesNew.forEach((element) => {
                if( element.id_almacen !== value ){
                    warehouseNew.push(element);
                }
            });

            this.warehousesNew = warehouseNew;
            this.$emit('add_new_wh', this.warehousesNew);

        },
        checkIdAlmacen(){
            const data = this.getId;
            const wh = this.warehousesNew;
            let bol = false;

            for (let i = 0; i < data.length; i++) {
                wh.forEach((element) => {
                    for (let j = 0; j < element.almacen_ids.length; j++) {
                        if( element.almacen_ids[j] === data[i] ){
                            bol = true;
                            break;
                        }
                    }
                });
            }
                
            return bol;
        }
    },
};
</script>
<style>
    .modal.show{
        display: block;
    }
</style>