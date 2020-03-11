import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'bootstrap';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Main from './components/Main.vue';
import Detail from './components/content/Detail.vue';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

library.add(fas, far, faFacebook, faInstagram);
dom.watch();
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/:id?',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'detail',
          name: 'detail',
          component: Detail
        }
      ]
    },
    { path: '*', redirect: '/' }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/app.scss';
import './assets/css/app_mobile.scss';
import './assets/css/animate.css';
