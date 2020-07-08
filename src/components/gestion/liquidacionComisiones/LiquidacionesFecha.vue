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
                  <li class="breadcrumb-item active"><span>Informe de comisiones a la fecha</span></li>
                </ol>
              </div>
            </div>
          </div>
          <div id="liquidacionComisionesData">
            <div class="row">
              <div class="col-lg-4">
                <div class="card card-comisiones-height">
                  <div class="card-body d-flex flex-column justify-content-center align-items-center">
                    <div class="row card-row--width-100-xl">
                      <div class="col-sm-4 d-flex align-items-center justify-content-center"><img src="assets/images/monedas.svg" alt="Liquidación"></div>
                      <div class="col-sm-8">
                        <p class="m-0">Resumen periodo</p>
                        <p class="m-0 font-weight-bold"><span>25/02/2020</span> <span>30/01/2020</span> - <span>10/03/2020</span></p>
                        <p class="m-0 font-weight-bold text-uppercase text-primary">Monto liquidado</p>
                        <p class="m-0 font-weight-bold font-20">$ <span>100.000.000</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h3 class="header-title--big mt-0 font-weight-bold">Detalle de comisiones</h3>
                <button class="btn btn-excel text-white" data-toggle="tooltip" data-placement="right" title="Archivo con el detalle en todas las monedas"><i class="renta-icon-excel"></i> Excel</button>
                <ul class="nav nav-pills nav-pills--border mt-2" id="liquidacionComisionesTabs">
                  <li class="nav-item"><a class="nav-link active" id="polizasUfTab" data-toggle="tab" href="#polizasUf" role="tab" aria-controls="polizasUf" aria-selected="true">Pólizas en UF</a></li>
                  <li class="nav-item"><a class="nav-link" id="polizasClpTab" data-toggle="tab" href="#polizasClp" role="tab" aria-controls="polizasClp" aria-selected="true">Pólizas en CLP</a></li>
                  <li class="nav-item"><a class="nav-link" id="polizasUsdTab" data-toggle="tab" href="#polizasUsd" role="tab" aria-controls="polizasUsd" aria-selected="true">Pólizas en USD</a></li>
                </ul>
                <div class="tab-content" id="liquidacionComisionesTabsContent">
                  <div class="tab-pane fade show active" id="polizasUf" role="tabpanel" aria-labelledby="polizasUfTab">
                    <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                      <table class="table table-striped table-small-font table-sm" id="polizasUfDt" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">Moneda</th>
                            <th class="font-weight-bold" data-priority="1">Ramo</th>
                            <th class="font-weight-bold" data-priority="2">Póliza</th>
                            <th class="font-weight-bold" data-priority="1">Endoso</th>
                            <th class="font-weight-bold" data-priority="3">Prima</th>
                            <th class="font-weight-bold" data-priority="3">%Com</th>
                            <th class="font-weight-bold" data-priority="3">Comisión</th>
                            <th class="font-weight-bold" data-priority="3">Nombre asegurado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>UF</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>UF</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>UF</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>UF</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>UF</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>UF</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>UF</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>UF</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>UF</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>UF</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="polizasClp" role="tabpanel" aria-labelledby="polizasClpTab">
                    <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                      <table class="table table-striped table-small-font table-sm" id="polizasClpDt" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">Moneda</th>
                            <th class="font-weight-bold" data-priority="1">Ramo</th>
                            <th class="font-weight-bold" data-priority="2">Póliza</th>
                            <th class="font-weight-bold" data-priority="1">Endoso</th>
                            <th class="font-weight-bold" data-priority="3">Prima</th>
                            <th class="font-weight-bold" data-priority="3">%Com</th>
                            <th class="font-weight-bold" data-priority="3">Comisión</th>
                            <th class="font-weight-bold" data-priority="3">Nombre asegurado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>CLP</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>CLP</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>CLP</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>CLP</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>CLP</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>CLP</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>CLP</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>CLP</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>CLP</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>CLP</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="polizasUsd" role="tabpanel" aria-labelledby="polizasUsdTab">
                    <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                      <table class="table table-striped table-small-font table-sm" id="polizasUsdDt" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">Moneda</th>
                            <th class="font-weight-bold" data-priority="1">Ramo</th>
                            <th class="font-weight-bold" data-priority="2">Póliza</th>
                            <th class="font-weight-bold" data-priority="1">Endoso</th>
                            <th class="font-weight-bold" data-priority="3">Prima</th>
                            <th class="font-weight-bold" data-priority="3">%Com</th>
                            <th class="font-weight-bold" data-priority="3">Comisión</th>
                            <th class="font-weight-bold" data-priority="3">Nombre asegurado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>USD</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>USD</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>USD</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>USD</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>USD</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>USD</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>USD</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>USD</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>USD</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                          <tr>
                            <td>USD</td>
                            <td class="text-uppercase">Incendio Habitacional</td>
                            <td>1037052-1</td>
                            <td>0</td>
                            <td class="bg-light">3.19</td>
                            <td>27,00</td>
                            <td class="bg-light">0,86</td>
                            <td class="text-uppercase">Soc. Forestal Agrícola y Ganadera CATRIP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-md-4">
                    <div class="card p-2 border">
                      <div class="d-flex justify-content-around flex-column flex-sm-row flex-wrap align-items-center card-total-comision-height">
                        <p class="m-0 font-16 align-self-sm-end">Total moneda</p>
                        <div class="d-flex justify-content-between card-total-moneda-width">
                          <div class="total-prima px-1">
                            <p class="font-12 text-uppercase m-0">Prima</p>
                            <p class="font-16 font-weight-bold m-0">359.75</p>
                          </div>
                          <div class="total-comision px-1">
                            <p class="font-12 text-uppercase m-0">Comisión</p>
                            <p class="font-16 font-weight-bold m-0">58,26</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card p-2 border">
                      <div class="d-flex justify-content-around flex-column flex-sm-row flex-wrap align-items-center card-total-comision-height">
                        <p class="m-0 font-16 text-center">Total comisión pesos</p>
                        <p class="font-16 font-weight-bold m-0">1.655.220,00</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card p-2 border">
                      <div class="d-flex justify-content-around flex-column flex-sm-row flex-wrap align-items-center card-total-comision-height">
                        <p class="m-0 font-16 text-center">Valor <span class="font-weight-bold">UF</span> a la fecha</p>
                        <p class="font-16 font-weight-bold m-0">$ <span>28.410,87</span></p>
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
      name: 'LiquidacionesFecha',
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