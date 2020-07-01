<template>
    <div>
        <v-app id="inspire">
            <v-navigation-drawer
                v-model="drawer"
                   
                app>
                <v-list dense>

                    <v-app >
                    <v-card >
                      <v-sheet
                        >
                          <v-container style="height: 1000px;">
                             <div class="topbar-left"><a class="logo" :href="'/home'"><span>
                        <img src="/src/assets/images/logo-renta-nacional.png" alt="Logo renta" width="150">
                        </span><i>

                            <!--<img src="/src/assets/images/logo-renta-nacional-sm.png" alt="Logo-sm" height="42">-->
                        </i></a>

                    </div>
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
                                        <router-link to="/solicitud-cotizacion" class="color-a">Solicitud de cotización</router-link>
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
                                      <router-link to="/bandeja-renovaciones">
                                        Bandeja de Renovaciones
                                      </router-link>
                                    </li>
                                    <li>
                                      <router-link to="/polizas-vencidas">
                                        Pólizas Vencidas
                                      </router-link>
                                    </li>
                                    <li>
                                      <router-link to="/reporte-polizas-vencidas">
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
                                        <router-link to="/cotizacion-linea" class="color-a">Cotización en Línea</router-link>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </template>  
                                </v-list-item>
                                
                                <v-list-item class="item-size">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <router-link to="/emision-linea" class="color-a">Emisión en Línea</router-link>
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
                                  <li><router-link to="/planes-pago">Confirmación planes de<br>pago</router-link></li>
                                  <li><router-link to="/ingreso-pat">Ingreso PAT</router-link></li>
                                  <li><router-link to="/descarga-envio-facturas">Descarga / envío de<br>facturas</router-link></li>
                                  <li><router-link to="/envio-vencimientos">Envío de vencimientos</router-link></li>
                                  <li><router-link to="/estado-cuentas">Estados de cuenta</router-link></li>
                                </ul>
                                  
                                </v-list-item>
                              </v-list-group>

                              <v-list-group class="group"
                                :value="false"> 
                                <template v-slot:activator>
                                  <v-list-item-title >
                                    <span>
                                      <i class="renta-icon-security-log"></i>
                                    </span>
                                    Gestión
                                  </v-list-item-title>
                                </template>

                                <v-list-item class="item-size">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <router-link to="/consulta-poliza" class="color-a">
                                          Consulta Pólizas
                                        </router-link>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </template>  
                                </v-list-item>

                                <v-list-item class="item-size">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <router-link to="/informe-siniestralidad" class="color-a">
                                          Informe de Siniestralidad
                                        </router-link>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </template>  
                                </v-list-item>

                                <v-list-item class="item-size">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <router-link to="/certificado-honorarios" class="color-a">
                                          Descarga Fecu /<br>certificado de<br>honorarios
                                        </router-link>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </template>  
                                </v-list-item>

                                <v-list-item class="item-size">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <router-link to="/cartera-clientes" class="color-a">
                                          Cartera de Clientes
                                        </router-link>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </template>  
                                </v-list-item>

                                <v-list-item class="item-size">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <router-link to="/listado-polizas" class="color-a">
                                          Listado de pólizas
                                        </router-link>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </template>  
                                </v-list-item>

                                <v-list-item class="item-size">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <router-link to="/cuotas-morosas" class="color-a">
                                          Informe de cuotas<br>morosas
                                        </router-link>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </template>  
                                </v-list-item>

                                <v-list-item class="item-size">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <router-link to="/polizas-canceladas" class="color-a">
                                          Informe de pólizas <br>canceladas
                                        </router-link>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </template>  
                                </v-list-item>

                                <v-list-item class="item-size">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <router-link to="/informe-renovaciones" class="color-a">
                                          Informe de<br>renovaciones
                                        </router-link>
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
                                      <v-list-item-title >Informe de Propuestas</v-list-item-title>
                                    </v-list-item-content>
                                  </template>

                                  <ul class="submenu submenu-2">
                                    <li>
                                      <router-link to="/informe-propuestas">
                                        Cotizaciones Pendientes
                                      </router-link> 
                                    </li>
                                  </ul>

                                </v-list-group>

                                <v-list-group
                                  no-action
                                  sub-group
                                  :value="false">
                                  <template v-slot:activator>
                                    <v-list-item-content>
                                      <v-list-item-title >Liquidación de <br>Comisiones</v-list-item-title>
                                    </v-list-item-content>
                                  </template>

                                  <ul class="submenu submenu-2">
                                    <li>
                                      <router-link to="/descarga-formularios">
                                        Liquidaciones por Pagar
                                      </router-link> 
                                    </li>
                                    <li>
                                      <router-link to="/descarga-formularios">
                                        Informe de Comisiones a la Fecha
                                      </router-link> 
                                    </li>
                                    <li>
                                      <router-link to="/descarga-formularios">
                                        Liquidaciones Históricas
                                      </router-link> 
                                    </li>
                                  </ul>

                                </v-list-group>

                              </v-list-group>

                             
                              
                              <v-list-group
                                :value="false">
                                <template v-slot:activator>
                                  <v-list-item-title>
                                    <span>
                                      <i class="renta-icon-book"></i>
                                    </span>
                                    Menú Agenda
                                  </v-list-item-title>
                                </template>

                                <v-list-item class="item-size">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <router-link to="/solicitud-endoso" class="color-a">
                                          Talleres
                                        </router-link>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </template>  
                                </v-list-item>

                                <v-list-item class="item-size">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <router-link to="/solicitud-endoso" class="color-a">
                                          Carteras de Clientes
                                        </router-link>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </template>  
                                </v-list-item>

                                <v-list-item class="item-size">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <router-link to="/solicitud-endoso" class="color-a">
                                          Liquidadores
                                        </router-link>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </template>  
                                </v-list-item>

                                <v-list-item class="item-size">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <router-link to="/solicitud-endoso" class="color-a">
                                          Oficinas
                                        </router-link>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </template>  
                                </v-list-item>

                              </v-list-group>

                            </v-list>
                          </v-container>
                        </v-sheet>
                      
                    </v-card>
                  </v-app>
                </v-list>
            </v-navigation-drawer>

            <v-app-bar
                app
                color="#ececf1"
                dark>
                <v-app-bar-nav-icon color="grey" @click="$store.commit('value')" style="height: 80px;" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                
                <v-spacer></v-spacer>
                
                <ul class="navbar-right d-flex list-inline float-right mb-0">
                <li class="notification-list"><a class="nav-link waves-effect" href="../page-home/informe-produccion.html">Informe de producción</a>
                </li>

                <li class="notification-list">
                    <a class="nav-link waves-effect" href="../page-home/mensajes.html"> <i class="ti-email font-20"></i><span class="notification-badge badge badge-pill badge-primary">990</span></a>
                </li>
                <li class="dropdown notification-list d-none d-md-block">
                    <a class="nav-link waves-effect" href="#" id="btn-fullscreen">
                        <i class="mdi mdi-fullscreen noti-icon"></i>
                    </a>
                </li>
                <li class="dropdown notification-list">
                    <div class="dropdown notification-list nav-pro-img">
                        <a class="dropdown-toggle nav-link arrow-none waves-effect nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            
                        </a>
                        <v-app id="inspire" >
                            <v-row justify="space-around" class="testme">
                                <div class="d-flex justify-center align-center">
                                <v-menu
                                    bottom
                                    origin="center center"
                                    transition="scale-transition"
                                    offset-y>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            color="#ececf1"
                                            dark
                                            v-bind="attrs"
                                            v-on="on">
                                            <img class="rounded-circle" height="35px" id="foto_logueado" alt="user" src="/src/assets/images/users/usr_06.png">
                                        </v-btn>
                                    </template>
                              
                                    <v-list>
                                      <v-list-item>
                                        <v-list-item-title>
                                            <router-link to="/perfil">
                                                <img class="rounded-circle m-r-5" id="foto" alt="user" src="/src/assets/images/users/usr_06.png" height="25px">
                                                Mi Perfil
                                            </router-link>
                                        </v-list-item-title>
                                      </v-list-item>

                                      <v-list-item>
                                        <v-list-item-title>
                                            <router-link to="/perfil">
                                                <router-link to="#">
                                                    <i class="mdi mdi-account-supervisor m-r-5"></i>
                                                    Mi Ejecutivo
                                                </router-link>
                                            </router-link>
                                        </v-list-item-title>
                                      </v-list-item>

                                      <v-list-item>
                                        <v-list-item-title>
                                            <router-link to="#">
                                                <i class="mdi mdi-settings-outline m-r-5"></i>
                                                Configuración
                                            </router-link>
                                        </v-list-item-title>
                                      </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                            </v-row>
                        </v-app>
                        <!--<div class="dropdown-menu dropdown-menu-right profile-dropdown">
                            <a class="dropdown-item waves-effect" href="">
                                <img class="rounded-circle m-r-5" id="foto_logueado2" alt="user" height="25px">
                                Mi perfil
                            </a>

                            <a class="dropdown-item waves-effect" href="" id="ejecutivo"><i class="mdi mdi-account-supervisor m-r-5"></i>Mi ejecutivo</a>

                            <a class="dropdown-item waves-effect" href=""><i class="mdi mdi-settings-outline m-r-5"></i>Configuración</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item waves-effect text-danger" id="cerrar" href=""><i class="mdi mdi-power text-danger">Cerrar sesión</i></a>
                            <div class="dropdown dropdown-executive bg-light d-none">
                                <div class="dropdown-executive__top p-3 d-flex justify-content-between align-items-start flex-wrap"><img class="rounded-circle m-r-5 dropdown-executive__top-left" src="/src/assets/images/users/usr_06.png" alt="Ejecutivo">
                                    <div class="dropdown-executive__top-middle">
                                        <h4 class="m-0 dropdown-executive__top-middle-title">Ejecutivo asignado</h4>
                                        <p class="m-0">
                                            <div id="nombre_ejecuivo"></div>
                                        </p>
                                    </div><a class="dropdown-executive__top-right text-danger" href=""><i class="mdi mdi-close text-danger">Cerrar</i></a></div>
                                <div class="dropdown-executive__bottom p-3">
                                    <div class="m-0">Email: <span id="email_ejecuivo"></span>
                                        <div class="m-0">Oficina: <span id="oficina_ejecuivo"></span>
                                            <div class="m-0">Teléfono: <span id="telefono_ejecuivo"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>-->
                    </div>

                </li>
            </ul>
        
            </v-app-bar>

            <v-main>
                <v-container
                  class="fill-height"
                  fluid
                >
                    <v-row
                        align="center"
                        justify="center">
                        <v-col class="text-center">
                            <v-tooltip left>
                                <template v-slot:activator="{ on }">
                                  <v-btn
                                    :href="source"
                                    icon
                                    large
                                    target="_blank"
                                    v-on="on"
                                  >
                                    <v-icon large>mdi-code-tags</v-icon>
                                  </v-btn>
                                </template>
                                <span>Source</span>
                            </v-tooltip>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-app>    
    </div>
    
