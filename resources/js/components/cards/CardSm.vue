<template>
    <div class="card card-sm">
        <router-link :to="{ name: data.name, query: data.query }" class="card-body nav-link">
            <div class="row align-items-center">
                <div class="col-auto">
                    <div class="bg-blue text-white avatar" :class="data.bg">
                        <i class="fs-18" :class="data.icon"></i>
                    </div>
                </div>
                <div class="col">
                    <div class="font-weight-medium">
                        {{data.result}} {{data.title}}
                    </div>
                    <div class="text-muted">
                        {{data.subtitle}}
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    props: ['data'],
    name: 'CardSm',

    data() {
        return {
            qry: {
                search : '',
                estado: 'pendiente',
                fecha_inicio: '',
                fecha_final: ''
            }
        };
    },
    methods: {
        
    },
};
</script>