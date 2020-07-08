import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Dashboard from './Dashboard.vue';
import Login from './components/Login.vue';
import Home from './components/home/Home.vue';
import InformeProduccion from '@/components/InformeProduccion';
import Mensajes from '@/components/Mensajes';

//Dashboard Components
//import Intermediario from './components/dashboard/Intermediario.vue';
import Intermediario from '@/components/dashboard/Intermediario';
import GerenteSucursal from '@/components/dashboard/GerenteSucursal';
import GerenteZonal from '@/components/dashboard/GerenteZonal';
import Ejecutivo from '@/components/dashboard/Ejecutivo';
import AdminLiquidadores from '@/components/admin/AdminLiquidadores';
import Perfil from '@/components/perfil/Perfil';

/* Producción */

//Bandeja de Propuestas
import BandejaPropuestas from '@/components/produccion/bandejaPropuestas/BandejaPropuestas';

//Ingreso Propuestas
import FormularioWeb from '@/components/produccion/ingresoPropuestas/FormularioWeb';
import DownloadForms from '@/components/produccion/ingresoPropuestas/DownloadForms';
import UploadForms from '@/components/produccion/ingresoPropuestas/UploadForms';

//Cotización en Línea
import CotizacionLinea from '@/components/produccion/cotizacionLinea/CotizacionLinea';

//Emisión en Línea
import EmisionLinea from '@/components/produccion/emisionLinea/EmisionLinea';

//Renovación Pólizas
import BandejaRenovaciones from '@/components/produccion/renovacionPolizas/BandejaRenovaciones';
import PolizasVencidas from '@/components/produccion/renovacionPolizas/PolizasVencidas';
import PolizasVencidasReporte from '@/components/produccion/renovacionPolizas/PolizasVencidasReporte';

//Solicitud Endoso
import SolicitudEndoso from '@/components/produccion/solicitudEndoso/SolicitudEndoso';

//Solicitud Cotización
import SolicitudCotizacion from '@/components/produccion/solicitudCotizacion/SolicitudCotizacion';

//Cobranza
import ConfirmacionPlanesPago from '@/components/cobranza/confirmacionPlanesPago/ConfirmacionPlanesPago';
import IngresoPAT from '@/components/cobranza/ingresoPAT/IngresoPAT.vue';
import DescargaEnvioFacturas from '@/components/cobranza/descargaEnvioFacturas/DescargaEnvioFacturas.vue';
import EnvioVencimientos from '@/components/cobranza/envioVencimientos/EnvioVencimientos.vue';
import EstadoCuentas from '@/components/cobranza/estadoCuentas/EstadoCuentas.vue';

//Gestión
import ConsultaPoliza from '@/components/gestion/consultaPoliza/ConsultaPoliza.vue';
import InformeSiniestralidad from '@/components/gestion/informeSiniestralidad/InformeSiniestralidad.vue';
import CertificadoHonorarios from '@/components/gestion/certificadoHonorarios/CertificadoHonorarios.vue';
import CarteraClientes from '@/components/gestion/carteraClientes/CarteraClientes.vue';
import ListadoPolizas from '@/components/gestion/listadoPolizas/ListadoPolizas.vue';
import CuotasMorosas from '@/components/gestion/cuotasMorosas/CuotasMorosas.vue';
import PolizasCanceladas from '@/components/gestion/polizasCanceladas/PolizasCanceladas';
import InformeRenovaciones from '@/components/gestion/informeRenovaciones/InformeRenovaciones';
import CotizacionesPendientes from '@/components/gestion/informePropuestas/CotizacionesPendientes';
import LiquidacionesFecha from '@/components/gestion/liquidacionComisiones/LiquidacionesFecha';
import LiquidacionesPorPagar from '@/components/gestion/liquidacionComisiones/LiquidacionesPorPagar';
import LiquidacionesHistoricas from '@/components/gestion/liquidacionComisiones/LiquidacionesHistoricas';

//Menu Agenda
import Oficinas from '@/components/menuAgenda/oficinas/Oficinas';
import Liquidadores from '@/components/menuAgenda/liquidadores/Liquidadores';




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

//Vue Libraries
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import VueTableDynamic from 'vue-table-dynamic'
//Vuex
import { store } from './store/store'


const API_URL = process.env.API_URL || 'http://10.156.160.21:8000/api/login/'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token,    crossDomain: true
  }
});

//Axios 
Vue.use(VueAxios, axios)

//Vue Router
Vue.use(VueRouter);

// Install BootstrapVue
Vue.use(BootstrapVue)

