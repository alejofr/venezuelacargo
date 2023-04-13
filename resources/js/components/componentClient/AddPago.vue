<template>
 <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Número de factura: {{factura.nro_factura}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenModal"></button>
        </div>
        <div class="modal-body">
            
        </div>
        <div class="modal-footer">
            <button type="button" class="btn me-auto" data-bs-dismiss="modal" @click="hiddenModal">Cerrar</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" >Guardar</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'AddPago',
    props: ['dato'],
    data() {
        return {
            
        };
    },
     beforeCreate(){
        this.$nextTick( async function () {
            
        })
    },
     updated() {
        console.log('dato')
    },
    computed: {
        factura(){
            console.log('datssso', this.dato)
            return {
                nro_factura: ''
            }
        }
    },
    methods: {
        hiddenModal(){
            this.$emit('hiddenModal')
        },
        init(dt){
            console.log('dt', dt)
        }
    },
    watch: {
        dato: function () {
            console.log('dato', this.dato)
        }
    }

};
</script>