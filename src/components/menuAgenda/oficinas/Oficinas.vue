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
                <h4 class="page-title">Ejecutivos</h4>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Agenda</a></li>
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Ejecutivos</a></li>
                  <li class="breadcrumb-item active"><span></span></li>
                </ol>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="form-row">
                <div class="col-lg-3">
                  <label>Sucursal</label>
                  <select class="form-control">
                    <option>Seleccione una sucursal</option>
                  </select>
                </div>
              </div>
              <h2 class="text-primary header-title font-weight-bold">Providencia</h2>
              <div class="border-top border-bottom py-3 mb-3">
                <div class="row">
                  <div class="col-md-2">
                    <div class="d-md-flex align-items-center justify-content-center h-100"><img class="img-fluid" src="assets/images/company.svg"></div>
                  </div>
                  <div class="col-sm-6 col-md-4">
                    <p class="m-0 font-weight-bold">Contacto</p>
                    <p class="m-0">Dirección Los Leones 1122</p>
                    <p class="m-0">Teléfono (+56 2) 2750 1800 / 2750 1840</p>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <p class="m-0 font-weight-bold">Horario de atención</p>
                    <p class="m-0">Lunes a Jueves: De 08:30 a 14:00 y de 14:45 a 18:00 horas.</p>
                    <p class="m-0">Viernes: De 08:30 a 15:00 horas.</p>
                  </div>
                </div>
              </div>
              <div class="table-responsive mb-0">
                <table class="table" id="oficinas" style="width: 100%">
                  <thead>
                    <tr>
                      <th class="font-weight-bold" data-priority="1">Nombre</th>
                      <th class="font-weight-bold" data-priority="2">Cargo</th>
                      <th class="font-weight-bold" data-priority="2">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Baldovino Méndez Ayala</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-primary">Gerente</span></td>
                      <td><a class="underline" href="mailto:baraya@gustr.com">baraya@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Erasto Tamez Ulibarri</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Asistente</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Melibeo Granado Henríquez</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-dark-blue">Ejecutivo</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Yamal Vanegas Mares</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-dark-blue">Ejecutivo</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Alterio Amenas Tello</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-dark-blue">Ejecutivo</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Ginebra Quintana Venegas</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Asistente</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Carla Paz Casas</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Asistente</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Saturio Molina Lara</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Asistente</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Josías Abeyta Olivares</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Asistente</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Milcíades Leyva Ramos</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Asistente</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Baldovino Méndez Ayala</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-primary">Gerente</span></td>
                      <td><a class="underline" href="mailto:baraya@gustr.com">baraya@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Erasto Tamez Ulibarri</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Asistente</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Melibeo Granado Henríquez</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-dark-blue">Ejecutivo</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Yamal Vanegas Mares</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-dark-blue">Ejecutivo</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Alterio Amenas Tello</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-dark-blue">Ejecutivo</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Ginebra Quintana Venegas</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Asistente</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Carla Paz Casas</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Asistente</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Saturio Molina Lara</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Asistente</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Josías Abeyta Olivares</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Asistente</span></td>
                      <td><a class="underline" href="mailto:ernesto.tames@gustr.com">ernesto.tames@gustr.com</a></td>
                    </tr>
                    <tr>
                      <td><img class="rounded-circle" src="assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">Milcíades Leyva Ramos</span></td>
                      <td><span class="badge badge--bigger badge-pill badge-blue">Asistente</span></td>
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
      name: 'Oficinas',
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