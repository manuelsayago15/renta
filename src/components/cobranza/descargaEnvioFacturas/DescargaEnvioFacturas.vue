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
                  <h4 class="page-title">Descarga y envío de facturas</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Cobranza</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Descarga y envío de facturas</a></li>
                    <li class="breadcrumb-item active"><span></span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="mt-0 header-title font-weight-bold">Filtrar</h4>
                <div class="row">
                  <div class="col-lg-5 col-xl-3">
                    <label>Póliza</label>
                    <input class="form-control" type="number">
                  </div>
                  <div class="col-lg-5 col-xl-3">
                    <label>RUT</label>
                    <input class="form-control" type="number">
                  </div>
                  <div class="col-md-2 d-flex align-items-end">
                    <button class="btn btn-primary">Buscar</button>
                  </div>
                </div>
                <p class="font-italic mt-2">Puedes elegir cualquiera de los campos para filtrar</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="mt-0 header-title font-weight-bold">Resultados</h4>
                <div class="row py-2">
                  <div class="col-md-6 d-flex align-items-center">
                    <p class="mb-0 text-primary font-weight-bold">Datos cliente</p>
                  </div>
                  <div class="col-md-6">
                    <div class="d-flex justify-content-end align-items-center">
                      <button class="btn btn-primary table-button-left">Mostrar todo</button>
                      <button class="btn btn-secondary table-button-right">Seleccionar</button>
                    </div>
                  </div>
                </div>
                <div class="table-responsive mb-0">
                  <table class="table table-striped table-small-font table-sm" style="width: 100%">
                    <thead>
                      <tr>
                        <th class="font-weight-bold text-center">N°Póliza</th>
                        <th class="font-weight-bold text-center">N. Pagador</th>
                        <th class="font-weight-bold text-center">Dirección</th>
                        <th class="font-weight-bold text-center">Vía de pago</th>
                        <th class="font-weight-bold text-center">Ramo</th>
                        <th class="font-weight-bold text-center">Forma de pago</th>
                        <th class="font-weight-bold text-center">Rut Pagador</th>
                        <th class="font-weight-bold text-center">Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a class="text-primary underline" href="page-descarga-envio-facturas-datos-poliza.html">963819-1</a></td>
                        <td>Mariana Carvajal Galez</td>
                        <td>Eliodoro Yañez 1163, Providencia</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>15.878.958.5</td>
                        <td>LOREM IPSUM</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-descarga-envio-facturas-datos-poliza.html">963819-1</a></td>
                        <td>Mariana Carvajal Galez</td>
                        <td>Eliodoro Yañez 1163, Providencia</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>15.878.958.5</td>
                        <td>LOREM IPSUM</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-descarga-envio-facturas-datos-poliza.html">963819-1</a></td>
                        <td>Mariana Carvajal Galez</td>
                        <td>Eliodoro Yañez 1163, Providencia</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>15.878.958.5</td>
                        <td>LOREM IPSUM</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-descarga-envio-facturas-datos-poliza.html">963819-1</a></td>
                        <td>Mariana Carvajal Galez</td>
                        <td>Eliodoro Yañez 1163, Providencia</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>15.878.958.5</td>
                        <td>LOREM IPSUM</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-descarga-envio-facturas-datos-poliza.html">963819-1</a></td>
                        <td>Mariana Carvajal Galez</td>
                        <td>Eliodoro Yañez 1163, Providencia</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>15.878.958.5</td>
                        <td>LOREM IPSUM</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-descarga-envio-facturas-datos-poliza.html">963819-1</a></td>
                        <td>Mariana Carvajal Galez</td>
                        <td>Eliodoro Yañez 1163, Providencia</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>15.878.958.5</td>
                        <td>LOREM IPSUM</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-descarga-envio-facturas-datos-poliza.html">963819-1</a></td>
                        <td>Mariana Carvajal Galez</td>
                        <td>Eliodoro Yañez 1163, Providencia</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>15.878.958.5</td>
                        <td>LOREM IPSUM</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-descarga-envio-facturas-datos-poliza.html">963819-1</a></td>
                        <td>Mariana Carvajal Galez</td>
                        <td>Eliodoro Yañez 1163, Providencia</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>15.878.958.5</td>
                        <td>LOREM IPSUM</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-descarga-envio-facturas-datos-poliza.html">963819-1</a></td>
                        <td>Mariana Carvajal Galez</td>
                        <td>Eliodoro Yañez 1163, Providencia</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>15.878.958.5</td>
                        <td>LOREM IPSUM</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-descarga-envio-facturas-datos-poliza.html">963819-1</a></td>
                        <td>Mariana Carvajal Galez</td>
                        <td>Eliodoro Yañez 1163, Providencia</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>LOREM IPSUM</td>
                        <td>15.878.958.5</td>
                        <td>LOREM IPSUM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="d-flex justify-content-end">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
                      <li class="page-item active"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
                    </ul>
                  </nav>
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
      name: 'DescargaEnvioFacturas',
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