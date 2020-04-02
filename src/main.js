import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Dashboard from './Dashboard.vue';
import Login from './components/Login.vue';

//Dashboard Components
//import Intermediario from './components/dashboard/Intermediario.vue';
import Intermediario from '@/components/dashboard/Intermediario';
import GerenteSucursal from '@/components/dashboard/GerenteSucursal';
import GerenteZonal from '@/components/dashboard/GerenteZonal';
import Ejecutivo from '@/components/dashboard/Ejecutivo';
import AdminLiquidadores from '@/components/admin/AdminLiquidadores';
import Perfil from '@/components/perfil/Perfil';

//Styles
import '../src/assets/css/test.css';
import '../src/assets/scss/style.scss';
import '../src/assets/css/developers.css';
import '../src/assets/css/icons.css';
import '../src/assets/css/metismenu.min.css';
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/style3.css';
import '../src/assets/css/toastr.css';
import '../src/assets/css/typicons.css';
import '../src/assets/css/developers.css';
import '../src/assets/fonts/typicons.scss';

import axios from 'axios'
import VueAxios from 'vue-axios'

const API_URL = process.env.API_URL || 'http://10.156.160.21:8000/api/login/'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token,    crossDomain: true
  }
});
 
Vue.use(VueAxios, axios)

Vue.use(VueRouter);

//Global Components
Vue.component('Topbar', require('./components/Topbar.vue').default);
Vue.component('SideMenu', require('./components/SideMenu.vue').default);

const routes = [
	{ path: '/', name: 'login', component: Login },
	{ path: '/dashboard', component: Dashboard },
	{ path: '/perfil', name: 'Perfil', component: Perfil },
	{ path: '/intermediario', name: 'Intermediario', component: Intermediario },
	{ path: '/ejecutivo', name: 'Ejecutivo', component: Ejecutivo },
	{ path: '/gerente-sucursal', name: 'GerenteSucursal', component: GerenteSucursal },
	{ path: '/gerente-zonal', name: 'GerenteZonal', component: GerenteZonal },
	{ path: '/admin-liquidadores', name: 'AdminLiquidadores', component: AdminLiquidadores },

];

const router = new VueRouter({
	routes,
	mode: 'history'
});


new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
