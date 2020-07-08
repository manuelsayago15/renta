<template>
	<div id="wrapper">
		<Topbar></Topbar>
    <!--<SideMenu></SideMenu>-->
    <div :class="$store.state.val">
        <div class="content">
          <div class="container-fluid">
            <div class="page-title-box">
              <div class="row align-items-center">
                <div class="col-sm-6">
                  <h4 class="page-title">Bandeja de renovaciones</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Producción</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Renovación de pólizas</a></li>
                    <li class="breadcrumb-item active"><span>Bandeja de renovaciones</span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="row row--sm expiration-dates">
              <div class="col-sm-6 col-lg-3">
                <div class="card card--dashboard bg-primary text-white">
                  <div class="card-body card-body--dashboard">
                    <p class="m-0">10/09/2019 - 10/09/2019</p>
                    <h3 class="m-0 font-weight-bold text-uppercase"><span>5</span> Pólizas</h3>
                    <p class="m-0 font-weight-bold text-right">10 Días</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="card card--dashboard bg-card-info-2 text-white">
                  <div class="card-body card-body--dashboard">
                    <p class="m-0">21/09/2019 - 30/09/2019</p>
                    <h3 class="m-0 font-weight-bold text-uppercase"><span>0</span> Pólizas</h3>
                    <p class="m-0 font-weight-bold text-right">20 Días</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="card card--dashboard bg-card-info-3 text-white">
                  <div class="card-body card-body--dashboard">
                    <p class="m-0">01/10/2019 - 10/10/2019</p>
                    <h3 class="m-0 font-weight-bold text-uppercase"><span>10</span> Pólizas</h3>
                    <p class="m-0 font-weight-bold text-right">30 Días</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="card card--dashboard bg-card-info-4 text-white">
                  <div class="card-body card-body--dashboard">
                    <p class="m-0">01/10/2019 - 10/10/2019</p>
                    <h3 class="m-0 font-weight-bold text-uppercase"><span>20</span> Pólizas</h3>
                    <p class="m-0 font-weight-bold text-right">40 Días</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div id="bandejaRenovacionesCorredor">
                  <ul class="nav nav-tabs" id="bandejaRenovacionesCorredorTabs" role="tablist">
                    <li class="nav-item"><a class="nav-link active font-weight-bold" id="polizasSinModCorredorTab" data-toggle="tab" href="#polizasSinModCorredor" role="tab" aria-controls="polizasSinModCorredor" aria-selected="true">Pólizas sin modificaciones</a></li>
                    <li class="nav-item"><a class="nav-link font-weight-bold" id="polizasConModCorredorTab" data-toggle="tab" href="#polizasConModCorredor" role="tab" aria-controls="polizasConModCorredor" aria-selected="false">Pólizas con modificaciones</a></li>
                    <li class="nav-item"><a class="nav-link font-weight-bold" id="polizaRenovPresencialCorredorTab" data-toggle="tab" href="#polizaRenovPresencialCorredor" role="tab" aria-controls="polizaRenovPresencialCorredor" aria-selected="false">Pólizas con renovación presencial</a></li>
                  </ul>
                  <div class="tab-content" id="bandejaRenovacionesCorredorTabsContent">
                    <div class="tab-pane fade show active" id="polizasSinModCorredor" role="tabpanel" aria-labelledby="polizasSinModCorredor">
                      <div class="table-responsive mb-0 mt-3">
                        <table class="table table-small-font table-sm fold-table" id="polizasSinModCorredorDt" style="width: 100%">
                          <thead>
                            <tr>
                              <th class="font-weight-bold" data-priority="1">N°Póliza - Item</th>
                              <th class="font-weight-bold" data-priority="3">Asegurado</th>
                              <th class="font-weight-bold" data-priority="2">Plan</th>
                              <th class="font-weight-bold" data-priority="3">F. termino</th>
                              <th class="font-weight-bold" data-priority="3">Monto prima</th>
                              <th class="font-weight-bold" data-priority="3">Monto asegurado</th>
                              <th class="font-weight-bold" data-priority="1"> </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Maria Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="polizasConModCorredor" role="tabpanel" aria-labelledby="polizaConModCorredor">
                      <div class="table-responsive mb-0 mt-3">
                        <table class="table table-striped table-small-font table-sm" id="polizasConModCorredorDt" style="width: 100%">
                          <thead>
                            <tr>
                              <th class="font-weight-bold" data-priority="1">N°Póliza - Item</th>
                              <th class="font-weight-bold" data-priority="3">Asegurado</th>
                              <th class="font-weight-bold" data-priority="2">Plan</th>
                              <th class="font-weight-bold" data-priority="3">F. termino</th>
                              <th class="font-weight-bold" data-priority="3">Monto prima</th>
                              <th class="font-weight-bold" data-priority="3">Monto asegurado</th>
                              <th class="font-weight-bold" data-priority="1"> </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Maria Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                              <td> <a class="corredor-ver-mas-btn text-primary underline" href="#">Ver más</a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="polizaRenovPresencialCorredor" role="tabpanel" aria-labelledby="polizaRenovPresencialCorredor">
                      <div class="table-responsive mb-0 mt-3">
                        <table class="table table-striped table-small-font table-sm" id="polizaRenovPresencialCorredorDt" style="width: 100%">
                          <thead>
                            <tr>
                              <th class="font-weight-bold" data-priority="1">N°Póliza - Item</th>
                              <th class="font-weight-bold" data-priority="3">Asegurado</th>
                              <th class="font-weight-bold" data-priority="2">Plan</th>
                              <th class="font-weight-bold" data-priority="3">F. termino</th>
                              <th class="font-weight-bold" data-priority="3">Monto prima</th>
                              <th class="font-weight-bold" data-priority="3">Monto asegurado</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Maria Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                            </tr>
                            <tr class="view">
                              <td>956956 - 1</td>
                              <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                              <td>R127</td>
                              <td>23-02-2019</td>
                              <td>15.55 UF</td>
                              <td>500.00 UF</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-none" id="bandejaRenEditarCliente">
                  <h3 class="subtitle">Cartera de cliente - Editar cliente</h3>
                  <div class="no-border-btns">
                    <button class="bandeja-editar-cliente-regresar-btn btn text-primary d-flex align-items-center"><i class="mdi mdi-chevron-left-circle-outline"></i> <span class="ml-2">Regresar</span></button>
                  </div>
                  <div class="d-flex align-items-center">
                    <h4 class="m-0 header-title--big"><span class="font-weight-bold">María Rosales López</span> <span>16.789.585-6</span></h4>
                    <div class="no-border-btns ml-auto">
                      <button class="btn text-primary border-right" id="bandejaHistorialClienteButton"><i class="renta-icon-history"></i> <span>Historial</span></button>
                      <button class="btn text-primary" id="bandejaCommentClienteButton"><i class="renta-icon-comment"></i> <span>Añadir comentario</span></button>
                    </div>
                  </div>
                  <hr>
                  <div id="bandejaDatosCliente">
                    <h4 class="mt-3 header-title font-weight-bold">Datos personales</h4>
                    <div class="form-row">
                      <div class="col-md-4 col-xl-3 mt-1">
                        <label>RUT</label>
                        <input class="form-control rut-input" type="text">
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-4 col-xl-3 mt-1">
                        <label>Nombre</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="col-md-4 col-xl-3 mt-1">
                        <label>Apellido Paterno</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="col-md-4 col-xl-3 mt-1">
                        <label>Apellido Materno</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-4 col-xl-3 mt-1">
                        <label>Profesión</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="col-md-4 col-xl-3 mt-1">
                        <label>Esado civil</label>
                        <select class="form-control"></select>
                      </div>
                      <div class="col-md-4 col-xl-3 mt-1">
                        <label>Lorem ipsum</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="col-md-4 col-xl-3 mt-1">
                        <label>Lorem ipsum</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <h4 class="mt-3 header-title font-weight-bold">Datos de contacto</h4>
                    <div class="form-row">
                      <div class="col-md-4 col-xl-3 mt-1">
                        <label>Teléfono celular</label>
                        <input class="form-control" type="tel">
                      </div>
                      <div class="col-md-4 col-xl-3 mt-1">
                        <label>Teléfono fijo</label>
                        <input class="form-control" type="tel">
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-4 col-xl-3 mt-1">
                        <label>E-mail</label>
                        <input class="form-control" type="email">
                      </div>
                      <div class="col-md-4 col-xl-3 mt-1">
                        <label>E-mail alternativo</label>
                        <input class="form-control" type="email">
                      </div>
                    </div>
                    <h4 class="mt-3 header-title font-weight-bold">Direcciones</h4>
                    <fieldset class="direccion">
                      <legend class="text-uppercase font-weight-bold">Dirección principal</legend>
                      <div class="form-row">
                        <div class="col-md-4 col-xl-3 mt-1">
                          <label>Región</label>
                          <select class="form-control" type="text"></select>
                        </div>
                        <div class="col-md-4 col-xl-3 mt-1">
                          <label>Comuna</label>
                          <select class="form-control" type="text"></select>
                        </div>
                        <div class="col-md-4 col-xl-3 mt-1">
                          <label>Calle</label>
                          <input class="form-control" type="text">
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="col-md-4 col-xl-3 mt-1">
                          <label>Número</label>
                          <input class="form-control" type="text">
                        </div>
                        <div class="col-md-4 col-xl-3 mt-1">
                          <label>Block/Torre</label>
                          <input class="form-control" type="text">
                        </div>
                        <div class="col-md-4 col-xl-3 mt-1">
                          <label>Depto/Casa</label>
                          <input class="form-control" type="text">
                        </div>
                      </div>
                    </fieldset>
                    <fieldset class="direccion mt-3">
                      <legend class="text-uppercase font-weight-bold">Dirección alternativa</legend>
                      <div class="form-row">
                        <div class="col-md-4 col-xl-3 mt-1">
                          <label>Región</label>
                          <select class="form-control" type="text"></select>
                        </div>
                        <div class="col-md-4 col-xl-3 mt-1">
                          <label>Comuna</label>
                          <select class="form-control" type="text"></select>
                        </div>
                        <div class="col-md-4 col-xl-3 mt-1">
                          <label>Calle</label>
                          <input class="form-control" type="text">
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="col-md-4 col-xl-3 mt-1">
                          <label>Número</label>
                          <input class="form-control" type="text">
                        </div>
                        <div class="col-md-4 col-xl-3 mt-1">
                          <label>Block/Torre</label>
                          <input class="form-control" type="text">
                        </div>
                        <div class="col-md-4 col-xl-3 mt-1">
                          <label>Depto/Casa</label>
                          <input class="form-control" type="text">
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="verGlosaBandEjec" tabindex="-1" role="dialog" aria-labelledby="verGlosaBandEjecLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="subtitle modal-title" id="verGlosaBandEjecLabel">Glosa</h4>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quas animi cupiditate pariatur vitae aliquam fugit odio, suscipit, molestiae magni qui neque corrupti a tempora aperiam expedita perspiciatis veniam. Illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius suscipit expedita recusandae iusto quis asperiores necessitatibus temporibus officiis dicta, perferendis maxime sed explicabo repellat molestiae quos repellendus sapiente quidem nam.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="solicRevisionBandEjec" tabindex="-1" role="dialog" aria-labelledby="solicRevisionBandEjecLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="subtitle modal-title" id="solicRevisionBandEjecLabel">Solicitud de revisión</h4>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body">
                    <div class="form-row">
                      <div class="col-md-6">
                        <div class="custom-control custom-checkbox mb-2">
                          <input class="custom-control-input" type="checkbox" id="descuentoRecargo">
                          <label class="custom-control-label" for="descuentoRecargo">Solcitar descuento recargo</label>
                        </div>
                        <div class="custom-control custom-checkbox mb-2">
                          <input class="custom-control-input" type="checkbox" id="modificacionDeducible">
                          <label class="custom-control-label" for="modificacionDeducible">Solcitar modificación de deducible</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="custom-control custom-checkbox mb-2">
                          <input class="custom-control-input" type="checkbox" id="modificacionCobertura">
                          <label class="custom-control-label" for="modificacionCobertura">Solcitar modificación de cobertura</label>
                        </div>
                        <div class="custom-control custom-checkbox mb-2">
                          <input class="custom-control-input" type="checkbox" id="otro">
                          <label class="custom-control-label" for="otro">Otro</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label>Comentario</label>
                      <textarea class="form-control"></textarea>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button class="btn underline text-primary" data-dismiss="modal">Cancelar</button>
                    <button class="btn btn-primary" data-dismiss="modal">Enviar comentario</button>
                  </div>
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
	//import Topbar from '@/components/Topbar'
	//import SideMenu from '@/components/SideMenu'

    export default {
      name: 'BandejaRenovaciones',
    /*components:{
      Topbar,
      SideMenu
    },*/
      data () {
        return {
        }

       
      },

      methods: {
	  },

	  created () {
	  },
    
    }

</script>