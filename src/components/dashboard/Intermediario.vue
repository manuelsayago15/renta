<template>
	<div id="wrapper">
    	<Topbar></Topbar>
    	<SideMenu></SideMenu>
        <div class="content-page">
            <div class="content p-0">
              <div class="container-fluid">
                <div class="page-title-box p-0 pt-1">
                  <div class="row align-items-center">
                    <div class="col-sm-6">
                      <h4 class="page-title">Próximos vencimientos</h4>
                      <ol class="breadcrumb">
                      </ol>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-primary text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0"><span id="inicio_diez"></span><span id="gion_diez">&nbsp;&nbsp;-&nbsp;&nbsp;</span> <span id="fin_diez"></span></p>
                        <h3 class="m-0 font-weight-bold text-uppercase"><span id="total_diez"></span> Pólizas</h3>
                        <p class="m-0 font-weight-bold text-right">10 Días</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-card-info-2 text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0"><span id="inicio_veinte"></span>&nbsp;&nbsp;-&nbsp;&nbsp;<span id="fin_veinte"></span></p>
                        <h3 class="m-0 font-weight-bold text-uppercase"><span><span id="total_veinte"></span></span> Pólizas</h3>
                        <p class="m-0 font-weight-bold text-right">20 Días</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-card-info-3 text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0"><span id="inicio_treinta"></span>&nbsp;&nbsp;-&nbsp;&nbsp;<span id="fin_treinta"></span></p>
                        <h3 class="m-0 font-weight-bold text-uppercase"><span><span id="total_treinta"></span></span> Pólizas</h3>
                        <p class="m-0 font-weight-bold text-right">30 Días</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-card-info-4 text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0"><span id="inicio_cuarenta"></span>&nbsp;&nbsp;-&nbsp;&nbsp;<span id="fin_cuarenta"></span></p>
                        <h3 class="m-0 font-weight-bold text-uppercase"><span><span id="total_cuarenta"></span></span> Pólizas</h3>
                        <p class="m-0 font-weight-bold text-right">40 Días</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="card card--dashboard">
                      <div class="card-body card-body--dashboard">
                        <div class="row">
                          <div class="col-lg-6">
                            <h4 class="header-title m-0 font-weight-bold">Ventas por categorías</h4>
                          </div>
                          <div class="col-lg-6">
                            <ul class="nav nav-pills justify-content-end" role="tablist" id="ventas-categorias-tabs">
                             <!--  <li class="nav-item"><a class="nav-link nav-link--dashboard active" href="#ventas-categorias-uf" data-toggle="tab" aria-controls="ventas-categorias-uf" aria-selected="true" id="ventas-categorias-uf-tab">UF</a></li>-->
                            </ul>
                          </div>
                        </div>
                        <div class="tab-content" id="ventas-categorias-tabs-content">
                          <div class="bar-chart tab-pane fade show active" role="tabpanel" aria-labelledby="ventas-categorias-tab" id="ventas-categorias-todos">
                             <canvas id="ventas-categorias-chart"></canvas> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="card card--dashboard">
                      <div class="card-body card-body--dashboard">
                        <div class="row">
                          <div class="col-lg-6">
                            <h4 class="header-title m-0 font-weight-bold">Ventas últimos 15 días</h4>
                          </div>
                          <div class="col-lg-6">
                            <ul class="nav nav-pills justify-content-end" role="tablist" id="ventas-ultimos-dias-tabs">
                             <!--  <li class="nav-item"><a class="nav-link nav-link--dashboard active" href="#ventas-ultimos-dias-uf" data-toggle="tab" aria-controls="ventas-ultimos-dias-uf" aria-selected="true" id="ventas-ultimos-dias-uf-tab">UF</a></li>-->
                             </ul>
                          </div>
                        </div>
                        <div class="tab-content" id="ventas-ultimos-dias-content">
                          <div class="line-chart tab-pane fade show active" role="tabpanel" aria-labelledby="ventas-ultimos-dias-uf-tab" id="ventas-ultimos-15dias">
                            <canvas id="ventas-ultimos-15dias-chart"></canvas>
                          </div>
                        </div>
                        <div class="row pt-1">
                          <div class="col-sm-6 col-lg-12 col-xl-6">
                            <div class="d-flex"><img class="img-fluid" src="/src/assets/images/icon-up.svg">
                              <div class="pl-3">
                                <h5 class="m-0 text-uppercase font-weight-bold">Mayor Venta</h5>
                                <p class="m-0"><span id="fecha_mayor"></span>&nbsp;<span id="unidad_mayor"></span><span id="cantidad_mayor"></span></p>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6 col-lg-12 col-xl-6">
                            <div class="d-flex"><img class="img-fluid" src="/src/assets/images/icon-down.svg">
                              <div class="pl-3">
                                <h5 class="m-0 text-uppercase font-weight-bold">Menor Venta</h5>
                                <p class="m-0"><span id="fecha_menor"></span>&nbsp;<span id="unidad_menor"></span><span id="cantidad_menor"></span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card card--dashboard">
                  <div class="card-body card-body--dashboard">
                    <h4 class="header-title m-0 font-weight-bold">Últimas propuestas</h4>
                    <div class="table-responsive mb-0">
                      <table class="table table-striped table-small-font table-sm" id="top-intermediarios" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="text-center" data-priority="1">Id Propuesta</th>
                            <th class="text-center" data-priority="2">Fecha</th>
                            <th class="text-center" data-priority="2">Plan</th>
                            <th class="text-center" data-priority="1">Cliente</th>
                            <th class="text-center" data-priority="3">Prima Neta</th>
                            <th class="text-center" data-priority="1">Estado</th>
                            <th class="text-center" data-priority="3">Tipo</th>
                            <th class="text-center" data-priority="1">Días</th>
                          </tr>
                        </thead>
                        <tbody>
                          
                        </tbody>
                      </table>
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
      name: 'Intermediario',
	  /*components:{
	    Topbar,
	    SideMenu
	  },*/
      data () {
        return {

        }
      },
    

    }

</script>