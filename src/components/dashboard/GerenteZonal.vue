<template>
  <div id="wrapper">
    <Topbar></Topbar>
    <SideMenu></SideMenu>
    <div class="content-page">
      <div class="content p-0">
        <div class="container-fluid">
          <div class="row pt-2">
            <div class="col-lg-6">
              <div class="card card--dashboard">
                <div class="card-body card-body--dashboard">
                  <div class="row">
                    <div class="col-lg-6">
                      <h4 class="header-title m-0 font-weight-bold">Ventas por categorías</h4>
                    </div>
                    <div class="col-lg-6">
                      <ul class="nav nav-pills justify-content-end" role="tablist" id="ventas-categorias-tabs">
                       <!--  <li class="nav-item"><a class="nav-link nav-link--dashboard active" href="#ventas-categorias" data-toggle="tab" aria-controls="ventas-categorias-zonal" aria-selected="true" id="ventas-categorias-zonal">UF</a></li> -->  
                      </ul>
                    </div>
                  </div>
                  <div class="tab-content" id="ventas-categorias-tabs-content">
                    <div class="bar-chart tab-pane fade show active" role="tabpanel" 
                      aria-labelledby="ventas-categorias-uf-tab" id="ventas-categorias-zonal-tabs">
                      <canvas id="ventas-categorias-zonal-chart"></canvas>
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
                      <ul class="nav nav-pills justify-content-end" role="tablist" id="ventas-ultimos-15dias-tabs">
                       <!--  <li class="nav-item"><a class="nav-link nav-link--dashboard active" href="#ventas-ultimos-dias-uf" data-toggle="tab" aria-controls="ventas-ultimos-dias-uf" aria-selected="true" id="ventas-ultimos-15dias-uf-tab">UF</a></li> -->
                      </ul>
                    </div>
                  </div>
                  <div class="tab-content" id="ventas-ultimos-15dias-content">
                    <div class="line-chart tab-pane fade show active" role="tabpanel" aria-labelledby="ventas-ultimos-dias-uf-tab" id="ventas-ultimos-15dias">
                      <canvas id="ventas-ultimos-15dias-chart"></canvas>
                    </div>
                  </div>
                  <div class="row pt-1">
                    <div class="col-sm-6 col-lg-12 col-xl-6">
                      <div class="d-flex"><img class="img-fluid" src="/assets/images/icon-up.svg">
                        <div class="pl-3">
                          <h5 class="m-0 text-uppercase font-weight-bold">Mayor Venta</h5>
                          <p class="m-0"><span id="fecha_mayor"></span>&nbsp;<b><span id="unidad_mayor"></span><span id="cantidad_mayor"></span></b></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-lg-12 col-xl-6">
                      <div class="d-flex"><img class="img-fluid" src="/assets/images/icon-down.svg">
                        <div class="pl-3">
                          <h5 class="m-0 text-uppercase font-weight-bold">Menor Venta</h5>
                          <p class="m-0"><span id="fecha_menor"></span>&nbsp;<b><span id="unidad_menor"></span><span id="cantidad_menor"></span></b></p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      <h4 class="header-title m-0 font-weight-bold">Top Oficinas</h4>
                    </div>
                    <div class="col-lg-6">
                      <ul class="nav nav-pills justify-content-end" role="tablist" id="topOficinas-tabs">
                       <!--  <li class="nav-item"><a class="nav-link nav-link--dashboard active" href="#topOficinas-uf" data-toggle="tab" aria-controls="#topOficinas-uf" aria-selected="true" id="topOficinas-uf-tab">UF</a></li> -->
                      </ul>
                    </div>
                  </div>
                  <div class="tab-content" id="topOficinas-content">
                    <div class="bar-chart3 tab-pane fade show active" role="tabpanel" aria-labelledby="#topOficinas-uf-tab" id="topOficinas">
                      <canvas id="topOficinas-chart"></canvas>
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
                      <h4 class="header-title m-0 font-weight-bold">Top Corredores</h4>
                    </div>
                    <div class="col-lg-6">
                      <ul class="nav nav-pills justify-content-end" role="tablist" id="topCorredores-tabs">
                        <!-- <li class="nav-item"><a class="nav-link nav-link--dashboard active" href="#topCorredores-uf" data-toggle="tab" aria-controls="#topCorredores-uf" aria-selected="true" id="topCorredores-uf-tab">UF</a></li> -->
                      </ul>
                    </div>
                  </div>
                  <div class="tab-content" id="topCorredores-content">
                    <div class="bar-chart3 tab-pane fade show active" role="tabpanel" aria-labelledby="#topCorredores-uf-tab" id="topCorredores">
                      <canvas id="topCorredores-chart"></canvas>
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

    export default {
      name: 'GerenteZonal',
    /*components:{
    },*/
      data () {
        return {

        }
      },
    

    }

</script>