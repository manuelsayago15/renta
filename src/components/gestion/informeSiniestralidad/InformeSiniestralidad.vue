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
                  <h4 class="page-title">Informe de siniestralidad</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Gestión</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Informe de siniestralidad</a></li>
                    <li class="breadcrumb-item active"><span></span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="mt-0 header-title font-weight-bold">Filtros</h4>
                <div class="form-row">
                  <div class="col-lg-4 mt-2">
                    <label>Póliza</label>
                    <div class="position-relative">
                      <input class="form-control" type="number">
                    </div>
                  </div>
                  <div class="col-lg-8 d-flex align-items-end mt-2">
                    <div class="d-flex align-items-center">
                      <div class="custom-control custom-radio mx-2">
                        <input class="custom-control-input" id="mobileYear" type="radio" name="Year">
                        <label class="custom-control-label" for="mobileYear">Año móvil</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input class="custom-control-input mx-2" id="currentYear" type="radio" name="Year">
                        <label class="custom-control-label" for="currentYear">Año en curso</label>
                      </div>
                      <button class="align-self-end btn btn-primary mx-2">Buscar</button>
                    </div>
                  </div>
                </div>
                <p class="font-italic m-0">Puede buscar usando solo un campo</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <button class="btn btn-secondary btn-excel mr-2 d-flex align-content-center mr-2"><i class="renta-icon-excel font-24"></i> Excel</button>
                <div class="table-responsive mb-0 mt-3">
                  <table class="table table-striped table-small-font table-sm" style="width: 100%">
                    <thead>
                      <tr>
                        <th class="font-weight-bold">Nombre corredor</th>
                        <th class="font-weight-bold">Prima neta</th>
                        <th class="font-weight-bold">Prima ganada</th>
                        <th class="font-weight-bold">Costo del siniestro</th>
                        <th class="font-weight-bold">Reserva de siniestro</th>
                        <th class="font-weight-bold">Comisiones pagadas</th>
                        <th class="font-weight-bold">Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a class="text-primary underline" href="page-informe-siniestralidad-corredor.html">María Pérez López</a></td>
                        <td>200 UF</td>
                        <td>100 UF</td>
                        <td>$100.000</td>
                        <td>$50.000</td>
                        <td>$50.000</td>
                        <td>$20.000</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-informe-siniestralidad-corredor.html">María Pérez López</a></td>
                        <td>200 UF</td>
                        <td>100 UF</td>
                        <td>$100.000</td>
                        <td>$50.000</td>
                        <td>$50.000</td>
                        <td>$20.000</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-informe-siniestralidad-corredor.html">María Pérez López</a></td>
                        <td>200 UF</td>
                        <td>100 UF</td>
                        <td>$100.000</td>
                        <td>$50.000</td>
                        <td>$50.000</td>
                        <td>$20.000</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-informe-siniestralidad-corredor.html">María Pérez López</a></td>
                        <td>200 UF</td>
                        <td>100 UF</td>
                        <td>$100.000</td>
                        <td>$50.000</td>
                        <td>$50.000</td>
                        <td>$20.000</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-informe-siniestralidad-corredor.html">María Pérez López</a></td>
                        <td>200 UF</td>
                        <td>100 UF</td>
                        <td>$100.000</td>
                        <td>$50.000</td>
                        <td>$50.000</td>
                        <td>$20.000</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-informe-siniestralidad-corredor.html">María Pérez López</a></td>
                        <td>200 UF</td>
                        <td>100 UF</td>
                        <td>$100.000</td>
                        <td>$50.000</td>
                        <td>$50.000</td>
                        <td>$20.000</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-informe-siniestralidad-corredor.html">María Pérez López</a></td>
                        <td>200 UF</td>
                        <td>100 UF</td>
                        <td>$100.000</td>
                        <td>$50.000</td>
                        <td>$50.000</td>
                        <td>$20.000</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-informe-siniestralidad-corredor.html">María Pérez López</a></td>
                        <td>200 UF</td>
                        <td>100 UF</td>
                        <td>$100.000</td>
                        <td>$50.000</td>
                        <td>$50.000</td>
                        <td>$20.000</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-informe-siniestralidad-corredor.html">María Pérez López</a></td>
                        <td>200 UF</td>
                        <td>100 UF</td>
                        <td>$100.000</td>
                        <td>$50.000</td>
                        <td>$50.000</td>
                        <td>$20.000</td>
                      </tr>
                      <tr>
                        <td><a class="text-primary underline" href="page-informe-siniestralidad-corredor.html">María Pérez López</a></td>
                        <td>200 UF</td>
                        <td>100 UF</td>
                        <td>$100.000</td>
                        <td>$50.000</td>
                        <td>$50.000</td>
                        <td>$20.000</td>
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
      name: 'InformeSiniestralidad',
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