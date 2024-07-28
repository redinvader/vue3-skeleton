<script setup>
import { inject , onMounted} from 'vue'
import { useGlobalStore } from '../store';

import Button from 'primevue/button'


const globalStore = useGlobalStore()

onMounted( () =>{
    globalStore.upVersion()
})

const onClick = (evt, message) => console.log( evt, ' on click called ', message )

</script>
<template>
    <h1>index <i class='pi pi-check'></i> <i class='pi pi-user' style="font-size:2rem"></i> </h1>
    <div class="dn-flex-center">
        <Button label="submit" @click='(evt) => onClick(evt, "some cats are in garbage")' />
    </div>
    <span style="padding:1rem">{{ globalStore.appInfo }}</span>
</template>