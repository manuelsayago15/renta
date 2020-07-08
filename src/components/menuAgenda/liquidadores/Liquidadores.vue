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
                <h4 class="page-title">Liquidadores</h4>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Agenda</a></li>
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Liquidadores</a></li>
                  <li class="breadcrumb-item active"><span></span></li>
                </ol>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="form-row">
                <div class="col-lg-3">
                  <label>Región</label>
                  <select class="form-control">
                    <option>Seleccione una Región</option>
                  </select>
                </div>
              </div>
              <div class="table-responsive mb-0">
                <table class="table" id="liquidadores" style="width: 100%">
                  <thead>
                    <tr>
                      <th data-priority="1">Razón social</th>
                      <th data-priority="2">RUT</th>
                      <th data-priority="2">Región</th>
                      <th data-priority="1">Teléfono</th>
                      <th data-priority="1">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-weight-bold">Brooks Fashions</td>
                      <td>19630807-5</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Metropolitana</span></td>
                      <td>606 902 017</td>
                      <td><a class="underline" href="mailto:baraya@gustr.com">baraya@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Miller &amp; Rhoads</td>
                      <td>17515653-4</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Antofagasta</span></td>
                      <td>725 896 714</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Pro Yard Services</td>
                      <td>19326514-6</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Atacama</span></td>
                      <td>751 154 841</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Canal Villere</td>
                      <td>17475344-k</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">La Aracaunía</span></td>
                      <td>665 922 704</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Walt's IGA</td>
                      <td>8684669-1</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Ñuble</span></td>
                      <td>725 896 714</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Grade A Investment</td>
                      <td>8361462-5</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Maule</span></td>
                      <td>763 125 173</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">LoRay</td>
                      <td>12789615-1</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Los Lagos</span></td>
                      <td>607 822 923</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Chase Pitkin</td>
                      <td>7179491-1</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Valparaíso</span></td>
                      <td>725 896 714</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Richman Brothers</td>
                      <td>5751498-1</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Coquimbo</span></td>
                      <td>796 197 919</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Source Club</td>
                      <td>16681174-0</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Atacama</span></td>
                      <td>756 962 741</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Brooks Fashions</td>
                      <td>19630807-5</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Metropolitana</span></td>
                      <td>606 902 017</td>
                      <td><a class="underline" href="mailto:baraya@gustr.com">baraya@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Miller &amp; Rhoads</td>
                      <td>17515653-4</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Antofagasta</span></td>
                      <td>725 896 714</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Pro Yard Services</td>
                      <td>19326514-6</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Atacama</span></td>
                      <td>751 154 841</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Canal Villere</td>
                      <td>17475344-k</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">La Aracaunía</span></td>
                      <td>665 922 704</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Walt's IGA</td>
                      <td>8684669-1</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Ñuble</span></td>
                      <td>725 896 714</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Grade A Investment</td>
                      <td>8361462-5</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Maule</span></td>
                      <td>763 125 173</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">LoRay</td>
                      <td>12789615-1</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Los Lagos</span></td>
                      <td>607 822 923</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Chase Pitkin</td>
                      <td>7179491-1</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Valparaíso</span></td>
                      <td>725 896 714</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Richman Brothers</td>
                      <td>5751498-1</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Coquimbo</span></td>
                      <td>796 197 919</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Source Club</td>
                      <td>16681174-0</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Atacama</span></td>
                      <td>756 962 741</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Brooks Fashions</td>
                      <td>19630807-5</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Metropolitana</span></td>
                      <td>606 902 017</td>
                      <td><a class="underline" href="mailto:baraya@gustr.com">baraya@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Miller &amp; Rhoads</td>
                      <td>17515653-4</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Antofagasta</span></td>
                      <td>725 896 714</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Pro Yard Services</td>
                      <td>19326514-6</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Atacama</span></td>
                      <td>751 154 841</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Canal Villere</td>
                      <td>17475344-k</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">La Aracaunía</span></td>
                      <td>665 922 704</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Walt's IGA</td>
                      <td>8684669-1</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Ñuble</span></td>
                      <td>725 896 714</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Grade A Investment</td>
                      <td>8361462-5</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Maule</span></td>
                      <td>763 125 173</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">LoRay</td>
                      <td>12789615-1</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Los Lagos</span></td>
                      <td>607 822 923</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Chase Pitkin</td>
                      <td>7179491-1</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Valparaíso</span></td>
                      <td>725 896 714</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Richman Brothers</td>
                      <td>5751498-1</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Coquimbo</span></td>
                      <td>796 197 919</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Source Club</td>
                      <td>16681174-0</td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Atacama</span></td>
                      <td>756 962 741</td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
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
      name: 'Liquidadores',
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