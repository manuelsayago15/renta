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
                  <h4 class="page-title">Listado de Pólizas</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Gestión</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Listado de pólizas</a></li>
                    <li class="breadcrumb-item active"><span></span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="mt-0 header-title--big font-weight-bold">Pólizas Vigentes</h4>
                <ul class="nav nav-pills nav-pills--border" id="polizasVigentesTabs">
                  <li class="nav-item"><a class="nav-link active" id="polizasVigentesTab" data-toggle="tab" href="#polizasVigentes" role="tab" aria-controls="polizasVigentes" aria-selected="true">Vigentes</a></li>
                  <li class="nav-item"><a class="nav-link" id="polizasNoVigentesTab" data-toggle="tab" href="#polizasNoVigentes" role="tab" aria-controls="polizasNoVigentes" aria-selected="true">No vigentes</a></li>
                </ul>
                <div class="tab-content" id="polizasVigentesTabsContent">
                  <div class="tab-pane fade show active" id="polizasVigentes" role="tabpanel" aria-labelledby="polizasVigentesTab">
                    <div class="colvisBtns colvisBtns-polizas-vigentes mt-3"></div>
                    <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                      <table class="table table-striped table-small-font table-sm" id="informePolizasVigentes" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">Nombre</th>
                            <th class="font-weight-bold" data-priority="1">RUT</th>
                            <th class="font-weight-bold" data-priority="2">Correo</th>
                            <th class="font-weight-bold" data-priority="2">Teléfono</th>
                            <th class="font-weight-bold" data-priority="1">N°Póliza</th>
                            <th class="font-weight-bold" data-priority="1">Prima</th>
                            <th class="font-weight-bold" data-priority="3">Descargas</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="polizasNoVigentes" role="tabpanel" aria-labelledby="polizasNoVigentesTab">
                    <div class="colvisBtns colvisBtns-polizas-no-vigentes mt-3"></div>
                    <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                      <table class="table table-striped table-small-font table-sm" id="informePolizasNoVigentes" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="font-weight-bold" data-priority="1">Nombre</th>
                            <th class="font-weight-bold" data-priority="1">RUT</th>
                            <th class="font-weight-bold" data-priority="2">Correo</th>
                            <th class="font-weight-bold" data-priority="2">Teléfono</th>
                            <th class="font-weight-bold" data-priority="1">N°Póliza</th>
                            <th class="font-weight-bold" data-priority="1">Prima</th>
                            <th class="font-weight-bold" data-priority="3">Descargas</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
                          </tr>
                          <tr>
                            <td>Mariana Carvajal Galvez</td>
                            <td>18.985.584-6</td>
                            <td>marianacarvajal@gmail.com</td>
                            <td>56998545854</td>
                            <td>936819-1</td>
                            <td>12</td>
                            <td><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i></td>
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
      name: 'ListadoPoliza',
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