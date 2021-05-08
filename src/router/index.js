
import { createWebHistory, createRouter } from "vue-router";
import SignUp from '../components/SignUp'

const routes = [
    { path:'/', name:'home', component: SignUp},
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
  
export default router