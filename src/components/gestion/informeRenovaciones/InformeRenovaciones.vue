<template>
	<div id="wrapper">
		<Topbar></Topbar>
    <SideMenu></SideMenu>	
     <div :class="$store.state.val">
        <div class="content">
          <div class="container-fluid">
            <div class="page-title-box">
              <div class="row align-items-center">
                <div class="col-sm-6">
                  <h4 class="page-title">Informe de pólizas</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Gestión</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Informe de pólizas</a></li>
                    <li class="breadcrumb-item active"><span></span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="mt-0 header-title--big font-weight-bold">Informe de pólizas por renovar</h4>
                <ul class="nav nav-pills nav-pills--border" id="polizasRenovacionTabs">
                  <li class="nav-item"><a class="nav-link active" id="polizasPorRenovarTab" data-toggle="tab" href="#polizasPorRenovar" role="tab" aria-controls="polizasPorRenovar" aria-selected="true">Pólizas por renovar</a></li>
                  <li class="nav-item"><a class="nav-link" id="polizasRenovadasTab" data-toggle="tab" href="#polizasRenovadas" role="tab" aria-controls="polizasRenovadas" aria-selected="true">Pólizas renovadas</a></li>
                  <li class="nav-item"><a class="nav-link" id="polizasNoRenovadasTab" data-toggle="tab" href="#polizasNoRenovadas" role="tab" aria-controls="polizasNoRenovadas" aria-selected="true">Pólizas no renovadas</a></li>
                </ul>
                <div class="border p-3 my-3">
                  <h4 class="header-title font-weight-bold">Filtros
                    <div class="form-row">
                      <div class="col-md-5 col-lg-4 col-xl-3 mt-1">
                        <label>Mes</label>
                        <select class="form-control"></select>
                      </div>
                      <div class="col-md-5 col-lg-4 col-xl-3 mt-1">
                        <label>Año</label>
                        <select class="form-control"></select>
                      </div>
                      <div class="col-1 d-flex align-items-end">
                        <button class="btn btn-primary mt-2">Filtrar</button>
                      </div>
                    </div>
                  </h4>
                </div>
                <div class="tab-content" id="polizasRenovacionTabsContent">
                  <div class="tab-pane fade show active" id="polizasPorRenovar" role="tabpanel" aria-labelledby="polizasPorRenovarTab">
                    <div class="d-md-flex justify-content-between table-dropdown-scrollable">
                      <div class="alert alert--mr alert-success flex-grow-1 mb-0">Pólizas actualizadas al día <span class="font-weight-bold">18 de Febrero 2020</span></div>
                      <div class="colvisBtns colvisBtns-polizas-por-renovar"></div>
                    </div>
                    <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                      <table class="table table-striped table-small-font table-sm" id="informePolizasPorRenovar" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">N° Póliza - Item</th>
                            <th class="font-weight-bold" data-priority="1">RUT</th>
                            <th class="font-weight-bold" data-priority="2">Asegurado</th>
                            <th class="font-weight-bold" data-priority="1">Cliente</th>
                            <th class="font-weight-bold" data-priority="3">Plan</th>
                            <th class="font-weight-bold" data-priority="3">Vig.Ini</th>
                            <th class="font-weight-bold" data-priority="3">Vig.Ter</th>
                            <th class="font-weight-bold" data-priority="3">Mon</th>
                            <th class="font-weight-bold" data-priority="3">M. Aseg</th>
                            <th class="font-weight-bold" data-priority="4">Prima Neta</th>
                            <th class="font-weight-bold" data-priority="4">Stros.Liq</th>
                            <th class="font-weight-bold" data-priority="4">Costo Liq</th>
                            <th class="font-weight-bold" data-priority="4">Stros.Res</th>
                            <th class="font-weight-bold" data-priority="4">Costo Res</th>
                            <th class="font-weight-bold" data-priority="4">Docum</th>
                            <th class="font-weight-bold" data-priority="4">Conv</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="polizasRenovadas" role="tabpanel" aria-labelledby="polizasRenovadasTab">
                    <div class="d-md-flex justify-content-between">
                      <div class="alert alert--mr alert-success flex-grow-1 mb-0">Pólizas actualizadas al día <span class="font-weight-bold">18 de Febrero 2020</span></div>
                      <div class="colvisBtns colvisBtns-polizas-renovadas"></div>
                    </div>
                    <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                      <table class="table table-striped table-small-font table-sm" id="informePolizasRenovadas" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">N° Póliza - Item</th>
                            <th class="font-weight-bold" data-priority="1">RUT</th>
                            <th class="font-weight-bold" data-priority="2">Asegurado</th>
                            <th class="font-weight-bold" data-priority="1">Cliente</th>
                            <th class="font-weight-bold" data-priority="3">Plan</th>
                            <th class="font-weight-bold" data-priority="3">Vig.Ini</th>
                            <th class="font-weight-bold" data-priority="3">Vig.Ter</th>
                            <th class="font-weight-bold" data-priority="3">Mon</th>
                            <th class="font-weight-bold" data-priority="3">M. Aseg</th>
                            <th class="font-weight-bold" data-priority="4">Prima Neta</th>
                            <th class="font-weight-bold" data-priority="4">Stros.Liq</th>
                            <th class="font-weight-bold" data-priority="4">Costo Liq</th>
                            <th class="font-weight-bold" data-priority="4">Stros.Res</th>
                            <th class="font-weight-bold" data-priority="4">Costo Res</th>
                            <th class="font-weight-bold" data-priority="4">Docum</th>
                            <th class="font-weight-bold" data-priority="4">Conv</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="polizasNoRenovadas" role="tabpanel" aria-labelledby="polizasNoRenovadasTab">
                    <div class="d-md-flex justify-content-between">
                      <div class="alert alert--mr alert-success flex-grow-1 mb-0">Pólizas actualizadas al día <span class="font-weight-bold">18 de Febrero 2020</span></div>
                      <div class="colvisBtns colvisBtns-polizas-no-renovadas"></div>
                    </div>
                    <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                      <table class="table table-striped table-small-font table-sm" id="informePolizasNoRenovadas" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">N° Póliza - Item</th>
                            <th class="font-weight-bold" data-priority="1">RUT</th>
                            <th class="font-weight-bold" data-priority="2">Asegurado</th>
                            <th class="font-weight-bold" data-priority="1">Cliente</th>
                            <th class="font-weight-bold" data-priority="3">Plan</th>
                            <th class="font-weight-bold" data-priority="3">Vig.Ini</th>
                            <th class="font-weight-bold" data-priority="3">Vig.Ter</th>
                            <th class="font-weight-bold" data-priority="3">Mon</th>
                            <th class="font-weight-bold" data-priority="3">M. Aseg</th>
                            <th class="font-weight-bold" data-priority="4">Prima Neta</th>
                            <th class="font-weight-bold" data-priority="4">Stros.Liq</th>
                            <th class="font-weight-bold" data-priority="4">Costo Liq</th>
                            <th class="font-weight-bold" data-priority="4">Stros.Res</th>
                            <th class="font-weight-bold" data-priority="4">Costo Res</th>
                            <th class="font-weight-bold" data-priority="4">Docum</th>
                            <th class="font-weight-bold" data-priority="4">Conv</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>22.722.836-7</td>
                            <td class="text-uppercase">Gondonneau Grossetete Gabriel</td>
                            <td>R127</td>
                            <td>23-02-2019</td>
                            <td>23-02-2020</td>
                            <td>U.F</td>
                            <td>3400</td>
                            <td>2.79</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
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

<script>
  	import Vue from 'vue'
	import axios from 'axios'
	import VueAxios from 'vue-axios'
	Vue.use(VueAxios, axios)
	//import Topbar from '@/components/Topbar'
	//import SideMenu from '@/components/SideMenu'

    export default {
      name: 'InformeRenovaciones',
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