<template>
    
        <div >
            
              
                <v-app-bar app color="#ececf1" :class="$store.state.iconBar" class="sidebar-transform">
                    <v-app-bar-nav-icon @click="$store.commit('value'), toggle()" class="d-none d-md-block d-lg-block d-xl-block"></v-app-bar-nav-icon>
                    <v-app-bar-nav-icon color="grey" class="d-block d-md-none d-sm-block d-lg-none">
                    </v-app-bar-nav-icon>
                    

                    <!--<v-toolbar-title>Title</v-toolbar-title>-->

                    <v-spacer></v-spacer>

                    <ul class="navbar-right d-flex list-inline float-right mb-0 md-col-6">
                        <li class="notification-list">
                            <router-link to="/informe-produccion" class="nav-link waves-effect">
                                Informe de producción
                            </router-link>
                        </li>

                        <li class="notification-list">
                            <router-link to="/mensajes" class="nav-link waves-effect">
                                <i class="ti-email font-20"></i><span class="notification-badge badge badge-pill badge-primary">990</span>
                            </router-link>
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
                                
                                    <v-row justify="space-around">
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
                </v-app-bar >
            
            <!--<v-navigation-drawer
                v-model="drawer"
                :class="$store.state.navigationDrawerMargin"
                app>
                
                
                
                
            </v-navigation-drawer>-->
            <div>
                <logo></logo>
                <sidebar-menu :menu="menu" :collapsed="collapsed" :theme="theme" :width="width" @toggle-collapse="onToggleCollapse" @item-click="onItemClick">
                    
                    <div slot="header" class="logo" >
                        <router-link to="/home">
                            <img :src="'/src/assets/images/' + $store.state.logo" alt="Logo renta" :class="$store.state.logoSize">
                        </router-link>
                    </div>
                    <span slot="toggle-icon" :ref="$store.state.toggle">toggle-icon</span>
                     <span slot="toggle-collapse">footer</span>
                </sidebar-menu>
            </div>
            
            

            <!--<v-app-bar
                app
                color="#ececf1"
                dark>
                
                
                <v-spacer></v-spacer>
                
                
        
            </v-app-bar>-->

        </div>   
    
    
</template>

<script>
    Vue.component('logo',{
        template: `
        <div>
            
        </div>
        `,
        data() {
            return {
                imagenRenta: '' 
            }
        }
    });
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
            windowWidth: 0,
            collapsed: false,
            count: 0,
            menu: [
                {
                    header: true,
                    hiddenOnCollapse: true,
                },
                {
                    href: '/',
                    title: 'Dashboard',
                    icon: 'renta-icon-deashboard'
                },
                {
                    href: '',
                    title: 'Producción',
                    icon: 'renta-icon-security-log',
                    child: [
                        {
                            href: '',
                            title: 'Ingreso de Propuestas',
                            child: [
                                {
                                    href: { path: '/descarga-formularios' },
                                    title: 'Descarga Formularios'
                                },
                                {
                                    href: '/formulario-web',
                                    title: 'Formulario Web'
                                },
                                {

                                }
                            ]
                        }
                    ]
                },
            ]
        }
      },

      props: {
        source: String,
        width: {
          type: String,
          default: '256px'
        },

        // Sidebar width (collapsed)
        widthCollapsed: {
          type: String,
          default: '50px'
        },

        theme: {
          type: String,
          default: 'white-theme'
        },
      },

      mounted() {
        this.$nextTick(function() {
          window.addEventListener('resize', this.getWindowWidth);

          //Init
          this.getWindowWidth()
        })

      },

      methods: {

        dashboardProfile() {
            this.id_userType = JSON.parse(window.localStorage.getItem('id_tipo_usuario'));
            console.log(this.id_userType);
            this.menu[1].href="descarga-formularios";
            console.log(this.menu);
         },

         toggle() {
            //this.$refs.toggle.click();
            this.collapsed = !this.collapsed;
            if (this.collapsed == true) {
                this.count = 1;
            } else {

                this.count = 0;
            }
            
         },
         getWindowWidth(event) {
            this.windowWidth = document.documentElement.clientWidth;
            console.log(this.windowWidth);
            console.log(window.innerWidth);
            var w = window.innerWidth;
             if (w <= 768 && this.count == 0) {

                this.collapsed = true;
                
                console.log(this.count);
                console.log(this.collapsed);
            }  else if (w >= 768 && this.count == 1 || w <= 768 && this.count == 1) {
                this.collapsed = true;
                console.log("con click");
                console.log(this.collapsed);
                console.log(this.count);
            } else {
                this.collapsed = false;
                console.log("sin click");
                console.log(this.collapsed);
                console.log(this.count);
            }

            
          },
           beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
          },

         onItemClick () {
            console.log("hey");
         },

         onToggleCollapse(collapsed) {
            console.log("test");

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
    .logo {
        display: flex;
        justify-content: center;
    }

    .logo-size {
        width: 150px;
    }

    .logo-sm {
        height: 42px;
    }

    .icon-bar {
        margin-left: 256px;
    }

    .icon-bar-collapsed {
        margin-left: 50px;
    }

    /*.navigation-drawer-margin {
        width: 50px !important;
    }*/

    .theme--light.v-navigation-drawer {
        background-color: transparent;
    }

    .vsm--toggle-btn {
        display: none;
    }



    .v-sidebar-menu.vsm_white-theme .vsm--link_level-1 .vsm--icon  {
         background-color: #fff; 
        font-size: 25px;
    }

    .v-sidebar-menu.vsm_collapsed {
        /* background-image: url('/src/assets/images/logo-renta-nacional-sm.png'); */
        
        background-position: center;
    }

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
        margin-top: 80px;
    }

    .content-page-left {
        margin-left: 50px;
        margin-top: 80px;
    }

    .hide-sideMenu{
        left: -240px;
    }
      .submenu>li>a {
        padding-left: 20px;
      }
      .submenu-2>li>a {
        padding-left: 50px;
        font-size: 12px;
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

      .v-card {
        box-shadow: 0 0px 0px 0px rgba(0,0,0,0), 0 0px 0px 0 rgba(0,0,0,0), 0 0px 0px 0 rgba(0,0,0,0);
      }

      .v-list-item {

      }

      /*.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
        color: rgba(0,0,0,.87)!important;
      }*/
      .v-list-item__title {
        font-size: 12px;
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
    
    /* Esconder viñetas con paddig-left en side-menu*/
    .v-application ol, .v-application ul {
        padding-left: 0px;
    }

    .v-application a {
        color: #343a40;
    }

    .v-application {
        font-family: Open Sans,sans-serif;
        color: #5b626b;
    }

    @media (max-width: 768px) {
       .sidebar-transform {
          margin-left: 50px;
        }

        .content-page{
          margin-left: 55px !important;
        }
    }

    

</style>