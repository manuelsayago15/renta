<template>
	<div id="wrapper">
		<Topbar></Topbar>
    <!--<SideMenu></SideMenu>	-->
    <div :class="$store.state.val">
        <div class="content">
          <div class="container-fluid">
            <div class="page-title-box">
              <div class="row align-items-center">
                <div class="col-sm-6">
                  <h4 class="page-title">Reporte de renovación de pólizas</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Producción</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Renovación de pólizas</a></li>
                    <li class="breadcrumb-item active"><span>Reporte de renovación de pólizas</span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <ul class="nav nav-tabs" id="reporteRenovacionPolizasTabs" role="tablist">
                  <li class="nav-item"><a class="nav-link active font-weight-bold" id="renovadasSinModificacionTab" data-toggle="tab" href="#renovadasSinModificacion" role="tab" aria-controls="renovadasSinModificacion" aria-selected="true">Renovadas sin modificación</a></li>
                  <li class="nav-item"><a class="nav-link font-weight-bold" id="renovadasConModificacionTab" data-toggle="tab" href="#renovadasConModificacion" role="tab" aria-controls="renovadasConModificacion" aria-selected="false">Renovadas con modificación</a></li>
                  <li class="nav-item"><a class="nav-link font-weight-bold" id="polizasVencidasTab" data-toggle="tab" href="#polizasVencidas" role="tab" aria-controls="polizasVencidas" aria-selected="false">Pólizas vencidas</a></li>
                  <li class="nav-item"><a class="nav-link font-weight-bold" id="noRenovadasTab" data-toggle="tab" href="#noRenovadas" role="tab" aria-controls="noRenovadas" aria-selected="false">No renovadas por la compañía</a></li>
                </ul>
                <div class="tab-content" id="reporteRenovacionPolizasTabsContent">
                  <div class="tab-pane fade show active" id="renovadasSinModificacion" role="tabpanel" aria-labelledby="renovadasSinModificacion">
                    <div class="table-responsive mb-0 mt-4">
                      <table class="table table-striped table-small-font table-sm" id="polizasRenovadasSinModificacionDt" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">N°Póliza - Item</th>
                            <th class="font-weight-bold" data-priority="2">Asegurado</th>
                            <th class="font-weight-bold" data-priority="3">Plan</th>
                            <th class="font-weight-bold" data-priority="2">F. término</th>
                            <th class="font-weight-bold" data-priority="3">RUT Cont.</th>
                            <th class="font-weight-bold" data-priority="2">Nombre cont.</th>
                            <th class="font-weight-bold" data-priority="4">F. venc.</th>
                            <th class="font-weight-bold" data-priority="4">M. aseg.</th>
                            <th class="font-weight-bold" data-priority="4">M. prima.</th>
                            <th class="font-weight-bold" data-priority="4">Nueva poliza</th>
                            <th class="font-weight-bold" data-priority="4"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="renovadasConModificacion" role="tabpanel" aria-labelledby="renovadasConModificacion">
                    <div class="table-responsive mb-0 mt-4">
                      <table class="table table-striped table-small-font table-sm" id="polizasRenovadasConModificacionDt" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">N°Póliza - Item</th>
                            <th class="font-weight-bold" data-priority="2">Asegurado</th>
                            <th class="font-weight-bold" data-priority="3">Plan</th>
                            <th class="font-weight-bold" data-priority="2">F. término</th>
                            <th class="font-weight-bold" data-priority="3">RUT Cont.</th>
                            <th class="font-weight-bold" data-priority="2">Nombre cont.</th>
                            <th class="font-weight-bold" data-priority="4">F. venc.</th>
                            <th class="font-weight-bold" data-priority="4">M. aseg.</th>
                            <th class="font-weight-bold" data-priority="4">M. prima.</th>
                            <th class="font-weight-bold" data-priority="4">Nueva poliza</th>
                            <th class="font-weight-bold" data-priority="4"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="polizasVencidas" role="tabpanel" aria-labelledby="polizasVencidas">
                    <div class="table-responsive mb-0 mt-4">
                      <table class="table table-striped table-small-font table-sm" id="reportePolizasVencidasDt" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">N°Póliza - Item</th>
                            <th class="font-weight-bold" data-priority="2">Asegurado</th>
                            <th class="font-weight-bold" data-priority="3">Plan</th>
                            <th class="font-weight-bold" data-priority="2">F. término</th>
                            <th class="font-weight-bold" data-priority="3">RUT Cont.</th>
                            <th class="font-weight-bold" data-priority="2">Nombre cont.</th>
                            <th class="font-weight-bold" data-priority="4">F. venc.</th>
                            <th class="font-weight-bold" data-priority="4">M. aseg.</th>
                            <th class="font-weight-bold" data-priority="4">M. prima.</th>
                            <th class="font-weight-bold" data-priority="4">Nueva poliza</th>
                            <th class="font-weight-bold" data-priority="4"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="noRenovadas" role="tabpanel" aria-labelledby="noRenovadas">
                    <div class="table-responsive mb-0 mt-4">
                      <table class="table table-striped table-small-font table-sm" id="polizasNoRenovadasPorEmpresaDt" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">N°Póliza - Item</th>
                            <th class="font-weight-bold" data-priority="2">Asegurado</th>
                            <th class="font-weight-bold" data-priority="3">Plan</th>
                            <th class="font-weight-bold" data-priority="2">F. término</th>
                            <th class="font-weight-bold" data-priority="3">RUT Cont.</th>
                            <th class="font-weight-bold" data-priority="2">Nombre cont.</th>
                            <th class="font-weight-bold" data-priority="4">F. venc.</th>
                            <th class="font-weight-bold" data-priority="4">M. aseg.</th>
                            <th class="font-weight-bold" data-priority="4">M. prima.</th>
                            <th class="font-weight-bold" data-priority="4">Nueva poliza</th>
                            <th class="font-weight-bold" data-priority="4"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
                          </tr>
                          <tr>
                            <td>956956-1</td>
                            <td>Maria Benavides Ordonez</td>
                            <td class="text-uppercase">R127</td>
                            <td>23-02-2020</td>
                            <td>22.772.836-7</td>
                            <td>Maria Benavides Ordonez</td>
                            <td>23-02-2020</td>
                            <td>UF 3400</td>
                            <td>2.79 UF</td>
                            <td>4234568-1</td>
                            <td><a href="#"><i class="renta-icon-download text-primary font-24"></i></a></td>
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
      name: 'PolizasVencidasReporte',
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