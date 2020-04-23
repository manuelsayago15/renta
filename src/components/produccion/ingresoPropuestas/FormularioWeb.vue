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
	                  <h4 class="page-title">Formulario web</h4>
	                  <ol class="breadcrumb">
	                    <li class="breadcrumb-item"><a href="javascript:void(0);">Producción</a></li>
	                    <li class="breadcrumb-item"><a href="javascript:void(0);">Ingreso propuesta</a></li>
	                    <li class="breadcrumb-item active"><span>Formulario web</span></li>
	                  </ol>
	                </div>
	              </div>
	            </div>
	            <div id="nuevoFormularioSection">
	              <div class="card">
	                <div class="card-body text-center">
	                  <h4 class="font-weight-bold mt-5 mb-3">Inicia un nuevo formulario</h4>
	                  <button class="btn btn-primary btn-lg mb-5" id="nuevoFormularioBtn">Nuevo Formulario  </button>
	                </div>
	              </div>
	              <div class="card">
	                <div class="card-body">
	                  <h4 class="header-title--big font-weight-bold">Formularios pendientes</h4>
	                  <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
	                    <table class="table table-striped table-small-font table-sm" id="formulariosPendientesDt" style="width: 100%">
	                      <thead>
	                        <tr>
	                          <th class="font-weight-bold" data-priority="1">RUT o nombre</th>
	                          <th class="font-weight-bold" data-priority="3">Editar</th>
	                          <th class="font-weight-bold" data-priority="2">Eliminar</th>
	                        </tr>
	                      </thead>
	                      <tbody>
	                        <tr>
	                          <td><a class="underline" href="">Valentina Lopez Faura</a></td>
	                          <td><a href=""><i class="renta-icon-edit text-primary"></i></a></td>
	                          <td><a href=""><i class="renta-icon-trash text-primary"></i></a></td>
	                        </tr>
	                        <tr>
	                          <td><a class="underline" href="">Valentina Lopez Faura</a></td>
	                          <td><a href=""><i class="renta-icon-edit text-primary"></i></a></td>
	                          <td><a href=""><i class="renta-icon-trash text-primary"></i></a></td>
	                        </tr>
	                        <tr>
	                          <td><a class="underline" href="">Valentina Lopez Faura</a></td>
	                          <td><a href=""><i class="renta-icon-edit text-primary"></i></a></td>
	                          <td><a href=""><i class="renta-icon-trash text-primary"></i></a></td>
	                        </tr>
	                        <tr>
	                          <td><a class="underline" href="">Valentina Lopez Faura</a></td>
	                          <td><a href=""><i class="renta-icon-edit text-primary"></i></a></td>
	                          <td><a href=""><i class="renta-icon-trash text-primary"></i></a></td>
	                        </tr>
	                        <tr>
	                          <td><a class="underline" href="">Valentina Lopez Faura</a></td>
	                          <td><a href=""><i class="renta-icon-edit text-primary"></i></a></td>
	                          <td><a href=""><i class="renta-icon-trash text-primary"></i></a></td>
	                        </tr>
	                        <tr>
	                          <td><a class="underline" href="">Valentina Lopez Faura</a></td>
	                          <td><a href=""><i class="renta-icon-edit text-primary"></i></a></td>
	                          <td><a href=""><i class="renta-icon-trash text-primary"></i></a></td>
	                        </tr>
	                        <tr>
	                          <td><a class="underline" href="">Valentina Lopez Faura</a></td>
	                          <td><a href=""><i class="renta-icon-edit text-primary"></i></a></td>
	                          <td><a href=""><i class="renta-icon-trash text-primary"></i></a></td>
	                        </tr>
	                        <tr>
	                          <td><a class="underline" href="">Valentina Lopez Faura</a></td>
	                          <td><a href=""><i class="renta-icon-edit text-primary"></i></a></td>
	                          <td><a href=""><i class="renta-icon-trash text-primary"></i></a></td>
	                        </tr>
	                        <tr>
	                          <td><a class="underline" href="">Valentina Lopez Faura</a></td>
	                          <td><a href=""><i class="renta-icon-edit text-primary"></i></a></td>
	                          <td><a href=""><i class="renta-icon-trash text-primary"></i></a></td>
	                        </tr>
	                        <tr>
	                          <td><a class="underline" href="">Valentina Lopez Faura</a></td>
	                          <td><a href=""><i class="renta-icon-edit text-primary"></i></a></td>
	                          <td><a href=""><i class="renta-icon-trash text-primary"></i></a></td>
	                        </tr>
	                      </tbody>
	                    </table>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div class="d-none" id="formularioPaso1">
	              <div class="card">
	                <div class="card-body">
	                  <div class="d-flex flex-wrap"><span class="mr-3 mt-2 font-16 formulario-step formulario-step--active">1</span><span class="mr-3 mt-2 font-16 formulario-step">2</span><span class="mr-3 mt-2 font-16 formulario-step">3</span><span class="mr-3 mt-2 font-16 formulario-step">4</span><span class="mr-3 mt-2 font-16 formulario-step">5</span>
	                  </div>
	                  <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Datos Contratante</h4>
	                  <div class="form-row">
	                    <div class="col-md-6 col-lg-3 mt-2">
	                      <label>RUT</label>
	                      <input class="form-control rutInput" type="text" name="rut-contratante">
	                    </div>
	                    <div class="col-md-6 col-lg-3 mt-2">
	                      <label>Nombre</label>
	                      <input class="form-control disabled" type="text" id="nombreContratante" name="nombre-contratante" disabled>
	                    </div>
	                    <div class="col-md-6 col-lg-3 mt-2">
	                      <label>Apellido paterno</label>
	                      <input class="form-control disabled" type="text" id="apellidoContratante1" name="apellido-contratante1" disabled>
	                    </div>
	                    <div class="col-md-6 col-lg-3 mt-2">
	                      <label>Apellido materno</label>
	                      <input class="form-control disabled" type="text" id="apellidoContratante2" name="apellido-contratante2" disabled>
	                    </div>
	                    <div class="col-md-6 col-lg-3 mt-2">
	                      <label>Email</label>
	                      <input class="form-control disabled" type="email" id="emailContratante" name="email-contratante" disabled>
	                    </div>
	                    <div class="col-md-6 col-lg-3 mt-2">
	                      <label>Teléfono</label>
	                      <input class="form-control disabled" type="tel" id="TelContratante" name="tel-contratante" disabled>
	                    </div>
	                  </div>
	                  <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Dirección</h4>
	                  <div class="form-row">
	                    <div class="col-md-6 col-lg-3 mt-2">
	                      <label>Región</label>
	                      <select class="form-control" type="text" id="regionContratante" name="region-contratante"></select>
	                    </div>
	                    <div class="col-md-6 col-lg-3 mt-2">
	                      <label>Comuna</label>
	                      <select class="form-control" type="text" id="comunaContratante" name="comuna-contratante"></select>
	                    </div>
	                    <div class="col-md-6 col-lg-2 mt-2">
	                      <label>Calle</label>
	                      <input class="form-control" type="text" id="calleContratante" name="calle-contratante">
	                    </div>
	                    <div class="col-md-6 col-lg-2 mt-2">
	                      <label>Número</label>
	                      <input class="form-control" type="text" id="numeroContratante" name="numero-contratante">
	                    </div>
	                    <div class="col-md-6 col-lg-2 mt-2">
	                      <label>Dpto/Casa</label>
	                      <input class="form-control" type="text" id="dptoContratante" name="dpto-contratante">
	                    </div>
	                  </div>
	                  <hr>
	                  <div class="switch-wrap">
	                    <div class="switch-group ml-0">
	                      <input class="switch-inverse" type="checkbox" id="datosContratanteAseguradoSwitch" switch="none"/>
	                      <label for="datosContratanteAseguradoSwitch" data-on-label="" data-off-label=""></label>
	                    </div>
	                    <label class="mb-0 ml-2 font-weight-bold" id="datosContratanteAsegurado">El asegurado es distinto al contratante</label>
	                  </div>
	                  <div class="d-none" id="datosAsegurado">
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Datos asegurado</h4>
	                    <div class="form-row">
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>RUT</label>
	                        <input class="form-control rutInput" type="text" name="rut-asegurado">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Nombre</label>
	                        <input class="form-control" type="text" id="nombreAsegurado" name="nombre-asegurado">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Apellido paterno</label>
	                        <input class="form-control" type="text" id="apellidoAsegurado1" name="apellido-asegurado1">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Apellido materno</label>
	                        <input class="form-control" type="text" id="apellidoAsegurado2" name="apellido-asegurado2">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Email</label>
	                        <input class="form-control" type="email" id="emailAsegurado" name="email-asegurado">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Teléfono</label>
	                        <input class="form-control" type="tel" id="TelAsegurado" name="tel-asegurado">
	                      </div>
	                    </div>
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Dirección</h4>
	                    <div class="form-row">
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Región</label>
	                        <select class="form-control" type="text" id="regionAsegurado" name="region-asegurado"></select>
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Comuna</label>
	                        <select class="form-control" type="text" id="comunaAsegurado" name="comuna-asegurado"></select>
	                      </div>
	                      <div class="col-md-6 col-lg-2 mt-2">
	                        <label>Calle</label>
	                        <input class="form-control" type="text" id="calleAsegurado" name="calle-asegurado">
	                      </div>
	                      <div class="col-md-6 col-lg-2 mt-2">
	                        <label>Número</label>
	                        <input class="form-control" type="text" id="numeroAsegurado" name="numero-asegurado">
	                      </div>
	                      <div class="col-md-6 col-lg-2 mt-2">
	                        <label>Dpto/Casa</label>
	                        <input class="form-control" type="text" id="dptoAsegurado" name="dpto-asegurado">
	                      </div>
	                    </div>
	                  </div>
	                  <hr>
	                  <div class="switch-wrap">
	                    <div class="switch-group ml-0">
	                      <input class="switch-inverse" type="checkbox" id="datosBeneficiarioContratanteSwitch" switch="none"/>
	                      <label for="datosBeneficiarioContratanteSwitch" data-on-label="" data-off-label=""></label>
	                    </div>
	                    <label class="mb-0 ml-2 font-weight-bold" id="datosBeneficiarioContratante">El beneficiario es distinto al contratante</label>
	                  </div>
	                  <div class="d-none" id="datosBeneficiario">
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Datos beneficiario</h4>
	                    <div class="form-row">
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>RUT</label>
	                        <input class="form-control rutInput" type="text" name="rut-beneficiario">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Nombre</label>
	                        <input class="form-control" type="text" id="nombreBeneficiario" name="nombre-beneficiario">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Apellido paterno</label>
	                        <input class="form-control" type="text" id="apellidoBeneficiario1" name="apellido-beneficiario">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Apellido materno</label>
	                        <input class="form-control" type="text" id="apellidoBeneficiario2" name="apellido-beneficiario">
	                      </div>
	                    </div>
	                  </div>
	                  <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Sistema de notificación</h4>
	                  <div class="form-row">
	                    <div class="col-md-6 col-lg-3 mt-2">
	                      <label>Email</label>
	                      <input class="form-control" type="email" id="emailNotificacion" name="email-notificacion">
	                    </div>
	                    <div class="col-md-6 col-lg-9 mt-2 d-flex align-items-end">
	                      <div class="custom-control custom-checkbox mb-2">
	                        <input class="custom-control-input" type="checkbox" id="emailNotificationCheck">
	                        <label class="custom-control-label" for="emailNotificationCheck">Autorizo la comunicación de la compañía a este correo electrónico</label>
	                      </div>
	                    </div>
	                  </div>
	                  <div class="d-flex justify-content-between mt-3">
	                    <div class="no-border-btns">
	                      <button class="btn text-primary d-flex align-items-center" id="regresarFormulario1"><i class="mdi mdi-chevron-left-circle-outline"></i> <span class="ml-2">Regresar</span></button>
	                    </div>
	                    <div>
	                      <button class="btn text-uppercase text-primary underline" id="guardarFormulario1">Guardar</button>
	                      <button class="btn btn-primary" id="siguienteFormulario1">Siguiente </button>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div class="d-none" id="formularioPaso2">
	              <div class="card">
	                <div class="card-body">
	                  <div class="d-flex flex-wrap"><span class="mr-3 mt-2 font-16 formulario-step">1</span><span class="mr-3 mt-2 font-16 formulario-step formulario-step--active">2</span><span class="mr-3 mt-2 font-16 formulario-step">3</span><span class="mr-3 mt-2 font-16 formulario-step">4</span><span class="mr-3 mt-2 font-16 formulario-step">5</span>
	                  </div>
	                  <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Plan</h4>
	                  <div class="form-row">
	                    <div class="col-md-6 col-lg-4 col-xl-3 mt-2">
	                      <label>Selecciona un macro plan</label>
	                      <select class="form-control" type="text" id="macroplan" name="region-contratante">
	                        <option hidden selected value="default">Selecciona una opción</option>
	                        <option value="ingenieria">Ingeniería</option>
	                      </select>
	                    </div>
	                    <div class="col-md-6 col-lg-4 col-xl-3 mt-2">
	                      <label>Selecciona un plan</label>
	                      <select class="form-control" type="text" id="plan" name="comuna-contratante" disabled>
	                        <option hidden selected>Selecciona una opción</option>
	                        <option value="r131">Equipo de contratista - R131</option>
	                        <option value="r132">Equipo de contratista - R132</option>
	                        <option value="civilGeneral">Responsabilidad civil general</option>
	                        <option value="seguro">Propuesta de seguro</option>
	                      </select>
	                    </div>
	                  </div>
	                  <div class="d-none" id="materiaAsegurarTipo1">
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Materia por asegurar</h4>
	                    <div class="form-row">
	                      <div class="col-md-6 col-lg-2 mt-2">
	                        <label>Patente*</label>
	                        <input class="form-control" type="text" id="patente" name="patente">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Tipo de Maquinaria*</label>
	                        <input class="form-control" type="text" id="tipoMaquinaria" name="tipo-maquinaria">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Marca*</label>
	                        <input class="form-control" type="text" id="marca" name="marca">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Modelo*</label>
	                        <input class="form-control" type="text" id="modelo" name="modelo">
	                      </div>
	                      <div class="col-md-6 col-lg-1 mt-2">
	                        <label>Año*</label>
	                        <input class="form-control" type="text" id="anno" name="anno">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Nº de motor*</label>
	                        <input class="form-control" type="number" id="nroMotor" name="nroMotor">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Nº VIN / Nº CHASSIS*</label>
	                        <input class="form-control" type="number" id="nroChassis" name="nroChassis">
	                      </div>
	                    </div>
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Contacto para inspección</h4>
	                    <div class="form-row">
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Nombre</label>
	                        <input class="form-control disabled" type="text" id="nombreContactoInspeccion" name="nombre-contacto-inspeccion">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Apellido paterno</label>
	                        <input class="form-control disabled" type="text" id="apellidoContactoInspeccion" name="apellido-contacto-inspeccion">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Apellido materno</label>
	                        <input class="form-control disabled" type="text" id="apellidoContactoInspeccion" name="apellido-contacto-inspeccion">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Teléfono</label>
	                        <input class="form-control disabled" type="tel" id="TelContactoInspeccion" name="tel-contacto-inspeccion">
	                      </div>
	                    </div>
	                  </div>
	                  <div class="d-none" id="materiaAsegurarTipo2">
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Materia por asegurar</h4>
	                    <div class="form-row">
	                      <div class="col-12 mt-2">
	                        <label>Actividad</label>
	                        <textarea class="form-control" rows="3"></textarea>
	                      </div>
	                      <div class="col-md-6 col-lg-4 col-xl-3 mt-2">
	                        <label>Monto por asegurar en UF</label>
	                        <input class="form-control" type="number">
	                      </div>
	                      <div class="col-md-6 col-lg-8 col-xl-9 mt-2 d-flex align-items-end">
	                        <p class="mb-2">Límite máximo de indemnización</p>
	                      </div>
	                    </div>
	                  </div>
	                  <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Duración del contrato</h4>
	                  <div class="form-row">
	                    <div class="col-md-6 col-lg-3 mt-2">
	                      <label>Inicio de vigencia - <span class="text-primary">Desde 12:00 hrs</span></label>
	                      <input class="form-control" type="date"><span class="calendar-icon"> <i class="renta-icon-calendar font-24"></i></span>
	                    </div>
	                    <div class="col-md-6 col-lg-3 mt-2">
	                      <label>Término de vigencia - <span class="text-primary">Hasta 12:00 hrs</span></label>
	                      <input class="form-control" type="date"><span class="calendar-icon"> <i class="renta-icon-calendar font-24"></i></span>
	                    </div>
	                  </div>
	                  <div class="d-flex justify-content-between mt-3">
	                    <div class="no-border-btns">
	                      <button class="btn text-primary d-flex align-items-center" id="regresarFormulario2"><i class="mdi mdi-chevron-left-circle-outline"></i> <span class="ml-2">Regresar</span></button>
	                    </div>
	                    <div>
	                      <button class="btn text-uppercase text-primary underline" id="guardarFormulario2">Guardar</button>
	                      <button class="btn btn-primary" id="siguienteFormulario2">Siguiente </button>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div class="d-none" id="formularioPaso3">
	              <div class="card">
	                <div class="card-body">
	                  <div class="d-flex flex-wrap"><span class="mr-3 mt-2 font-16 formulario-step">1</span><span class="mr-3 mt-2 font-16 formulario-step">2</span><span class="mr-3 mt-2 font-16 formulario-step formulario-step--active">3</span><span class="mr-3 mt-2 font-16 formulario-step">4</span><span class="mr-3 mt-2 font-16 formulario-step">5</span>
	                  </div>
	                  <div class="d-none" id="paso3PlanR131">
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Plan: Equipo de Contratista - R131</h4>
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Cobertura</h4>
	                    <p class="my-2">Según condiciones generales de la Póliza de Equipo de Contratista inscrita en el registro de pólizas de la SVS, bajo el código POL 120130710 y cláusulas adicionales que se indican.</p>
	                    <hr class="mt-2">
	                    <div class="switch-wrap align-items-center">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="danoMaterialR131Switch" switch="none"/>
	                        <label for="danoMaterialR131Switch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <div class="ml-2 w-100">
	                        <p class="mb-0 font-weight-bold">Daños materiales</p>
	                        <div class="d-flex align-items-center">
	                          <label class="mb-0 text-primary flex-basis-75">Monto UF</label>
	                          <input class="form-control flex-basis-180" type="number"/>
	                        </div>
	                      </div>
	                    </div>
	                    <hr>
	                    <div class="switch-wrap align-items-center">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="responsabilidadCivilR131Switch" switch="none"/>
	                        <label for="responsabilidadCivilR131Switch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <div class="ml-2 w-100">
	                        <p class="mb-0 font-weight-bold">Responsabilidad civil</p>
	                        <div class="d-flex align-items-center">
	                          <label class="mb-0 text-primary flex-basis-75">Monto UF</label>
	                          <input class="form-control flex-basis-180" type="number"/>
	                        </div>
	                      </div>
	                    </div>
	                    <hr>
	                    <div class="switch-wrap align-items-center">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadR131GastosSwitch" switch="none"/>
	                        <label for="cadR131GastosSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <div class="ml-2 w-100">
	                        <p class="mb-0 font-weight-bold">CAD 120131011 Gastos por salvamento, remoción de escombros y limpieza</p>
	                        <div class="d-flex align-items-center">
	                          <label class="mb-0 text-primary flex-basis-75">Monto UF</label>
	                          <input class="form-control flex-basis-180" type="number"/>
	                        </div>
	                      </div>
	                    </div>
	                    <hr class="mb-3">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadR131TrabajosMuellesSwitch" switch="none"/>
	                        <label for="cadR131TrabajosMuellesSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadR131TrabajosMuellesLabel">CAD 120131013 Trabajos en muelles o equipos flotantes</label>
	                    </div>
	                    <hr class="mb-3 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadR131TrabajosRiberasSwitch" switch="none"/>
	                        <label for="cadR131TrabajosRiberasSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadR131TrabajosRiberasLabel">CAD 120131014 Trabajos en riberas, lechos o cauces donde corran aguas y a orillas de lagos</label>
	                    </div>
	                    <hr class="mb-3 mt-1">
	                    <div class="switch-wrap align-items-center">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadR131GastosExtrasSwitch" switch="none"/>
	                        <label for="cadR131GastosExtrasSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <div class="ml-2 w-100">
	                        <p class="mb-0 font-weight-bold">CAD 120131015 Gastos extras por trabajos efectuados fuera de horario normal y por transportes expresos</p>
	                        <div class="d-flex align-items-center">
	                          <label class="mb-0 text-primary flex-basis-75">Monto UF</label>
	                          <input class="form-control flex-basis-180" type="number"/>
	                        </div>
	                      </div>
	                    </div>
	                    <hr>
	                    <div class="switch-wrap align-items-center">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadR131GastosFleteSwitch" switch="none"/>
	                        <label for="cadR131GastosFleteSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <div class="ml-2 w-100">
	                        <p class="mb-0 font-weight-bold">CAD 120131016 Gastos de flete aéreo</p>
	                        <div class="d-flex align-items-center">
	                          <label class="mb-0 text-primary flex-basis-75">Monto UF</label>
	                          <input class="form-control flex-basis-180" type="number"/>
	                        </div>
	                      </div>
	                    </div>
	                    <hr class="mb-3">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadR131HuelgaSwitch" switch="none"/>
	                        <label for="cadR131HuelgaSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadR131HuelgaLabel">CAD 120131017 Huelga y Motín</label>
	                    </div>
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Adicional optativo con cobro de prima</h4>
	                    <div class="switch-wrap align-items-center">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadR131LaboresSubterraneasSwitch" switch="none"/>
	                        <label for="cadR131LaboresSubterraneasSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <div class="ml-2 w-100">
	                        <p class="mb-0 font-weight-bold">CAD 120131012 Labores o trabajos subterráneos</p>
	                        <div class="d-flex align-items-center">
	                          <label class="mb-0 text-primary flex-basis-75">Monto UF</label>
	                          <input class="form-control flex-basis-180" type="number"/>
	                        </div>
	                      </div>
	                    </div>
	                    <hr>
	                  </div>
	                  <div class="d-none" id="paso3PlanR132">
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Plan: Equipo de Contratista - R132</h4>
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Cobertura</h4>
	                    <p class="my-2">Según condiciones generales de la Póliza de Equipo de Contratista inscrita en el registro de pólizas de la SVS, bajo el código POL 120130714 y cláusulas adicionales que se indican.</p>
	                    <hr class="mt-2">
	                    <div class="switch-wrap align-items-center">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="danoMaterialR132Switch" switch="none"/>
	                        <label for="danoMaterialR132Switch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <div class="ml-2 w-100">
	                        <p class="mb-0 font-weight-bold">Daños materiales</p>
	                        <div class="d-flex align-items-center">
	                          <label class="mb-0 text-primary flex-basis-75">Monto UF</label>
	                          <input class="form-control flex-basis-180" type="number"/>
	                        </div>
	                      </div>
	                    </div>
	                    <hr>
	                    <div class="switch-wrap align-items-center">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="responsabilidadCivilR132Switch" switch="none"/>
	                        <label for="responsabilidadCivilR132Switch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <div class="ml-2 w-100">
	                        <p class="mb-0 font-weight-bold">Responsabilidad civil</p>
	                        <div class="d-flex align-items-center">
	                          <label class="mb-0 text-primary flex-basis-75">Monto UF</label>
	                          <input class="form-control flex-basis-180" type="number"/>
	                        </div>
	                      </div>
	                    </div>
	                    <hr>
	                    <div class="switch-wrap align-items-center">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadR132GastosAereoSwitch" switch="none"/>
	                        <label for="cadR132GastosAereoSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <div class="ml-2 w-100">
	                        <p class="mb-0 font-weight-bold">CAD 120140059 Gastos por flete aéreo</p>
	                        <div class="d-flex align-items-center">
	                          <label class="mb-0 text-primary flex-basis-75">Monto UF</label>
	                          <input class="form-control flex-basis-180" type="number"/>
	                        </div>
	                      </div>
	                    </div>
	                    <hr>
	                    <div class="switch-wrap align-items-center">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadR132GastosExtrasSwitch" switch="none"/>
	                        <label for="cadR132GastosExtrasSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <div class="ml-2 w-100">
	                        <p class="mb-0 font-weight-bold">CAD 120140060 Gastos extras por trabajos efectuados fuera de horario normal y por transportes expresos</p>
	                        <div class="d-flex align-items-center">
	                          <label class="mb-0 text-primary flex-basis-75">Monto UF</label>
	                          <input class="form-control flex-basis-180" type="number"/>
	                        </div>
	                      </div>
	                    </div>
	                    <hr>
	                    <div class="switch-wrap align-items-center">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadR132GastosSwitch" switch="none"/>
	                        <label for="cadR132GastosSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <div class="ml-2 w-100">
	                        <p class="mb-0 font-weight-bold">CAD 120140061 Gastos por salvamento, remoción de escombro y limpieza</p>
	                        <div class="d-flex align-items-center">
	                          <label class="mb-0 text-primary flex-basis-75">Monto UF</label>
	                          <input class="form-control flex-basis-180" type="number"/>
	                        </div>
	                      </div>
	                    </div>
	                    <hr class="mb-3">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadR132HuelgaSwitch" switch="none"/>
	                        <label for="cadR132HuelgaSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadR132HuelgaLabel">CAD 120131017 Huelga y Motín</label>
	                    </div>
	                    <hr>
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Coberturas opcionales, se pueden cubrir las pérdidas y daños causados por:</h4><br>
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadR132SismoSwitch" switch="none"/>
	                        <label for="cadR132SismoSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadR132HSismoLabel">CAD 120140310 Sismo, erupción volcánica y convulsión de la naturaleza</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="caidaAvionesR132Switch" switch="none"/>
	                        <label for="caidaAvionesR132Switch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="caidaAvionesR132Label">Caída de aviones</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="inundacionR132Switch" switch="none"/>
	                        <label for="inundacionR132Switch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="inundacionR132Label">Inundación, temporal, vendaval, avalancha y granizo</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="roboR132Switch" switch="none"/>
	                        <label for="roboR132Switch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="roboR132Label">Robo</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                  </div>
	                  <div class="d-none" id="paso3PlanResCivil">
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Plan: Equipo de Contratista - Responsabilidad Civil</h4>
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Cobertura</h4>
	                    <p class="my-2">Según condiciones generales de la Póliza de Responsabilidad Civil General POL 120130179.</p>
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Clausulas adicionales</h4><br>
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadResCivilVehicularSwitch" switch="none"/>
	                        <label for="cadResCivilVehicularSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadResCivilVehicularLabel">CAD 120130379 RESPONSABILIDAD CIVIL VEHICULAR</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadResCivilTransporteSwitch" switch="none"/>
	                        <label for="cadResCivilTransporteSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadResCivilTransporteLabel">CAD 120130380 RESPONSABILIDAD CIVIL EMPRESAS DE TRANSPORTE</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadResCivilConstruccionSwitch" switch="none"/>
	                        <label for="cadResCivilConstruccionSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadResCivilConstruccionLabel">CAD 120130383 RESPONSABILIDAD CIVIL DE CONSTRUCCIÓN</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadResCivilInmuebleSwitch" switch="none"/>
	                        <label for="cadResCivilInmuebleSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadResCivilInmuebleLabel">CAD 120130384 RESPONSABILIDAD CIVIL PROPIETARIO INMUEBLE</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadResCivilEmpresaSwitch" switch="none"/>
	                        <label for="cadResCivilEmpresaSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadResCivilEmpresaLabel">CAD 120130385 RESPONSABILIDAD CIVIL DE EMPRESA</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadResCivilPatronalSwitch" switch="none"/>
	                        <label for="cadResCivilPatronalSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadResCivilPatronalLabel">CAD 120130386 RESPONSABILIDAD CIVIL PATRONAL</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadResCivilCruzadaSwitch" switch="none"/>
	                        <label for="cadResCivilCruzadaSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadResCivilCruzadaLabel">CAD 120130387 RESPONSABILIDAD CIVIL CRUZADA</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadResCivilContaminacionSwitch" switch="none"/>
	                        <label for="cadResCivilContaminacionSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadResCivilContaminacionLabel">CAD 120130388 RESPONSABILIDAD CIVIL POR CONTAMINACIÓN</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadResCivilProductoSwitch" switch="none"/>
	                        <label for="cadResCivilProductoSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadResCivilProductoLabel">CAD 120130446 RESPONSABILIDAD CIVIL DE PRODUCTO (Adicional está sujeto a la evaluación y aprobación del área técnica)</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadResCivilCabezaFamiliaSwitch" switch="none"/>
	                        <label for="cadResCivilCabezaFamiliaSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadResCivilCabezaFamiliaLabel">CAD 120130840 RESPONSABILIDAD CIVIL CABEZA DE FAMILIA (Sólo riesgos habitacionales)</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="cadResCivilContratistaSwitch" switch="none"/>
	                        <label for="cadResCivilContratistaSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="cadResCivilContratistaLabel">CAD 120131773 RESPONSABILIDAD CIVIL EQUIPO MÓVIL CONTRATISTA</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                    <div class="switch-wrap">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="ResCivilOtrosSwitch" switch="none"/>
	                        <label for="ResCivilOtrosSwitch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="mb-0 ml-2 font-weight-bold" id="ResCivilOtrosLabel">OTROS</label>
	                    </div>
	                    <hr class="mb-2 mt-0">
	                  </div>
	                  <div class="d-none" id="paso3PlanPropuestaSeguro">
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Plan: Propuesta de seguro</h4><br>
	                    <div class="row">
	                      <div class="col-md-6 col-lg-5 col-xl-4">
	                        <div class="custom-control custom-radio">
	                          <input class="custom-control-input" type="radio" id="propuestaSeguroConstruccion" name="propuestaSeguroRadio">
	                          <label class="font-weight-bold custom-control-label text-uppercase" for="propuestaSeguroConstruccion">Todo riesgo construcción</label>
	                        </div>
	                        <div class="custom-control custom-radio">
	                          <input class="custom-control-input" type="radio" id="propuestaSeguroMontaje" name="propuestaSeguroRadio">
	                          <label class="font-weight-bold custom-control-label text-uppercase" for="propuestaSeguroMontaje">Todo riesgo montaje</label>
	                        </div>
	                        <div class="custom-control custom-radio">
	                          <input class="custom-control-input" type="radio" id="propuestaSeguroObjValiosos" name="propuestaSeguroRadio">
	                          <label class="font-weight-bold custom-control-label text-uppercase" for="propuestaSeguroObjValiosos">Todo riesgo objetos valiosos</label>
	                        </div>
	                        <div class="custom-control custom-radio">
	                          <input class="custom-control-input" type="radio" id="propuestaSeguroGarantia" name="propuestaSeguroRadio">
	                          <label class="font-weight-bold custom-control-label text-uppercase" for="propuestaSeguroGarantia">Garantía</label>
	                        </div>
	                      </div>
	                      <div class="col-md-6 col-lg-5 col-xl-4">
	                        <div class="custom-control custom-radio">
	                          <input class="custom-control-input" type="radio" id="propuestaSeguroValores" name="propuestaSeguroRadio">
	                          <label class="font-weight-bold custom-control-label text-uppercase" for="propuestaSeguroValores">Remesa de valores</label>
	                        </div>
	                        <div class="custom-control custom-radio">
	                          <input class="custom-control-input" type="radio" id="propuestaSeguroCasco" name="propuestaSeguroRadio">
	                          <label class="font-weight-bold custom-control-label text-uppercase" for="propuestaSeguroCasco">Casco</label>
	                        </div>
	                        <div class="custom-control custom-radio">
	                          <input class="custom-control-input" type="radio" id="propuestaSeguroCristales" name="propuestaSeguroRadio">
	                          <label class="font-weight-bold custom-control-label text-uppercase" for="propuestaSeguroCristales">Cristales</label>
	                        </div>
	                        <div class="custom-control custom-radio">
	                          <input class="custom-control-input" type="radio" id="propuestaSeguroMiscelaneo" name="propuestaSeguroRadio">
	                          <label class="font-weight-bold custom-control-label text-uppercase" for="propuestaSeguroMiscelaneo">Miscelaneo</label>
	                        </div>
	                      </div>
	                    </div>
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Cobertura</h4>
	                    <div id="paso3PlanPropuestaSeguroCobertura">
	                      <div class="form-row">
	                        <div class="col-xl-5 mt-2">
	                          <label>Cobertura</label>
	                          <input class="form-control" type="text">
	                        </div>
	                        <div class="col-md-4 col-xl-2 mt-2">
	                          <label>Monto asegurado</label>
	                          <input class="form-control" type="number"><span class="right-input-icon">UF</span>
	                        </div>
	                        <div class="col-md-4 col-xl-2 mt-2">
	                          <label>Deducible</label>
	                          <input class="form-control" type="number"><span class="right-input-icon">UF</span>
	                        </div>
	                        <div class="col-md-4 col-xl-3 d-flex mt-2">
	                          <button class="btn btn-primary align-self-end propuestaSeguroAgregarCoberturaBtn">Añadir nuevo</button>
	                        </div>
	                      </div>
	                    </div>
	                  </div>
	                  <div class="d-flex justify-content-between mt-3">
	                    <div class="no-border-btns">
	                      <button class="btn text-primary d-flex align-items-center" id="regresarFormulario3"><i class="mdi mdi-chevron-left-circle-outline"></i> <span class="ml-2">Regresar</span></button>
	                    </div>
	                    <div>
	                      <button class="btn text-uppercase text-primary underline" id="guardarFormulario3">Guardar</button>
	                      <button class="btn btn-primary" id="siguienteFormulario3">Siguiente </button>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div class="d-none" id="formularioPaso4">
	              <div class="card">
	                <div class="card-body">
	                  <div class="d-flex flex-wrap"><span class="mr-3 mt-2 font-16 formulario-step">1</span><span class="mr-3 mt-2 font-16 formulario-step">2</span><span class="mr-3 mt-2 font-16 formulario-step">3</span><span class="mr-3 mt-2 font-16 formulario-step formulario-step--active">4</span><span class="mr-3 mt-2 font-16 formulario-step">5</span>
	                  </div>
	                  <div class="d-none" id="paso4PlanR131">
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Plan: Equipo de Contratista - R131</h4>
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Preguntas</h4>
	                    <div class="form-row">
	                      <div class="col-md-6 mt-2">
	                        <label>Zona de operación</label>
	                        <input class="form-control disabled" type="text" id="pregunta1R131" name="pregunta1-r131">
	                      </div>
	                    </div>
	                    <hr>
	                    <div class="switch-wrap align-items-center">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="pregunta2R131Switch" switch="none"/>
	                        <label for="pregunta2R131Switch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <div class="ml-2 w-100">
	                        <p class="mb-0 font-weight-bold">¿Existen otros seguros sobre el mismo vehículo?</p>
	                        <div class="d-flex align-items-center flex-wrap">
	                          <label class="mr-2 mb-0 flex-basis-95">Aseguradora</label>
	                          <input class="form-control flex-basis-390" type="text"/>
	                        </div>
	                      </div>
	                    </div>
	                    <hr>
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">El equipo y/o maquinaria es:</h4>
	                    <div class="d-flex">
	                      <div class="d-flex flex-column flex-basis-75">
	                        <div class="d-flex justify-content-evenly">
	                          <p class="text-uppercase mb-0 m-l-n-5">Si</p>
	                          <p class="text-uppercase mb-0">No</p>
	                        </div>
	                        <div class="d-flex justify-content-evenly">
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta3R131Si" name="pregunta3R131"/>
	                            <label class="custom-control-label" for="pregunta3R131Si"></label>
	                          </div>
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta3R131No" name="pregunta3R131"/>
	                            <label class="custom-control-label" for="pregunta3R131No"></label>
	                          </div>
	                        </div>
	                      </div>
	                      <p class="font-weight-bold mb-0 align-self-end">Propio (Incluye operador certificado y con licencia vigente y acreditable</p>
	                    </div>
	                    <hr class="my-1">
	                    <div class="d-flex">
	                      <div class="d-flex flex-column flex-basis-75">
	                        <div class="d-flex justify-content-evenly">
	                          <p class="text-uppercase mb-0 m-l-n-5">Si</p>
	                          <p class="text-uppercase mb-0">No</p>
	                        </div>
	                        <div class="d-flex justify-content-evenly">
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta4R131Si" name="pregunta4R131"/>
	                            <label class="custom-control-label" for="pregunta4R131Si"></label>
	                          </div>
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta4R131No" name="pregunta4R131"/>
	                            <label class="custom-control-label" for="pregunta4R131No"></label>
	                          </div>
	                        </div>
	                      </div>
	                      <p class="font-weight-bold mb-0 align-self-end">Recibido en arriendo o Leasing (incluye operador certificado y con licencia vigente y acreditable</p>
	                    </div>
	                    <hr class="my-1">
	                    <div class="d-flex">
	                      <div class="d-flex flex-column flex-basis-75">
	                        <div class="d-flex justify-content-evenly">
	                          <p class="text-uppercase mb-0 m-l-n-5">Si</p>
	                          <p class="text-uppercase mb-0">No</p>
	                        </div>
	                        <div class="d-flex justify-content-evenly">
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta5R131Si" name="pregunta5R131"/>
	                            <label class="custom-control-label" for="pregunta5R131Si"></label>
	                          </div>
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta5R131No" name="pregunta5R131"/>
	                            <label class="custom-control-label" for="pregunta5R131No"></label>
	                          </div>
	                        </div>
	                      </div>
	                      <p class="font-weight-bold mb-0 align-self-end">Entregado en arriendo o Leasing (incluye operador certificado y con licencia vigente y acreditable</p>
	                    </div>
	                    <hr class="my-1">
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">El equipo y/o maquinaria opera en:</h4>
	                    <div class="d-flex">
	                      <div class="d-flex flex-column flex-basis-75">
	                        <div class="d-flex justify-content-evenly">
	                          <p class="text-uppercase mb-0 m-l-n-5">Si</p>
	                          <p class="text-uppercase mb-0">No</p>
	                        </div>
	                        <div class="d-flex justify-content-evenly">
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta6R131Si" name="pregunta6R131"/>
	                            <label class="custom-control-label" for="pregunta6R131Si"></label>
	                          </div>
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta6R131No" name="pregunta6R131"/>
	                            <label class="custom-control-label" for="pregunta6R131No"></label>
	                          </div>
	                        </div>
	                      </div>
	                      <p class="font-weight-bold mb-0 align-self-end">Trabajos subterráneos</p>
	                    </div>
	                    <hr class="my-1">
	                    <div class="d-flex">
	                      <div class="d-flex flex-column flex-basis-75">
	                        <div class="d-flex justify-content-evenly">
	                          <p class="text-uppercase mb-0 m-l-n-5">Si</p>
	                          <p class="text-uppercase mb-0">No</p>
	                        </div>
	                        <div class="d-flex justify-content-evenly">
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta7R131Si" name="pregunta7R131"/>
	                            <label class="custom-control-label" for="pregunta7R131Si"></label>
	                          </div>
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta7R131No" name="pregunta7R131"/>
	                            <label class="custom-control-label" for="pregunta7R131No"></label>
	                          </div>
	                        </div>
	                      </div>
	                      <p class="font-weight-bold mb-0 align-self-end">Trabajos a orilla de mar o del océano</p>
	                    </div>
	                    <hr class="my-1">
	                    <div class="d-flex">
	                      <div class="d-flex flex-column flex-basis-75">
	                        <div class="d-flex justify-content-evenly">
	                          <p class="text-uppercase mb-0 m-l-n-5">Si</p>
	                          <p class="text-uppercase mb-0">No</p>
	                        </div>
	                        <div class="d-flex justify-content-evenly">
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta8R131Si" name="pregunta8R131"/>
	                            <label class="custom-control-label" for="pregunta8R131Si"></label>
	                          </div>
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta8R131No" name="pregunta8R131"/>
	                            <label class="custom-control-label" for="pregunta8R131No"></label>
	                          </div>
	                        </div>
	                      </div>
	                      <p class="font-weight-bold mb-0 align-self-end">Trabajos a orilla de ríos o lagos</p>
	                    </div>
	                    <hr class="my-1">
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Exclusiones</h4>
	                    <div class="d-flex flex-wrap align-items-center"><a class="d-inline-block width-250 mr-2" href="">
	                        <div class="border p-3 d-flex align-items-center"><img src="assets/images/download-file-red.svg" alt="Descarga exclusiones">
	                          <p class="font-weight-bold underline font-16 mb-0 ml-3">Descargar<br> exclusiones</p>
	                        </div></a>
	                      <div class="custom-control custom-checkbox mb-2">
	                        <input class="custom-control-input" type="checkbox" id="autorizoExclusionesR131Check">
	                        <label class="font-weight-bold custom-control-label" for="autorizoExclusionesR131Check">Acepto las exclusiones antes detalladas</label>
	                      </div>
	                    </div>
	                  </div>
	                  <div class="d-none" id="paso4PlanR132">
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Plan: Equipo de Contratista - R132</h4>
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Preguntas</h4>
	                    <div class="form-row">
	                      <div class="col-md-6 mt-2">
	                        <label>Zona de operación</label>
	                        <input class="form-control disabled" type="text" id="pregunta1R132" name="pregunta1-r132">
	                      </div>
	                    </div>
	                    <hr>
	                    <div class="switch-wrap align-items-center">
	                      <div class="switch-group ml-0">
	                        <input class="switch-inverse" type="checkbox" id="pregunta2R132Switch" switch="none"/>
	                        <label for="pregunta2R132Switch" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <div class="ml-2 w-100">
	                        <p class="mb-0 font-weight-bold">¿Existen otros seguros sobre el mismo vehículo?</p>
	                        <div class="d-flex align-items-center flex-wrap">
	                          <label class="mr-2 mb-0 flex-basis-95">Aseguradora</label>
	                          <input class="form-control flex-basis-390" type="text"/>
	                        </div>
	                      </div>
	                    </div>
	                    <hr>
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">El equipo y/o maquinaria es:</h4>
	                    <div class="d-flex">
	                      <div class="d-flex flex-column flex-basis-75">
	                        <div class="d-flex justify-content-evenly">
	                          <p class="text-uppercase mb-0 m-l-n-5">Si</p>
	                          <p class="text-uppercase mb-0">No</p>
	                        </div>
	                        <div class="d-flex justify-content-evenly">
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta3R132Si" name="pregunta3R132"/>
	                            <label class="custom-control-label" for="pregunta3R132Si"></label>
	                          </div>
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta3R132No" name="pregunta3R132"/>
	                            <label class="custom-control-label" for="pregunta3R132No"></label>
	                          </div>
	                        </div>
	                      </div>
	                      <p class="font-weight-bold mb-0 align-self-end">Propio (Incluye operador certificado y con licencia vigente y acreditable</p>
	                    </div>
	                    <hr class="my-1">
	                    <div class="d-flex">
	                      <div class="d-flex flex-column flex-basis-75">
	                        <div class="d-flex justify-content-evenly">
	                          <p class="text-uppercase mb-0 m-l-n-5">Si</p>
	                          <p class="text-uppercase mb-0">No</p>
	                        </div>
	                        <div class="d-flex justify-content-evenly">
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta4R132Si" name="pregunta4R132"/>
	                            <label class="custom-control-label" for="pregunta4R132Si"></label>
	                          </div>
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta4R132No" name="pregunta4R132"/>
	                            <label class="custom-control-label" for="pregunta4R132No"></label>
	                          </div>
	                        </div>
	                      </div>
	                      <p class="font-weight-bold mb-0 align-self-end">Recibido en arriendo o Leasing (incluye operador certificado y con licencia vigente y acreditable</p>
	                    </div>
	                    <hr class="my-1">
	                    <div class="d-flex">
	                      <div class="d-flex flex-column flex-basis-75">
	                        <div class="d-flex justify-content-evenly">
	                          <p class="text-uppercase mb-0 m-l-n-5">Si</p>
	                          <p class="text-uppercase mb-0">No</p>
	                        </div>
	                        <div class="d-flex justify-content-evenly">
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta5R132Si" name="pregunta5R132"/>
	                            <label class="custom-control-label" for="pregunta5R132Si"></label>
	                          </div>
	                          <div class="custom-control custom-radio">
	                            <input class="custom-control-input" type="radio" id="pregunta5R132No" name="pregunta5R132"/>
	                            <label class="custom-control-label" for="pregunta5R132No"></label>
	                          </div>
	                        </div>
	                      </div>
	                      <p class="font-weight-bold mb-0 align-self-end">Entregado en arriendo o Leasing (incluye operador certificado y con licencia vigente y acreditable</p>
	                    </div>
	                    <hr class="my-1">
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Exclusiones</h4>
	                    <div class="d-flex flex-wrap align-items-center"><a class="d-inline-block width-250 mr-2" href="">
	                        <div class="border p-3 d-flex align-items-center"><img src="assets/images/download-file-red.svg" alt="Descarga exclusiones">
	                          <p class="font-weight-bold underline font-16 mb-0 ml-3">Descargar<br> exclusiones</p>
	                        </div></a>
	                      <div class="custom-control custom-checkbox mb-2">
	                        <input class="custom-control-input" type="checkbox" id="autorizoExclusionesR132Check">
	                        <label class="font-weight-bold custom-control-label" for="autorizoExclusionesR132Check">Acepto las exclusiones antes detalladas</label>
	                      </div>
	                    </div>
	                  </div>
	                  <div class="d-none" id="paso4PlanResCivil">
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Plan: Equipo de Contratista - Responsabilidad civil general</h4>
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Exclusiones</h4>
	                    <div class="d-flex flex-wrap align-items-center"><a class="d-inline-block width-250 mr-2" href="">
	                        <div class="border p-3 d-flex align-items-center"><img src="assets/images/download-file-red.svg" alt="Descarga exclusiones">
	                          <p class="font-weight-bold underline font-16 mb-0 ml-3">Descargar<br> exclusiones</p>
	                        </div></a>
	                      <div class="custom-control custom-checkbox mb-2">
	                        <input class="custom-control-input" type="checkbox" id="autorizoExclusionesResCivilCheck">
	                        <label class="font-weight-bold custom-control-label" for="autorizoExclusionesResCivilCheck">Acepto las exclusiones antes detalladas</label>
	                      </div>
	                    </div>
	                  </div>
	                  <div class="d-none" id="paso4PlanPropuestaSeguro">
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Plan: Propuesta de seguro</h4>
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Exclusiones</h4>
	                    <div class="d-flex flex-wrap align-items-center"><a class="d-inline-block width-250 mr-2" href="">
	                        <div class="border p-3 d-flex align-items-center"><img src="assets/images/download-file-red.svg" alt="Descarga exclusiones">
	                          <p class="font-weight-bold underline font-16 mb-0 ml-3">Descargar<br> exclusiones</p>
	                        </div></a>
	                      <div class="custom-control custom-checkbox mb-2">
	                        <input class="custom-control-input" type="checkbox" id="autorizoExclusionesPropuestaSeguroCheck">
	                        <label class="font-weight-bold custom-control-label" for="autorizoExclusionesPropuestaSeguroCheck">Acepto las exclusiones antes detalladas</label>
	                      </div>
	                    </div>
	                  </div>
	                  <div class="d-flex justify-content-between mt-3">
	                    <div class="no-border-btns">
	                      <button class="btn text-primary d-flex align-items-center" id="regresarFormulario4"><i class="mdi mdi-chevron-left-circle-outline"></i> <span class="ml-2">Regresar</span></button>
	                    </div>
	                    <div>
	                      <button class="btn text-uppercase text-primary underline" id="guardarFormulario4">Guardar</button>
	                      <button class="btn btn-primary" id="siguienteFormulario4">Siguiente </button>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div class="d-none" id="formularioPaso5">
	              <div class="card">
	                <div class="card-body">
	                  <div class="d-flex flex-wrap"><span class="mr-3 mt-2 font-16 formulario-step">1</span><span class="mr-3 mt-2 font-16 formulario-step">2</span><span class="mr-3 mt-2 font-16 formulario-step">3</span><span class="mr-3 mt-2 font-16 formulario-step">4</span><span class="mr-3 mt-2 font-16 formulario-step formulario-step--active">5</span>
	                  </div>
	                  <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Plan: Nombre del plan elegido</h4>
	                  <div id="paso5Deducible">
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Deducible obligatorio</h4>
	                    <div class="form-row">
	                      <div class="col-lg-4 col-xl-3">
	                        <label class="mt-2">Porcentaje de deducible</label>
	                        <input class="form-control" type="number"><span class="right-input-icon">%</span>
	                      </div>
	                      <div class="col-lg-5 col-xl-4">
	                        <label class="mt-2">Mínimo de UF en toda y cada pérdida</label>
	                        <input class="form-control" type="number"><span class="right-input-icon">UF</span>
	                      </div>
	                    </div>
	                  </div>
	                  <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Comisión</h4>
	                  <div class="form-row">
	                    <div class="col-lg-4 col-xl-3">
	                      <label class="mt-2">Porcentaje de comisión </label>
	                      <input class="form-control" type="number"><span class="right-input-icon">%</span>
	                    </div>
	                  </div>
	                  <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Prima</h4>
	                  <div class="form-row">
	                    <div class="col-lg-3">
	                      <label class="mt-2">Prima neta </label>
	                      <input class="form-control" type="number">
	                      <label class="mt-2">IVA</label>
	                      <input class="form-control" type="number">
	                      <label class="mt-2">Prima bruta</label>
	                      <input class="form-control" type="number">
	                    </div>
	                    <div class="col-lg-9 d-flex align-items-center">
	                      <div class="alert alert-success mb-0 ml-3--lg mt-0--lg p-5"><span class="text-uppercase font-weight-bold">Suma asegurada: Valor de reposición UF</span> <br> Artículo 7°, 7.1 , Valor de reposición: se entiende como "valor de reposición" el precio de proveedor o representante del fabricante de un bien nuevo de la misma clase y capacidad que la materia asegurada, más los gastos por fletes al lugar, gastos de montaje, seguros de transporte, impuestos no recuperables y derechos, y gastos aduaneros si los hubiere.</div>
	                    </div>
	                  </div>
	                  <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Antecedentes de pago</h4>
	                  <div class="form-row">
	                    <div class="col-lg-3">
	                      <label class="mt-2">Forma de pago</label>
	                      <select class="form-control" id="paso5SelectFormaDePago">
	                        <option hidden selected value="default">Selecciona una opción</option>
	                        <option value="contado">Contado</option>
	                        <option value="cuotas">Cuotas</option>
	                        <option value="pat">PAT</option>
	                        <option value="pac">PAC</option>
	                      </select>
	                    </div>
	                    <div class="col-lg-3 col-xl-2 d-none" id="paso5PagoCuotasCantidad">
	                      <label class="mt-2">Cantidad de cuotas</label>
	                      <input class="form-control" type="number">
	                    </div>
	                    <div class="col-lg-3 col-xl-2 d-none" id="paso5PagoCuotasDiaDePago">
	                      <label class="mt-2">Día de pago</label>
	                      <select class="form-control"></select>
	                    </div>
	                  </div>
	                  <div class="d-none" id="paso5FormularioPAT">
	                    <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Formulario PAT</h4>
	                    <div class="form-row">
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>RUT</label>
	                        <input class="form-control rutInput" type="text" name="rut-asegurado">
	                      </div>
	                    </div>
	                    <div class="form-row">
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Nombre</label>
	                        <input class="form-control" type="text" id="paso5PATnombre" name="paso5-pat-nombre">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Segundo Nombre</label>
	                        <input class="form-control" type="text" id="paso5PATsegundoNombre" name="paso5-pat-segundo-nombre">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Apellido paterno</label>
	                        <input class="form-control" type="text" id="paso5PATapellido1" name="paso5-pat-apellido1">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Apellido materno</label>
	                        <input class="form-control" type="text" id="paso5PATapellido2" name="paso5-pat-apellido2">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Teléfono</label>
	                        <input class="form-control" type="tel" id="paso5PATtel" name="paso5-pat-tel">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Email</label>
	                        <input class="form-control" type="email" id="paso5PATemail" name="paso5-pat-email">
	                      </div>
	                    </div>
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Dirección</h4>
	                    <div class="form-row">
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Región</label>
	                        <select class="form-control" type="text" id="paso5PATregion" name="paso5-pat-region"></select>
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Comuna</label>
	                        <select class="form-control" type="text" id="paso5PATcomuna" name="paso5-pat-comuna"></select>
	                      </div>
	                      <div class="col-md-6 col-lg-2 mt-2">
	                        <label>Calle</label>
	                        <input class="form-control" type="text" id="paso5PATcalle" name="paso5-pat-calle">
	                      </div>
	                      <div class="col-md-6 col-lg-2 mt-2">
	                        <label>Número</label>
	                        <input class="form-control" type="text" id="paso5PATnumero" name="paso5-pat-numero">
	                      </div>
	                      <div class="col-md-6 col-lg-2 mt-2">
	                        <label>Dpto/Casa</label>
	                        <input class="form-control" type="text" id="paso5PATdpto" name="paso5-pat-dpto">
	                      </div>
	                    </div>
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Datos tarjeta de crédito</h4>
	                    <div class="form-row">
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Tarjeta de crédito</label>
	                        <select class="form-control" id="paso5PATtarjetaCredito" name="paso5-pat-tarjeta-credito"></select>
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Número de tarjeta</label>
	                        <input class="form-control" type="number" id="paso5PATnroTarjeta" name="paso5-pat-nro-tarjeta">
	                      </div>
	                      <div class="col-md-6 col-lg-2 mt-2">
	                        <label>Vencimiento</label>
	                        <input class="form-control" type="text" id="paso5PATvencimiento" name="paso5-pat-vencimiento" placeholder="MM/AAAA">
	                      </div>
	                    </div>
	                    <div class="d-flex flex-wrap align-items-center mt-3">
	                      <button class="btn width-250 mr-2 border" data-toggle="modal" data-target="#condicionesPATmodal">
	                        <div class="p-3 d-flex align-items-center"><img src="assets/images/download-file-red.svg" alt="Descarga exclusiones">
	                          <p class="text-left font-weight-bold underline font-16 mb-0 ml-3">Leer<br> condiciones</p>
	                        </div>
	                      </button>
	                      <div class="custom-control custom-checkbox mb-2">
	                        <input class="custom-control-input" type="checkbox" id="aceptoCondicionesPaso5PATCheck">
	                        <label class="font-weight-bold custom-control-label" for="aceptoCondicionesPaso5PATCheck">Acepto las condiciones antes detalladas</label>
	                      </div>
	                    </div>
	                  </div>
	                  <div class="d-none" id="paso5FormularioPAC">
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Formulario PAC</h4>
	                    <div class="border">
	                      <h1 class="py-5 text-center">Formulario PAC</h1>
	                    </div>
	                  </div>
	                  <h4 class="mb-2 mt-4 pb-2 header-title text-primary font-weight-bold border-bottom">Facturación</h4>
	                  <div class="row">
	                    <div class="col-lg-3">
	                      <div class="switch-wrap">
	                        <div class="switch-group ml-0">
	                          <input class="switch-inverse" type="checkbox" id="paso5FacturacionSwitch" switch="none"/>
	                          <label for="paso5FacturacionSwitch" data-on-label="" data-off-label=""></label>
	                        </div>
	                        <label class="mb-0 ml-2 font-weight-bold" id="paso5FacturacionSwitch">Tiene Facturación</label>
	                      </div>
	                    </div>
	                    <div class="col-lg-9 d-none" id="facturacionOptionsSection">
	                      <div class="d-flex">
	                        <div class="custom-control custom-radio">
	                          <input class="custom-control-input" type="radio" name="paso5FacturacionOptions" id="paso5FacturacionOption1" value="anticipada">
	                          <label class="custom-control-label" for="paso5FacturacionOption1">Anticipada</label>
	                        </div>
	                        <div class="custom-control custom-radio ml-3">
	                          <input class="custom-control-input" type="radio" name="paso5FacturacionOptions" id="paso5FacturacionOption2" value="posteriorPago">
	                          <label class="custom-control-label" for="paso5FacturacionOption2">Posterior al pago</label>
	                        </div>
	                      </div>
	                    </div>
	                  </div>
	                  <p class="mb-0 font-italic">La facturación se emitirá al contratante de la póliza</p>
	                  <hr>
	                  <div class="form-row">
	                    <div class="col-lg-3">
	                      <label class="mt-2">Pagador</label>
	                      <select class="form-control" id="paso5SelectPagador">
	                        <option value="contratante">Contratante</option>
	                        <option value="asegurado">Asegurado</option>
	                        <option value="otro">Otro</option>
	                      </select>
	                    </div>
	                  </div>
	                  <div class="d-none" id="paso5DatosPagadorSection">
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Datos personales</h4>
	                    <div class="form-row">
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>RUT</label>
	                        <input class="form-control rutInput" type="text" name="rut-pagador">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Nombre</label>
	                        <input class="form-control" type="text" id="nombrePagador" name="nombre-pagador">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Apellido paterno</label>
	                        <input class="form-control" type="text" id="apellidoPagador1" name="apellido-pagador1">
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Apellido materno</label>
	                        <input class="form-control" type="text" id="apellidoPagador2" name="apellido-pagador2">
	                      </div>
	                    </div>
	                    <h4 class="mb-2 mt-4 pb-2 header-title font-weight-bold">Dirección</h4>
	                    <div class="form-row">
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Región</label>
	                        <select class="form-control" type="text" id="regionPagador" name="region-pagador"></select>
	                      </div>
	                      <div class="col-md-6 col-lg-3 mt-2">
	                        <label>Comuna</label>
	                        <select class="form-control" type="text" id="comunaPagador" name="comuna-pagador"></select>
	                      </div>
	                      <div class="col-md-6 col-lg-2 mt-2">
	                        <label>Calle</label>
	                        <input class="form-control" type="text" id="callePagador" name="calle-pagador">
	                      </div>
	                      <div class="col-md-6 col-lg-2 mt-2">
	                        <label>Número</label>
	                        <input class="form-control" type="text" id="numeroPagador" name="numero-pagador">
	                      </div>
	                      <div class="col-md-6 col-lg-2 mt-2">
	                        <label>Dpto/Casa</label>
	                        <input class="form-control" type="text" id="dptopagador" name="dpto-pagador">
	                      </div>
	                    </div>
	                  </div>
	                  <hr>
	                  <div class="no-border-btns">
	                    <button class="btn text-primary d-flex align-items-center" id="regresarFormulario5"><i class="mdi mdi-chevron-left-circle-outline"></i> <span class="ml-2">Regresar</span></button>
	                  </div>
	                  <hr>
	                  <div class="d-flex flex-column align-items-center">
	                    <button class="btn btn-primary">Enviar</button>
	                    <button class="btn underline text-primary">Descargar PDF</button>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div class="modal fade" id="condicionesPATmodal" tabindex="-1" role="dialog">
	              <div class="modal-dialog modal-lg" role="document">
	                <div class="modal-content">
	                  <div class="modal-header">
	                    <h5 class="modal-title text-primary text-uppercase font-weight-bold">Condiciones PAT</h5>
	                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	                  </div>
	                  <div class="modal-body">
	                    <p class="text-uppercase font-weight-bold mb-0">Primero</p>
	                    <p>Por el presente instrumento autorizo expresamente a Transbank S.A. a cargar a mi Tarjeta de Crédito arriba individualizada, el valor correspondiente por los servicios de seguros contratados con Renta Nacional Compañía de Seguros Generales S.A. Este cargo se efectuará en forma mensual por un período de meses o en forma indefinida</p>
	                    <p class="text-uppercase font-weight-bold mb-0">Segundo</p>
	                    <p>Convengo en Renta Nacional Compañía de Seguros Generales S.A. enviará a Transbank S.A. periódicamente la información de otro correspondiente, liberando de toda responsabilidad a Transbank S.A. si ello no ocurriera</p>
	                    <p class="text-uppercase font-weight-bold mb-0">Tercero</p>
	                    <p>El cargo se hará efectivo a partir de la fecha en que esta autorización sea aceptada por Transbank S.A. En caso que la autorización no sea aceptada, la situación le será comunicada al titular de la Tarjeta de Crédito por Renta Nacional Compañía de Seguros Generales S.A.</p>
	                    <p class="text-uppercase font-weight-bold mb-0">Cuarto</p>
	                    <p>El servicio de seguros entregado por Renta Nacional Compañía de Seguros Generales S.A., será de su única y exclusiva repsonsabilidad liberando a Transbank S.A. de cualquier obligación al respecto.</p>
	                    <p class="text-uppercase font-weight-bold mb-0">Quinto</p>
	                    <p>En el evento en que Transbank S.A. no puediese por cualquier circunstancia efectuar el cargo correspondiente, comunicará esta situación a Renta Nacional Compañía de Seguros Generales S.A.</p>
	                    <p class="text-uppercase font-weight-bold mb-0">Sexto</p>
	                    <p>La presente autorización se entenderá, para todos los efectos legales, dada el mismo día en que se lleve a efecto el cargo en la Tarjeta de Crédito. Asimismo, se entenderá renovada mes a mes, en tanto no se revoque por escrito.</p>
	                    <p class="text-uppercase font-weight-bold mb-0">Septimo</p>
	                    <p>La presente autorización de cargo en mi Tarjeta de Crédito continuará vigente hasta que yo la revoque por escrito a Renta Nacional Compañía de Seguros Generales S.A.</p>
	                    <p class="text-uppercase font-weight-bold mb-0">Octavo</p>
	                    <p>El presente mandato expirará automáticamente en el caso de termino de contrato entre Transbank S.A. y Renta Nacional Compañía de Seguros Generales S.A. y entre el titular y Renta Nacional Compañía de Seguros Generales S.A.</p>
	                    <p class="text-uppercase font-weight-bold mb-0">Noveno</p>
	                    <p>Convengo también que Transbank S.A. no tendrá responsabilidad alguna por el no comunes de cualquiera de las cuotas por parte del titular a Renta Nacional Compañía de Seguros Generales S.A.m aunque de dicho no comunes pueda resultar algún perjuicio para el tarjetahabiente o para Renta Nacional Compañía de Seguros Generales S.A.</p>
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

    export default {
      name: 'FormularioWeb',
	  /*components:{

	  },*/
      data () {
        return {

        }
      },
    

    }

</script>