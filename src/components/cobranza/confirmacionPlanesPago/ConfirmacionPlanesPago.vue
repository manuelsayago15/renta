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
                <h4 class="page-title">Confirmación planes de pago</h4>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Cobranza</a></li>
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Confirmación planes de pago</a></li>
                  <li class="breadcrumb-item active"><span></span></li>
                </ol>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="mt-0 header-title font-weight-bold">Planes de pago pendientes</h4>
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
                          <th class="font-weight-bold text-center">Póliza-Ítem</th>
                          <th class="font-weight-bold text-center">1er Venc</th>
                          <th class="font-weight-bold text-center">Rut Asegurado</th>
                          <th class="font-weight-bold text-center">Asegurado</th>
                          <th class="font-weight-bold text-center">Bruto</th>
                          <th class="font-weight-bold text-center">Monto</th>
                          <th class="font-weight-bold text-center">Cuotas</th>
                          <th class="font-weight-bold text-center">F. Pago</th>
                          <th class="font-weight-bold text-center">Plan de pago</th>
                          <th class="font-weight-bold text-center">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-center">963819-1</td>
                          <td class="text-center">10/10/2020</td>
                          <td class="text-center">18.985.584-6</td>
                          <td class="text-center">Mariana Carvajal Galvez</td>
                          <td class="text-center">UF 200</td>
                          <td class="text-center">UF 250</td>
                          <td class="text-center">10</td>
                          <td class="text-center">LOREM IPSUM</td>
                          <td class="text-center">PAT</td>
                          <td class="text-center"><span class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Confirmar plan"><i class="renta-icon-check1 text-success font-18 px-2" data-toggle="modal" data-target="#confirmar-poliza"></i></span><a href="page-editar-plan-pago.html" data-toggle="tooltip" data-placement="right" title="Editar plan"><i class="renta-icon-circle-edit text-info font-18 px-2"></i></a></td>
                        </tr>
                        <tr>
                          <td class="text-center">963819-1</td>
                          <td class="text-center">10/10/2020</td>
                          <td class="text-center">18.985.584-6</td>
                          <td class="text-center">Mariana Carvajal Galvez</td>
                          <td class="text-center">UF 200</td>
                          <td class="text-center">UF 250</td>
                          <td class="text-center">10</td>
                          <td class="text-center">LOREM IPSUM</td>
                          <td class="text-center">PAT</td>
                          <td class="text-center"><span class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Confirmar plan"><i class="renta-icon-check1 text-success font-18 px-2" data-toggle="modal" data-target="#confirmar-poliza"></i></span><a href="page-editar-plan-pago.html" data-toggle="tooltip" data-placement="right" title="Editar plan"><i class="renta-icon-circle-edit text-info font-18 px-2"></i></a></td>
                        </tr>
                        <tr>
                          <td class="text-center">963819-1</td>
                          <td class="text-center">10/10/2020</td>
                          <td class="text-center">18.985.584-6</td>
                          <td class="text-center">Mariana Carvajal Galvez</td>
                          <td class="text-center">UF 200</td>
                          <td class="text-center">UF 250</td>
                          <td class="text-center">10</td>
                          <td class="text-center">LOREM IPSUM</td>
                          <td class="text-center">PAT</td>
                          <td class="text-center"><span class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Confirmar plan"><i class="renta-icon-check1 text-success font-18 px-2" data-toggle="modal" data-target="#confirmar-poliza"></i></span><a href="page-editar-plan-pago.html" data-toggle="tooltip" data-placement="right" title="Editar plan"><i class="renta-icon-circle-edit text-info font-18 px-2"></i></a></td>
                        </tr>
                        <tr>
                          <td class="text-center">963819-1</td>
                          <td class="text-center">10/10/2020</td>
                          <td class="text-center">18.985.584-6</td>
                          <td class="text-center">Mariana Carvajal Galvez</td>
                          <td class="text-center">UF 200</td>
                          <td class="text-center">UF 250</td>
                          <td class="text-center">10</td>
                          <td class="text-center">LOREM IPSUM</td>
                          <td class="text-center">PAT</td>
                          <td class="text-center"><span class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Confirmar plan"><i class="renta-icon-check1 text-success font-18 px-2" data-toggle="modal" data-target="#confirmar-poliza"></i></span><a href="page-editar-plan-pago.html" data-toggle="tooltip" data-placement="right" title="Editar plan"><i class="renta-icon-circle-edit text-info font-18 px-2"></i></a></td>
                        </tr>
                        <tr>
                          <td class="text-center">963819-1</td>
                          <td class="text-center">10/10/2020</td>
                          <td class="text-center">18.985.584-6</td>
                          <td class="text-center">Mariana Carvajal Galvez</td>
                          <td class="text-center">UF 200</td>
                          <td class="text-center">UF 250</td>
                          <td class="text-center">10</td>
                          <td class="text-center">LOREM IPSUM</td>
                          <td class="text-center">PAT</td>
                          <td class="text-center"><span class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Confirmar plan"><i class="renta-icon-check1 text-success font-18 px-2" data-toggle="modal" data-target="#confirmar-poliza"></i></span><a href="page-editar-plan-pago.html" data-toggle="tooltip" data-placement="right" title="Editar plan"><i class="renta-icon-circle-edit text-info font-18 px-2"></i></a></td>
                        </tr>
                        <tr>
                          <td class="text-center">963819-1</td>
                          <td class="text-center">10/10/2020</td>
                          <td class="text-center">18.985.584-6</td>
                          <td class="text-center">Mariana Carvajal Galvez</td>
                          <td class="text-center">UF 200</td>
                          <td class="text-center">UF 250</td>
                          <td class="text-center">10</td>
                          <td class="text-center">LOREM IPSUM</td>
                          <td class="text-center">PAT</td>
                          <td class="text-center"><span class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Confirmar plan"><i class="renta-icon-check1 text-success font-18 px-2" data-toggle="modal" data-target="#confirmar-poliza"></i></span><a href="page-editar-plan-pago.html" data-toggle="tooltip" data-placement="right" title="Editar plan"><i class="renta-icon-circle-edit text-info font-18 px-2"></i></a></td>
                        </tr>
                        <tr>
                          <td class="text-center">963819-1</td>
                          <td class="text-center">10/10/2020</td>
                          <td class="text-center">18.985.584-6</td>
                          <td class="text-center">Mariana Carvajal Galvez</td>
                          <td class="text-center">UF 200</td>
                          <td class="text-center">UF 250</td>
                          <td class="text-center">10</td>
                          <td class="text-center">LOREM IPSUM</td>
                          <td class="text-center">PAT</td>
                          <td class="text-center"><span class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Confirmar plan"><i class="renta-icon-check1 text-success font-18 px-2" data-toggle="modal" data-target="#confirmar-poliza"></i></span><a href="page-editar-plan-pago.html" data-toggle="tooltip" data-placement="right" title="Editar plan"><i class="renta-icon-circle-edit text-info font-18 px-2"></i></a></td>
                        </tr>
                        <tr>
                          <td class="text-center">963819-1</td>
                          <td class="text-center">10/10/2020</td>
                          <td class="text-center">18.985.584-6</td>
                          <td class="text-center">Mariana Carvajal Galvez</td>
                          <td class="text-center">UF 200</td>
                          <td class="text-center">UF 250</td>
                          <td class="text-center">10</td>
                          <td class="text-center">LOREM IPSUM</td>
                          <td class="text-center">PAT</td>
                          <td class="text-center"><span class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Confirmar plan"><i class="renta-icon-check1 text-success font-18 px-2" data-toggle="modal" data-target="#confirmar-poliza"></i></span><a href="page-editar-plan-pago.html" data-toggle="tooltip" data-placement="right" title="Editar plan"><i class="renta-icon-circle-edit text-info font-18 px-2"></i></a></td>
                        </tr>
                        <tr>
                          <td class="text-center">963819-1</td>
                          <td class="text-center">10/10/2020</td>
                          <td class="text-center">18.985.584-6</td>
                          <td class="text-center">Mariana Carvajal Galvez</td>
                          <td class="text-center">UF 200</td>
                          <td class="text-center">UF 250</td>
                          <td class="text-center">10</td>
                          <td class="text-center">LOREM IPSUM</td>
                          <td class="text-center">PAT</td>
                          <td class="text-center"><span class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Confirmar plan"><i class="renta-icon-check1 text-success font-18 px-2" data-toggle="modal" data-target="#confirmar-poliza"></i></span><a href="page-editar-plan-pago.html" data-toggle="tooltip" data-placement="right" title="Editar plan"><i class="renta-icon-circle-edit text-info font-18 px-2"></i></a></td>
                        </tr>
                        <tr>
                          <td class="text-center">963819-1</td>
                          <td class="text-center">10/10/2020</td>
                          <td class="text-center">18.985.584-6</td>
                          <td class="text-center">Mariana Carvajal Galvez</td>
                          <td class="text-center">UF 200</td>
                          <td class="text-center">UF 250</td>
                          <td class="text-center">10</td>
                          <td class="text-center">LOREM IPSUM</td>
                          <td class="text-center">PAT</td>
                          <td class="text-center"><span class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Confirmar plan"><i class="renta-icon-check1 text-success font-18 px-2" data-toggle="modal" data-target="#confirmar-poliza"></i></span><a href="page-editar-plan-pago.html" data-toggle="tooltip" data-placement="right" title="Editar plan"><i class="renta-icon-circle-edit text-info font-18 px-2"></i></a></td>
                        </tr>
                        <tr>
                          <td class="text-center">963819-1</td>
                          <td class="text-center">10/10/2020</td>
                          <td class="text-center">18.985.584-6</td>
                          <td class="text-center">Mariana Carvajal Galvez</td>
                          <td class="text-center">UF 200</td>
                          <td class="text-center">UF 250</td>
                          <td class="text-center">10</td>
                          <td class="text-center">LOREM IPSUM</td>
                          <td class="text-center">PAT</td>
                          <td class="text-center"><span class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Confirmar plan"><i class="renta-icon-check1 text-success font-18 px-2" data-toggle="modal" data-target="#confirmar-poliza"></i></span><a href="page-editar-plan-pago.html" data-toggle="tooltip" data-placement="right" title="Editar plan"><i class="renta-icon-circle-edit text-info font-18 px-2"></i></a></td>
                        </tr>
                        <tr>
                          <td class="text-center">963819-1</td>
                          <td class="text-center">10/10/2020</td>
                          <td class="text-center">18.985.584-6</td>
                          <td class="text-center">Mariana Carvajal Galvez</td>
                          <td class="text-center">UF 200</td>
                          <td class="text-center">UF 250</td>
                          <td class="text-center">10</td>
                          <td class="text-center">LOREM IPSUM</td>
                          <td class="text-center">PAT</td>
                          <td class="text-center"><span class="cursor-pointer" href="#" data-toggle="tooltip" data-placement="right" title="Confirmar plan"><i class="renta-icon-check1 text-success font-18 px-2" data-toggle="modal" data-target="#confirmar-poliza"></i></span><a href="page-editar-plan-pago.html" data-toggle="tooltip" data-placement="right" title="Editar plan"><i class="renta-icon-circle-edit text-info font-18 px-2"></i></a></td>
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
                  <div class="modal fade" id="confirmar-poliza" tabindex="-1" role="dialog" aria-labelledby="confirmarPoliza" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body">
                          <p class="mb-0 text-center">¿Está seguro que desea confirmar el plan de pago de la póliza <span class="font-weight-bold">[n° de póliza</span>] que está conformado por <span class="font-weight-bold">[cantidad de cuotas</span>] de <span class="font-weight-bold">[valor de la cuota en UF</span>] cada una y con primer vencimiento el <span class="font-weight-bold">[Fecha primer vencimiento</span>]</p>
                        </div>
                        <div class="p-3 d-flex flex-column align-items-center">
                          <button class="btn btn-primary" type="button">Confirmar</button>
                          <button class="btn text-primary" type="button" data-dismiss="modal">Cancelar</button>
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
      name: 'ConfirmacionPlanesPago',
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