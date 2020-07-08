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
                  <h4 class="page-title">Cartera de clientes</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Agenda</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Cartera de clientes</a></li>
                    <li class="breadcrumb-item active"><span></span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="mt-0 header-title">Listado de Clientes</h4>
                <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                  <table class="table table-striped table-small-font table-sm" id="carteraClientes" style="width: 100%">
                    <thead>
                      <tr>
                        <th class="font-weight-bold" data-priority="1">RUT</th>
                        <th class="font-weight-bold" data-priority="3">Nombre</th>
                        <th class="font-weight-bold" data-priority="2">Tel. fijo</th>
                        <th class="font-weight-bold" data-priority="3">Tel. móvil</th>
                        <th class="font-weight-bold" data-priority="2">Correo</th>
                        <th class="font-weight-bold" data-priority="2">Dirección</th>
                        <th class="font-weight-bold" data-priority="3">Ver</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>16.789.585-6</td>
                        <td><a class="text-primary underline" href="page-cartera-ver-cliente.html">María Rosales López</a></td>
                        <td>+5622695757</td>
                        <td>+56922695757</td>
                        <td>mariarosaleslopez@gmail.com</td>
                        <td>Los alerces 1234, Ñuñoa, Torre C, Depto 509</td>
                        <td><a href="page-cartera-ver-cliente.html"><i class="renta-icon-eye text-primary"></i></a></td>
                      </tr>
                      <tr>
                        <td>16.789.585-6</td>
                        <td><a class="text-primary underline" href="page-cartera-ver-cliente.html">María Rosales López</a></td>
                        <td>+5622695757</td>
                        <td>+56922695757</td>
                        <td>mariarosaleslopez@gmail.com</td>
                        <td>Los alerces 1234, Ñuñoa, Torre C, Depto 509</td>
                        <td><a href="page-cartera-ver-cliente.html"><i class="renta-icon-eye text-primary"></i></a></td>
                      </tr>
                      <tr>
                        <td>16.789.585-6</td>
                        <td><a class="text-primary underline" href="page-cartera-ver-cliente.html">María Rosales López</a></td>
                        <td>+5622695757</td>
                        <td>+56922695757</td>
                        <td>mariarosaleslopez@gmail.com</td>
                        <td>Los alerces 1234, Ñuñoa, Torre C, Depto 509</td>
                        <td><a href="page-cartera-ver-cliente.html"><i class="renta-icon-eye text-primary"></i></a></td>
                      </tr>
                      <tr>
                        <td>16.789.585-6</td>
                        <td><a class="text-primary underline" href="page-cartera-ver-cliente.html">María Rosales López</a></td>
                        <td>+5622695757</td>
                        <td>+56922695757</td>
                        <td>mariarosaleslopez@gmail.com</td>
                        <td>Los alerces 1234, Ñuñoa, Torre C, Depto 509</td>
                        <td><a href="page-cartera-ver-cliente.html"><i class="renta-icon-eye text-primary"></i></a></td>
                      </tr>
                      <tr>
                        <td>16.789.585-6</td>
                        <td><a class="text-primary underline" href="page-cartera-ver-cliente.html">María Rosales López</a></td>
                        <td>+5622695757</td>
                        <td>+56922695757</td>
                        <td>mariarosaleslopez@gmail.com</td>
                        <td>Los alerces 1234, Ñuñoa, Torre C, Depto 509</td>
                        <td><a href="page-cartera-ver-cliente.html"><i class="renta-icon-eye text-primary"></i></a></td>
                      </tr>
                      <tr>
                        <td>16.789.585-6</td>
                        <td><a class="text-primary underline" href="page-cartera-ver-cliente.html">María Rosales López</a></td>
                        <td>+5622695757</td>
                        <td>+56922695757</td>
                        <td>mariarosaleslopez@gmail.com</td>
                        <td>Los alerces 1234, Ñuñoa, Torre C, Depto 509</td>
                        <td><a href="page-cartera-ver-cliente.html"><i class="renta-icon-eye text-primary"></i></a></td>
                      </tr>
                      <tr>
                        <td>16.789.585-6</td>
                        <td><a class="text-primary underline" href="page-cartera-ver-cliente.html">María Rosales López</a></td>
                        <td>+5622695757</td>
                        <td>+56922695757</td>
                        <td>mariarosaleslopez@gmail.com</td>
                        <td>Los alerces 1234, Ñuñoa, Torre C, Depto 509</td>
                        <td><a href="page-cartera-ver-cliente.html"><i class="renta-icon-eye text-primary"></i></a></td>
                      </tr>
                      <tr>
                        <td>16.789.585-6</td>
                        <td><a class="text-primary underline" href="page-cartera-ver-cliente.html">María Rosales López</a></td>
                        <td>+5622695757</td>
                        <td>+56922695757</td>
                        <td>mariarosaleslopez@gmail.com</td>
                        <td>Los alerces 1234, Ñuñoa, Torre C, Depto 509</td>
                        <td><a href="page-cartera-ver-cliente.html"><i class="renta-icon-eye text-primary"></i></a></td>
                      </tr>
                      <tr>
                        <td>16.789.585-6</td>
                        <td><a class="text-primary underline" href="page-cartera-ver-cliente.html">María Rosales López</a></td>
                        <td>+5622695757</td>
                        <td>+56922695757</td>
                        <td>mariarosaleslopez@gmail.com</td>
                        <td>Los alerces 1234, Ñuñoa, Torre C, Depto 509</td>
                        <td><a href="page-cartera-ver-cliente.html"><i class="renta-icon-eye text-primary"></i></a></td>
                      </tr>
                      <tr>
                        <td>16.789.585-6</td>
                        <td><a class="text-primary underline" href="page-cartera-ver-cliente.html">María Rosales López</a></td>
                        <td>+5622695757</td>
                        <td>+56922695757</td>
                        <td>mariarosaleslopez@gmail.com</td>
                        <td>Los alerces 1234, Ñuñoa, Torre C, Depto 509</td>
                        <td><a href="page-cartera-ver-cliente.html"><i class="renta-icon-eye text-primary"></i></a></td>
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
      name: 'CarteraClientes',
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