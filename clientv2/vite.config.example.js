import { defineConfig , loadEnv } from 'vite'
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'


import vue from '@vitejs/plugin-vue'
// import VueI18nPlugin from '@intlify/unplugin-vue-i18n'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// precisa carregar essa merda antes de poder usar import.meta.env
// pq aqui é um arquivo de configuração, mimimi, mimimi ...
const env = loadEnv( process.env.NODE_ENV || 'development', process.cwd() )



// https://vitejs.dev/config/
export default defineConfig({
  server:{
    // origin:'http://127.0.0.1:9090',
    proxy:{
      '/fantasy':{
        target: env.VITE_FANTASY_APIS,
        changeOrigin: true,
        secure: false,
        rewrite: ( path ) => path.replace(/^\/fantasy/, ''),
      }
    },
  },
  plugins: [
    vue(),
    VueI18nPlugin({
       include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
    }),
  ],
  resolve:{
    alias:{ '@': resolve(__dirname, './src') }, // @ como root não configurado default
  },
  css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `
          //   @import "./src/darknerd/scss/darknerd.scss";
          //   @import "./src/scss/dafa/dafa.scss";
          // `
        }
      }
    },
})

