<template>
    <div class="content-page">
        <div class="content">
            <div class="container-fluid">
                <div class="page-title-box">
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                            <h4 class="page-title">Bandeja de propuestas</h4>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:void(0);">Producción</a></li>
                                <li class="breadcrumb-item"><a href="javascript:void(0);">Bandeja de propuestas</a></li>
                                <li class="breadcrumb-item active"><span></span></li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body" id="bandeja">
                                <div class="row">
                                    <div class="col-md-7">
                                        <h4 class="mt-0 header-title">Seleccione los datos que desea visualizar</h4>
                                        <p class="text-muted m-b-30">El botón mostrar todo mostrará en tabla todos los datos disponibles</p>
                                    </div>
                                    <div class="col-md-5 text-right colvis-btns"></div>
                                </div>
                                <button @click="onUpload">Hey again</button>
                                <div class="table-responsive mb-0">
                                    <table class="table table-striped table-small-font table-sm" id="propuestas" style="width: 100%">
                                        <thead>
                                            <tr>
                                                <th class="text-center" data-priority="1">Id Propuesta</th>
                                                <th class="text-center" data-priority="2">Fecha</th>
                                                <th class="text-center" data-priority="2">Plan</th>
                                                <th class="text-center" data-priority="1">Cliente</th>
                                                <th class="text-center" data-priority="3">Prima Neta</th>
                                                <th class="text-center" data-priority="3">Póliza-Ítem</th>
                                                <th class="text-center" data-priority="1">Estado</th>
                                                <th class="text-center" data-priority="3">Tipo</th>
                                                <th class="text-center" data-priority="1">Días</th>
                                                <th class="text-center" data-priority="1">Adjuntos</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                          <tr class="upload">HELLOLOLO</tr>
                                        </tbody>
                                    </table>
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
    import $ from 'jquery'
     
    Vue.use(VueAxios, axios)

    export default {
      name: 'app',
      data () {
        return {
            data: '',
            resp: '',
            identificacion: '27052222',
            password: '123',
            dig_verificador: 'K'
        }
      },
      methods:{
        onUpload() {
          //let fd = new FormData();
          //fd.append('file', this.file)
        const formData = new FormData();
        formData.append('identificacion', this.identificacion);
        formData.append('password', this.password);
        formData.append('dig_verificador', this.dig_verificador);

          axios.post('http://10.156.160.21:8000/api/login/', formData, {
            /*data: {
                identificacion: this.identificacion,
                password: this.password,
                dig_verificador: this.dig_verificador
            },
            headers: {
                 //'Access-Control-Allow-Origin':'http://10.156.160.21:8000/',
                 'Content-Type': 'application/json'
             }*/

          }
            ).then(function(){
              console.log('SUCCESS!!');
            })
            .catch(function(){
              console.log('FAILURE!!');
            });
        },

        test() {
            const session_url = 'http://10.156.160.21:8000/api/login'
            var identificacion = '27052222';
            var password = 123;
            var dig_verificador = 'K';
            axios({
                method: 'post',
                url: session_url,
                auth: {
                  identificacion: identificacion,
                  password: password,
                  dig_verificador: dig_verificador
                }
            })
            .then(response => {
              console.log('SUCCESS')
              console.log(response.data)
              /*this.$store.dispatch('signin', response.data)*/
            }).catch(error => {
              console.log('FAILURE')
              console.log(identificacion);
              this.error = error
              console.log(error)
            });
        }


      },

      computed: {

      }


    }

</script>