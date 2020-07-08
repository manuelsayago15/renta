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
                  <h4 class="page-title">Informe de pólizas canceladas</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Gestión</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Informe de pólizas canceladas</a></li>
                    <li class="breadcrumb-item active"><span></span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="mt-0 header-title--big font-weight-bold">Propuestas de cancelación</h4>
                <ul class="nav nav-pills nav-pills--border" id="polizasCanceladasTabs">
                  <li class="nav-item"><a class="nav-link active" id="propuestasCancelacionTab" data-toggle="tab" href="#propuestasCancelacion" role="tab" aria-controls="propuestasCancelacion" aria-selected="true">Propuestas de cancelación</a></li>
                  <li class="nav-item"><a class="nav-link" id="polizasCanceladasTab" data-toggle="tab" href="#polizasCanceladas" role="tab" aria-controls="polizasCanceladas" aria-selected="true">Pólizas canceladas</a></li>
                </ul>
                <h4 class="header-title font-weight-bold">Intermediario</h4>
                <h5 class="text-primary text-uppercase font-weight-bold">Lidia Nuñes y CIA Limitada</h5>
                <div class="tab-content" id="polizasCanceladasTabsContent">
                  <div class="tab-pane fade show active" id="propuestasCancelacion" role="tabpanel" aria-labelledby="propuestasCancelacionTab">
                    <div class="d-md-flex justify-content-between">
                      <div class="alert alert--mr alert-success flex-grow-1 mb-0">Pólizas actualizadas al día <span class="font-weight-bold">18 de Febrero 2020</span></div>
                      <div class="colvisBtns colvisBtns-propuestas-cancelacion"></div>
                    </div>
                    <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                      <table class="table table-striped table-small-font table-sm" id="informePropuestasCancelacion" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">N° Póliza - Item</th>
                            <th class="font-weight-bold" data-priority="1">Moneda</th>
                            <th class="font-weight-bold" data-priority="2">Monto</th>
                            <th class="font-weight-bold" data-priority="1">Cuota</th>
                            <th class="font-weight-bold" data-priority="3">Asegurado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="font-weight-bold">963819-1</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>11</td>
                            <td class="text-uppercase">De la Jara Anguita Veronica</td>
                          </tr>
                          <tr>
                            <td class="font-weight-bold">963819-1</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>11</td>
                            <td class="text-uppercase">De la Jara Anguita Veronica</td>
                          </tr>
                          <tr>
                            <td class="font-weight-bold">963819-1</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>11</td>
                            <td class="text-uppercase">De la Jara Anguita Veronica</td>
                          </tr>
                          <tr>
                            <td class="font-weight-bold">963819-1</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>11</td>
                            <td class="text-uppercase">De la Jara Anguita Veronica</td>
                          </tr>
                          <tr>
                            <td class="font-weight-bold">963819-1</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>11</td>
                            <td class="text-uppercase">De la Jara Anguita Veronica</td>
                          </tr>
                          <tr>
                            <td class="font-weight-bold">963819-1</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>11</td>
                            <td class="text-uppercase">De la Jara Anguita Veronica</td>
                          </tr>
                          <tr>
                            <td class="font-weight-bold">963819-1</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>11</td>
                            <td class="text-uppercase">De la Jara Anguita Veronica</td>
                          </tr>
                          <tr>
                            <td class="font-weight-bold">963819-1</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>11</td>
                            <td class="text-uppercase">De la Jara Anguita Veronica</td>
                          </tr>
                          <tr>
                            <td class="font-weight-bold">963819-1</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>11</td>
                            <td class="text-uppercase">De la Jara Anguita Veronica</td>
                          </tr>
                          <tr>
                            <td class="font-weight-bold">963819-1</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>11</td>
                            <td class="text-uppercase">De la Jara Anguita Veronica</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="polizasCanceladas" role="tabpanel" aria-labelledby="polizasCanceladasTab">
                    <div class="d-md-flex justify-content-between">
                      <div class="alert alert--mr alert-success flex-grow-1 mb-0">Pólizas actualizadas al día <span class="font-weight-bold">18 de Febrero 2020</span></div>
                      <div class="colvisBtns colvisBtns-polizas-canceladas"></div>
                    </div>
                    <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                      <table class="table table-striped table-small-font table-sm" id="informePolizasCanceladas" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">N° Póliza - Item</th>
                            <th class="font-weight-bold" data-priority="1">Pagador</th>
                            <th class="font-weight-bold" data-priority="2">Cuota</th>
                            <th class="font-weight-bold" data-priority="1">Vencimiento</th>
                            <th class="font-weight-bold" data-priority="3">Días</th>
                            <th class="font-weight-bold" data-priority="3">Moneda</th>
                            <th class="font-weight-bold" data-priority="2">Valor cuota</th>
                            <th class="font-weight-bold" data-priority="3">RUT pagador</th>
                            <th class="font-weight-bold" data-priority="2">Teléfono</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>963819-1</td>
                            <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                            <td>11</td>
                            <td>05/02/2020</td>
                            <td>19</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>6.087.706-8</td>
                            <td>992232295</td>
                          </tr>
                          <tr>
                            <td>963819-1</td>
                            <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                            <td>11</td>
                            <td>05/02/2020</td>
                            <td>19</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>6.087.706-8</td>
                            <td>992232295</td>
                          </tr>
                          <tr>
                            <td>963819-1</td>
                            <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                            <td>11</td>
                            <td>05/02/2020</td>
                            <td>19</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>6.087.706-8</td>
                            <td>992232295</td>
                          </tr>
                          <tr>
                            <td>963819-1</td>
                            <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                            <td>11</td>
                            <td>05/02/2020</td>
                            <td>19</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>6.087.706-8</td>
                            <td>992232295</td>
                          </tr>
                          <tr>
                            <td>963819-1</td>
                            <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                            <td>11</td>
                            <td>05/02/2020</td>
                            <td>19</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>6.087.706-8</td>
                            <td>992232295</td>
                          </tr>
                          <tr>
                            <td>963819-1</td>
                            <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                            <td>11</td>
                            <td>05/02/2020</td>
                            <td>19</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>6.087.706-8</td>
                            <td>992232295</td>
                          </tr>
                          <tr>
                            <td>963819-1</td>
                            <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                            <td>11</td>
                            <td>05/02/2020</td>
                            <td>19</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>6.087.706-8</td>
                            <td>992232295</td>
                          </tr>
                          <tr>
                            <td>963819-1</td>
                            <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                            <td>11</td>
                            <td>05/02/2020</td>
                            <td>19</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>6.087.706-8</td>
                            <td>992232295</td>
                          </tr>
                          <tr>
                            <td>963819-1</td>
                            <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                            <td>11</td>
                            <td>05/02/2020</td>
                            <td>19</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>6.087.706-8</td>
                            <td>992232295</td>
                          </tr>
                          <tr>
                            <td>963819-1</td>
                            <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                            <td>11</td>
                            <td>05/02/2020</td>
                            <td>19</td>
                            <td>U.F</td>
                            <td>1.91</td>
                            <td>6.087.706-8</td>
                            <td>992232295</td>
                          </tr>
                        </tbody>
                      </table>
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
      name: 'PolizasCanceladas',
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