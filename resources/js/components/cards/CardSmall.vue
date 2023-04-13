<template>
    <div class="card">
        <div class="card-body">
            <div class="d-flex align-items-center mb-3">
                <div class="subheader">{{data.title}}</div>
                <div class="ms-auto lh-1">
                    <div class="dropdown">
                    <button class="dropdown-toggle text-muted"  type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{select}}</button>
                    <div class="dropdown-menu dropdown-menu-end" style="">
                        <button type="button" value="7" @click="clickVal($event)" class="dropdown-item" :class="{'active': value == 7}">Los últimos 7 días</button>
                        <button type="button" value="30" @click="clickVal($event)" class="dropdown-item" :class="{'active': value == 30}">Los últimos 30 días</button>
                        <button type="button" value="90" @click="clickVal($event)" class="dropdown-item" :class="{'active': value == 90}">Los últimos 3 meses</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="h1">{{data.result}}</div>
        </div>
    </div>
</template>
<script>
const select = [
    { name: 'Los últimos 7 días', value: 7 },
    { name: 'Los últimos 30 días', value: 30 },
    { name: 'Los últimos 3 meses', value: 90 }
]
export default {
    props: ['data'],
    name: 'CardSmall',

    data() {
        return {
            select: 'Los últimos 7 días',
            value: 7
        };
    },
    methods: {
        changeState(dato){
            /*const { name } = select.filter( item => item.value == dato.value )[0];
            this.select = name;
            this.data = dato;*/
            console.log('dato', dato)
        },
        clickVal(e){
            
            const { name, value } = select.filter( item => item.value == e.target.value )[0];
            this.select = name;
            this.value = value;

            if( this.data.event != '' ){
                this.$emit(this.data.event, [value, this.data.var]);
            }
            //console.log(name, value)
        }
    },
};
</script>