//Global Components
Vue.component('Topbar', require('./components/Topbar.vue').default);
Vue.component('SideMenu', require('./components/SideMenu.vue').default);


//Global Component - Tables
Vue.use(VueTableDynamic)

//Global variables
Vue.prototype.$url = '200.91.27.159:8000';
Vue.prototype.$css = true;


//Routes
const routes = [
	{ path: '/', name: 'login', component: Login },
	{ path: '/dashboard', component: Dashboard },
	{ path: '/home', component: Home },
	{ path: '/perfil', name: 'Perfil', component: Perfil },
	{ path: '/informe-produccion', name: 'InformeProduccion', component: InformeProduccion },
	{ path: '/mensajes', name: 'Mensajes', component: Mensajes },
	{ path: '/intermediario', name: 'Intermediario', component: Intermediario },
	{ path: '/ejecutivo', name: 'Ejecutivo', component: Ejecutivo },
	{ path: '/gerente-sucursal', name: 'GerenteSucursal', component: GerenteSucursal },
	{ path: '/gerente-zonal', name: 'GerenteZonal', component: GerenteZonal },
	{ path: '/admin-liquidadores', name: 'AdminLiquidadores', component: AdminLiquidadores },
	{ path: '/formulario-web', name: 'FormularioWeb', component: FormularioWeb },
	{ path: '/descarga-formularios', name: 'DownloadForms', component: DownloadForms },
	{ path: '/carga-formularios', name: 'UploadForms', component: UploadForms },
	{ path: '/bandeja-propuestas', name: 'BandejaPropuestas', component: BandejaPropuestas },
	{ path: '/bandeja-renovaciones', name: 'BandejaRenovaciones', component: BandejaRenovaciones },
	{ path: '/polizas-vencidas', name: 'PolizasVencidas', component: PolizasVencidas },
	{ path: '/reporte-polizas-vencidas', name: 'PolizasVencidasReporte', component: PolizasVencidasReporte },
	{ path: '/solicitud-endoso', name: 'SolicitudEndoso', component: SolicitudEndoso },
	{ path: '/cotizacion-linea', name: 'CotizacionLinea', component: CotizacionLinea },
	{ path: '/emision-linea', name: 'EmisionLinea', component: EmisionLinea },
	{ path: '/planes-pago', name: 'ConfirmacionPlanesPago', component: ConfirmacionPlanesPago },
	{ path: '/ingreso-pat', name: 'IngresoPAT', component: IngresoPAT },
	{ path: '/descarga-envio-facturas', name: 'DescargaEnvioFacturas', component: DescargaEnvioFacturas },
	{ path: '/envio-vencimientos', name: 'EnvioVencimientos', component: EnvioVencimientos },
	{ path: '/estado-cuentas', name: 'EstadoCuentas', component: EstadoCuentas },
	{ path: '/consulta-polizas', name: 'ConsultaPoliza', component: ConsultaPoliza },
	{ path: '/informe-siniestralidad', name: 'InformeSiniestralidad', component: InformeSiniestralidad },
	{ path: '/certificado-honorarios', name: 'CertificadoHonorarios', component: CertificadoHonorarios },
	{ path: '/cartera-clientes', name: 'CarteraClientes', component: CarteraClientes },
	{ path: '/listado-polizas', name: 'ListadoPolizas', component: ListadoPolizas },
	{ path: '/cuotas-morosas', name: 'CuotasMorosas', component: CuotasMorosas },
	{ path: '/polizas-canceladas', name: 'PolizasCanceladas', component: PolizasCanceladas },
	{ path: '/informe-renovaciones', name: 'InformeRenovaciones', component: InformeRenovaciones },
	{ path: '/cotizaciones-pendientes', name: 'CotizacionesPendientes', component: CotizacionesPendientes },
	{ path: '/liquidaciones-fecha', name: 'LiquidacionesFecha', component: LiquidacionesFecha },
	{ path: '/liquidaciones-por-pagar', name: 'LiquidacionesPorPagar', component: LiquidacionesPorPagar },
	{ path: '/liquidaciones-historicas', name: 'LiquidacionesHistoricas', component: LiquidacionesHistoricas },
	{ path: '/oficinas', name: 'Oficinas', component: Oficinas },
	{ path: '/liquidadores', name: 'Liquidadores', component: Liquidadores },

];

const router = new VueRouter({
	routes,
	mode: 'history'
});


new Vue({
  el: '#app',
  router,
  routes,
  vuetify,
  store,
  components: { App },
  render: h => h(App)
})
