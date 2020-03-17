import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Dashboard from './Dashboard.vue';
import Login from './components/Login.vue';
import '../src/assets/css/test.css';
import '../src/assets/scss/style.scss';
import '../src/assets/css/developers.css';
import '../src/assets/css/icons.css';
import '../src/assets/css/metismenu.min.css';
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/style3.css';
import '../src/assets/css/toastr.css';
import '../src/assets/css/typicons.css';
import '../src/assets/fonts/typicons.scss';

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.use(VueRouter);

const routes = [
	{ path: '/', name: 'login', component: Login },
	{ path: '/dashboard', component: Dashboard },
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
