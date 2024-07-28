import { createRouter, createWebHashHistory } from 'vue-router'
import { Index, NotFound } from '@/views'


const routes = [
    { path: '/', component:Index, name: 'index' },
]

routes.push(
    { path: '/:pathMatch(.*)*', component: NotFound , name: 'NotFound' 	}
)

const Router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default function bootRoutes( app )
{
    app.use(Router)
}