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
                <h4 class="page-title">Mensajes</h4>
                <ol class="breadcrumb">
                </ol>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="row py-2">
                <div class="col-md-6 d-flex align-items-center">
                  <p class="mb-0">Mostrando [n] de [n]</p>
                </div>
                <div class="col-md-6">
                  <div class="d-flex justify-content-end align-items-center">
                    <label class="font-weight-bold pr-2">Buscar</label>
                    <input class="form-control input-buscar" type="text">
                  </div>
                </div>
              </div>
              <div class="table-responsive mb-0">
                <table class="table table-striped table-small-font table-sm" style="width: 100%">
                  <thead>
                    <tr>
                      <th class="font-weight-bold">Asunto</th>
                      <th class="font-weight-bold"> </th>
                      <th class="font-weight-bold">Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a class="text-primary underline" href="page-mensaje.html">Curabitur sit amet lacus</a></td>
                      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aperiam deleniti fugiat dolore vel molestiae optio.</td>
                      <td>10/10/2020</td>
                    </tr>
                    <tr>
                      <td><a class="text-primary underline" href="page-mensaje.html">Curabitur sit amet lacus</a></td>
                      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aperiam deleniti fugiat dolore vel molestiae optio.</td>
                      <td>10/10/2020</td>
                    </tr>
                    <tr>
                      <td><a class="text-primary underline" href="page-mensaje.html">Curabitur sit amet lacus</a></td>
                      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aperiam deleniti fugiat dolore vel molestiae optio.</td>
                      <td>10/10/2020</td>
                    </tr>
                    <tr>
                      <td><a class="text-primary underline" href="page-mensaje.html">Curabitur sit amet lacus</a></td>
                      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aperiam deleniti fugiat dolore vel molestiae optio.</td>
                      <td>10/10/2020</td>
                    </tr>
                    <tr>
                      <td><a class="text-primary underline" href="page-mensaje.html">Curabitur sit amet lacus</a></td>
                      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aperiam deleniti fugiat dolore vel molestiae optio.</td>
                      <td>10/10/2020</td>
                    </tr>
                    <tr>
                      <td><a class="text-primary underline" href="page-mensaje.html">Curabitur sit amet lacus</a></td>
                      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aperiam deleniti fugiat dolore vel molestiae optio.</td>
                      <td>10/10/2020</td>
                    </tr>
                    <tr>
                      <td><a class="text-primary underline" href="page-mensaje.html">Curabitur sit amet lacus</a></td>
                      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aperiam deleniti fugiat dolore vel molestiae optio.</td>
                      <td>10/10/2020</td>
                    </tr>
                    <tr>
                      <td><a class="text-primary underline" href="page-mensaje.html">Curabitur sit amet lacus</a></td>
                      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aperiam deleniti fugiat dolore vel molestiae optio.</td>
                      <td>10/10/2020</td>
                    </tr>
                    <tr>
                      <td><a class="text-primary underline" href="page-mensaje.html">Curabitur sit amet lacus</a></td>
                      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aperiam deleniti fugiat dolore vel molestiae optio.</td>
                      <td>10/10/2020</td>
                    </tr>
                    <tr>
                      <td><a class="text-primary underline" href="page-mensaje.html">Curabitur sit amet lacus</a></td>
                      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aperiam deleniti fugiat dolore vel molestiae optio.</td>
                      <td>10/10/2020</td>
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
      name: 'Mensajes',
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