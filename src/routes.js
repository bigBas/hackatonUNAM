import Vue from 'vue'
import VueRouter from 'vue-router'

import Test from './views/Test.vue'
import FinanceAssetCons from './views/FinanceAssetCon.vue'
import MyInvestProfile from './views/MyInvestProfile.vue'

const routes = [
    {
        path: '/',
        name: 'root',
        redirect: 'test'
    },
    {
        path: '/test',
        component: Test,
        name: 'test',
    },
    {
        path: '/finance-asset-con',
        component: FinanceAssetCons,
        name: 'financeAssetCon',
    },
    {
        path: '/my-invest-profile',
        component: MyInvestProfile,
        name: 'myInvestProfile',
    },
]

Vue.use(VueRouter)
    /* Produccción */
    // const router = new VueRouter({mode: 'history', routes})
    /* Pruebas */
const router = new VueRouter({ routes })

export default router;

