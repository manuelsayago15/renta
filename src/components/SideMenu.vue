<template>
	<div class="left side-menu">
        <div class="slimscroll-menu" id="remove-scroll">
          <div id="sidebar-menu">
            <ul class="metismenu" id="side-menu">
              <li v-if="id_userType == 1">
              	<router-link to="/gerente-sucursal" class="waves-effect waves-light" id="dashboard">
              		<i class="renta-icon-deashboard"></i>
              		<span>Dashboard</span>
              	</router-link>
              </li>

              <li v-if="id_userType == 2">
              	<router-link to="/ejecutivo" class="waves-effect waves-light" id="dashboard">
              		<i class="renta-icon-deashboard"></i>
              		<span>Dashboard</span>
              	</router-link>
              </li>

              <li v-if="id_userType == 3">
              	<router-link to="/intermediario" 
              		class="waves-effect waves-light" id="dashboard">
              		<i class="renta-icon-deashboard"></i>
              		<span>Dashboard</span>
              	</router-link>
              </li>

              <li v-if="id_userType == 4">
              	<router-link to="/admin-liquidadores" 
              		class="waves-effect waves-light" id="dashboard">
              		<i class="renta-icon-deashboard"></i>
              		<span>Dashboard</span>
              	</router-link>
              </li>

              <li v-if="id_userType == 11">
              	<router-link to="/gerente-zonal" 
              		class="waves-effect waves-light" id="dashboard">
              		<i class="renta-icon-deashboard"></i>
              		<span>Dashboard</span>
              	</router-link>
              </li>
            
                <div id="intermediarios" class="">
                  <v-app>
                    <v-card>
                      <v-list>
                        <!--<v-list-item>
                          <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                          </v-list-item-icon>
                  
                          <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>-->
                  
                        <v-list-group class="group"
                          :value="false"> 
                          <template v-slot:activator>
                            <v-list-item-title >
                              <span>
                                <i class="renta-icon-security-log"></i>
                              </span>
                              Producción
                            </v-list-item-title>
                          </template>
                  
                          <v-list-group
                            style="font-size: 10px;"
                            no-action
                            sub-group
                            :value="false">
                            <template v-slot:activator>
                              <v-list-item-content>
                                <v-list-item-title >Ingreso de Propuestas</v-list-item-title>
                              </v-list-item-content>
                            </template>
                  
                            <!--<v-list-item
                              v-for="(ingreso, i) in ingresoPropuestas"
                              :key="i"
                              link>
                              <v-list-item-title v-text="ingreso"></v-list-item-title>
                                
                            </v-list-item>-->
                            
                            <ul class="submenu submenu-2">
                              <li >
                                <router-link to="/descarga-formularios">
                                  Descarga de formularios
                                </router-link>
                              </li>
                              <li v-if="this.id_userType == 3">
                                <router-link to="/formulario-web">
                                  Formulario web
                                </router-link>
                              </li>
                              <li v-if="this.id_userType == 3">
                                <router-link to="/carga-formularios">
                                  Carga de formulario
                                </router-link>
                              </li>
                            </ul>
                          </v-list-group>
                  
                          <!--<v-list-group
                            sub-group
                            no-action>
                            <template v-slot:activator>
                              <v-list-item-content>
                                <v-list-item-title>Actions</v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-list-group>-->
                          
                            <v-list-item class="item-size">
                              <template>
                                <v-list-item-content>
                                  <v-list-item-title>
                                    <router-link to="/bandeja-propuestas" class="color-a">
                                      Bandeja de Propuestas
                                    </router-link>
                                  </v-list-item-title>
                                </v-list-item-content>
                              </template> 
                            </v-list-item>


                          <v-list-item class="item-size">
                            <template>
                              <v-list-item-content>
                                <v-list-item-title>
                                  <router-link to="#" class="color-a">Solicitud de cotización</router-link>
                                </v-list-item-title>
                              </v-list-item-content>
                            </template>  
                          </v-list-item>

                          <v-list-group
                            no-action
                            sub-group
                            :value="false">
                            <template v-slot:activator>
                              <v-list-item-content>
                                <v-list-item-title >Renovación de Pólizas</v-list-item-title>
                              </v-list-item-content>
                            </template>
                            
                            <ul class="submenu submenu-2">
                              <li >
                                <router-link to="/descarga-formularios">
                                  Bandeja de Renovaciones
                                </router-link>
                              </li>
                              <li>
                                <router-link to="/formulario-web">
                                  Pólizas Vencidas
                                </router-link>
                              </li>
                              <li>
                                <router-link to="/carga-formularios">
                                  Reporte Renovación Pólizas Vencidas
                                </router-link>
                              </li>
                            </ul>
                          </v-list-group>  

                          <v-list-item class="item-size">
                            <template>
                              <v-list-item-content>
                                <v-list-item-title>
                                  <router-link to="/solicitud-endoso" class="color-a">Solicitud de Endoso</router-link>
                                </v-list-item-title>
                              </v-list-item-content>
                            </template>  
                          </v-list-item>

                          <v-list-item class="item-size">
                            <template>
                              <v-list-item-content>
                                <v-list-item-title>
                                  <router-link to="/solicitud-endoso" class="color-a">Cotización en Línea</router-link>
                                </v-list-item-title>
                              </v-list-item-content>
                            </template>  
                          </v-list-item>
                          
                          <v-list-item class="item-size">
                            <template>
                              <v-list-item-content>
                                <v-list-item-title>
                                  <router-link to="/solicitud-endoso" class="color-a">Emisión en Línea</router-link>
                                </v-list-item-title>
                              </v-list-item-content>
                            </template>  
                          </v-list-item>
                        </v-list-group>

                        <v-list-group
                          :value="false">
                          <template v-slot:activator>
                            <v-list-item-title>
                              <span>
                                <i class="renta-icon-wallet"></i>
                              </span>
                              Cobranza
                            </v-list-item-title>
                          </template>

                           <ul class="submenu">
                            <li><router-link to="#">Confirmación planes de<br>pago</router-link></li>
                            <li><router-link to="#">Ingreso PAT</router-link></li>
                            <li><router-link to="#">Descarga / envío de<br>facturas</router-link></li>
                            <li><router-link to="#">Envío de vencimientos</router-link></li>
                            <li><router-link to="#">Estados de cuenta</router-link></li>
                          </ul>
                            
                          </v-list-item>
                        </v-list-group>
                      </v-list>
                    </v-card>
                  </v-app>  
                  <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-security-log"></i><span>Producción  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                    <ul class="submenu">
                      <li><a href="javascript:void(0);"> <span>Ingreso de propuestas <span class="float-right menu-arrow submenu-menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                        <ul class="submenu submenu-2">
                          <li v-if="this.id_userType == 3 || this.id_userType == 2
                          		|| this.id_userType == 1 || this.id_userType == 11">
                          	<router-link to="/descarga-formularios">
                          		Descarga de formularios
                          	</router-link>
                          </li>
                          <li v-if="this.id_userType == 3">
                          	<router-link to="/formulario-web">
                          		Formulario web
                          	</router-link>
                          </li>
                          <li v-if="this.id_userType == 3">
                          	<router-link to="/carga-formularios">
                          		Carga de formulario
                          	</router-link>
                          </li>
                        </ul>
                      </li>
                      <li>
                      	<router-link to="/bandeja-propuestas">
                      		Bandeja de propuestas
                      	</router-link>
                      </li>
                      <li> <router-link to="#">Solicitud de cotización</router-link></li>
                     <!--  <li> <a href="#">Bandeja de solicitudes <br>de cotización pendientes</a></li> -->
                      <li> <router-link to="#">Renovación de pólizas</router-link></li>
                      <!-- <li> <a href="#">Solicitud de inspección</a></li> -->
                      <li> <router-link to="/solicitud-endoso">Solicitud de endoso</router-link></li>
                      <li> <router-link to="#">Cotización en línea</router-link></li>
                      <li> <router-link to="#">Emisión en línea</router-link></li>
                    </ul>
                  </li>
                  <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-wallet"></i><span>Cobranza  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                    <ul class="submenu">
                      <li><a href="#">Confirmación planes de<br>pago</a></li>
                      <li><a href="#">Ingreso PAT</a></li>
                      <li><a href="#">Descarga / envío de<br>facturas</a></li>
                      <li><a href="#">Envío de vencimientos</a></li>
                      <li><a href="#">Estados de cuenta</a></li>
                    </ul>
                  </li>
                  <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-bar-graph"></i><span>Gestión  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                    <ul class="submenu">
                      <li><a href="#">Consulta pólizas</a></li>
                      <!-- <li><a href="#">Informe de siniestralidad</a></li> -->
                      <li><a href="#">Descarga Fecu /<br>certificado de<br>honorarios</a></li>
                      <li><a href="../page-cartera/listar-clientes2.html">Cartera de clientes</a></li>
                      <li><a href="../page-polizas-vigentes-no-vigentes/listado-polizas.html">Listado de pólizas</a></li>
                      <li><a href="../page-cuotas-morosas/cuotas-morosas.html">Informe de cuotas<br>morosas</a></li>
                      <li><a href="../page-polizas-canceladas/polizas-canceladas.html">Informe de pólizas<br>canceladas</a></li>
                      <li><a href="../page-polizas-por-renovar/polizas-por-renovar.html">Informe de pólizas por<br>renovar</a></li>
                      <li><a href="#">Informe de<br>renovaciones</a></li>
                      <li><a href="../page-liquidacion-comisiones/liquidacion-comisiones.html">Liquidación de<br>comisiones</a></li>
                      <li><a href="#">Informe de comisiones <br>a la fecha</a></li>
                    </ul>
                  </li>
                  <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-book"></i><span>Menú agenda  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                    <ul class="submenu">
                      
                      <li><a href="#">Talleres</a></li>
                      <li><a href="../page-cartera/listar-clientes.html">Cartera de clientes</a></li>
                      <li><a href="../page-liquidadores/liquidadores.html">Liquidadores</a></li>
                      <li><a href="../page-oficinas/oficinas.html">Oficinas</a></li>
                    </ul>
                  </li>
                </div>
                <div id="ejecutivos" class="d-none">
                    
                      <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-security-log"></i><span>Producción  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                        <ul class="submenu">
                          <li><a href="javascript:void(0);"> <span>Ingreso de propuestas <span class="float-right menu-arrow submenu-menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                            <ul class="submenu submenu-2">
                              <li><a href="../page-propuestas/descarga-formularios.html">Descarga de formularios</a></li>
                              <!-- <li><a href="#">Formulario web</a></li> -->
                             <!--  <li><a href="page-carga-formularios.html">Carga de formulario</a></li> -->
                            </ul>
                          </li>
                          <li > <a href="page-bandejas-propuestas/ejecutivos.html">Bandeja de propuestas</a></li>
                          <!-- <li> <a href="#">Solicitud de cotización</a></li> -->
                          <!-- <li> <a href="#">Bandeja de solicitudes <br>de cotización pendientes</a></li> -->
                          <!-- <li> <a href="#">Renovación de pólizas</a></li> -->
                          <li> <a href="#">Solicitud de inspección</a></li>
                          <li> <a href="../page-endoso/solicitud-endoso.html">Solicitud de endoso</a></li>
                          <li> <a href="#">Cotización en línea</a></li>
                          <!-- <li> <a href="#">Emisión en línea</a></li> -->
                        </ul>
                      </li>
                      <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-wallet"></i><span>Cobranza  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                        <ul class="submenu">
                          <li><a href="#">Confirmación planes de<br>pago</a></li>
                          <li><a href="#">Ingreso PAT</a></li>
                          <li><a href="#">Descarga / envío de<br>facturas</a></li>
                          <li><a href="#">Envío de vencimientos</a></li>
                          <!-- <li><a href="#">Estados de cuenta</a></li> -->
                        </ul>
                      </li>
                      <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-bar-graph"></i><span>Gestión  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                        <ul class="submenu">
                          <li><a href="#">Consulta pólizas</a></li>
                          <!-- <li><a href="#">Informe de siniestralidad</a></li> -->
                          <li><a href="#">Descarga Fecu /<br>certificado de<br>honorarios</a></li>
                          <li><a href="../page-cartera/listar-clientes.html">Cartera de clientes</a></li>
                          <li><a href="#">Listado de pólizas</a></li>
                          <li><a href="#">Informe de cuotas<br>morosas</a></li>
                          <li><a href="#">Informe de pólizas<br>canceladas</a></li>
                          <li><a href="#">Informe de pólizas por<br>renovar</a></li>
                          <li><a href="#">Informe de<br>renovaciones</a></li>
                          <li><a href="#">Liquidación de<br>comisiones</a></li>
                          <li><a href="#">Informe de comisiones <br>a la fecha</a></li>
                        </ul>
                      </li>
                      <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-book"></i><span>Menú agenda  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                        <ul class="submenu">
                          <!-- <li><a href="#">Cartera de clientes</a></li> -->
                          <li><a href="#">Talleres</a></li>
                          <li><a href="../page-liquidadores/liquidadores.html">Liquidadores</a></li>
                        </ul>
                      </li>
    
                </div>
    
                <div id="gerente_sucursal" class="d-none">
                    
                      <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-security-log"></i><span>Producción  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                        <ul class="submenu">
                          <li><a href="javascript:void(0);"> <span>Ingreso de propuestas <span class="float-right menu-arrow submenu-menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                            <ul class="submenu submenu-2">
                              <li><a href="../page-propuestas/descarga-formularios.html">Descarga de formularios</a></li>
                              <!-- <li><a href="#">Formulario web</a></li> -->
                             <!--  <li><a href="page-carga-formularios.html">Carga de formulario</a></li> -->
                            </ul>
                          </li>
                          <li > <a href="page-bandeja-propuestas/gerente-sucursal.html">Bandeja de propuestas</a></li> 
                          <li> <a href="#">Solicitud de cotización</a></li>
                         <!--  <li> <a href="#">Bandeja de solicitudes <br>de cotización pendientes</a></li> -->
                          <!-- <li> <a href="#">Renovación de pólizas</a></li> -->
                          <li> <a href="#">Solicitud de inspección</a></li>
                          <li> <a href="../page-endoso/solicitud-endoso.html">Solicitud de endoso</a></li>
                          <li> <a href="#">Cotización en línea</a></li>
                          <!-- <li> <a href="#">Emisión en línea</a></li> -->
                        </ul>
                      </li>
                      <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-wallet"></i><span>Cobranza  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                        <ul class="submenu">
                         <!--  <li><a href="#">Confirmación planes de<br>pago</a></li> -->
                          <li><a href="#">Ingreso PAT</a></li>
                          <li><a href="#">Descarga / envío de<br>facturas</a></li>
                          <li><a href="#">Envío de vencimientos</a></li>
                          <!-- <li><a href="#">Estados de cuenta</a></li> -->
                        </ul>
                      </li>
                      <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-bar-graph"></i><span>Gestión  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                        <ul class="submenu">
                          <li><a href="#">Consulta pólizas</a></li>
                          <li><a href="#">Informe de siniestralidad</a></li>
                          <li><a href="#">Descarga Fecu /<br>certificado de<br>honorarios</a></li>
                          <li><a href="../page-cartera/listar-clientes.html">Cartera de clientes</a></li>
                          <li><a href="#">Listado de pólizas</a></li>
                          <li><a href="#">Informe de cuotas<br>morosas</a></li>
                          <li><a href="#">Informe de pólizas<br>canceladas</a></li>
                          <li><a href="#">Informe de pólizas por<br>renovar</a></li>
                          <li><a href="#">Informe de<br>renovaciones</a></li>
                          <li><a href="#">Liquidación de<br>comisiones</a></li>
                          <li><a href="#">Informe de comisiones <br>a la fecha</a></li>
                        </ul>
                      </li>
                      <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-book"></i><span>Menú agenda  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                        <ul class="submenu">
                          <!-- <li><a href="#">Cartera de clientes</a></li> -->
                          <li><a href="#">Talleres</a></li>
                          <li><a href="../page-liquidadores/liquidadores.html">Liquidadores</a></li>
                        </ul>
                      </li>
    
                </div>
                <div id="gerente_zonal" class="d-none">
                
                        <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-security-log"></i><span>Producción  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                          <ul class="submenu">
                            <li><a href="javascript:void(0);"> <span>Ingreso de propuestas <span class="float-right menu-arrow submenu-menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                              <ul class="submenu submenu-2">
                                <li><a href="../page-propuestas/descarga-formularios.html">Descarga de formularios</a></li>
                                <!-- <li><a href="#">Formulario web</a></li> -->
                               <!--  <li><a href="page-carga-formularios.html">Carga de formulario</a></li> -->
                              </ul>
                            </li>
                            <li > <a href="page-bandeja-propuestas/gerente-zonal.html">Bandeja de propuestas</a></li>
                            <li> <a href="#">Solicitud de cotización</a></li>
                           <!--  <li> <a href="#">Bandeja de solicitudes <br>de cotización pendientes</a></li> -->
                            <!-- <li> <a href="#">Renovación de pólizas</a></li> -->
                            <li> <a href="#">Solicitud de inspección</a></li>
                            <li> <a href="../page-endoso/solicitud-endoso.html">Solicitud de endoso</a></li>
                            <li> <a href="#">Cotización en línea</a></li>
                            <!-- <li> <a href="#">Emisión en línea</a></li> -->
                          </ul>
                        </li>
                        <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-wallet"></i><span>Cobranza  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                          <ul class="submenu">
                           <!--  <li><a href="#">Confirmación planes de<br>pago</a></li> -->
                            <li><a href="#">Ingreso PAT</a></li>
                            <li><a href="#">Descarga / envío de<br>facturas</a></li>
                            <li><a href="#">Envío de vencimientos</a></li>
                            <!-- <li><a href="#">Estados de cuenta</a></li> -->
                          </ul>
                        </li>
                        <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-bar-graph"></i><span>Gestión  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                          <ul class="submenu">
                            <li><a href="#">Consulta pólizas</a></li>
                            <li><a href="#">Informe de siniestralidad</a></li>
                            <li><a href="#">Descarga Fecu /<br>certificado de<br>honorarios</a></li>
                            <li><a href="../page-cartera/listar-clientes.html">Cartera de clientes</a></li>
                            <li><a href="#">Listado de pólizas</a></li>
                            <li><a href="#">Informe de cuotas<br>morosas</a></li>
                            <li><a href="#">Informe de pólizas<br>canceladas</a></li>
                            <li><a href="#">Informe de pólizas por<br>renovar</a></li>
                            <li><a href="#">Informe de<br>renovaciones</a></li>
                            <li><a href="#">Liquidación de<br>comisiones</a></li>
                            <li><a href="#">Informe de comisiones <br>a la fecha</a></li>
                          </ul>
                        </li>
                        <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-book"></i><span>Menú agenda  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                          <ul class="submenu">
                           <!--  <li><a href="#">Cartera de clientes</a></li> -->
                            <li><a href="#">Talleres</a></li>
                            <li><a href="../page-liquidadores/liquidadores.html">Liquidadores</a></li>
                          </ul>
                        </li>
      
                </div>
    
              </ul>
          </div>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios)
    //import Topbar from '@/components/Topbar'
    //import SideMenu from '@/components/SideMenu'

    export default {
      name: 'SideMenu',
    /*components:{
      Topbar,
      SideMenu
    },*/
      data () {
        return {
        	dashboard: [],
        	id_userType: '',
          ingresoPropuestas: 
          ['Bandeja de Propuestas', 'Solicitud de Cotización',
          'Renovación de Pólizas', 'Solicitud de Endoso',
          'Cotización en Línea', 'Emisión en Línea']
        }

       
      },

      methods: {

      	dashboardProfile() {
      		this.id_userType = JSON.parse(window.localStorage.getItem('id_tipo_usuario'));
	        console.log(this.id_userType);
	    },
	  },

	  created () {
	  	this.dashboardProfile();
	  }
    

    }

</script>
<style>
  .submenu>li>a {
    padding-left: 20px;
  }
  .submenu-2>li>a {
    padding-left: 50px;
    font-size: 14px;
  }

  .item-size {
    padding-left: 40px;
  }

  .color-a {
    color: #6c757d !important;
  }

  a:hover {
    color: #ff5259 !important;
  }

  .v-application .primary--text {
    color: #ff5259 !important;
    caret-color: #ff5259 !important;
  }

  /*.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: rgba(0,0,0,.87)!important;
  }*/
  .v-list-item__title {
    font-size: 14px;
  }

  span i{
    font-size: 30px;
  }

  .v-application--is-ltr .v-list-group--sub-group .v-list-item__icon:first-child {
    margin-right: 5px;
  }

  .v-application--is-ltr .v-list-group--no-action.v-list-group--sub-group>.v-list-group__items>.v-list-item {
    padding-left: 70px;
  }
</style>