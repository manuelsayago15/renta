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
                  <h4 class="page-title">Solicitud de endoso</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Producción</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Solicitud de endoso</a></li>
                    <li class="breadcrumb-item active"><span></span></li>
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
                        <label>Número de póliza</label>
                        <input class="form-control" type="number">
                      </div>
                      <div class="col-lg-3">
                        <label>Ítem</label>
                        <input class="form-control" type="number">
                      </div>
                      <div class="col-lg-1 d-flex">
                        <button class="btn btn-primary align-self-end btn-endoso-buscar"><i class="fas fa-search"></i></button>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-lg-3">
                        <label>Nombre</label>
                        <input class="form-control" type="text" readonly>
                      </div>
                      <div class="col-lg-3">
                        <label>Plan:</label>
                        <input class="form-control" type="text" readonly>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-lg-3">
                        <label>Vigencia</label>
                        <input class="form-control" type="text" readonly placeholder="Desde">
                      </div>
                      <div class="col-lg-3 d-flex">
                        <input class="form-control align-self-end" type="text" readonly placeholder="Hasta">
                      </div>
                    </div>
                    <div class="dropfiles-section upperline mt-3">
                      <h3 class="subtitle">Subir archivo</h3>
                      <div class="dropfiles-section inner-text mb-2 d-flex align-items-center">
                        <p class="m-0">Elija los archivos que desea cargar en su solicitud de endoso</p>
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