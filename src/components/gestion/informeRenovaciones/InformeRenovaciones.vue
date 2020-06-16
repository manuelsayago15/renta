<template>
	<div id="wrapper">
		<Topbar></Topbar>
    <SideMenu></SideMenu>	
    <div class="content-page">
      <div class="content">
        <div class="container-fluid">
          <div class="page-title-box">
            <div class="row align-items-center">
              <div class="col-sm-6">
                <h4 class="page-title">Informe de pólizas</h4>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Gestión</a></li>
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Informe de pólizas</a></li>
                  <li class="breadcrumb-item active"><span></span></li>
                </ol>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="mt-0 header-title--big font-weight-bold">Informe de pólizas por renovar</h4>
              <ul class="nav nav-pills nav-pills--border" id="polizasRenovacionTabs">
                <li class="nav-item"><a class="nav-link active" id="polizasPorRenovarTab" href="#polizasPorRenovar" data-toggle="tab"  role="tab" aria-controls="polizasPorRenovar" aria-selected="true">Pólizas por renovar</a></li>
                <li class="nav-item"><a class="nav-link" id="polizasRenovadasTab" href="#polizasRenovadas" data-toggle="tab"  role="tab" aria-controls="polizasRenovadas" aria-selected="true">Pólizas renovadas</a></li>
                <li class="nav-item"><a class="nav-link" id="polizasNoRenovadasTab" href="#polizasNoRenovadas" data-toggle="tab"  role="tab" aria-controls="polizasNoRenovadas" aria-selected="true">Pólizas no renovadas</a></li>
              </ul>
              <div class="border p-3 my-3">
                <h4 class="header-title font-weight-bold">Filtros
                  <div class="form-row">
                    <div class="col-md-5 col-lg-4 col-xl-3 mt-1">
                      <label>Mes</label>
                      <select class="form-control" id="mes">
                        <option value="-1">Seleccione...</option>
                        <option value="01">Enero</option>
                        <option value="02">Febrero</option>
                        <option value="03">Marzo</option>
                        <option value="04">Abril</option>
                        <option value="05">Mayo</option>
                        <option value="06">Junio</option>
                        <option value="07">Julio</option>
                        <option value="08">Agosto</option>
                        <option value="09">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                      </select>
                    </div>
                    <div class="col-md-5 col-lg-4 col-xl-3 mt-1">
                      <label>Año</label>
                      <select class="form-control" id="anio">
                        <!-- <option value="-1">Seleccione...</option> -->
                      </select>
                    </div>
                    
                    <div class="col-1 d-flex align-items-end">
                      <button class="btn btn-primary mt-2" id="filtrar">Filtrar</button>
                    </div>
                  </div>
                  <input type="hidden" id="grilla">
                </h4>
              </div>
              <div class="tab-content" id="polizasRenovacionTabsContent">
                <div class="tab-pane fade show active" id="polizasPorRenovar" role="tabpanel" aria-labelledby="polizasPorRenovarTab">
                  <div class="d-md-flex justify-content-between table-dropdown-scrollable">
                    <div class="alert alert--mr alert-success flex-grow-1 mb-0">Pólizas actualizadas al día <span class="font-weight-bold">18 de Febrero 2020</span></div>
                    <div class="colvisBtns colvisBtns-polizas-por-renovar"></div>
                  </div>
                  <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                    <table class="table table-striped table-small-font table-sm" id="informePolizasPorRenovar" style="width: 100%">
                      <thead>
                        <tr>
                          <th class="font-weight-bold" data-priority="1">N° Póliza - Item</th>
                          <th class="font-weight-bold" data-priority="1">RUT</th>
                          <th class="font-weight-bold" data-priority="2">Asegurado</th>
                          <th class="font-weight-bold" data-priority="1">Cliente</th>
                          <th class="font-weight-bold" data-priority="3">Plan</th>
                          <th class="font-weight-bold" data-priority="3">Vig.Ini</th>
                          <th class="font-weight-bold" data-priority="3">Vig.Ter</th>
                          <th class="font-weight-bold" data-priority="3">Mon</th>
                          <th class="font-weight-bold" data-priority="3">M. Aseg</th>
                          <th class="font-weight-bold" data-priority="4">Prima Neta</th>
                          <th class="font-weight-bold" data-priority="4">Stros.Liq</th>
                          <th class="font-weight-bold" data-priority="4">Costo Liq</th>
                          <th class="font-weight-bold" data-priority="4">Stros.Res</th>
                          <th class="font-weight-bold" data-priority="4">Costo Res</th>
                          <th class="font-weight-bold" data-priority="4">Docum</th>
                          <th class="font-weight-bold" data-priority="4">Conv</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane fade" id="polizasRenovadas" role="tabpanel" aria-labelledby="polizasRenovadasTab">
                  <div class="d-md-flex justify-content-between">
                    <div class="alert alert--mr alert-success flex-grow-1 mb-0">Pólizas actualizadas al día <span class="font-weight-bold">18 de Febrero 2020</span></div>
                    <div class="colvisBtns colvisBtns-polizas-renovadas"></div>
                  </div>
                  <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                    <table class="table table-striped table-small-font table-sm" id="informePolizasRenovadas" style="width: 100%">
                      <thead>
                        <tr>
                          <th class="font-weight-bold" data-priority="1">N° Póliza - Item</th>
                          <th class="font-weight-bold" data-priority="1">RUT</th>
                          <th class="font-weight-bold" data-priority="2">Asegurado</th>
                          <th class="font-weight-bold" data-priority="1">Cliente</th>
                          <th class="font-weight-bold" data-priority="3">Plan</th>
                          <th class="font-weight-bold" data-priority="3">Vig.Ini</th>
                          <th class="font-weight-bold" data-priority="3">Vig.Ter</th>
                          <th class="font-weight-bold" data-priority="3">Mon</th>
                          <th class="font-weight-bold" data-priority="3">M. Aseg</th>
                          <th class="font-weight-bold" data-priority="4">Prima Neta</th>
                          <th class="font-weight-bold" data-priority="4">Stros.Liq</th>
                          <th class="font-weight-bold" data-priority="4">Costo Liq</th>
                          <th class="font-weight-bold" data-priority="4">Stros.Res</th>
                          <th class="font-weight-bold" data-priority="4">Costo Res</th>
                          <th class="font-weight-bold" data-priority="4">Docum</th>
                          <th class="font-weight-bold" data-priority="4">Conv</th>
                        </tr>
                      </thead>
                      <tbody>

                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane fade" id="polizasNoRenovadas" role="tabpanel" aria-labelledby="polizasNoRenovadasTab">
                  <div class="d-md-flex justify-content-between">
                    <div class="alert alert--mr alert-success flex-grow-1 mb-0">Pólizas actualizadas al día <span class="font-weight-bold">18 de Febrero 2020</span></div>
                    <div class="colvisBtns colvisBtns-polizas-no-renovadas"></div>
                  </div>
                  <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                    <table class="table table-striped table-small-font table-sm" id="informePolizasNoRenovadas" style="width: 100%">
                      <thead>
                        <tr>
                          <th class="font-weight-bold" data-priority="1">N° Póliza - Item</th>
                          <th class="font-weight-bold" data-priority="1">RUT</th>
                          <th class="font-weight-bold" data-priority="2">Asegurado</th>
                          <th class="font-weight-bold" data-priority="1">Cliente</th>
                          <th class="font-weight-bold" data-priority="3">Plan</th>
                          <th class="font-weight-bold" data-priority="3">Vig.Ini</th>
                          <th class="font-weight-bold" data-priority="3">Vig.Ter</th>
                          <th class="font-weight-bold" data-priority="3">Mon</th>
                          <th class="font-weight-bold" data-priority="3">M. Aseg</th>
                          <th class="font-weight-bold" data-priority="4">Prima Neta</th>
                          <th class="font-weight-bold" data-priority="4">Stros.Liq</th>
                          <th class="font-weight-bold" data-priority="4">Costo Liq</th>
                          <th class="font-weight-bold" data-priority="4">Stros.Res</th>
                          <th class="font-weight-bold" data-priority="4">Costo Res</th>
                          <th class="font-weight-bold" data-priority="4">Docum</th>
                          <th class="font-weight-bold" data-priority="4">Conv</th>
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
      name: 'InformeRenovaciones',
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