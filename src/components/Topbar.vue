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
            <li class="dropdown notification-list d-none d-md-block"><a class="nav-link waves-effect" href="#" id="btn-fullscreen"><i class="mdi mdi-fullscreen noti-icon"></i></a></li>
            <li class="dropdown notification-list">
                <div class="dropdown notification-list nav-pro-img"><a class="dropdown-toggle nav-link arrow-none waves-effect nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"><img class="rounded-circle" id="foto_logueado" alt="user"></a></div>
                  <div class="dropdown-menu dropdown-menu-right profile-dropdown"><a class="dropdown-item waves-effect" :href="'../page-perfil/perfil.html'"><img class="rounded-circle m-r-5" id="foto_logueado2" alt="user" height="25px">Mi perfil</a>
                    
                     <a class="dropdown-item waves-effect" href="" id="ejecutivo"><i class="mdi mdi-account-supervisor m-r-5"></i>Mi ejecutivo</a>
                    
                    <a class="dropdown-item waves-effect" href=""><i class="mdi mdi-settings-outline m-r-5"></i>Configuración</a></div>
                    <div class="dropdown-divider"></div><a class="dropdown-item waves-effect text-danger" id="cerrar" href=""><i class="mdi mdi-power text-danger">Cerrar sesión</i></a>
                    <div class="dropdown dropdown-executive bg-light d-none">
                        <div class="dropdown-executive__top p-3 d-flex justify-content-between align-items-start flex-wrap"><img class="rounded-circle m-r-5 dropdown-executive__top-left" src="../assets/images/users/foto.png" alt="Ejecutivo">
                            <div class="dropdown-executive__top-middle">
                              <h4 class="m-0 dropdown-executive__top-middle-title">Ejecutivo asignado</h4>
                              <p class="m-0"><div id="nombre_ejecuivo"></div></p>
                            </div>
                            <a class="dropdown-executive__top-right text-danger" href=""><i class="mdi mdi-close text-danger">Cerrar</i></a>
                        </div>
                        <div class="dropdown-executive__bottom p-3">
                            <div class="m-0">Email: <span id="email_ejecuivo"></span>
	                            <div class="m-0">Oficina: <span id="oficina_ejecuivo"></span>
		                            <div class="m-0">
		                            	Teléfono: <span id="telefono_ejecuivo"></span>
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