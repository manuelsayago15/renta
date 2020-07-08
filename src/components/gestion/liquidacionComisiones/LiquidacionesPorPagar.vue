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
                <h4 class="page-title">Liquidación de comisiones</h4>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Gestión</a></li>
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Liquidación de comisiones</a></li>
                  <li class="breadcrumb-item active"><span>Liquidaciones por pagar</span></li>
                </ol>
              </div>
            </div>
          </div>
          <div id="liquidacionComisionesData">
            <div class="row">
              <div class="col-lg-6 col-xl-5">
                <div class="card card-comisiones-height">
                  <div class="card-body d-flex flex-column justify-content-center align-items-center">
                    <div class="row card-row--width-100-xl">
                      <div class="col-sm-4 d-flex align-items-center justify-content-center"><img src="assets/images/dinero.svg" alt="Liquidación"></div>
                      <div class="col-sm-8">
                        <p class="m-0">Resumen periodo</p>
                        <p class="m-0 font-weight-bold"><span>20/03/2020</span> <span>30/01/2020</span> - <span>10/03/2020</span></p>
                        <p class="m-0 font-weight-bold text-uppercase text-primary">Monto a liquidar</p>
                        <p class="m-0 font-weight-bold font-20">$ <span>100.000.000</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-xl-4">
                <div class="card card-comisiones-height">
                  <div class="card-body d-flex flex-column justify-content-center align-items-center">
                    <div class="row card-row--width-100-xl">
                      <div class="col-sm-4 d-flex align-items-center justify-content-center"><img src="assets/images/download-file-red.svg" alt="Liquidación"></div>
                      <div class="col-sm-8">
                        <p class="m-0 mb-1 font-16 l-h-25 center-small">Descargar liquidación del <span class="font-weight-bold">periodo actual</span></p>
                        <div class="center-small">
                          <button class="btn btn-primary">Descargar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-xl-3">
                <div class="card card-comisiones-height" id="agregarDocumentoCard">
                  <div class="card-body d-flex flex-column justify-content-center align-items-center">
                    <p class="m-0 mb-1 text-center font-16 l-h-25">Para recibir el <span class="font-weight-bold">pago</span> debe añadir una boleta o</p>
                    <button class="btn btn-primary" id="agregarDocumento">Añadir documento</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none" id="liquidacionCargaDocumento">
            <div class="card">
              <div class="card-body">
                <div class="no-border-btns">
                  <button class="liquidacion-regresar-btn btn text-primary d-flex align-items-center"><i class="mdi mdi-chevron-left-circle-outline"></i> <span class="ml-2">Regresar</span></button>
                </div>
                <div class="dropfiles-section mt-3">
                  <h3 class="subtitle">Carga de documento</h3>
                  <div class="dropfiles-section inner-text mb-2 d-flex align-items-center">
                    <p class="m-0">Ingrese una boleta o factura del periodo</p>
                    <button class="ml-2 btn btn-primary d-none" id="examinar">Examinar</button>
                  </div>
                  <div class="dropzone" id="uploadFile">
                    <div class="fallback">
                      <input name="file" type="file" multiple="multiple">
                      <div class="dz-message" data-dz-message><span>Carga tus archivos</span></div>
                    </div>
                  </div>
                </div>
                <h3 class="subtitle">Opción de pago seleccionada</h3>
                <div class="row">
                  <div class="col-lg-4">
                    <div class="alert alert-success cambio-metodo-pago d-flex flex-column justify-content-center">
                      <h3 class="subtitle">Cambio de medio de pago</h3>
                      <p>Si desea cambiar el modo de pago, favor ingresar a <span class="font-weight-bold">Mi Perfil</span>. donde podrá elegir <span class="font-weight-bold">entre Cheque o Transferencia bancaria</span>.</p>
                    </div>
                  </div>
                  <div class="col-lg-8">  
                    <div class="border p-3">
                      <h3 class="subtitle">Cheque</h3>
                      <div class="opcion-pago-seleccionada d-flex flex-column justify-content-center">
                        <div class="d-flex justify-content-center align-items-center"><img class="p-2" src="assets/images/cheque.svg" alt="Cheque">
                          <p class="p-2 m-0">Se realizará un cheque a nombre de <span class="font-weight-bold text-uppercase">Lidia Nuñez y CIA Limitada</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="border p-3">
                      <h3 class="subtitle">Transferencia</h3>
                      <div class="opcion-pago-seleccionada d-flex flex-column justify-content-center">
                        <div class="d-flex align-items-center"><img class="p-2" src="assets/images/banco.svg" alt="Transferencia">
                          <div class="p-2 flex-grow-1">
                            <p class="m-0 font-weight-bold text-uppercase border-bottom">Mariana Carvajal Galvez</p>
                            <p class="m-0 border-bottom">Banco: <span id="banco">Banco Santander</span></p>
                            <p class="m-0 border-bottom">RUT: <span id="rut">99.999.999-8</span></p>
                            <p class="m-0 border-bottom">Tipo de cuenta <span class="text-uppercase" id="tipoDeCuenta">Cuenta Corriente</span></p>
                            <p class="m-0 border-bottom">N° de cuenta: <span class="text-uppercase" id="nroDeCuenta">000122458472</span></p>
                            <p class="m-0">Correo <span class="text-uppercase" id="correo">Cuenta Corriente</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-3 d-flex align-items-center flex-column">
                  <div class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="confirmacion">
                    <label class="custom-control-label" for="confirmacion">Confirmo que los documentos y liquidación fueron revisados y son correctos</label>
                  </div>
                  <div class="mt-2">
                    <button class="btn underline text-primary" id="liquidacionCancelarBtn">Cancelar</button>
                    <button class="btn btn-primary" id="enviarDocumentoBtn" disabled>Enviar documento</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none" id="documentoEnviado">
            <div class="card">
              <div class="card-body">
                <div class="no-border-btns">
                  <button class="liquidacion-regresar-btn btn text-primary d-flex align-items-center"><i class="mdi mdi-chevron-left-circle-outline"></i> <span class="ml-2">Regresar</span></button>
                </div>
                <div class="alert alert-success documento-enviado-alerta d-flex align-items-center justify-content-center">
                  <h2 class="font-weight-bold">Su documento fue enviado correctamente</h2>
                </div>
                <div class="mt-3 d-flex justify-content-center">
                  <button class="liquidacion-regresar-btn btn btn-primary">Regresar a liquidadores</button>
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
      name: 'LiquidacionesPorPagar',
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