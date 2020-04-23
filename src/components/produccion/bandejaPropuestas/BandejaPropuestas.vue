<template>
  <div id="wrapper">
    <Topbar></Topbar>
    <SideMenu></SideMenu>
    <div class="content-page">
        <div class="content">
          <div class="container-fluid">
            <div class="page-title-box">
              <div class="row align-items-center">
                <div class="col-sm-6">
                  <h4 class="page-title">Bandeja de Propuestas</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Produción</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Bandeja de Propuestas</a></li>
                    <li class="breadcrumb-item active"><span></span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-7">
                        <h4 class="mt-0 header-title">Seleccione los datos que desea visualizar</h4>
                        <p class="text-muted m-b-30">El botón mostrar todo mostrará en tabla todos los datos disponibles</p>
                      </div>
                      <div class="col-md-5 text-right colvis-btns"></div>
                    </div>
                    <div class="table-responsive mb-0">
                      <table class="table table-striped table-small-font table-sm" id="propuestas" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="text-center" data-priority="1">Id Propuesta</th>
                            <th class="text-center" data-priority="2">Fecha Ingreso</th>
                            <th class="text-center" data-priority="2">Plan</th>
                            <th class="text-center" data-priority="1">Cliente</th>
                            <th class="text-center" data-priority="1">Adjuntos</th>
                            <th class="text-center" data-priority="3">Prima Neta</th>
                            <th class="text-center" data-priority="1">Estado</th>
                            <th class="text-center" data-priority="3">Tipo</th>
                            <th class="text-center" data-priority="1">Dias</th>
                            <th class="text-center" data-priority="3">Póliza-Ítem</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center">123456789041</td>
                            <td class="text-center">15-12-2019</td>
                            <td class="text-center">12458</td>
                            <td class="text-center">bsilvaserr13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">4567859</td>
                            <td class="text-center"><span class="d-none">pendiente</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/pendiente.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">45789564215</td>
                          </tr>
                          <tr>
                            <td class="text-center">758498564812</td>
                            <td class="text-center">01-01-2020</td>
                            <td class="text-center">85412</td>
                            <td class="text-center">aalvarezroj13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">8541245</td>
                            <td class="text-center"><span class="d-none">en-proceso</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/en-proceso.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">03</div>
                            </td>
                            <td class="text-center">85412564851</td>
                          </tr>
                          <tr>
                            <td class="text-center">985465215298</td>
                            <td class="text-center">18-11-2019</td>
                            <td class="text-center">98564</td>
                            <td class="text-center">LORENA GU 13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">9865412</td>
                            <td class="text-center"><span class="d-none">eliminar</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/eliminar.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">05</div>
                            </td>
                            <td class="text-center">98564512350</td>
                          </tr>
                          <tr>
                            <td class="text-center">150236098547</td>
                            <td class="text-center">14-01-2020</td>
                            <td class="text-center">52165</td>
                            <td class="text-center">R NUNEZ R 13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0597845</td>
                            <td class="text-center"><span class="d-none">en-proceso</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/en-proceso.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">03</div>
                            </td>
                            <td class="text-center">85412501298</td>
                          </tr>
                          <tr>
                            <td class="text-center">952102387450</td>
                            <td class="text-center">30-12-2019</td>
                            <td class="text-center">02632</td>
                            <td class="text-center">Kespina w 13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0659854</td>
                            <td class="text-center"><span class="d-none">pendiente</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/pendiente.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">03</div>
                            </td>
                            <td class="text-center">85012501484</td>
                          </tr>
                          <tr>
                            <td class="text-center">784152169852</td>
                            <td class="text-center">04-01-2020</td>
                            <td class="text-center">80451</td>
                            <td class="text-center">13.000.000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">8040521</td>
                            <td class="text-center"><span class="d-none">en-proceso</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/en-proceso.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">05</div>
                            </td>
                            <td class="text-center">05698745120</td>
                          </tr>
                          <tr>
                            <td class="text-center">965218745236</td>
                            <td class="text-center">28-12-2019</td>
                            <td class="text-center">05978</td>
                            <td class="text-center">Camila Valdes Poblet</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0897504</td>
                            <td class="text-center"><span class="d-none">en-proceso</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/en-proceso.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">03</div>
                            </td>
                            <td class="text-center">85415236985</td>
                          </tr>
                          <tr>
                            <td class="text-center">541286798540</td>
                            <td class="text-center">15-11-2019</td>
                            <td class="text-center">50691</td>
                            <td class="text-center">HUGO FERNANDES JIRON</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0895014</td>
                            <td class="text-center"><span class="d-none">pendiente</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/pendiente.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">74512659856</td>
                          </tr>
                          <tr>
                            <td class="text-center">985412635412</td>
                            <td class="text-center">26-10-2019</td>
                            <td class="text-center">60904</td>
                            <td class="text-center">bsilvaserr130000000</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0632015</td>
                            <td class="text-center"><span class="d-none">eliminar</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/eliminar.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">05</div>
                            </td>
                            <td class="text-center">45213562874</td>
                          </tr>
                          <tr>
                            <td class="text-center">451236528970</td>
                            <td class="text-center">28-11-2019</td>
                            <td class="text-center">90874</td>
                            <td class="text-center">aalvarezroj13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0874509</td>
                            <td class="text-center"><span class="d-none">eliminar</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/eliminar.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">96523487150</td>
                          </tr>
                          <tr>
                            <td class="text-center">123456789041</td>
                            <td class="text-center">15-12-2019</td>
                            <td class="text-center">12458</td>
                            <td class="text-center">bsilvaserr13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">4567859</td>
                            <td class="text-center"><span class="d-none">pendiente</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/pendiente.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">45789564215</td>
                          </tr>
                          <tr>
                            <td class="text-center">758498564812</td>
                            <td class="text-center">01-01-2020</td>
                            <td class="text-center">85412</td>
                            <td class="text-center">aalvarezroj13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">8541245</td>
                            <td class="text-center"><span class="d-none">en-proceso</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/en-proceso.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">03</div>
                            </td>
                            <td class="text-center">85412564851</td>
                          </tr>
                          <tr>
                            <td class="text-center">985465215298</td>
                            <td class="text-center">18-11-2019</td>
                            <td class="text-center">98564</td>
                            <td class="text-center">LORENA GU 13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">9865412</td>
                            <td class="text-center"><span class="d-none">eliminar</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/eliminar.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">05</div>
                            </td>
                            <td class="text-center">98564512350</td>
                          </tr>
                          <tr>
                            <td class="text-center">150236098547</td>
                            <td class="text-center">14-01-2020</td>
                            <td class="text-center">52165</td>
                            <td class="text-center">R NUNEZ R 13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0597845</td>
                            <td class="text-center"><span class="d-none">en-proceso</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/en-proceso.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">03</div>
                            </td>
                            <td class="text-center">85412501298</td>
                          </tr>
                          <tr>
                            <td class="text-center">952102387450</td>
                            <td class="text-center">30-12-2019</td>
                            <td class="text-center">02632</td>
                            <td class="text-center">Kespina w 13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0659854</td>
                            <td class="text-center"><span class="d-none">pendiente</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/pendiente.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">03</div>
                            </td>
                            <td class="text-center">85012501484</td>
                          </tr>
                          <tr>
                            <td class="text-center">784152169852</td>
                            <td class="text-center">04-01-2020</td>
                            <td class="text-center">80451</td>
                            <td class="text-center">13.000.000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">8040521</td>
                            <td class="text-center"><span class="d-none">en-proceso</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/en-proceso.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">05</div>
                            </td>
                            <td class="text-center">05698745120</td>
                          </tr>
                          <tr>
                            <td class="text-center">965218745236</td>
                            <td class="text-center">28-12-2019</td>
                            <td class="text-center">05978</td>
                            <td class="text-center">Camila Valdes Poblet</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0897504</td>
                            <td class="text-center"><span class="d-none">en-proceso</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/en-proceso.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">03</div>
                            </td>
                            <td class="text-center">85415236985</td>
                          </tr>
                          <tr>
                            <td class="text-center">541286798540</td>
                            <td class="text-center">15-11-2019</td>
                            <td class="text-center">50691</td>
                            <td class="text-center">HUGO FERNANDES JIRON</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0895014</td>
                            <td class="text-center"><span class="d-none">pendiente</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/pendiente.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">74512659856</td>
                          </tr>
                          <tr>
                            <td class="text-center">985412635412</td>
                            <td class="text-center">26-10-2019</td>
                            <td class="text-center">60904</td>
                            <td class="text-center">bsilvaserr130000000</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0632015</td>
                            <td class="text-center"><span class="d-none">eliminar</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/eliminar.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">05</div>
                            </td>
                            <td class="text-center">45213562874</td>
                          </tr>
                          <tr>
                            <td class="text-center">451236528970</td>
                            <td class="text-center">28-11-2019</td>
                            <td class="text-center">90874</td>
                            <td class="text-center">aalvarezroj13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0874509</td>
                            <td class="text-center"><span class="d-none">eliminar</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/eliminar.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">96523487150</td>
                          </tr>
                          <tr>
                            <td class="text-center">123456789041</td>
                            <td class="text-center">15-12-2019</td>
                            <td class="text-center">12458</td>
                            <td class="text-center">bsilvaserr13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">4567859</td>
                            <td class="text-center"><span class="d-none">pendiente</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/pendiente.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">45789564215</td>
                          </tr>
                          <tr>
                            <td class="text-center">758498564812</td>
                            <td class="text-center">01-01-2020</td>
                            <td class="text-center">85412</td>
                            <td class="text-center">aalvarezroj13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">8541245</td>
                            <td class="text-center"><span class="d-none">en-proceso</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/en-proceso.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">03</div>
                            </td>
                            <td class="text-center">85412564851</td>
                          </tr>
                          <tr>
                            <td class="text-center">985465215298</td>
                            <td class="text-center">18-11-2019</td>
                            <td class="text-center">98564</td>
                            <td class="text-center">LORENA GU 13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">9865412</td>
                            <td class="text-center"><span class="d-none">eliminar</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/eliminar.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">05</div>
                            </td>
                            <td class="text-center">98564512350</td>
                          </tr>
                          <tr>
                            <td class="text-center">150236098547</td>
                            <td class="text-center">14-01-2020</td>
                            <td class="text-center">52165</td>
                            <td class="text-center">R NUNEZ R 13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0597845</td>
                            <td class="text-center"><span class="d-none">en-proceso</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/en-proceso.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">03</div>
                            </td>
                            <td class="text-center">85412501298</td>
                          </tr>
                          <tr>
                            <td class="text-center">952102387450</td>
                            <td class="text-center">30-12-2019</td>
                            <td class="text-center">02632</td>
                            <td class="text-center">Kespina w 13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0659854</td>
                            <td class="text-center"><span class="d-none">pendiente</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/pendiente.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">03</div>
                            </td>
                            <td class="text-center">85012501484</td>
                          </tr>
                          <tr>
                            <td class="text-center">784152169852</td>
                            <td class="text-center">04-01-2020</td>
                            <td class="text-center">80451</td>
                            <td class="text-center">13.000.000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">8040521</td>
                            <td class="text-center"><span class="d-none">en-proceso</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/en-proceso.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">05</div>
                            </td>
                            <td class="text-center">05698745120</td>
                          </tr>
                          <tr>
                            <td class="text-center">965218745236</td>
                            <td class="text-center">28-12-2019</td>
                            <td class="text-center">05978</td>
                            <td class="text-center">Camila Valdes Poblet</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0897504</td>
                            <td class="text-center"><span class="d-none">en-proceso</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/en-proceso.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">03</div>
                            </td>
                            <td class="text-center">85415236985</td>
                          </tr>
                          <tr>
                            <td class="text-center">541286798540</td>
                            <td class="text-center">15-11-2019</td>
                            <td class="text-center">50691</td>
                            <td class="text-center">HUGO FERNANDES JIRON</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0895014</td>
                            <td class="text-center"><span class="d-none">pendiente</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/pendiente.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">74512659856</td>
                          </tr>
                          <tr>
                            <td class="text-center">985412635412</td>
                            <td class="text-center">26-10-2019</td>
                            <td class="text-center">60904</td>
                            <td class="text-center">bsilvaserr130000000</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0632015</td>
                            <td class="text-center"><span class="d-none">eliminar</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/eliminar.png"/></td>
                            <td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/formulario.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">05</div>
                            </td>
                            <td class="text-center">45213562874</td>
                          </tr>
                          <tr>
                            <td class="text-center">451236528970</td>
                            <td class="text-center">28-11-2019</td>
                            <td class="text-center">90874</td>
                            <td class="text-center">aalvarezroj13000000-0</td>
                            <td class="text-center"><a href="#"><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/clip.png"/></a></td>
                            <td class="text-center">0874509</td>
                            <td class="text-center"><span class="d-none">eliminar</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/eliminar.png"/></td>
                            <td class="text-center"><span class="d-none">web</span><img class="img-fluid dt-icons" src="assets/images/bandeja-iconos/web.png"/></td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">96523487150</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>