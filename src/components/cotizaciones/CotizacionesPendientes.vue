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
                  <h4 class="page-title">Cotizaciones pendientes</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Gestión</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Informe de propuestas</a></li>
                    <li class="breadcrumb-item active"><span>Cotizaciones pendientes</span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="border p-3 my-3">
                      <h4 class="header-title font-weight-bold">Filtros
                        <div class="form-row">
                          <div class="col-md-3 mt-1">
                            <label>RUT corredor</label>
                            <input class="form-control" type="text" id="rutInput">
                          </div>
                          <div class="col-md-2 mt-1">
                            <label>Desde</label>
                            <input class="form-control" type="date">
                          </div>
                          <div class="col-md-2 mt-1">
                            <label>Hasta</label>
                            <input class="form-control" type="date">
                          </div>
                          <div class="col-md-3 mt-1">
                            <label>Macroplan</label>
                            <input class="form-control" type="text">
                          </div>
                          <div class="col-1 d-flex align-items-end">
                            <button class="btn btn-primary mt-2">Filtrar</button>
                          </div>
                        </div>
                      </h4>
                    </div>
                    <div class="colvis-btns text-right my-2"></div>
                    <div class="table-responsive mb-0">
                      <table class="table table-striped table-small-font table-sm" id="cotizacionesPendientes" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="text-center" data-priority="1">N° de Cotización</th>
                            <th class="text-center" data-priority="2">F. Ingreso</th>
                            <th class="text-center" data-priority="2">Nombre Cliente</th>
                            <th class="text-center" data-priority="1">Macroplan</th>
                            <th class="text-center" data-priority="1">Producto</th>
                            <th class="text-center" data-priority="3">Prima</th>
                            <th class="text-center" data-priority="1">Estado</th>
                            <th class="text-center" data-priority="1">Dias</th>
                            <th class="text-center" data-priority="3">Tipo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center">956956 - 1</td>
                            <td class="text-center">23-02-2019</td>
                            <td class="text-center text-uppercase">Gondonneau Grossetete Gabriell</td>
                            <td class="text-center text-uppercase">Vehículos</td>
                            <td class="text-center">XXXXXXXX</td>
                            <td class="text-center">12UF</td>
                            <td class="text-center">Pendiente</td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">Propuesta</td>
                          </tr>
                          <tr>
                            <td class="text-center">956956 - 1</td>
                            <td class="text-center">23-02-2019</td>
                            <td class="text-center text-uppercase">Gondonneau Grossetete Gabriell</td>
                            <td class="text-center text-uppercase">Vehículos</td>
                            <td class="text-center">XXXXXXXX</td>
                            <td class="text-center">12UF</td>
                            <td class="text-center">Pendiente</td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">Endoso</td>
                          </tr>
                          <tr>
                            <td class="text-center">956956 - 1</td>
                            <td class="text-center">23-02-2019</td>
                            <td class="text-center text-uppercase">Gondonneau Grossetete Gabriell</td>
                            <td class="text-center text-uppercase">Vehículos</td>
                            <td class="text-center">XXXXXXXX</td>
                            <td class="text-center">12UF</td>
                            <td class="text-center">Pendiente</td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">Endoso</td>
                          </tr>
                          <tr>
                            <td class="text-center">956956 - 1</td>
                            <td class="text-center">23-02-2019</td>
                            <td class="text-center text-uppercase">Gondonneau Grossetete Gabriell</td>
                            <td class="text-center text-uppercase">Vehículos</td>
                            <td class="text-center">XXXXXXXX</td>
                            <td class="text-center">12UF</td>
                            <td class="text-center">Pendiente</td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">Propuesta</td>
                          </tr>
                          <tr>
                            <td class="text-center">956956 - 1</td>
                            <td class="text-center">23-02-2019</td>
                            <td class="text-center text-uppercase">Gondonneau Grossetete Gabriell</td>
                            <td class="text-center text-uppercase">Vehículos</td>
                            <td class="text-center">XXXXXXXX</td>
                            <td class="text-center">12UF</td>
                            <td class="text-center">Pendiente</td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">Propuesta</td>
                          </tr>
                          <tr>
                            <td class="text-center">956956 - 1</td>
                            <td class="text-center">23-02-2019</td>
                            <td class="text-center text-uppercase">Gondonneau Grossetete Gabriell</td>
                            <td class="text-center text-uppercase">Vehículos</td>
                            <td class="text-center">XXXXXXXX</td>
                            <td class="text-center">12UF</td>
                            <td class="text-center">Pendiente</td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">Endoso</td>
                          </tr>
                          <tr>
                            <td class="text-center">956956 - 1</td>
                            <td class="text-center">23-02-2019</td>
                            <td class="text-center text-uppercase">Gondonneau Grossetete Gabriell</td>
                            <td class="text-center text-uppercase">Vehículos</td>
                            <td class="text-center">XXXXXXXX</td>
                            <td class="text-center">12UF</td>
                            <td class="text-center">Pendiente</td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">Propuesta</td>
                          </tr>
                          <tr>
                            <td class="text-center">956956 - 1</td>
                            <td class="text-center">23-02-2019</td>
                            <td class="text-center text-uppercase">Gondonneau Grossetete Gabriell</td>
                            <td class="text-center text-uppercase">Vehículos</td>
                            <td class="text-center">XXXXXXXX</td>
                            <td class="text-center">12UF</td>
                            <td class="text-center">Pendiente</td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">Propuesta</td>
                          </tr>
                          <tr>
                            <td class="text-center">956956 - 1</td>
                            <td class="text-center">23-02-2019</td>
                            <td class="text-center text-uppercase">Gondonneau Grossetete Gabriell</td>
                            <td class="text-center text-uppercase">Vehículos</td>
                            <td class="text-center">XXXXXXXX</td>
                            <td class="text-center">12UF</td>
                            <td class="text-center">Pendiente</td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">Propuesta</td>
                          </tr>
                          <tr>
                            <td class="text-center">956956 - 1</td>
                            <td class="text-center">23-02-2019</td>
                            <td class="text-center text-uppercase">Gondonneau Grossetete Gabriell</td>
                            <td class="text-center text-uppercase">Vehículos</td>
                            <td class="text-center">XXXXXXXX</td>
                            <td class="text-center">12UF</td>
                            <td class="text-center">Pendiente</td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">Propuesta</td>
                          </tr>
                          <tr>
                            <td class="text-center">956956 - 1</td>
                            <td class="text-center">23-02-2019</td>
                            <td class="text-center text-uppercase">Gondonneau Grossetete Gabriell</td>
                            <td class="text-center text-uppercase">Vehículos</td>
                            <td class="text-center">XXXXXXXX</td>
                            <td class="text-center">12UF</td>
                            <td class="text-center">Pendiente</td>
                            <td class="text-center">
                              <div class="table-propuestas-days">01</div>
                            </td>
                            <td class="text-center">Propuesta</td>
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