<template>
	<div class="topbar" style="height: 80px;">
        <div class="topbar-left"><a class="logo" :href="'/home'"><span>
        	<img src="/src/assets/images/logo-renta-nacional.png" alt="Logo renta" width="150">
            </span><i>

            	<img src="/src/assets/images/logo-renta-nacional-sm.png" alt="Logo-sm" height="42">
            </i></a>
    	</div>
        <nav class="navbar-custom">
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
                              <v-menu
                                bottom
                                origin="center center"
                                transition="scale-transition"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="#ececf1"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                      >
                                        <img class="rounded-circle" height="35px" id="foto_logueado" alt="user" src="/src/assets/images/users/usr_06.png">
                                      </v-btn>
                                    
                                </template>
                          
                                <v-list>
                                  <v-list-item>
                                    <v-list-item-title>
                                        <img class="rounded-circle m-r-5" id="foto" alt="user" src="/src/assets/images/users/foto.png" height="25px">
                                        Mi Perfil
                                    </v-list-item-title>
                                  </v-list-item>

                                  <v-list-item>
                                    <v-list-item-title>
                                        <i class="mdi mdi-account-supervisor m-r-5"></i>
                                        Mi Ejecutivo
                                    </v-list-item-title>
                                  </v-list-item>

                                  <v-list-item>
                                    <v-list-item-title>
                                        <i class="mdi mdi-settings-outline m-r-5"></i>
                                        Configuración
                                    </v-list-item-title>
                                  </v-list-item>
                                </v-list>
                              </v-menu>
                            </v-row>
                        </v-app>
                        <div class="dropdown-menu dropdown-menu-right profile-dropdown">
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
                    </div>
                </div>

                </li>
            </ul>
            <ul class="list-inline menu-left mb-0">
                <li class="float-left">
                    <button class="button-menu-mobile open-left waves-effect"><i class="mdi mdi-menu"></i></button>
                </li>
            </ul>
        </nav>
       
    </div>
</template>

<script>
	export default{
	  name: 'Topbar',
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
</style>