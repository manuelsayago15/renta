<template>
	<div id="wrapper">
		<Topbar></Topbar>
    <!--<SideMenu></SideMenu>-->
    	<div class="content-page">
        <div class="content">
          <div class="container-fluid">
            <div class="page-title-box">
              <div class="row align-items-center">
                <div class="col-sm-6">
                  <h4 class="page-title">Solicitud de endoso</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Producción</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Solicitud de endoso</a></li>
                    <li class="breadcrumb-item active"><span></span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="form-row">
                      <div class="col-lg-3">
                        <label>Número de póliza</label>
                        <input class="form-control" v-model="poliza" type="number">
                      </div>
                      <div class="col-lg-3">
                        <label>Ítem</label>
                        <input class="form-control" v-model="item" type="number">
                      </div>
                      <div class="col-lg-1 d-flex">
                        <button class="btn btn-primary align-self-end btn-endoso-buscar" @click="buscaPoliza"><i class="fas fa-search"></i></button>
                      </div>
                    </div>
                    <div class="form-row" v-if="showFieldsItem == true">
                      <div class="col-lg-3">
                        <label>Nombre</label>
                        <input class="form-control" :value="this.polizaArray.data[0].nombre_cliente" type="text" readonly>
                      </div>
                      <div class="col-lg-3">
                        <label>Plan:</label>
                        <input class="form-control" :value="this.polizaArray.data[0].id_plan + this.polizaArray.data[0].nombre_plan" type="text" readonly>
                      </div>
                    </div>
                    <div class="form-row" v-if="showFieldsItem == true">
                      <div class="col-lg-3">
                        <label>Vigencia</label>
                        <input class="form-control" :value="edita_fecha(this.polizaArray.data[0].inicio)" type="text" readonly placeholder="Desde">
                      </div>
                      <div class="col-lg-3 d-flex">
                        <input class="form-control align-self-end" :value="edita_fecha(this.polizaArray.data[0].termino)" type="text" readonly placeholder="Hasta">
                      </div>
                    </div>
                    <div class="dropfiles-section upperline mt-3">
                      <h3 class="subtitle">Subir archivo</h3>
                      <div class="dropfiles-section inner-text mb-2 d-flex align-items-center">
                          <p class="m-0">Elija los archivos que desea cargar en su propuesta </p>
                          <button class="ml-2 btn btn-primary d-none" type="button" id="examinar">Examinar</button>
                      </div>

                      <!-- <p>Elija los archivos que desea cargar en su propuesta</p> -->
                      <vue-dropzone id="drop1" ref="dropzone" @vdropzone-complete="afterComplete" :options="dropOptions"></vue-dropzone>
                      <!--<div class="dropzone" id="uploadFile">
                          <div class="fallback">
                              <input name="file" type="file" multiple="multiple" id="archivos">
                              <div class="dz-message" data-dz-message><span>Carga tus archivos</span></div>
                          </div>
                      </div>-->
                    </div>

                    <div class="action-section d-flex justify-content-center align-items-center">
                        <!-- <button class="btn btn-primary btn-lg" type="submit" onclick="enviar();">Enviar</button> -->
                        <input class="btn btn-primary btn-lg" id="enviar" @click="cargaFormulario" value="Enviar" />
                        <!-- <button type="submit" class="btn btn-primary btn-lg">Enviar</button> -->
                        <!-- <input type="submit" value="Subir archivos" /> -->
                    </div>
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
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import vueDropzone from 'vue2-dropzone';
    import 'vue2-dropzone/dist/vue2Dropzone.min.css';
    Vue.use(VueAxios, axios)

    export default {
      name: 'UploadForms',
      components: {
        vueDropzone
      },
      data () {
        return {
          dropOptions: {
            url: "https://httpbin.org/post",
          maxFilesize: 2, // MB
          maxFiles: 4,
          chunking: true,
          chunkSize: 500, // Bytes
          thumbnailWidth: 150, // px
          thumbnailHeight: 150,
          addRemoveLinks: true
          },
          dropzone: [],
          poliza: '',
          polizaArray: [],
          showFieldsItem: false,
          item: '',
          errors: [],
        }
      },

      methods: {
        buscaPoliza() {
          var token = JSON.parse(window.localStorage.getItem('token'));
          const test = JSON.parse(window.localStorage.getItem('rutLogueado'));
          if (token === 0) {
            this.$router.push('./');
          }
          //console.log(test);
          //console.log("Token");
          //console.log(token);
          let rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
          axios.get('http://' + this.$url + '/api/polizas/' + this.poliza + '/' + this.item + '/' + rutLogueado, {

            params: {
                        'token' : token
                    }

          }
          ).then(response => {
            console.log("poliza");
            console.log(response);
            this.polizaArray = response.data;
            this.showFieldsItem = true;
            console.log('SUCCESS!!');
            console.log(this.polizaArray.data.length);
          })
          .catch(error => {
            console.log('FAILURE!!');
          });
        },

        afterComplete(file) {
          console.log(file);
          this.dropzone.push(file);
          console.log(this.dropzone);
      },

        cargaFormulario() {
          var token = JSON.parse(window.localStorage.getItem('token'));
          if (token === 0) {
            this.$router.push('./');
          }

          let rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
          let dv_logueado = JSON.parse(window.localStorage.getItem('dvLogueado'));

          const formData = new FormData();
          formData.append('rut_usuario', rutLogueado);
          formData.append('dv_usuario', dv_logueado);
          formData.append('id_poliza', this.poliza);
          formData.append('item_poliza', this.item);
          formData.append('token', token);

          console.log(this.dropzone);

          for (var i = 0; i < this.dropzone.length; i++) {
              formData.append('directorio' + i, this.dropzone[i]);
          }
          console.log(formData.get('directorio0'));
          axios.post('http://' + this.$url + '/api/propuestaendosos/', formData, {

            params: {
                        'token' : token
                    }

          }
          ).then(response => {
            console.log("envioDatos");
            console.log(response);
            console.log('SUCCESS!!');
          })
          .catch(error => {
            console.log('FAILURE!!');
          });
        },

        // Permitir sólo números en el imput
        isNumber: function(evt) {
            var charCode = evt.which ? evt.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode === 75) return false;

            return true;
        },

        //Solo permite introducir numeros.
        esNumbero(evt) {
            var charCode = evt.which ? evt.which : evt.keyCode;
            //alert(charCode)
            if(charCode > 31 && (charCode < 48 || charCode > 57)){
                return false;
            }
                 
            return true;
        },

        edita_fecha: function(fecha) {
          var fn = fecha.split("-");
          return fn[2] + "-" + fn[1] + "-" + fn[0];
        }
    },

    created () {

    }
    

    }

</script>