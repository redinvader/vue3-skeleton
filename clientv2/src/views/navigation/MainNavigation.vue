<script setup>




</script>
<template>
    <div class="main-navigation">
        <span style="margin:0 10px; font-size: 1.5rem" class="border p-2 rounded dn-invert-100 dn-text-shadow">Main navigation</span>
        <router-link to ='/'>index</router-link>       
        <router-link to ='/unknown' :style="{ padding: '10px' }">unknown</router-link>
    </div>
</template>
<style scoped>

.main-navigation
{
    padding: 1rem;
    background-color: brown;
    width: 100%;
}

</style>