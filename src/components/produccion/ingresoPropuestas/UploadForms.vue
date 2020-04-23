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
                  <h4 class="page-title">Carga de formulario</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Producción</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Ingreso de propuesta</a></li>
                    <li class="breadcrumb-item active"><span>Carga de formulario</span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="form-row">
                      <div class="col-lg-3">
                        <label>RUT</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="col-lg-3">
                        <label>Producto</label>
                        <select class="form-control">
                          <option>Seleccione un producto</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-lg-3">
                        <label>ítem</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="col-lg-3">
                        <label>Sucursal</label>
                        <select class="form-control">
                          <option>Seleccione una suscursal</option>
                        </select>
                      </div>
                    </div>
                    <div class="dropfiles-section upperline mt-3">
                      <h3 class="subtitle">Subir Archivo</h3>
                      <div class="dropfiles-section inner-text mb-2 d-flex align-items-center">
                        <p class="m-0">Elija los archivos que desea cargar en su propuesta </p>
                        <button class="ml-2 btn btn-primary d-none" id="examinar">Examinar</button>
                      </div>
                      <div class="dropzone" id="uploadFile">
                        <div class="fallback">
                          <input name="file" type="file" multiple="multiple">
                          <div class="dz-message" data-dz-message><span>Carga tus archivos</span></div>
                        </div>
                      </div>
                    </div>
                    <div class="action-section d-flex justify-content-center align-items-center">                                   
                      <button class="btn btn-primary btn-lg" type="submit">Enviar propuesta</button>
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