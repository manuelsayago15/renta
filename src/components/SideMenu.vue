<template>
	
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios)
    //import Topbar from '@/components/Topbar'
    //import SideMenu from '@/components/SideMenu'

    export default {
      name: 'SideMenu',
    /*components:{
      Topbar,
      SideMenu
    },*/
      data () {
        return {
        	dashboard: [],
        	id_userType: '',
          offsetTop: 0,
          ingresoPropuestas: 
          ['Bandeja de Propuestas', 'Solicitud de Cotización',
          'Renovación de Pólizas', 'Solicitud de Endoso',
          'Cotización en Línea', 'Emisión en Línea']
        }

       
      },

      methods: {

      	dashboardProfile() {
      		this.id_userType = JSON.parse(window.localStorage.getItem('id_tipo_usuario'));
	        console.log(this.id_userType);
	     },
	  },

	  created () {
	  	this.dashboardProfile();
	  },
    
    }

</script>
