import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

export const useGlobalStore = defineStore( 'global', () =>{
    const data = reactive({
        version: '1.2',
        debug: true,
        author: 'redinvader@darknerd'
    })

    const getRandomNumber = ( max = 20 ) => Math.floor( Math.random() *max )
    const upVersion = () => data.version = ( Number(data.version) + Number(1.1) ) + ''
    const appInfo = computed( () => data.author + ' - ' + data.version )

    return {
        data,
        appInfo,
        getRandomNumber,
        upVersion,
    }
})