</template>

<script>
    import Vue from 'vue'
	export default{
	  name: 'Topbar',
      data () {
        return {
            closeOnClick: false,
            dashboard: [],
            id_userType: '',
            drawer: true,
            mini: true,
            count: 0,
        }
      },

      props: {
        source: String,
      },

      methods: {

        dashboardProfile() {
            this.id_userType = JSON.parse(window.localStorage.getItem('id_tipo_usuario'));
            console.log(this.id_userType);
         },

         value() {

            
            if (this.count == 0) {
                console.log("count is 0");
                console.log(this.count);
                console.log(this.$css);
                Vue.prototype.$css = false;
                console.log(this.$css);
                this.count = 1;
                console.log(this.count);
            }else if (this.count == 1) {
                console.log("count is 1");
                console.log(this.count);
                console.log(this.$css);
                Vue.prototype.$css = true;
                console.log(this.$css);
                this.count = 0;
            }
        }
      },

      created () {
        this.dashboardProfile();
      },
	}
</script>
<style>
    .v-application--wrap {
        min-height: 0;
        background: #ececf1;
    }
    .v-btn--contained {
        box-shadow: 0 0px 0px 0px rgba(0,0,0,0), 0 0px 0px 0 rgba(0,0,0,0), 0 0px 0px 0 rgba(0,0,0,0);
    }

    header {
        height: 90px!important;
        padding: 10px;
    }

    .content-page .content {
        margin-top: 0px;
    }
    @media (max-width: 1263px) { 
        .content-page{
          margin-left: 0;
        }
    }
</style>