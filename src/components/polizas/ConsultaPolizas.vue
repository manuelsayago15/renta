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
                  <h4 class="page-title">Consulta de pólizas</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Gestión</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Consulta de pólizas</a></li>
                    <li class="breadcrumb-item active"><span></span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="card" id="filtros">
              <div class="card-body">
                <h4 class="mt-0 header-title font-weight-bold d-inline-block pr-2 mr-2 border-right">Filtros </h4>
                <p class="text-primary font-italic d-inline"> Puedes buscar por uno o más de los siguientes campos</p>
                <div class="form-row">
                  <div class="col-lg-6 col-xl-3">
                    <div class="border p-3 my-2 shadow rounded d-flex flex-column justify-content-center">
                      <label for="poliza">Pólizas - Item</label>
                      <div class="form-row">
                        <div class="col-8">
                          <input class="form-control" type="number" id="poliza">
                        </div>
                        <div class="col-1 d-flex align-items-center justify-content-center">
                          <p class="mb-0">- </p>
                        </div>
                        <div class="col-3">
                          <input class="form-control" type="number" id="item">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-xl-3">
                    <div class="border p-3 my-2 shadow rounded d-flex flex-column justify-content-center">
                      <label for="name">Nombre empresa o persona</label>
                      <input class="form-control" type="text" id="name">
                    </div>
                  </div>
                  <div class="col-lg-6 col-xl-3">
                    <div class="border p-3 my-2 shadow rounded d-flex flex-column justify-content-center">
                      <label for="rutInput">RUT</label>
                      <input class="form-control" type="text" id="rutInput">
                    </div>
                  </div>
                  <div class="col-lg-6 col-xl-3">
                    <div class="border p-3 my-2 shadow rounded d-flex flex-column justify-content-center">
                      <label for="patente">Patente</label>
                      <input class="form-control" type="text" id="patente">
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-end mt-3">
                  <button class="btn text-primary underline" id="limpiarBtn">Limpiar</button>
                  <button class="btn btn-primary" id="filtrarBtn">Filtrar</button>
                </div>
              </div>
            </div>
            <div class="card" id="mensajeInicial">
              <div class="card-body">
                <h3 class="my-5 text-center font-weight-bold">No se ha realizado ninguna busqueda aun</h3>
              </div>
            </div>
            <div class="card d-none" id="busquedaNombre">
              <div class="card-body">
                <h3 class="header-title font-weight-bold">Resultados</h3>
                <h4 class="text-muted">"Vanessa"</h4>
                <table class="table table-small-font table-sm" id="consultaPolizaNombreDt" style="width: 100%">
                  <thead>
                    <tr>
                      <th class="font-weight-bold" data-priority="1">Nombre</th>
                      <th class="font-weight-bold" data-priority="2">RUT</th>
                      <th class="font-weight-bold" data-priority="1"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-uppercase">Vanessa Gabriela Frenkel Lopez</td>
                      <td>17.585.695-8</td>
                      <td><a class="text-primary underline ver-detalle-nombre" href="">Ver Detalle</a></td>
                    </tr>
                    <tr>
                      <td class="text-uppercase">Vanessa Camila Gonzales Lopez</td>
                      <td>9.825.687-5</td>
                      <td><a class="text-primary underline ver-detalle-nombre" href="">Ver Detalle</a></td>
                    </tr>
                    <tr>
                      <td class="text-uppercase">Vanessa Javiera Ruiz Perez</td>
                      <td>16.584.588-6</td>
                      <td><a class="text-primary underline ver-detalle-nombre" href="">Ver Detalle</a></td>
                    </tr>
                    <tr>
                      <td class="text-uppercase">Vanessa Catalina Barra Gomez</td>
                      <td>20.568.844-9</td>
                      <td><a class="text-primary underline ver-detalle-nombre" href="">Ver Detalle</a></td>
                    </tr>
                    <tr>
                      <td class="text-uppercase">Vanessa Juana Garrido Balic</td>
                      <td>13.587.952-8</td>
                      <td><a class="text-primary underline ver-detalle-nombre" href="">Ver Detalle</a></td>
                    </tr>
                    <tr>
                      <td class="text-uppercase">Vanessa Sofia Baez Cavada</td>
                      <td>14.589.843-3</td>
                      <td><a class="text-primary underline ver-detalle-nombre" href="">Ver Detalle</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card d-none" id="detalleBusquedaNombre">
              <div class="card-body">
                <h3 class="header-title font-weight-bold">Resultados</h3>
                <h4 class="text-muted"><span>Vanessa Camila Gonzales Lopez</span> - <span>17.585.695-8</span></h4>
                <div class="no-border-btns">
                  <button class="detalle-nombre-regresar-btn btn text-primary d-flex align-items-center"><i class="mdi mdi-chevron-left-circle-outline"></i> <span class="ml-2">Regresar</span></button>
                </div>
                <div class="switch-wrap"><span class="redlabel" id="nombrevigentesLabel">Vigentes</span>
                  <div class="switch-group">
                    <input type="checkbox" id="consultaPolizasNombre" switch="none">
                    <label for="consultaPolizasNombre"></label>
                  </div><span id="nombrenoVigentesLabel">No vigentes</span>
                </div>
                <div id="vigentesTableWrapperNombre">
                  <table class="table table-small-font table-sm" id="consultaPolizaDetalleNombreVigentesDt" style="width: 100%">
                    <thead>
                      <tr>
                        <th class="font-weight-bold" data-priority="1">Nombre</th>
                        <th class="font-weight-bold" data-priority="2">Item</th>
                        <th class="font-weight-bold" data-priority="1">Ramo</th>
                        <th class="font-weight-bold" data-priority="1">Endoso</th>
                        <th class="font-weight-bold" data-priority="1">Fecha inicio</th>
                        <th class="font-weight-bold" data-priority="1">Fecha término</th>
                        <th class="font-weight-bold" data-priority="1">Acumulado</th>
                        <th class="font-weight-bold" data-priority="1">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>12345678</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                      <tr>
                        <td>12345678</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                      <tr>
                        <td>12345678</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="d-none" id="noVigentesTableWrapperNombre">
                  <table class="table table-small-font table-sm" id="consultaPolizaDetalleNombreNoVigentesDt" style="width: 100%">
                    <thead>
                      <tr>
                        <th class="font-weight-bold" data-priority="1">Nombre</th>
                        <th class="font-weight-bold" data-priority="2">Item</th>
                        <th class="font-weight-bold" data-priority="1">Ramo</th>
                        <th class="font-weight-bold" data-priority="1">Endoso</th>
                        <th class="font-weight-bold" data-priority="1">Fecha inicio</th>
                        <th class="font-weight-bold" data-priority="1">Fecha término</th>
                        <th class="font-weight-bold" data-priority="1">Acumulado</th>
                        <th class="font-weight-bold" data-priority="1">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>98765432</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                      <tr>
                        <td>98765432</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                      <tr>
                        <td>98765432</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="card d-none" id="busquedaRut">
              <div class="card-body">
                <h3 class="header-title font-weight-bold">Resultados</h3>
                <h4 class="text-muted"><span>Jessica Camila Neira Leyton</span> - <span>15.898.965-5</span></h4>
                <div class="switch-wrap"><span class="redlabel" id="rutVigentesLabel">Vigentes</span>
                  <div class="switch-group">
                    <input type="checkbox" id="consultaPolizasRut" switch="none">
                    <label for="consultaPolizasRut"></label>
                  </div><span id="rutNoVigentesLabel">No vigentes</span>
                </div>
                <div id="vigentesTableWrapperRut">
                  <table class="table table-small-font table-sm" id="consultaPolizaDetalleRutVigentesDt" style="width: 100%">
                    <thead>
                      <tr>
                        <th class="font-weight-bold" data-priority="1">Nombre</th>
                        <th class="font-weight-bold" data-priority="2">Item</th>
                        <th class="font-weight-bold" data-priority="1">Ramo</th>
                        <th class="font-weight-bold" data-priority="1">Endoso</th>
                        <th class="font-weight-bold" data-priority="1">Fecha inicio</th>
                        <th class="font-weight-bold" data-priority="1">Fecha término</th>
                        <th class="font-weight-bold" data-priority="1">Acumulado</th>
                        <th class="font-weight-bold" data-priority="1">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>12345678</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                      <tr>
                        <td>12345678</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                      <tr>
                        <td>12345678</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="d-none" id="noVigentesTableWrapperRut">
                  <table class="table table-small-font table-sm" id="consultaPolizaDetalleRutNoVigentesDt" style="width: 100%">
                    <thead>
                      <tr>
                        <th class="font-weight-bold" data-priority="1">Nombre</th>
                        <th class="font-weight-bold" data-priority="2">Item</th>
                        <th class="font-weight-bold" data-priority="1">Ramo</th>
                        <th class="font-weight-bold" data-priority="1">Endoso</th>
                        <th class="font-weight-bold" data-priority="1">Fecha inicio</th>
                        <th class="font-weight-bold" data-priority="1">Fecha término</th>
                        <th class="font-weight-bold" data-priority="1">Acumulado</th>
                        <th class="font-weight-bold" data-priority="1">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>98765432</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                      <tr>
                        <td>98765432</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                      <tr>
                        <td>98765432</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="card d-none" id="busquedaPatente">
              <div class="card-body">
                <h3 class="header-title font-weight-bold">Resultados</h3>
                <h4 class="text-muted">"AN-C"</h4>
                <table class="table table-small-font table-sm" id="consultaPolizaPatenteDt" style="width: 100%">
                  <thead>
                    <tr>
                      <th class="font-weight-bold" data-priority="1">Patente</th>
                      <th class="font-weight-bold" data-priority="1"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-uppercase">AN-CK-99</td>
                      <td class="text-right"><a class="text-primary underline ver-detalle-patente" href="">Ver Detalle</a></td>
                    </tr>
                    <tr>
                      <td class="text-uppercase">AN-CD-10</td>
                      <td class="text-right"><a class="text-primary underline ver-detalle-patente" href="">Ver Detalle</a></td>
                    </tr>
                    <tr>
                      <td class="text-uppercase">AN-CJ-95</td>
                      <td class="text-right"><a class="text-primary underline ver-detalle-patente" href="">Ver Detalle</a></td>
                    </tr>
                    <tr>
                      <td class="text-uppercase">AN-CT-80</td>
                      <td class="text-right"><a class="text-primary underline ver-detalle-patente" href="">Ver Detalle</a></td>
                    </tr>
                    <tr>
                      <td class="text-uppercase">AN-CN-94</td>
                      <td class="text-right"><a class="text-primary underline ver-detalle-patente" href="">Ver Detalle</a></td>
                    </tr>
                    <tr>
                      <td class="text-uppercase">AN-CL-22</td>
                      <td class="text-right"><a class="text-primary underline ver-detalle-patente" href="">Ver Detalle</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card d-none" id="detalleBusquedaPatente">
              <div class="card-body">
                <h3 class="header-title font-weight-bold">Resultados</h3>
                <h4 class="text-muted">AN-CD-10</h4>
                <div class="no-border-btns">
                  <button class="detalle-patente-regresar-btn btn text-primary d-flex align-items-center"><i class="mdi mdi-chevron-left-circle-outline"></i> <span class="ml-2">Regresar</span></button>
                </div>
                <div class="switch-wrap"><span class="redlabel" id="patenteVigentesLabel">Vigentes</span>
                  <div class="switch-group">
                    <input type="checkbox" id="consultaPolizasPatente" switch="none">
                    <label for="consultaPolizasPatente"></label>
                  </div><span id="patenteNoVigentesLabel">No vigentes</span>
                </div>
                <div id="vigentesTableWrapperPatente">
                  <table class="table table-small-font table-sm" id="consultaPolizaDetallePatenteVigentesDt" style="width: 100%">
                    <thead>
                      <tr>
                        <th class="font-weight-bold" data-priority="1">Nombre</th>
                        <th class="font-weight-bold" data-priority="2">Item</th>
                        <th class="font-weight-bold" data-priority="1">Ramo</th>
                        <th class="font-weight-bold" data-priority="1">Endoso</th>
                        <th class="font-weight-bold" data-priority="1">Fecha inicio</th>
                        <th class="font-weight-bold" data-priority="1">Fecha término</th>
                        <th class="font-weight-bold" data-priority="1">Acumulado</th>
                        <th class="font-weight-bold" data-priority="1">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>12345678</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                      <tr>
                        <td>12345678</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                      <tr>
                        <td>12345678</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="d-none" id="noVigentesTableWrapperPatente">
                  <table class="table table-small-font table-sm" id="consultaPolizaDetallePatenteNoVigentesDt" style="width: 100%">
                    <thead>
                      <tr>
                        <th class="font-weight-bold" data-priority="1">Nombre</th>
                        <th class="font-weight-bold" data-priority="2">Item</th>
                        <th class="font-weight-bold" data-priority="1">Ramo</th>
                        <th class="font-weight-bold" data-priority="1">Endoso</th>
                        <th class="font-weight-bold" data-priority="1">Fecha inicio</th>
                        <th class="font-weight-bold" data-priority="1">Fecha término</th>
                        <th class="font-weight-bold" data-priority="1">Acumulado</th>
                        <th class="font-weight-bold" data-priority="1">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>98765432</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                      <tr>
                        <td>98765432</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                      <tr>
                        <td>98765432</td>
                        <td>1</td>
                        <td class="text-uppercase">Lorem Ipsum</td>
                        <td>12345678</td>
                        <td>02/12/2020</td>
                        <td>02/12/2021</td>
                        <td>xx</td>
                        <td><a class="text-primary underline ver-poliza" href="">Ver Póliza</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="card d-none" id="busquedaPoliza">
              <div class="card-body">
                <h3 class="header-title font-weight-bold">Resultados</h3>
                <h4 class="text-muted">Póliza <span>864166-1</span>, Endoso <span>1</span></h4>
                <ul class="nav nav-tabs" id="detallePolizaTabs" role="tablist">
                  <li class="nav-item mt-1"><a class="nav-link font-weight-bold active" id="datosTab" data-toggle="tab" href="#datosTabContent" role="tab" aria-controls="datosTabContent" aria-selected="true">Datos pólizas</a></li>
                  <li class="nav-item mt-1"><a class="nav-link font-weight-bold" id="materiaAseguradaTab" data-toggle="tab" href="#materiaAseguradaTabContent" role="tab" aria-controls="materiaAseguradaTabContent" aria-selected="false">Materia Asegurada</a></li>
                  <li class="nav-item mt-1"><a class="nav-link font-weight-bold" id="coberturasTab" data-toggle="tab" href="#coberturasTabContent" role="tab" aria-controls="coberturasTabContent" aria-selected="false">Coberturas y adicionales</a></li>
                  <li class="nav-item mt-1"><a class="nav-link font-weight-bold" id="glosasTab" data-toggle="tab" href="#glosasTabContent" role="tab" aria-controls="glosasTabContent" aria-selected="false">Glosas</a></li>
                  <li class="nav-item mt-1"><a class="nav-link font-weight-bold" id="siniestrosTab" data-toggle="tab" href="#siniestrosTabContent" role="tab" aria-controls="siniestrosTabContent" aria-selected="false">Siniestros</a></li>
                  <li class="nav-item mt-1"><a class="nav-link font-weight-bold" id="cobranzasTab" data-toggle="tab" href="#cobranzasTabContent" role="tab" aria-controls="cobranzasTabContent" aria-selected="false">Cobranzas</a></li>
                  <li class="nav-item mt-1"><a class="nav-link font-weight-bold" id="documentosTab" data-toggle="tab" href="#documentosTabContent" role="tab" aria-controls="documentosTabContent" aria-selected="false">Documentos</a></li>
                </ul>
                <div class="tab-content" id="detallePolizaContent">
                  <div class="tab-pane fade show active" id="datosTabContent" role="tabpanel" aria-labelledby="datosTab">
                    <p class="text-primary font-weight-bold mt-3 mb-0">Datos póliza</p>
                    <div class="border p-3">
                      <div class="row">
                        <div class="col-md-4">
                          <p class="font-weight-bold mb-0">N° de póliza: <span class="font-weight-normal">864166 - 1</span></p>
                          <p class="font-weight-bold mb-0">Endoso: <span class="font-weight-normal">1</span></p>
                        </div>
                        <div class="col-md-4">
                          <p class="font-weight-bold mb-0">Item: <span class="font-weight-normal">1</span></p>
                          <p class="font-weight-bold mb-0">Vigencia: <span class="font-weight-normal">04/08/2017</span> - <span class="font-weight-normal">04/08/2018</span></p>
                        </div>
                        <div class="col-md-4">
                          <p class="font-weight-bold mb-0">Estado: <span class="font-weight-normal">Vigente</span></p>
                          <p class="font-weight-bold mb-0">Proceso: <span class="font-weight-normal">06/04/2019</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="border p-3 mt-2">
                      <p class="font-weight-bold mb-0">Plan: <span class="font-weight-normal">VRP3</span></p>
                      <p class="font-weight-bold mb-0">Propuesta: <span class="font-weight-normal">84751668</span></p>
                      <p class="font-weight-bold mb-0">Convenio: <span class="font-weight-normal">Lorem Ipsum</span></p>
                      <p class="font-weight-bold mb-0">Sucursal/oficina: <span class="font-weight-normal">07-Providencia</span></p>
                      <p class="font-weight-bold mb-0">Moneda: <span class="font-weight-normal">UF</span></p>
                      <p class="font-weight-bold mb-0">Asegurado: <span class="font-weight-normal text-uppercase">Pedro Juan Perez Gonzales</span> - <span class="font-weight-normal">18.999.585-5</span></p>
                      <p class="font-weight-bold mb-0">Contratante: <span class="font-weight-normal text-uppercase">Olga Sofia Sandoval Gonzales</span> - <span class="font-weight-normal">18.999.585-5</span></p>
                      <p class="font-weight-bold mb-0">Beneficiario: <span class="font-weight-normal text-uppercase">Norma Susana sandoval Gonzales</span> - <span class="font-weight-normal">18.999.585-5</span></p>
                      <p class="font-weight-bold mb-0">Comisión: <span class="font-weight-normal">16%</span></p>
                      <p class="font-weight-bold mb-0">Prima neta: <span class="font-weight-normal">15.50</span></p>
                      <p class="font-weight-bold mb-0">Prima bruta: <span class="font-weight-normal">18.43</span></p>
                      <p class="font-weight-bold mb-0">Póliza renovada con: <span class="font-weight-normal">001528577-1</span></p>
                      <p class="font-weight-bold mb-0">Renovó póliza: <span class="font-weight-normal">001528568-8</span></p>
                      <p class="font-weight-bold mb-0">Monto asegurado: <span class="font-weight-normal">U.F.</span> <span class="font-weight-normal">500</span></p>
                      <p class="font-weight-bold mb-0">Envío correspondencia: <span class="font-weight-normal text-uppercase">Av. Berlin Par/26-A Casa-3 Talagante, Peñaflor</span></p>
                      <p class="font-weight-bold mb-0">Teléfono: <span class="font-weight-normal">+56225488482</span></p>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="materiaAseguradaTabContent" role="tabpanel" aria-labelledby="materiaAseguradaTab">
                    <p class="text-primary font-weight-bold mt-3 mb-0">Materia asegurada</p>
                    <div class="border p-3">
                      <div class="row">
                        <div class="col-md-4">
                          <p class="font-weight-bold mb-0">Vehículo: <span class="font-weight-normal">864166 - 1</span></p>
                          <p class="font-weight-bold mb-0">Año: <span class="font-weight-normal">1</span></p>
                          <p class="font-weight-bold mb-0">Patente: <span class="font-weight-normal">AADD55</span></p>
                        </div>
                        <div class="col-md-4">
                          <p class="font-weight-bold mb-0">Marca: <span class="font-weight-normal text-uppercase">Hyunday</span></p>
                          <p class="font-weight-bold mb-0">Motor: <span class="font-weight-normal">D4EFHDYJFF12050</span></p>
                          <p class="font-weight-bold mb-0">Color: <span class="font-weight-normal text-uppercase">Gris</span></p>
                        </div>
                        <div class="col-md-4">
                          <p class="font-weight-bold mb-0">Modelo: <span class="font-weight-normal">Sante fe</span></p>
                          <p class="font-weight-bold mb-0">Chasis: <span class="font-weight-normal">MSKCJNHKLDOPIJKSN453</span></p>
                          <p class="font-weight-bold mb-0">Uso: <span class="font-weight-normal">Particular</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="coberturasTabContent" role="tabpanel" aria-labelledby="coberturasTab">
                    <p class="text-primary font-weight-bold mt-3 mb-0">Coberturas y adicionales</p>
                    <table class="table table-small-font table-sm" id="consultaPolizaCoberturasDt" style="width: 100%">
                      <thead>
                        <tr>
                          <th class="font-weight-bold" data-priority="1">COD</th>
                          <th class="font-weight-bold" data-priority="2">Coberturas</th>
                          <th class="font-weight-bold" data-priority="1">Monto asegurado</th>
                          <th class="font-weight-bold" data-priority="1">IVA</th>
                          <th class="font-weight-bold" data-priority="1">Prima neta</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>21006.-</td>
                          <td class="text-uppercase">POL - 1201300598714 Lorem Ipsum Et Dolor Media Es</td>
                          <td>400.00</td>
                          <td>1.58</td>
                          <td>8,30</td>
                        </tr>
                        <tr>
                          <td>21006.-</td>
                          <td class="text-uppercase">POL - 1201300598714 Lorem Ipsum Et Dolor Media Es</td>
                          <td>400.00</td>
                          <td>1.58</td>
                          <td>8,30</td>
                        </tr>
                        <tr>
                          <td>21006.-</td>
                          <td class="text-uppercase">POL - 1201300598714 Lorem Ipsum Et Dolor Media Es</td>
                          <td>400.00</td>
                          <td>1.58</td>
                          <td>8,30</td>
                        </tr>
                        <tr>
                          <td>21006.-</td>
                          <td class="text-uppercase">POL - 1201300598714 Lorem Ipsum Et Dolor Media Es</td>
                          <td>400.00</td>
                          <td>1.58</td>
                          <td>8,30</td>
                        </tr>
                        <tr>
                          <td>21006.-</td>
                          <td class="text-uppercase">POL - 1201300598714 Lorem Ipsum Et Dolor Media Es</td>
                          <td>400.00</td>
                          <td>1.58</td>
                          <td>8,30</td>
                        </tr>
                        <tr>
                          <td>21006.-</td>
                          <td class="text-uppercase">POL - 1201300598714 Lorem Ipsum Et Dolor Media Es</td>
                          <td>400.00</td>
                          <td>1.58</td>
                          <td>8,30</td>
                        </tr>
                        <tr>
                          <td>21006.-</td>
                          <td class="text-uppercase">POL - 1201300598714 Lorem Ipsum Et Dolor Media Es</td>
                          <td>400.00</td>
                          <td>1.58</td>
                          <td>8,30</td>
                        </tr>
                        <tr>
                          <td>21006.-</td>
                          <td class="text-uppercase">POL - 1201300598714 Lorem Ipsum Et Dolor Media Es</td>
                          <td>400.00</td>
                          <td>1.58</td>
                          <td>8,30</td>
                        </tr>
                        <tr>
                          <td>21006.-</td>
                          <td class="text-uppercase">POL - 1201300598714 Lorem Ipsum Et Dolor Media Es</td>
                          <td>400.00</td>
                          <td>1.58</td>
                          <td>8,30</td>
                        </tr>
                        <tr>
                          <td>21006.-</td>
                          <td class="text-uppercase">POL - 1201300598714 Lorem Ipsum Et Dolor Media Es</td>
                          <td>400.00</td>
                          <td>1.58</td>
                          <td>8,30</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="col-lg-4 col-md-6 offset-lg-8 offset-md-6 mt-2">
                      <div class="border p-3">
                        <div class="d-flex justify-content-md-between flex-wrap justify-content-center">
                          <p class="mb-0 mr-2">Prima Afecta</p>
                          <p class="mb-0">18,90</p>
                        </div>
                        <div class="d-flex justify-content-md-between flex-wrap justify-content-center">
                          <p class="mb-0 mr-2">Prima Exenta</p>
                          <p class="mb-0">0,10</p>
                        </div>
                        <div class="d-flex justify-content-md-between flex-wrap justify-content-center">
                          <p class="mb-0 mr-2">IVA</p>
                          <p class="mb-0">0,10</p>
                        </div>
                        <div class="d-flex justify-content-md-between flex-wrap justify-content-center">
                          <p class="mb-0 mr-2 text-primary font-weight-bold">Prima Bruta</p>
                          <p class="mb-0 text-primary font-weight-bold">22,59</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="glosasTabContent" role="tabpanel" aria-labelledby="glosasTab">
                    <p class="text-primary font-weight-bold mt-3 mb-0">Glosas</p>
                    <div class="row mt-2">
                      <div class="col-md-6">
                        <div class="border rounded p-3">
                          <p class="font-weight-bold">Accesorios partes y piezas</p>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, obcaecati? Aliquid optio laboriosam vero quibusdam? Voluptas esse neque quae, ab nulla, eum praesentium aliquid laudantium deserunt porro culpa expedita quia.</p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="border rounded p-3">
                          <p class="font-weight-bold">Accesorios partes y piezas</p>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, obcaecati? Aliquid optio laboriosam vero quibusdam? Voluptas esse neque quae, ab nulla, eum praesentium aliquid laudantium deserunt porro culpa expedita quia.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="siniestrosTabContent" role="tabpanel" aria-labelledby="siniestrosTab">
                    <p class="text-primary font-weight-bold mt-3 mb-0">Siniestros</p>
                    <div class="border p-3 bg-light my-2">
                      <div class="row">
                        <div class="col-md-6">
                          <p class="mb-0 font-weight-bold">Empresa: <span class="font-weight-normal text-uppercase">Lorem ipsum in media</span></p>
                          <p class="mb-0 font-weight-bold">Asegurado: <span class="font-weight-normal text-uppercase">Hector Lucas Sandoval Gonzales</span> - <span class="font-weight-normal">18.999.585-5</span></p>
                        </div>
                        <div class="col-md-6">
                          <p class="mb-0 font-weight-bold">N° Póliza: <span class="font-weight-normal">864166</span></p>
                          <p class="mb-0 font-weight-bold">N° Item: <span class="font-weight-normal">1</span></p>
                        </div>
                      </div>
                    </div>
                    <table class="table table-small-font table-sm" id="consultaPolizaSiniestrosDt" style="width: 100%">
                      <thead>
                        <tr>
                          <th class="font-weight-bold" data-priority="1">Correlativo</th>
                          <th class="font-weight-bold" data-priority="2">N°Siniestro</th>
                          <th class="font-weight-bold" data-priority="1">F. Siniestro</th>
                          <th class="font-weight-bold" data-priority="1">F. Denuncia</th>
                          <th class="font-weight-bold" data-priority="1">Monto indemnizado ($)</th>
                          <th class="font-weight-bold" data-priority="1">N°Liquidación</th>
                          <th class="font-weight-bold" data-priority="1">Detalles</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td>889951586</td>
                          <td>10/10/2020</td>
                          <td>11/10/2020</td>
                          <td>$600.000</td>
                          <td>980865-1</td>
                          <td><a class="liquidacion-siniestro-btn" href="#"><img class="mr-2" src="assets/images/_L.svg" alt=""/></a><a class="denuncio-siniestro-btn" href="#"><img src="assets/images/_D.svg" alt=""/></a></td>
                        </tr>
                        <tr>
                          <td>01</td>
                          <td>889951586</td>
                          <td>10/10/2020</td>
                          <td>11/10/2020</td>
                          <td>$600.000</td>
                          <td>980865-1</td>
                          <td><a class="liquidacion-siniestro-btn" href="#"><img class="mr-2" src="assets/images/_L.svg" alt=""/></a><a class="denuncio-siniestro-btn" href="#"><img src="assets/images/_D.svg" alt=""/></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="cobranzasTabContent" role="tabpanel" aria-labelledby="cobranzasTab">
                    <p class="text-primary font-weight-bold mt-3 mb-0">Cobranzas</p>
                    <div class="border my-2 p-3">
                      <p class="font-weight-bold mb-0">Datos Póliza</p>
                      <div class="row">
                        <div class="col-md-6">
                          <p class="font-weight-bold mb-0">Pagador: <span class="text-uppercase font-weight-normal">Hector Sandoval Gonzales</span></p>
                          <p class="font-weight-bold mb-0">Deuda: <span class="font-weight-normal">01 - 0009732022 - 0001</span></p>
                          <p class="font-weight-bold mb-0">Teléfono: <span class="font-weight-normal">56995867569</span></p>
                          <p class="font-weight-bold mb-0">Forma de pago: <span class="font-weight-normal">Credito cuotas</span></p>
                          <p class="font-weight-bold mb-0">Vía de pago: <span class="font-weight-normal">Internet</span></p>
                          <p class="font-weight-bold mb-0">Intermediario: <span class="text-uppercase font-weight-normal">9.007-7 y empleados directo EE RR</span></p>
                        </div>
                        <div class="col-md-6">
                          <p class="font-weight-bold mb-0">Dirección: <span class="text-uppercase font-weight-normal">Amunategui 178</span></p>
                          <p class="font-weight-bold mb-0">Convenio: <span class="font-weight-normal">18.825.857-6</span></p>
                          <p class="font-weight-bold mb-0">Neto pag.: <span class="font-weight-normal">14,22</span></p>
                          <p class="font-weight-bold mb-0">Plan: <span class="text-uppercase font-weight-normal">Vehic. Motorizados Plan Básico</span></p>
                          <p class="font-weight-bold mb-0">Factura: <span class="text-uppercase font-weight-normal">No factura</span></p>
                          <p class="font-weight-bold mb-0">Moneda: <span class="text-uppercase font-weight-normal">CLP</span></p>
                        </div>
                      </div>
                    </div>
                    <p class="font-weight-bold mt-3 mb-2">Plan de pago
                      <table class="table table-small-font table-sm" id="consultaPolizaCobranzasDt" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">N° Cuota</th>
                            <th class="font-weight-bold" data-priority="2">N° de factura</th>
                            <th class="font-weight-bold" data-priority="1">Fecha Vecto.</th>
                            <th class="font-weight-bold" data-priority="1">Valor cuota (UF)</th>
                            <th class="font-weight-bold" data-priority="1">Fecha Pago</th>
                            <th class="font-weight-bold" data-priority="1">Valor pago</th>
                            <th class="font-weight-bold" data-priority="1">Valor pago (CLP)</th>
                            <th class="font-weight-bold" data-priority="1">Saldo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center">01</td>
                            <td class="text-center"><a class="text-primary underline" href="#">1234567898</a></td>
                            <td class="text-center">10/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">05/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">$250.000</td>
                            <td class="text-center">0.3 UF</td>
                          </tr>
                          <tr>
                            <td class="text-center">01</td>
                            <td class="text-center"><a class="text-primary underline" href="#">1234567898</a></td>
                            <td class="text-center">10/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">05/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">$250.000</td>
                            <td class="text-center">0.3 UF</td>
                          </tr>
                          <tr>
                            <td class="text-center">01</td>
                            <td class="text-center"><a class="text-primary underline" href="#">1234567898</a></td>
                            <td class="text-center">10/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">05/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">$250.000</td>
                            <td class="text-center">0.3 UF</td>
                          </tr>
                          <tr>
                            <td class="text-center">01</td>
                            <td class="text-center"><a class="text-primary underline" href="#">1234567898</a></td>
                            <td class="text-center">10/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">05/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">$250.000</td>
                            <td class="text-center">0.3 UF</td>
                          </tr>
                          <tr>
                            <td class="text-center">01</td>
                            <td class="text-center"><a class="text-primary underline" href="#">1234567898</a></td>
                            <td class="text-center">10/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">05/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">$250.000</td>
                            <td class="text-center">0.3 UF</td>
                          </tr>
                          <tr>
                            <td class="text-center">01</td>
                            <td class="text-center"><a class="text-primary underline" href="#">1234567898</a></td>
                            <td class="text-center">10/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">05/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">$250.000</td>
                            <td class="text-center">0.3 UF</td>
                          </tr>
                          <tr>
                            <td class="text-center">01</td>
                            <td class="text-center"><a class="text-primary underline" href="#">1234567898</a></td>
                            <td class="text-center">10/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">05/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">$250.000</td>
                            <td class="text-center">0.3 UF</td>
                          </tr>
                          <tr>
                            <td class="text-center">01</td>
                            <td class="text-center"><a class="text-primary underline" href="#">1234567898</a></td>
                            <td class="text-center">10/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">05/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">$250.000</td>
                            <td class="text-center">0.3 UF</td>
                          </tr>
                          <tr>
                            <td class="text-center">01</td>
                            <td class="text-center"><a class="text-primary underline" href="#">1234567898</a></td>
                            <td class="text-center">10/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">05/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">$250.000</td>
                            <td class="text-center">0.3 UF</td>
                          </tr>
                          <tr>
                            <td class="text-center">01</td>
                            <td class="text-center"><a class="text-primary underline" href="#">1234567898</a></td>
                            <td class="text-center">10/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">05/05/2020</td>
                            <td class="text-center">3 UF</td>
                            <td class="text-center">$250.000</td>
                            <td class="text-center">0.3 UF</td>
                          </tr>
                        </tbody>
                      </table>
                    </p>
                  </div>
                  <div class="tab-pane fade" id="documentosTabContent" role="tabpanel" aria-labelledby="documentosTab">
                    <p class="text-primary font-weight-bold mt-3 mb-2">Documentos</p>
                    <div class="d-flex justify-content-start">
                      <button class="d-flex align-items-center btn btn-primary font-weight-bold mr-2"><i class="renta-icon-pdf font-24 mr-2"></i>Póliza</button>
                      <button class="d-flex align-items-center btn btn-light"><i class="renta-icon-pdf font-24 mr-2"></i>Cotización</button>
                    </div>
                    <p class="font-weight-bold mt-3 mb-2">Endosos</p>
                    <ul class="list-unstyled">
                      <li><a class="text-primary underline" href="#">Endoso 1254963</a></li>
                      <li><a class="text-primary underline" href="#">Endoso 1254963</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card d-none" id="denuncioSiniestro">
              <div class="card-body">
                <div class="no-border-btns">
                  <button class="denuncia-siniestro-regresar-btn btn text-primary d-flex align-items-center"><i class="mdi mdi-chevron-left-circle-outline"></i> <span class="ml-2">Regresar</span></button>
                </div>
                <h4 class="mt-0 header-title font-weight-bold">Denuncio de siniestro </h4>
                <div class="border my-2 p-3">
                  <p class="text-primary font-weight-bold">Información seguro</p>
                  <div class="row">
                    <div class="col-md-6">
                      <p class="font-weight-bold mb-0">Empresa: <span class="font-weight-normal">ViewSonic, tecnología e insumos</span></p>
                      <p class="font-weight-bold mb-0">Siniestro: <span class="font-weight-normal">Lorem ipsum</span></p>
                      <p class="font-weight-bold mb-0">Compañía: <span class="font-weight-normal">Lorem ipsum in media et</span></p>
                      <p class="font-weight-bold mb-0">Vigencia de póliza: <span class="font-weight-normal">12/05/2020</span></p>
                      <p class="font-weight-bold mb-0">Fecha de denuncia: <span class="font-weight-normal">03/02/2020</span></p>
                    </div>
                    <div class="col-md-6">
                      <p class="font-weight-bold mb-0">Nombre asegurado: <span class="text-uppercase font-weight-normal">Hector Sandoval Gonzales</span></p>
                      <p class="font-weight-bold mb-0">RUT asegurado: <span class="font-weight-normal">18.827.857-6</span></p>
                      <p class="font-weight-bold mb-0">Nombre liquidador: <span class="text-uppercase font-weight-normal">Pablo Perez Gonzales</span></p>
                      <p class="font-weight-bold mb-0">RUT liquidador: <span class="font-weight-normal">6.985.854-6</span></p>
                    </div>
                  </div>
                </div>
                <div class="border my-2 p-3">
                  <p class="text-primary font-weight-bold">Información siniestro</p>
                  <div class="row">
                    <div class="col-md-6">
                      <p class="font-weight-bold mb-0">Fecha de siniestro: <span class="font-weight-normal">02/02/2020</span></p>
                      <p class="font-weight-bold mb-0">Hora: <span class="font-weight-normal">20:30 hrs</span></p>
                      <p class="font-weight-bold mb-0">Lugar: <span class="font-weight-normal text-uppercase">Eliodoro Yañez, 1163</span></p>
                      <p class="font-weight-bold mb-0">Ciudad: <span class="font-weight-normal text-uppercase">Santiago</span></p>
                      <p class="font-weight-bold mb-0">Testigo: <span class="font-weight-normal text-uppercase">Camila Lopez Garrido</span></p>
                      <p class="font-weight-bold mb-0">Tipo de siniestro: <span class="font-weight-normal text-uppercase">Lorem ipsum</span></p>
                      <p class="font-weight-bold mb-0">Nombre de conductor: <span class="font-weight-normal text-uppercase">Lorena Perez Gutierrez</span></p>
                      <p class="font-weight-bold mb-0">RUT Conductor: <span class="font-weight-normal">19.685.699-6</span></p>
                    </div>
                    <div class="col-md-6">
                      <p class="font-weight-bold mb-2">Declaración:</p>
                      <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, qui dolore nihil minus laboriosam similique dolorem tenetur dolores animi mollitia ab earum exercitationem atque inventore quis error numquam quisquam tempora.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card d-none" id="liquidacionSiniestro">
              <div class="card-body">
                <div class="no-border-btns">
                  <button class="liquidacion-siniestro-regresar-btn btn text-primary d-flex align-items-center"><i class="mdi mdi-chevron-left-circle-outline"></i> <span class="ml-2">Regresar</span></button>
                </div>
                <h4 class="mt-0 header-title font-weight-bold">Liquidación de siniestro </h4>
                <div class="border p-3 bg-light my-2">
                  <div class="row">
                    <div class="col-md-6">
                      <p class="mb-0 font-weight-bold">Póliza: <span class="font-weight-normal text-uppercase">1234568-1</span></p>
                      <p class="mb-0 font-weight-bold">Número siniestro: <span class="font-weight-normal text-uppercase">123456789</span></p>
                    </div>
                    <div class="col-md-6">
                      <p class="mb-0 font-weight-bold">Liquidación: <span class="font-weight-normal">302831-1</span></p>
                      <p class="mb-0 font-weight-bold">Fecha de liquidación: <span class="font-weight-normal">20/08/2020</span></p>
                    </div>
                  </div>
                </div>
                <div class="liquidacionSiniestrosColvisBtns text-right table-dropdown-scrollable table-dropdown-scrollable--sm"></div>
                <table class="table table-small-font table-sm" id="consultaPolizaLiquidacionSiniestrosDt" style="width: 100%">
                  <thead>
                    <tr>
                      <th class="font-weight-bold" data-priority="1">N° Correlativo</th>
                      <th class="font-weight-bold" data-priority="2">Prestador</th>
                      <th class="font-weight-bold" data-priority="2">N° Siniestro/Liquidación</th>
                      <th class="font-weight-bold" data-priority="1">F. Liquidación</th>
                      <th class="font-weight-bold" data-priority="3">M</th>
                      <th class="font-weight-bold" data-priority="1">F. Proceso</th>
                      <th class="font-weight-bold" data-priority="1">Total</th>
                      <th class="font-weight-bold" data-priority="3">Res</th>
                      <th class="font-weight-bold" data-priority="2">Moneda</th>
                      <th class="font-weight-bold" data-priority="3">Pes</th>
                      <th class="font-weight-bold" data-priority="3">Cof-2</th>
                      <th class="font-weight-bold" data-priority="3">DT</th>
                      <th class="font-weight-bold" data-priority="3">Tipo de documento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>22.772.836-7</td>
                      <td>23-02-2019</td>
                      <td>xxxxx</td>
                      <td>23/02/2020</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                    </tr>
                    <tr>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>22.772.836-7</td>
                      <td>23-02-2019</td>
                      <td>xxxxx</td>
                      <td>23/02/2020</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
	</div>
</template>