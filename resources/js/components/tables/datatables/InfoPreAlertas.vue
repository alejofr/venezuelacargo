<template>
        <tbody>
            <tr v-for="(item, index) in data" :key="index">
                 <td>
                    <input class="form-check-input m-0 align-middle" v-model="getId" type="checkbox"  name="id" aria-label="Select invoice" @click="checkId($event)" style="border: 1px solid rgb(1 5 12 / 34%);cursor:pointer;" :value="item.id_tracking">
                </td>
                <td>
                    <span class=""> {{ item.nombre }}</span>
                </td>
                <td>
                    <span class=""> {{ item.tracking }}</span>
                </td>
                <td>
                    <span class="" > {{ item.descripcion }}</span>
                </td>
                <td>
                    <span class="" ></span>
                </td>
                <td>
                    <div class="btn-list flex-nowrap">
                    <button class="btn-acticon_spalert" type="button" id='paquete' :value="item.id_tracking" @click="showModal($event)" title="Tracking Recibido" v-title>
                            <i class="ti ti-package" style="font-size: 21px;"></i>
                    </button>
                        <button class="btn-acticon_spalert" id='images' :value="item.id_tracking" @click="showModal($event)" type="button" title="Imagenes de tracking recibido" v-title>
                            <i class="ti ti-photo" style="font-size: 21px;"></i>
                    </button>
                    </div>
                </td>
            </tr>
        </tbody>
        <!--<div class="modal modal-blur fade" :class="{'show': show.paquete == true}"  id="paquete" tabindex="-1" aria-modal="true" role="dialog" >
            <form name="paquete"  class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content" style="padding:0;background-color: #f8fafc;">
                    <div class="modal-header">
                        <h5 class="modal-title">Registrar tracking: {{title.paquete}}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenModal()"></button>
                    </div>
                    <div class="modal-body">
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
                        <button type="button" id="paquete" class="btn btn-primary" data-bs-dismiss="modal" @click="saveDataPaquete($event)">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal modal-blur fade" :class="{'show': show.images == true}"  id="imagenes" tabindex="-1" aria-modal="true" role="dialog" >
            <form name="images" enctype="multipart/form-data" class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content" style="padding:0;background-color: #f8fafc;">
                    <div class="modal-header">
                        <h5 class="modal-title">Imagenes del tracking: {{title.images}}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenModal()"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <div class="form-label">Selecciona la Imagen de este Tracking</div>
                            <input type="file" class="form-control" @change="changeFileImage($event)">
                        </div>
                        <figure v-if="imagenMiniatura != ''">
                            <img width="250" height="200" :src="imagenMiniatura" alt="Imagen de Tracking">
                        </figure>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn me-auto" data-bs-dismiss="modal" @click="hiddenModal()">Cerrar</button>
                        <button type="button" id="images" class="btn btn-primary" data-bs-dismiss="modal" @click="saveDataImages($event)">Guardar</button>
                    </div>
                </div>
            </form>
        </div>-->
</template>

<script>

export default {
    name: 'InfoPreAlertas',
    props: ['data'],
    data(){
        return {
            getId: [],
            datos: [],
            show: {
                paquete: false,
                images: false,
            },
            title: {
                paquete: '',
                images: '',
            },
            dato: {},
            imagenMiniatura: ''
        }
    },
    methods: {
        checkId(e){

            let trackings = this.getId;

            let aux = '';

            if( trackings.length == 0 )
                trackings.push(e.target.value)
            else
                trackings = this.getId.filter((item) => item !== e.target.value)


            const  check = ( val ) => this.datos.filter( (item) => item.id_tracking === val );

            for (let i = 0; i < trackings.length; i++) {
                if( check(trackings[i]).length == 0 ){
                    aux = trackings[i]
                    break;
                }else{
              
                    const { image,  ancho, alto,  largo, peso, num_piezas } = check(trackings[i])[0];
                        if( image == '' || ancho == '' || alto == '' || largo == '' || peso == '' || num_piezas == '' ){
                            aux = trackings[i];
                        }

                    break;
                }
            }

            if( aux != '' ){
                const dta = this.data.filter( (item) => item.id_tracking === aux );
                alert(`Por Favor Debe Agregar Los datos del Tracking: ${dta[0].tracking}`)
                e.preventDefault();
            }

            const datos = this.datos.filter( (item) => item.id_tracking !== aux)
            this.getId = trackings.filter((item) => item !== aux)
            
            this.$emit('getTrackings', ( datos.length != 0 && trackings.length != 0 ) ? datos : [] )

        },
        showModal(e){
            const btn = e.target.parentNode;
            for (const prop in this.show) {
                if( prop != btn.id ){
                    this.show[prop] = false;
                }
            }

            this.show[btn.id] = true;
            this.dato = this.propDato();
            const  dta = ( val ) => this.data.filter( (item) => item.id_tracking === val );
            this.title[btn.id] = dta(btn.value)[0].tracking;

            const  check = ( val ) => this.datos.filter( (item) => item.id_tracking === val );

            if( check(btn.value).length == 0 )
                this.dato.id_tracking = btn.value;
            else
                this.dato = check(btn.value)[0];
        },
        hiddenModal(){
             for (const prop in this.show) {
                this.show[prop] = false;
            }
        },
        saveDataPaquete(e){
            this.$validator.validate().then(valid => {
                if( valid ){
                    this.save(e.target.id, this.dato.id_tracking)
                }
            });
        },
        saveDataImages(e){
            this.save(e.target.id, this.dato.id_tracking)
            //this.imagenMiniatura = '';
        },
        save(id, value){
            
            let bol = true;
            for (let i = 0; i < this.datos.length; i++) {
                if( this.datos[i].id_tracking == this.dato.id_tracking ){
                    this.datos[i] = this.dato;
                    bol = false;
                    break;
                }
            }

            if( bol ){
                this.datos.push(this.dato)
            }

            this.updateBtnColor(id, value);
            this.hiddenModal();
            this.dato = {};
            console.log(this.datos);
        },
        updateBtnColor(id, val){
            let domBtns = document.getElementsByClassName('btn-acticon_spalert');
            console.log(id, val)
            for (let i = 0; i < domBtns.length; i++) {
                if(  domBtns[i].id == id && domBtns[i].value == val ){
                    let clss = 'text-green'
                    if( id == 'alert' ){
                        clss = ( this.dato.type_notify == 'lime' ) ? 'text-green' : ( this.dato.type_notify == 'yellow' ) ? 'text-yellow' : 'text-red';
                    }

                    domBtns[i].classList.add(clss)
                }
            }
        },
        changeFileImage(e){
            let file = e.target.files[0];
            if( file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' ){
                this.dato.image = file;
                let render = new FileReader();

                render.onload = (e) => {
                    this.imagenMiniatura = e.target.result;
                }


                render.readAsDataURL(file);

               
            }else{
                alert('Por Favor agregar imagen');
            }
        },
        propDato(){
            return {
                id_tracking: '',
                ancho: '',
                alto: '',
                largo: '',
                peso: '',
                num_piezas: '',
                image: ''
            }
        }
    }
}
</script>

<style>
    .modal.show{
        display: block;
    }
</style>