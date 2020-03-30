<template>
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
                          <li><a :href="'/propuestas/downloadForms'">Descarga de formularios</a></li>
                          <li><a href="#">Formulario web</a></li>
                          <li><a :href="'/propuestas/uploadForms'">Carga de formulario</a></li>
                        </ul>
                      </li>
                      <li > <a :href="'/page-bandejas-propuestas/intermediarios.html'">Bandeja de propuestas</a></li>
                      <li> <a href="#">Solicitud de cotización</a></li>
                     <!--  <li> <a href="#">Bandeja de solicitudes <br>de cotización pendientes</a></li> -->
                      <li> <a href="#">Renovación de pólizas</a></li>
                      <!-- <li> <a href="#">Solicitud de inspección</a></li> -->
                      <li> <a :href="'/page-endoso/solicitud-endoso.html'">Solicitud de endoso</a></li>
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
</template>