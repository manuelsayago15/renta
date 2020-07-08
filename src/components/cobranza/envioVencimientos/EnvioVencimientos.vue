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
                  <h4 class="page-title">Envío de avisos de vencimiento</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Cobranza</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Envío de avisos de vencimiento</a></li>
                    <li class="breadcrumb-item active"><span></span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <ul class="nav nav-tabs" id="envioAvisosVencimientoTabs" role="tablist">
                  <li class="nav-item"><a class="nav-link active font-weight-bold" id="avisosVencimientoTab" data-toggle="tab" href="#avisosVencimiento" role="tab" aria-controls="avisosVencimiento" aria-selected="true">Vencimiento 15 días</a></li>
                  <li class="nav-item"><a class="nav-link font-weight-bold" id="cartaCancelacionTab" data-toggle="tab" href="#cartaCancelacion" role="tab" aria-controls="cartaCancelacion" aria-selected="false">Vencimiento 30 días</a></li>
                </ul>
                <div class="tab-content" id="envioAvisosVencimientoTabsContent">
                  <div class="tab-pane fade show active" id="avisosVencimiento" role="tabpanel" aria-labelledby="avisosVencimiento">
                    <div class="row py-2">
                      <div class="col-md-6 d-flex align-items-center">
                        <p class="mb-0">Mostrando [n] de [n]</p>
                      </div>
                      <div class="col-md-6">
                        <div class="d-flex justify-content-end align-items-center">
                          <label class="font-weight-bold pr-2">Buscar</label>
                          <input class="form-control input-buscar" type="text">
                        </div>
                      </div>
                    </div>
                    <div class="table-responsive mb-0">
                      <table class="table table-striped table-small-font table-sm" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">Cliente</th>
                            <th class="font-weight-bold" data-priority="3">Póliza</th>
                            <th class="font-weight-bold text-center" data-priority="3">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
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
                  <div class="tab-pane fade" id="cartaCancelacion" role="tabpanel" aria-labelledby="cartaCancelacion">
                    <div class="row py-2">
                      <div class="col-md-6 d-flex align-items-center">
                        <p class="mb-0">Mostrando [n] de [n]</p>
                      </div>
                      <div class="col-md-6">
                        <div class="d-flex justify-content-end align-items-center">
                          <label class="font-weight-bold pr-2">Buscar</label>
                          <input class="form-control input-buscar" type="text">
                        </div>
                      </div>
                    </div>
                    <div class="table-responsive mb-0">
                      <table class="table table-striped table-small-font table-sm" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">Cliente</th>
                            <th class="font-weight-bold" data-priority="3">Póliza</th>
                            <th class="font-weight-bold text-center" data-priority="3">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
                          </tr>
                          <tr>
                            <td class="mr-2">Mariana Carvajal Galvez</td>
                            <td class="mr-2">123456-7</td>
                            <td class="text-center text-center"><a class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Descargar"><i class="renta-icon-download text-primary font-28 px-2"></i></a><span class="cursor-pointer" data-toggle="tooltip" data-placement="right" title="Enviar"><i class="renta-icon-enviar text-primary font-28 px-2" data-toggle="modal" data-target="#enviar-aviso"></i></span></td>
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
                <div class="modal fade" id="enviar-aviso" tabindex="-1" role="dialog" aria-labelledby="enviarAviso" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title font-weight-bold" id="enviarAvisoTitle">Envío de avisos de vencimiento</h4>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div class="modal-body">
                        <label class="font-weoght-bold">Asunto</label>
                        <input class="form-control" type="text">
                        <label class="font-weoght-bold">De:</label>
                        <input class="form-control" type="text">
                        <label class="font-weoght-bold">Para:</label>
                        <input class="form-control" type="text">
                        <div class="border mt-2 p-4"><img src="assets/images/logo-renta-nacional.png" alt="Logo Renta">
                          <p>Estimado [nombre]</p>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ullam ipsa enim sit assumenda reprehenderit! Perferendis doloremque</p>
                          <p>non maiores tempore quas, aspernatur nesciunt sint sequi consequatur obcaecati, facilis dignissimos debitis.</p>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button class="btn text-primary" type="button" data-dismiss="modal">Cancelar</button>
                        <button class="btn btn-primary" type="button">Enviar correo</button>
                      </div>
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
      name: 'EnvioVencimientos',
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