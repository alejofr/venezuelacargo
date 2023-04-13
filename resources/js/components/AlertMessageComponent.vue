<template>
    <transition name="fade">
        <div class="alert-message is-dismissible" :class="alert.clss" v-show="show">
            <p> {{ alert.msg }} </p>
            <button type="button" class="notice-message_close" @click="closeAlert">
                <i class="ti ti-x"></i>
            </button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'AlertMessageComponent',
        props: ['alert'],
        data(){
            return {
                show: true,
                close: 0
            }
        },
        updated() {
            this.show = ( this.close == 0 ) ? true : this.show ;
            if ( this.close == 1 )
                this.close = 0;
            
        },
        methods: {
            closeAlert(){
                this.show = false;
                this.close = 1;
            }
        }

    }
</script>