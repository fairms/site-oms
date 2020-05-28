import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '*',
            name: '404',
            component: resolve => require(['@/views/404'], resolve)
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['@/views/login'], resolve)
        },
        {
            path: '/layout',
            name: 'layout',
            component: resolve => require(['@/views/layout'], resolve),
            children: [{
                path: '/welcome',
                name: 'welcome',
                component: resolve => require(['@/views/welcome'], resolve)
            }, {
                path: '/accountManage',
                name: 'accountManage',
                component: resolve => require(['@/views/systemManage/accountManage'], resolve),
                meta: {
                    preTitle: '系统管理',
                    title: '后台账号管理'
                }
            }, {
                path: '/positionManage',
                name: 'positionManage',
                component: resolve => require(['@/views/systemManage/positionManage'], resolve),
                meta: {
                    preTitle: '职位管理',
                    title: '职位列表'
                }
            }, {
                path: '/homeManage',
                name: 'homeManage',
                component: resolve => require(['@/views/systemManage/homeManage'], resolve),
                meta: {
                    preTitle: '首页管理',
                    title: 'banner管理'
                }
            }]
        },
        {
            path: '/productCenter',
            name: 'productCenter',
            component: resolve => require(['@/views/FrontPage/ProductCenter'], resolve)
        }, {
            path: '/homePage',
            name: 'homePage',
            component: resolve => require(['@/views/FrontPage/homePage'], resolve)
        }, {
            path: '/news',
            name: 'news',
            component: resolve => require(['@/views/FrontPage/news'], resolve)
        }, {
            path: '/aboutUs',
            name: 'aboutUs',
            component: resolve => require(['@/views/FrontPage/aboutUs'], resolve)
        }, {
            path: '/joinUs',
            name: 'joinUs',
            component: resolve => require(['@/views/FrontPage/joinUs'], resolve)
        }
    ]
})
