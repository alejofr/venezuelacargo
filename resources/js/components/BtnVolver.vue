<template>
    <button type="button" class="btn" :class="classe" @click="volver">
        <i class="ti ti-arrow-back-up me-1"></i>
        Volver
    </button>
</template>
<script>
export default {
    name: 'BtnVolver',
    props: ['classe'],
    methods: {
        volver(){
             this.$router.go(-1)
        }
    },
};
</script>