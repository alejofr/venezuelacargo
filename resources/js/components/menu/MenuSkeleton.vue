<template>
<ul class="navbar-nav">
    <li class="nav-item">
        <button type="button" class="nav-link">
            <span class="nav-link-icon d-md-none d-lg-inline-block skeleton-line" style="width: 10px;"></span>
            <span class="nav-link-title skeleton-line"></span>
        </button>
    </li>
    <li class="nav-item">
        <button type="button" class="nav-link">
            <span class="nav-link-icon d-md-none d-lg-inline-block skeleton-line" style="width: 10px;"></span>
            <span class="nav-link-title skeleton-line"></span>
        </button>
    </li>
    <li class="nav-item">
        <button type="button" class="nav-link">
            <span class="nav-link-icon d-md-none d-lg-inline-block skeleton-line" style="width: 10px;"></span>
            <span class="nav-link-title skeleton-line"></span>
        </button>
    </li>
    <li class="nav-item">
        <button type="button" class="nav-link">
            <span class="nav-link-icon d-md-none d-lg-inline-block skeleton-line" style="width: 10px;"></span>
            <span class="nav-link-title skeleton-line"></span>
        </button>
    </li>
    <li class="nav-item">
        <button type="button" class="nav-link">
            <span class="nav-link-icon d-md-none d-lg-inline-block skeleton-line" style="width: 10px;"></span>
            <span class="nav-link-title skeleton-line"></span>
        </button>
    </li>
    <li class="nav-item">
        <button type="button" class="nav-link">
            <span class="nav-link-icon d-md-none d-lg-inline-block skeleton-line" style="width: 10px;"></span>
            <span class="nav-link-title skeleton-line"></span>
        </button>
    </li>
     <li class="nav-item">
        <button type="button" class="nav-link">
            <span class="nav-link-icon d-md-none d-lg-inline-block skeleton-line" style="width: 10px;"></span>
            <span class="nav-link-title skeleton-line"></span>
        </button>
    </li>
</ul>
</template>
<script>
export default {
    name: 'MenuSkeleton',
};
</script>
<style>
    .nav-link-icon.skeleton-line:after{padding: 0;}
    .nav-link-title.skeleton-line:nth-child(5n+2):after{
        padding: 0 20px;
    }
</style>