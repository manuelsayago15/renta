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
                  <h4 class="page-title">Ingreso PAT</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Cobranza</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Ingreso PAT</a></li>
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
                    <label>RUT</label>
                    <input class="form-control" type="number">
                  </div>
                  <div class="col-md-2 d-flex align-items-end">
                    <button class="btn btn-primary">Buscar</button>
                  </div>
                </div>
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
                    <div class="d-flex justify-content-end align-items-center"><a class="btn text-primary underline" href="page-completar-PAT.html">Completar PAT</a><a class="btn text-primary underline" href="page-adjuntar-PAT.html">Adjuntar PAT</a></div>
                  </div>
                </div>
                <div class="table-responsive mb-0">
                  <table class="table table-striped table-small-font table-sm" style="width: 100%">
                    <thead>
                      <tr>
                        <th class="font-weight-bold">
                          <input type="checkbox"> Cliente
                        </th>
                        <th class="font-weight-bold">N°Póliza</th>
                        <th class="font-weight-bold">Producto</th>
                        <th class="font-weight-bold">Estado PAT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="mr-2">
                          <input class="mr-1" type="checkbox"/>Mariana Carvajal Galvez
                        </td>
                        <td class="mr-2">963819-1</td>
                        <td class="mr-2">LOREM IPSUM</td>
                        <td class="mr-2">Sin PAT</td>
                      </tr>
                      <tr>
                        <td class="mr-2">
                          <input class="mr-1" type="checkbox"/>Mariana Carvajal Galvez
                        </td>
                        <td class="mr-2">963819-1</td>
                        <td class="mr-2">LOREM IPSUM</td>
                        <td class="mr-2">TIENE PAT VIGENTE</td>
                      </tr>
                      <tr>
                        <td class="mr-2">
                          <input class="mr-1" type="checkbox"/>Mariana Carvajal Galvez
                        </td>
                        <td class="mr-2">963819-1</td>
                        <td class="mr-2">LOREM IPSUM</td>
                        <td class="mr-2">Sin PAT</td>
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
      name: 'IngresoPAT',
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