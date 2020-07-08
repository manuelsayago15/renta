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
                  <h4 class="page-title">Pólizas vencidas</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Producción</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Renovación de pólizas</a></li>
                    <li class="breadcrumb-item active"><span>Pólizas vencidas</span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="table-responsive mb-0">
                  <table class="table table-striped table-small-font table-sm" id="polizasVencidasDt" style="width: 100%">
                    <thead>
                      <tr>
                        <th class="font-weight-bold" data-priority="1">N°Póliza - Item</th>
                        <th class="font-weight-bold" data-priority="3">RUT Contratista</th>
                        <th class="font-weight-bold" data-priority="2">Asegurado</th>
                        <th class="font-weight-bold" data-priority="3">Plan</th>
                        <th class="font-weight-bold" data-priority="2">Fecha vencimiento</th>
                        <th class="font-weight-bold" data-priority="2">Monto asegurado</th>
                        <th class="font-weight-bold" data-priority="3">M. prima</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>9566956-1</td>
                        <td>22.772.836-7</td>
                        <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                        <td>R127</td>
                        <td>23-02-2020</td>
                        <td>UF 3400</td>
                        <td>2.79UF</td>
                      </tr>
                      <tr>
                        <td>9566956-1</td>
                        <td>22.772.836-7</td>
                        <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                        <td>R127</td>
                        <td>23-02-2020</td>
                        <td>UF 3400</td>
                        <td>2.79UF</td>
                      </tr>
                      <tr>
                        <td>9566956-1</td>
                        <td>22.772.836-7</td>
                        <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                        <td>R127</td>
                        <td>23-02-2020</td>
                        <td>UF 3400</td>
                        <td>2.79UF</td>
                      </tr>
                      <tr>
                        <td>9566956-1</td>
                        <td>22.772.836-7</td>
                        <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                        <td>R127</td>
                        <td>23-02-2020</td>
                        <td>UF 3400</td>
                        <td>2.79UF</td>
                      </tr>
                      <tr>
                        <td>9566956-1</td>
                        <td>22.772.836-7</td>
                        <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                        <td>R127</td>
                        <td>23-02-2020</td>
                        <td>UF 3400</td>
                        <td>2.79UF</td>
                      </tr>
                      <tr>
                        <td>9566956-1</td>
                        <td>22.772.836-7</td>
                        <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                        <td>R127</td>
                        <td>23-02-2020</td>
                        <td>UF 3400</td>
                        <td>2.79UF</td>
                      </tr>
                      <tr>
                        <td>9566956-1</td>
                        <td>22.772.836-7</td>
                        <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                        <td>R127</td>
                        <td>23-02-2020</td>
                        <td>UF 3400</td>
                        <td>2.79UF</td>
                      </tr>
                      <tr>
                        <td>9566956-1</td>
                        <td>22.772.836-7</td>
                        <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                        <td>R127</td>
                        <td>23-02-2020</td>
                        <td>UF 3400</td>
                        <td>2.79UF</td>
                      </tr>
                      <tr>
                        <td>9566956-1</td>
                        <td>22.772.836-7</td>
                        <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                        <td>R127</td>
                        <td>23-02-2020</td>
                        <td>UF 3400</td>
                        <td>2.79UF</td>
                      </tr>
                      <tr>
                        <td>9566956-1</td>
                        <td>22.772.836-7</td>
                        <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                        <td>R127</td>
                        <td>23-02-2020</td>
                        <td>UF 3400</td>
                        <td>2.79UF</td>
                      </tr>
                      <tr>
                        <td>9566956-1</td>
                        <td>22.772.836-7</td>
                        <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                        <td>R127</td>
                        <td>23-02-2020</td>
                        <td>UF 3400</td>
                        <td>2.79UF</td>
                      </tr>
                      <tr>
                        <td>9566956-1</td>
                        <td>22.772.836-7</td>
                        <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                        <td>R127</td>
                        <td>23-02-2020</td>
                        <td>UF 3400</td>
                        <td>2.79UF</td>
                      </tr>
                      <tr>
                        <td>9566956-1</td>
                        <td>22.772.836-7</td>
                        <td class="text-uppercase">Gondonneau Grossetete Gabriell</td>
                        <td>R127</td>
                        <td>23-02-2020</td>
                        <td>UF 3400</td>
                        <td>2.79UF</td>
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
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios)
    //import Topbar from '@/components/Topbar'
    //import SideMenu from '@/components/SideMenu'

    export default {
      name: 'PolizasVencidas',
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