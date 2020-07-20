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
                                <h4 class="page-title">Descarga de formularios</h4>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="javascript:void(0);">Producción</a></li>
                                    <li class="breadcrumb-item"><a href="javascript:void(0);">Ingreso de propuesta</a></li>
                                    <li class="breadcrumb-item active"><span>Descarga de formularios</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="row sm-gutter">
                        <div class="col-md-4">
                            <div class="card card-form-download">
                                <div class="card-header">
                                    <h3 class="card-title"><span class="renta-icon-fire"></span><span>Incendio</span></h3>
                                </div>
                                <div class="card-body">
                                    <ul class="files-list">
                                        <li><a class="file-row" :href="'/downloads/incendio/accidentes_personales.pdf'" download target="_blank"><span class="link-name">Accidentes Personales</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><router-link class="file-row" to="/downloads/incendio/incendio_comercial.pdf" download target="_blank"><span class="link-name">Incendio Comercial</span><span class="link-download"> <span class="renta-icon-download"></span></span></router-link></li>
                                        <li><a class="file-row" :href="'/downloads/incendio/incendio_robo_hab_ofic.pdf'" download target="_blank"><span class="link-name">Incendio y Robo HAB-OFIC</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/incendio/multirriesgo_espacios_comunes.pdf'" download target="_blank"><span class="link-name">Multiriesgo Espacio Común</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/incendio/prot_financ_empleadores.pdf'" download target="_blank"><span class="link-name">Protección Financiera Empleador</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/incendio/renta_home.pdf'" download target="_blank"><span class="link-name">Renta Home</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/incendio/renta_pyme.pdf'" download target="_blank"><span class="link-name">Renta Pyme</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/incendio/robo_comercial.pdf'" download target="_blank"><span class="link-name">Robo Comercial</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-form-download">
                                <div class="card-header">
                                    <h3 class="card-title"><span class="renta-icon-ing"></span><span>Ingenería</span></h3>
                                </div>
                                <div class="card-body">
                                    <ul class="files-list">
                                        <li><a class="file-row" :href="'/downloads/ingenieria/eq_contratista.pdf'" download target="_blank"><span class="link-name">Equipo De contratista</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/ingenieria/maq_eq_agricola.pdf'" download target="_blank"><span class="link-name">Maquinaria Equipo Agrícola</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/ingenieria/rc_prof_medica.pdf'" download target="_blank"><span class="link-name">RC Profesional Médica</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/ingenieria/renta_medica_integral.pdf'" download target="_blank"><span class="link-name">Renta Médico Integral</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/ingenieria/varios_seguros.pdf'" download target="_blank"><span class="link-name">Varios Seguros</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/ingenieria/rc_general.pdf'" download target="_blank"><span class="link-name">RC General</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-form-download">
                                <div class="card-header">
                                    <h3 class="card-title"><span class="renta-icon-car"></span><span>Vehículos</span></h3>
                                </div>
                                <div class="card-body">
                                    <ul class="files-list">
                                        <li><a class="file-row" :href="'/downloads/vehiculos/asiento_pasajeros_vehiculos.pdf'" download target="_blank"><span class="link-name">Asiento Pasajeros</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/vehiculos/+55.pdf'" download target="_blank"><span class="link-name">VM 55</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/vehiculos/vm_liviano_comercial.pdf'" download target="_blank"><span class="link-name">VM Liviano Comercial</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/vehiculos/vm_liviano_particular.pdf'" download target="_blank"><span class="link-name">VM Liviano Particular</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/vehiculos/vm_pesado.pdf'" download target="_blank"><span class="link-name">VM Pesado</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-form-download">
                                <div class="card-header">
                                    <h3 class="card-title"><span class="renta-icon-bus"></span><span>Transporte</span></h3>
                                </div>
                                <div class="card-body">
                                    <ul class="files-list">
                                        <li><a class="file-row" :href="'/downloads/transporte/transporte_flotante.pdf'" download target="_blank"><span class="link-name">Transporte Flotante</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/transporte/transporte_terrestre_resp_maxima.pdf'" download target="_blank"><span class="link-name">Transporte Terrestre R-Máxima</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                        <li><a class="file-row" :href="'/downloads/transporte/transporte_viaje_especifico.pdf'" download target="_blank"><span class="link-name">Transporte Viaje Específico</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-form-download">
                                <div class="card-header">
                                    <h3 class="card-title"><span class="renta-icon-other"></span><span>Endoso</span></h3>
                                </div>
                                <div class="card-body">
                                    <ul class="files-list">
                                        <li><a class="file-row" :href="'/downloads/otros/solicitud_endoso.pdf'" download target="_blank"><span class="link-name">Solicitud Endoso</span><span class="link-download"> <span class="renta-icon-download"></span></span></a></li>
                                    </ul>
                                </div>
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
    export default{
      name: 'DownloadForms',
      data () {
        return {
            test: false,
            isActive: true,
            hasError: false
        }
      },

     
      methods: {

        value() {
            /*Vue.prototype.$css = false;
            console.log("test");
            console.log(this.$css);*/

        }
      },

      created () {
        
      },
    }
</script>

<style>
    
    @media (max-width: 576px) { 
        .content-page-left {
          margin-left: 50px;
        }
    }
    /*@media (max-width: 1263px) { 
        .fix-menu{
          margin-left: 50px;
        }
    }*/
    

</style>