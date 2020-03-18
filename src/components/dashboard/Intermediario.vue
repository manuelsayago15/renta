<template>
	<div id="wrapper">
        <div class="topbar">
            <div class="topbar-left"><a class="logo" href="../index.html"><span>
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
                      <div class="dropdown-menu dropdown-menu-right profile-dropdown"><a class="dropdown-item waves-effect" href="../page-perfil/perfil.html"><img class="rounded-circle m-r-5" id="foto_logueado2" alt="user" height="25px">Mi perfil</a>
                        
                         <a class="dropdown-item waves-effect" href="" id="ejecutivo"><i class="mdi mdi-account-supervisor m-r-5"></i>Mi ejecutivo</a>
                        
                        <a class="dropdown-item waves-effect" href=""><i class="mdi mdi-settings-outline m-r-5"></i>Configuración</a></div>
                        <div class="dropdown-divider"></div><a class="dropdown-item waves-effect text-danger" id="cerrar" href=""><i class="mdi mdi-power text-danger">Cerrar sesión</i></a>
                        <div class="dropdown dropdown-executive bg-light d-none">
	                        <div class="dropdown-executive__top p-3 d-flex justify-content-between align-items-start flex-wrap"><img class="rounded-circle m-r-5 dropdown-executive__top-left" src="/src/assets/images/users/foto.png" alt="Ejecutivo">
	                            <div class="dropdown-executive__top-middle">
	                              <h4 class="m-0 dropdown-executive__top-middle-title">Ejecutivo asignado</h4>
	                              <p class="m-0"><div id="nombre_ejecuivo"></div></p>
	                            </div><a class="dropdown-executive__top-right text-danger" href=""><i class="mdi mdi-close text-danger">Cerrar</i></a></div>
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
        <div class="left side-menu">
            <div class="slimscroll-menu" id="remove-scroll">
              <div id="sidebar-menu">
                <ul class="metismenu" id="side-menu">
                  <li><a class="waves-effect waves-light" id="dashboard"><i class="renta-icon-deashboard"></i><span>Dashboard</span></a></li>
                
                    <div id="intermediarios" class="d-none">
                        
                      <li><a class="waves-effect waves-light" href="javascript:void(0);"><i class="renta-icon-security-log"></i><span>Producción  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                        <ul class="submenu">
                          <li><a href="javascript:void(0);"> <span>Ingreso de propuestas <span class="float-right menu-arrow submenu-menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a>
                            <ul class="submenu submenu-2">
                              <li><a href="../page-propuestas/descarga-formularios.html">Descarga de formularios</a></li>
                              <li><a href="#">Formulario web</a></li>
                              <li><a href="../page-propuestas/carga-formularios.html">Carga de formulario</a></li>
                            </ul>
                          </li>
                          <li > <a href="../page-bandejas-propuestas/intermediarios.html">Bandeja de propuestas</a></li>
                          <li> <a href="#">Solicitud de cotización</a></li>
                         <!--  <li> <a href="#">Bandeja de solicitudes <br>de cotización pendientes</a></li> -->
                          <li> <a href="#">Renovación de pólizas</a></li>
                          <!-- <li> <a href="#">Solicitud de inspección</a></li> -->
                          <li> <a href="../page-endoso/solicitud-endoso.html">Solicitud de endoso</a></li>
                          <li> <a href="#">Cotización en línea</a></li>
                          <li> <a href="#">Emisión en línea</a></li>
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
    
        <div class="content-page">
            <div class="content p-0">
              <div class="container-fluid">
                <div class="page-title-box p-0 pt-1">
                  <div class="row align-items-center">
                    <div class="col-sm-6">
                      <h4 class="page-title">Próximos vencimientos</h4>
                      <ol class="breadcrumb">
                      </ol>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-primary text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0"><span id="inicio_diez"></span><span id="gion_diez">&nbsp;&nbsp;-&nbsp;&nbsp;</span> <span id="fin_diez"></span></p>
                        <h3 class="m-0 font-weight-bold text-uppercase"><span id="total_diez"></span> Pólizas</h3>
                        <p class="m-0 font-weight-bold text-right">10 Días</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-card-info-2 text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0"><span id="inicio_veinte"></span>&nbsp;&nbsp;-&nbsp;&nbsp;<span id="fin_veinte"></span></p>
                        <h3 class="m-0 font-weight-bold text-uppercase"><span><span id="total_veinte"></span></span> Pólizas</h3>
                        <p class="m-0 font-weight-bold text-right">20 Días</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-card-info-3 text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0"><span id="inicio_treinta"></span>&nbsp;&nbsp;-&nbsp;&nbsp;<span id="fin_treinta"></span></p>
                        <h3 class="m-0 font-weight-bold text-uppercase"><span><span id="total_treinta"></span></span> Pólizas</h3>
                        <p class="m-0 font-weight-bold text-right">30 Días</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-card-info-4 text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0"><span id="inicio_cuarenta"></span>&nbsp;&nbsp;-&nbsp;&nbsp;<span id="fin_cuarenta"></span></p>
                        <h3 class="m-0 font-weight-bold text-uppercase"><span><span id="total_cuarenta"></span></span> Pólizas</h3>
                        <p class="m-0 font-weight-bold text-right">40 Días</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="card card--dashboard">
                      <div class="card-body card-body--dashboard">
                        <div class="row">
                          <div class="col-lg-6">
                            <h4 class="header-title m-0 font-weight-bold">Ventas por categorías</h4>
                          </div>
                          <div class="col-lg-6">
                            <ul class="nav nav-pills justify-content-end" role="tablist" id="ventas-categorias-tabs">
                             <!--  <li class="nav-item"><a class="nav-link nav-link--dashboard active" href="#ventas-categorias-uf" data-toggle="tab" aria-controls="ventas-categorias-uf" aria-selected="true" id="ventas-categorias-uf-tab">UF</a></li>-->
                            </ul>
                          </div>
                        </div>
                        <div class="tab-content" id="ventas-categorias-tabs-content">
                          <div class="bar-chart tab-pane fade show active" role="tabpanel" aria-labelledby="ventas-categorias-tab" id="ventas-categorias-todos">
                             <canvas id="ventas-categorias-chart"></canvas> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="card card--dashboard">
                      <div class="card-body card-body--dashboard">
                        <div class="row">
                          <div class="col-lg-6">
                            <h4 class="header-title m-0 font-weight-bold">Ventas últimos 15 días</h4>
                          </div>
                          <div class="col-lg-6">
                            <ul class="nav nav-pills justify-content-end" role="tablist" id="ventas-ultimos-dias-tabs">
                             <!--  <li class="nav-item"><a class="nav-link nav-link--dashboard active" href="#ventas-ultimos-dias-uf" data-toggle="tab" aria-controls="ventas-ultimos-dias-uf" aria-selected="true" id="ventas-ultimos-dias-uf-tab">UF</a></li>-->
                             </ul>
                          </div>
                        </div>
                        <div class="tab-content" id="ventas-ultimos-dias-content">
                          <div class="line-chart tab-pane fade show active" role="tabpanel" aria-labelledby="ventas-ultimos-dias-uf-tab" id="ventas-ultimos-15dias">
                            <canvas id="ventas-ultimos-15dias-chart"></canvas>
                          </div>
                        </div>
                        <div class="row pt-1">
                          <div class="col-sm-6 col-lg-12 col-xl-6">
                            <div class="d-flex"><img class="img-fluid" src="/src/assets/images/icon-up.svg">
                              <div class="pl-3">
                                <h5 class="m-0 text-uppercase font-weight-bold">Mayor Venta</h5>
                                <p class="m-0"><span id="fecha_mayor"></span>&nbsp;<span id="unidad_mayor"></span><span id="cantidad_mayor"></span></p>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6 col-lg-12 col-xl-6">
                            <div class="d-flex"><img class="img-fluid" src="/src/assets/images/icon-down.svg">
                              <div class="pl-3">
                                <h5 class="m-0 text-uppercase font-weight-bold">Menor Venta</h5>
                                <p class="m-0"><span id="fecha_menor"></span>&nbsp;<span id="unidad_menor"></span><span id="cantidad_menor"></span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card card--dashboard">
                  <div class="card-body card-body--dashboard">
                    <h4 class="header-title m-0 font-weight-bold">Últimas propuestas</h4>
                    <div class="table-responsive mb-0">
                      <table class="table table-striped table-small-font table-sm" id="top-intermediarios" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="text-center" data-priority="1">Id Propuesta</th>
                            <th class="text-center" data-priority="2">Fecha</th>
                            <th class="text-center" data-priority="2">Plan</th>
                            <th class="text-center" data-priority="1">Cliente</th>
                            <th class="text-center" data-priority="3">Prima Neta</th>
                            <th class="text-center" data-priority="1">Estado</th>
                            <th class="text-center" data-priority="3">Tipo</th>
                            <th class="text-center" data-priority="1">Días</th>
                          </tr>
                        </thead>
                        <tbody>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
	import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios)
</script>