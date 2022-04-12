<template>
    <transition name="fade">
        <div class="alert-message is-dismissible" :class="alert.clss" v-if="show">
            <p> {{ alert.msg }} </p>
            <button class="notice-message_close" @click="closeAlert">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['alert', 'show'],
        data (){
            return {
                show: this.show
            }
        },
        methods: {
            closeAlert(){
                this.show = false;
            }
        }
    }
</script>