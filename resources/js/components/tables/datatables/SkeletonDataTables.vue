<template>
    <tbody>
        <tr v-for="i in 8" :key="i" class="tr-sleleton">
            <td><span class="skeleton-line"></span></td>
            <td v-for="(item, index) in th" :key="index"><span class="skeleton-line"></span></td>
        </tr>
    </tbody>
</template>

<script>

export default {
    name: 'SkeletonDataTables',
    props: ['th']
}
</script>