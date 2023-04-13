<template>
    <div class="card">
        <div class="card-body">
            <div class="d-flex align-items-center">
            <div class="subheader skeleton-line"></div>
            <div class="ms-auto lh-1">
                <div class="dropdown">
                    <button type="button" class="text-muted skeleton-line"></button>
                </div>
            </div>
            </div>
            <div class="h1 mb-3 skeleton-line"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardSmallSkeleton',

    data() {
        return {
            
        };
    },
    methods: {
        
    },
};
</script>
<style>
.skeleton-line:after, .skeleton-heading:after {
    padding: 0 40px;
}
</style>