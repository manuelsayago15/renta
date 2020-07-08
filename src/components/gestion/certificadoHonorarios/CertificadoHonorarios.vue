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
                  <h4 class="page-title">Descarga Fecu / Certificados de honorarios</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Gestión</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Descarga Fecu / Certificados de honorarios</a></li>
                    <li class="breadcrumb-item active"><span></span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-wrap align-items-center mb-5"><a class="d-inline-block width-300 mr-2" href="">
                    <div class="border border-primary p-3 d-flex align-items-center"><img src="assets/images/download-file-red.svg" alt="Descarga FECU">
                      <p class="font-weight-bold underline font-16 mb-0 ml-3 text-primary">Descargar FECU</p>
                    </div></a><a class="d-inline-block width-300 mr-2" href="">
                    <div class="border border-primary p-3 d-flex align-items-center"><img src="assets/images/download-file-red.svg" alt="Descarga certificado de honorarios">
                      <p class="font-weight-bold underline font-16 mb-0 ml-3 text-primary">Descargar certificado<br> de honorarios</p>
                    </div></a></div>
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
      name: 'CertificadoHonorarios',
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