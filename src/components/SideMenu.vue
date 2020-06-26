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
<style>
  .hide-sideMenu{
    left: -240px;
  }
  .submenu>li>a {
    padding-left: 20px;
  }
  .submenu-2>li>a {
    padding-left: 50px;
    font-size: 12px;
  }

  .item-size {
    padding-left: 40px;
  }

  .color-a {
    color: #6c757d !important;
  }

  a:hover {
    color: #ff5259 !important;
  }

  .v-application .primary--text {
    color: #ff5259 !important;
    caret-color: #ff5259 !important;
  }

  .v-card {
    box-shadow: 0 0px 0px 0px rgba(0,0,0,0), 0 0px 0px 0 rgba(0,0,0,0), 0 0px 0px 0 rgba(0,0,0,0);
  }

  .v-list-item {

  }

  /*.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: rgba(0,0,0,.87)!important;
  }*/
  .v-list-item__title {
    font-size: 12px;
  }

  span i{
    font-size: 30px;
  }

  .v-application--is-ltr .v-list-group--sub-group .v-list-item__icon:first-child {
    margin-right: 5px;
  }

  .v-application--is-ltr .v-list-group--no-action.v-list-group--sub-group>.v-list-group__items>.v-list-item {
    padding-left: 70px;
  }
  @media (max-width: 576px) { 
    .hide-sideMenu {
      left: -240px;
    }
  }
</style>