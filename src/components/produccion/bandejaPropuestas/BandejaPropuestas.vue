<template>
  <div id="wrapper">
    <Topbar></Topbar>
    <SideMenu></SideMenu>
    <div class="content-page">
        <div class="content">
          <div class="container-fluid">
            <div class="page-title-box">
              <div class="row align-items-center">
                <div class="col-sm-6">
                  <h4 class="page-title">Bandeja de Propuestas</h4>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Produción</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Bandeja de Propuestas</a></li>
                    <li class="breadcrumb-item active"><span></span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-7">
                        <h4 class="mt-0 header-title">Seleccione los datos que desea visualizar</h4>
                        <p class="text-muted m-b-30">El botón mostrar todo mostrará en tabla todos los datos disponibles</p>
                      </div>
                      <div class="col-md-5 text-right colvis-btns"></div>
                    </div>
                    <div class="table-responsive mb-0">
                      <table class="table table-striped table-small-font table-sm" id="propuestas" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="text-center" data-priority="1">Id Propuesta</th>
                            <th class="text-center" data-priority="2">Fecha Ingreso</th>
                            <th class="text-center" data-priority="2">Plan</th>
                            <th class="text-center" data-priority="1">Cliente</th>
                            <th class="text-center" data-priority="3">Prima Neta</th>
                            <th class="text-center" data-priority="3">Póliza-Ítem</th>
                            <th class="text-center" data-priority="1">Estado</th>
                            <th class="text-center" data-priority="3">Tipo</th>
                            <th class="text-center" data-priority="1">Dias</th>
                            <th class="text-center" data-priority="1">Adjuntos</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="text-center" v-for="bandeja in bandejaProp">
                            <td class="text-center">
                              {{ bandeja.id_propuesta }}-{{bandeja.item}}
                            </td>
                            <td class="text-center">{{ edita_fecha(bandeja.fecha) }}</td>
                            <td class="text-center">{{ bandeja.id_plan }}</td>
                            <td class="text-center">{{ bandeja.nombre_cliente }}</td>
                            <td class="text-center">{{ bandeja.prima_neta }}</td>
                            <td class="text-center">
                              {{ bandeja.id_poliza }}-{{bandeja.item}}
                            </td>
                            <td class="text-center" v-if="bandeja.estatusitem === 'P' ">
                              <span class="d-none">pendiente</span>
                              <img class="img-fluid dt-icons" title="Pendiente" src="/src/assets/images/bandeja-iconos/pendiente.png"/>
                            </td>
                            <td v-if="bandeja.estatusitem === 'R'">
                              <img title="Rechazado" class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/eliminar.png">
                            </td>
                            <td v-if="bandeja.tipo_propuesta === 'CF'">
                              <img title="Carga formulario" class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/formulario.png">
                            </td>
                            <td v-if="bandeja.tipo_propuesta === 'FW'">
                              <img title="Formulario web" class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/web.png">
                            </td>
                            <td v-if="bandeja.tipo_propuesta === 'CFE'">
                              <img title="Endoso" class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/Endoso.png">
                            </td>
                            <!--<td class="text-center"><span class="d-none">formulario</span><img class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/formulario.png"/></td>-->
                            <td class="text-center" v-if="cuentaDias(bandeja.fecha) >= 5">
                              <div style="background-color:red; color:#fff; height: 25px; width: 25px; border-radius: 50%; margin: 0 auto;">
                                <strong> {{cuentaDias(bandeja.fecha)}} </strong>
                              </div>
                            </td>
                            <td class="text-center" v-if="cuentaDias(bandeja.fecha) >= 0 && cuentaDias(bandeja.fecha) <= 2">
                              <div style="background-color:#FBBC05; color:#fff; height: 25px; width: 25px; border-radius: 50%; margin: 0 auto;">
                                <strong> {{cuentaDias(bandeja.fecha)}} </strong>
                              </div>
                            </td>
                            <td class="text-center" v-if="cuentaDias(bandeja.fecha) >= 3 && cuentaDias(bandeja.fecha) <= 4">
                              <div style="background-color:red; color:#fff; height: 25px; width: 25px; border-radius: 50%; margin: 0 auto;">
                                <strong> {{cuentaDias(bandeja.fecha)}} </strong>
                              </div>
                            </td>
                            <td class="text-center" id="exampleModalCenter" v-if="bandeja.tipo_propuesta === 'CFE'"
                             @click="listarAdjuntos(bandeja.id_propuesta, bandeja.rut_cliente, 2)">
                              <img class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/clip.png"/>
                            </td>
                            <td class="text-center" id="exampleModalCenter" v-if="bandeja.tipo_propuesta === 'CF'"
                             @click="listarAdjuntos(bandeja.id_propuesta, bandeja.rut_intermediario, 1)">
                              <img class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/clip.png"/>
                            </td>
                            <td class="text-center" id="exampleModalCenter" v-if="bandeja.tipo_propuesta === 'FW'"
                             @click="listarAdjuntos(bandeja.id_propuesta, bandeja.rut_intermediario, 3)">
                              <img class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/clip.png"/>
                            </td>
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
      </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLongTitle"><img width="40px" height="40px" src="../assets/images/bandeja-iconos/clip.png"> Adjuntos</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ul id="lista">
            
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          <a type="button" class="btn btn-primary" style="color:white" id="descarga" >Descargar todos</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import moment from 'moment'
    Vue.use(VueAxios, axios)

    export default {
      name: 'BandejaPropuestas',
    /*components:{
      Topbar,
      SideMenu
    },*/
      data () {
        return {
          bandejaProp: [],
          adjuntos: []
        }

       
      },

       methods: {
          bandejaPropuestas() {
            var token = JSON.parse(window.localStorage.getItem('token'));
            const test = JSON.parse(window.localStorage.getItem('rutLogueado'));
            if (token === 0) {
              this.$router.push('./');
            }
            //console.log(test);
            //console.log("Token");
            //console.log(token);
            let rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
            let numero = '*';
            axios.get('http://200.91.27.159:8000/api/propuestas/'+ rutLogueado+'/'+numero, {

              params: {
                          'token' : token
                      }

            }
            ).then(response => {
              console.log("bandejaPropuestas");
              console.log(response);
              this.bandejaProp = response.data;
              console.log('SUCCESS!!');
            })
            .catch(error => {
              console.log('FAILURE!!');
            });
          },

          listarAdjuntos(idPropuesta, rut, tipo) {
            console.log(idPropuesta);
            console.log(rut);
            console.log(tipo);
            if (tipo == 1) {
              var t = 'P';
            } else {
              var t = 'E';
            }
            var token = JSON.parse(window.localStorage.getItem('token'));
            const test = JSON.parse(window.localStorage.getItem('rutLogueado'));
            if (token === 0) {
              this.$router.push('./');
            }
            //console.log(test);
            //console.log("Token");
            //console.log(token);
            let rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
            let numero = '*';
            axios.get('http://200.91.27.159:8000/api/listardocpropuestas/'+ idPropuesta + '/' + rut + '/' + t, {

              params: {
                          'token' : token
                      }

            }
            ).then(response => {
              console.log("adjuntos");
              console.log(response);
              this.adjuntos = response.data;
              console.log('SUCCESS!!');
            })
            .catch(error => {
              console.log('FAILURE!!');
            });
          },

          edita_fecha: function(fecha) {
            var fn = fecha.split("-");
            return fn[2] + "-" + fn[1] + "-" + fn[0];
          },
          edita_fecha2: function(fecha) {
            var fn = fecha.split("-");
            return fn[2] + "-" + fn[1];
          },

          cuentaDias: function(fecha) {
            var fecha_inicio = fecha;

            var fecha_v = moment(fecha_inicio);
            var hoy = moment();

            var dias = hoy.diff(fecha_v, 'days');
            var n = "";

            if ((dias >= 0) && (dias <= 2)) {
              n = `<div style="background-color:#34A853; color:#fff; height: 25px; width: 25px; border-radius: 50%; margin: 0 auto;"><strong>` + dias + `</strong></div>`
                
            }
            if ((dias >= 3) && (dias <= 4)) {
                n = `<div style="background-color:#FBBC05; color:#fff; height: 25px; width: 25px; border-radius: 50%; margin: 0 auto;"><strong>` + dias + `</strong></div>`
            }
            if (dias >= 5) {
                //this.three(dias);
            }
            return dias;

          },
        },

        created (){
          this.bandejaPropuestas();
        }
    

    }

</script>