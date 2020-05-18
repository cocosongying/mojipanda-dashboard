import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueToastr from "vue-toastr";
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue'
import router from './router';
import store from './store';
import consts from './consts'

import 'admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/bower_components/font-awesome/css/font-awesome.min.css'
import 'admin-lte/bower_components/Ionicons/css/ionicons.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js'
import 'admin-lte/dist/js/adminlte.min.js'
import 'sweetalert2/dist/sweetalert2.min.css';

import routemap from './router/components'
const genRoutes = function (menus, routes) {
  if (!routes) {
    routes = {
      path: '/',
      component: routemap['Home'],
      children: [
        {
          path: "",
          component: routemap['Blank']
        },
      ],
    }
  }
  if (menus.length > 0) {
    menus.forEach(menu => {
      if (menu.component) {
        menu.component = routemap[menu.component];
        routes.children.push({
          path: menu.path,
          component: menu.component,
        });
      }
      if (menu.children && menu.children.length > 0) {
        genRoutes(menu.children, routes);
      }
    });
  }
  return routes;
}

let fromApi = true;

Vue.use(VueAxios, axios)
Vue.use(VueToastr)
Vue.use(VueSweetalert2);
Vue.prototype.Global = consts
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(data => data.meta.normal)) {
    next();
  } else if (store.getters.isLogin && fromApi) {
    fromApi = false;
    let menus = [
      {
        path: 'profile',
        component: 'Profile',
      }
    ];
    if (localStorage.getItem("store")) {
      try {
        let storeInfo = JSON.parse(localStorage.getItem("store"));
        let menu = JSON.parse(storeInfo.userInfo.menu);
        for (let i = 0; i < menu.length && i < consts.Menu.ALL.length; i++) {
          if (menu[i] === 1) {
            let info = {
              path: consts.Menu.ALL[i].url,
              component: consts.Menu.ALL[i].component
            }
            menus.push(info);
          }
        }
      } catch (error) {
        //
      }
    }
    console.log(menus);
    const routes = genRoutes(menus);
    const notfound = {
      path: "*",
      redirect: '/'
    }
    router.addRoutes([routes, notfound]);
    router.push({
      path: to.path
    });
  } else if (!store.getters.isLogin) {
    next({
      path: '/login'
    });
  } else {
    next();
  }
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
