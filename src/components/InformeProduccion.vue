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
                <h4 class="page-title">Informe de producción</h4>
                <ol class="breadcrumb">
                </ol>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="mt-0 header-title font-weight-bold">Filtrar</h4>
              <div class="form-row">
                <div class="col-md-6 col-lg-3">
                  <label>Póliza</label>
                  <div class="position-relative">
                    <input class="form-control" type="number">
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <label>Endosos</label>
                  <div class="position-relative">
                    <input class="form-control" type="text">
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <label>Macroplan</label>
                  <div class="position-relative">
                    <input class="form-control" type="text">
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <label>Fecha rango</label>
                  <div class="position-relative">
                    <input class="form-control" type="date"><span class="calendar-icon informe-produccion-date-icon"><i class="renta-icon-calendar font-24"></i></span>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-3">
                <p class="m-0 font-italic">Puedes elegir cualquiera de los campos para filtrar</p>
                <button class="align-self-end btn btn-primary">Filtrar</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div id="informeProduccion">
                <ul class="nav nav-tabs" id="informeProduccionTabs" role="tablist">
                  <li class="nav-item"><a class="nav-link active font-weight-bold" id="informeProduccionUFTab" data-toggle="tab" href="#informeProduccionUF" role="tab" aria-controls="informeProduccionUF" aria-selected="true">UF</a></li>
                  <li class="nav-item"><a class="nav-link font-weight-bold" id="informeProduccionUSDTab" data-toggle="tab" href="#informeProduccionUSD" role="tab" aria-controls="informeProduccionUSD" aria-selected="false">USD</a></li>
                  <li class="nav-item"><a class="nav-link font-weight-bold" id="informeProduccionCLPTab" data-toggle="tab" href="#informeProduccionCLP" role="tab" aria-controls="informeProduccionCLP" aria-selected="false">CLP</a></li>
                </ul>
                <div class="tab-content" id="informeProduccionTabsContent">
                  <div class="tab-pane fade show active" id="informeProduccionUF" role="tabpanel" aria-labelledby="informeProduccionUF">
                    <div class="row py-2">
                      <div class="col-md-6 d-flex align-items-center">
                        <button class="btn btn-secondary btn-excel mr-2 d-flex align-content-center mr-2"><i class="renta-icon-excel font-24"></i> Excel</button>
                      </div>
                      <div class="col-md-6">
                        <div class="d-flex justify-content-end align-items-center">
                          <button class="btn btn-primary table-button-left">Mostrar todo</button>
                          <button class="btn btn-secondary table-button-right">Seleccionar</button>
                        </div>
                      </div>
                    </div>
                    <div class="table-responsive mb-0 mt-3">
                      <table class="table table-striped table-small-font table-sm" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold">Ramo</th>
                            <th class="font-weight-bold">Póliza</th>
                            <th class="font-weight-bold">It</th>
                            <th class="font-weight-bold">End</th>
                            <th class="font-weight-bold">Oficina</th>
                            <th class="font-weight-bold">RUT contratante</th>
                            <th class="font-weight-bold">Contratante</th>
                            <th class="font-weight-bold">RUT Asegurado</th>
                            <th class="font-weight-bold">Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
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
                  <div class="tab-pane fade" id="informeProduccionUSD" role="tabpanel" aria-labelledby="informeProduccionUSD">
                    <div class="row py-2">
                      <div class="col-md-6 d-flex align-items-center">
                        <button class="btn btn-secondary btn-excel mr-2 d-flex align-content-center mr-2"><i class="renta-icon-excel font-24"></i> Excel</button>
                      </div>
                      <div class="col-md-6">
                        <div class="d-flex justify-content-end align-items-center">
                          <button class="btn btn-primary table-button-left">Mostrar todo</button>
                          <button class="btn btn-secondary table-button-right">Seleccionar</button>
                        </div>
                      </div>
                    </div>
                    <div class="table-responsive mb-0 mt-3">
                      <table class="table table-striped table-small-font table-sm" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold">Ramo</th>
                            <th class="font-weight-bold">Póliza</th>
                            <th class="font-weight-bold">It</th>
                            <th class="font-weight-bold">End</th>
                            <th class="font-weight-bold">Oficina</th>
                            <th class="font-weight-bold">RUT contratante</th>
                            <th class="font-weight-bold">Contratante</th>
                            <th class="font-weight-bold">RUT Asegurado</th>
                            <th class="font-weight-bold">Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
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
                  <div class="tab-pane fade" id="informeProduccionCLP" role="tabpanel" aria-labelledby="informeProduccionCLP">
                    <div class="row py-2">
                      <div class="col-md-6 d-flex align-items-center">
                        <button class="btn btn-secondary btn-excel mr-2 d-flex align-content-center mr-2"><i class="renta-icon-excel font-24"></i> Excel</button>
                      </div>
                      <div class="col-md-6">
                        <div class="d-flex justify-content-end align-items-center">
                          <button class="btn btn-primary table-button-left">Mostrar todo</button>
                          <button class="btn btn-secondary table-button-right">Seleccionar</button>
                        </div>
                      </div>
                    </div>
                    <div class="table-responsive mb-0 mt-3">
                      <table class="table table-striped table-small-font table-sm" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold">Ramo</th>
                            <th class="font-weight-bold">Póliza</th>
                            <th class="font-weight-bold">It</th>
                            <th class="font-weight-bold">End</th>
                            <th class="font-weight-bold">Oficina</th>
                            <th class="font-weight-bold">RUT contratante</th>
                            <th class="font-weight-bold">Contratante</th>
                            <th class="font-weight-bold">RUT Asegurado</th>
                            <th class="font-weight-bold">Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
                          </tr>
                          <tr>
                            <td>Lorem ipsum</td>
                            <td>123456</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Casa Matriz</td>
                            <td>15.789.254-6</td>
                            <td>Simòn Gonzales Garrido</td>
                            <td>15.789.254-6</td>
                            <td>Lorem ipsum</td>
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
      name: 'InformeProduccion',
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