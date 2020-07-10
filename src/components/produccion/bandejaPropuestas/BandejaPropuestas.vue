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
                      
                    </div>
                    <div class="">
                      <template>
                        <v-app id="inspire">
                          <v-card>
                            <div class="col-md-6 search-table">
                              <v-card-title>
                                <v-text-field
                                  v-model="search"
                                  append-icon="mdi-magnify"
                                  label="Buscar"
                                  style="width: 25px;!important"
                                  hide-details
                                ></v-text-field>
                              </v-card-title>
                              
                            </div>
                            <div class="col-md-6 show-columns">
                              <v-app id="inspire">
                                <v-card>
                                <div style="height: 55px;" v-click-outside="onClickOutsideStandard" @click="models.base = true">
                                  <v-select v-model="selectedHeaders" :items="headersButton" label="Mostrar Columnas" multiple outlined return-object >
                                    <template v-slot:selection="{ item, index }">
                                      <v-chip v-if="index < 2">
                                        <span>{{ item.text }}</span>
                                      </v-chip>
                                      <span v-if="index === 2" class="grey--text caption">(+{{ selectedHeaders.length - 2 }} otros)</span>
                                    </template>
                                  </v-select>
                                  
                                </div>
                              </v-card>
                              </v-app>
                            </div>

                            <v-data-table :headers="showHeaders" :items="data" :items-per-page="10" :search="search" class="elevation-1" >
                              <template v-slot:item.estado="{ item }">
                                <img :src="'/src/assets/images/bandeja-iconos/' + item.estado" style="width: 25px; height: 25px" />
                              </template>

                              <template v-slot:item.tipoPropuesta="{ item }" >
                                <img :src="'/src/assets/images/bandeja-iconos/' + item.tipoPropuesta" style="width: 25px; height: 25px" />
                              </template>

                              <template v-slot:item.dias="{ item }">
                                <v-chip :color="getColor(item.dias)" style="color:#fff;">{{ item.dias }}</v-chip>
                              </template>

                              <template v-slot:item.directorio="{ item, onlyIdPropuesta, letra }">

                                  <img :src="'/src/assets/images/bandeja-iconos/' + item.directorio" style="width: 25px; height: 25px" @click="listarAdjuntos(item.onlyIdPropuesta, item.letra, item)" />

                              </template>

                              <!--<template v-slot:item.directorio="{ item, onlyIdPropuesta, letra,  }">
                                <v-icon
                                  small
                                  class="mr-2"
                                  @click="editItem(item)"
                                >
                                  mdi-pencil
                                </v-icon>
                              </template>-->
                            </v-data-table>
                          </v-card>
                        </v-app>
                        <!-- Modal Adjuntos -->

                        <v-app id="inspire">
                          <div class="text-xs-center">
                            <v-dialog
                              v-model="modal"
                              width="500">
                              <v-card>
                                <v-card-title
                                  class="headline grey lighten-2"
                                  primary-title
                                >
                                  <img src="/src/assets/images/bandeja-iconos/clip.png" style="width: 35px;"> Adjuntos
                                </v-card-title>
                        
                                <v-card-text >
                                  <ul>
                                    <li v-for="files in adjuntos.data">
                                      <a :href="'http://' + $url + '/api/descargadocpropuestas/' + editedItem.onlyIdPropuesta + '/' + rutLogged + '/' + editedItem.letra + '/' + files + '?token=' + tokenDown" download>
                                        {{files}}
                                      </a>
                                    </li>
                                  </ul>
                                  <!--<v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.tipo_propuesta" label="Test"></v-text-field>
                                  </v-col>-->
                                </v-card-text>
                        
                                <v-divider></v-divider>
                        
                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="primary"
                                    text
                                    @click="modal = false"
                                  >
                                    Cancelar
                                  </v-btn>
                                  <v-btn
                                    color="red"
                                    text
                                    @click="modal = false"
                                  >
                                    Aceptar
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </div>
                        </v-app>
                      </template>


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
    import moment from 'moment'
    //import VueTableDynamic from 'vue-table-dynamic'
    import image from '@/assets/images/bandeja-iconos/pendiente.png'
    Vue.use(VueAxios, axios)

    export default {
      name: 'BandejaPropuestas',
      components:{
        //VueTableDynamic,
      },
      data () {
        return {
          bandejaProp: [],
          adjuntos: [],
          downloadFiles: [],
          modalShow: false,
          tokenDown: '',
          status: '',
          tipoPropuesta: '',
          image: image,
          modal: false,
          rutLogged : '',

          options: {
            sortBy: 'fecha',

          },
          selected: [],

          search: '',
          headers: [
            {
              text: 'Id Propuesta',
              align: 'start',
              //sortable: false,
              value: 'idPropuesta',
            },
            { text: 'Fecha Ingreso', value: 'fecha' },
            { text: 'Plan', value: 'idPlan' },
            { text: 'Cliente', value: 'cliente' },
            { text: 'Prima Neta', value: 'primaNeta' },
            { text: 'Póliza-Ítem', value: 'idPoliza' },
            { text: 'Estado', value: 'estado' },
            { text: 'Tipo', value: 'tipoPropuesta' },
            { text: 'Días', value: 'dias' },
            { text: 'Adjunto', value: 'directorio' },
          ],

          data: [],
          admins: [
            ['Management', 'people_outline'],
            ['Settings', 'settings'],
          ],
          editedIndex: -1,
          editedItem: {
            name: '',
            idPropuesta: 0,
            onlyIdPropuesta: 0,
            fecha: 0,
            idPlan: 0,
            cliente: 0,
            directorio: 0,
          },
          
          /* Headers Button */
          headersButton: [],
          headersMap: {
            idpropuesta: { text: 'Id Propuesta', value: 'idPropuesta' },
            fechaIngreso: { text: 'Fecha Ingreso', value: 'fecha' },
            plan: { text: 'Plan', value: 'idPlan' },
            cliente: { text: 'Cliente', value: 'cliente' },
            primaNeta: { text: 'Prima Neta', value: 'primaNeta', sortable: false },
            poliza: {text: 'Póliza-Ítem', value: 'idPoliza'},
            estado: {text: 'Estado', value: 'estado'},
            tipo: {text: 'Tipo', value: 'tipoPropuesta'},
            dias: {text: 'Días', value: 'dias'},
            adjunto: {text: 'Adjunto', value: 'directorio'},
          },

          selectedHeaders: [],

          /* Click outside */

          models: {
            base: false,
            conditional: false,
          },

        }

       
      },

      

       methods: {
          onClickOutsideStandard () {
            console.log(this.models.base);
            this.models.base = false
          },

          editItem (item) {
            this.editedIndex = this.data.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.modal = true
          },

          getColor (dias) {
            if (dias >= 0 && dias < 2) return 'green'
            else if (dias >= 2 && dias < 4) return 'yellow'
            else return '#EE1F35'
          },

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
            axios.get('http://' + this.$url + '/api/propuestas/'+ rutLogueado+'/'+numero, {

              params: {
                          'token' : token
                      }

            }
            ).then(response => {
              console.log("bandejaProp");
              console.log(response);
              this.bandejaProp = response.data;
              console.log('SUCCESS!!');
              console.log(this.bandejaProp.length);
              console.log("Arriba de esta línea");
              this.fillTable();
            })
            .catch(error => {
              console.log('FAILURE!!');
            });
          },

          fillTable() {

            /*for (var i = 0; i < 15; i++){
              this.data.push({
                idPropuesta: '123456' + '-' + '7', 
                fecha: '2020-06-01', 
                idPlan: '55555', 
                cliente: 'Manuel Sayago', 
                primaNeta: '123896', 
                idPoliza: '123' + '-' + '456', 
                estado: 'Pendiente', 
                tipoPropuesta: 'shit', 
                dias: '8', 
                directorio: "clip.png",
                rutIntermediario: "2011"})
            }*/
            console.log("dentro de fillTable");
            console.log(this.bandejaProp.length);
            for (let i = 0; i < this.bandejaProp.length; i++) {
              if (this.bandejaProp[i].estatusitem === 'P') {
                this.status = 'pendiente.png';
              } else if (this.bandejaProp[i].estatusitem === 'R') {
                  this.status = 'eliminar.png';
                } else {
                    this.status = 'NP';
                }

              if (this.bandejaProp[i].tipo_propuesta === 'CF') {
                this.tipoPropuesta = 'formulario.png';
                this.letraPropuesta = 'P'; //1
              } else if (this.bandejaProp[i].tipo_propuesta === 'FW') {
                  this.tipoPropuesta = 'web.png';
                  this.letraPropuesta = 'P'; //3
                } else if (this.bandejaProp[i].tipo_propuesta === 'CFE') {
                    this.tipoPropuesta = 'Endoso.png';
                    this.letraPropuesta = 'E'; //2
                  } else {
                      this.tipoPropuesta = 'NPI';
                  }

              this.data.push({
                idPropuesta: this.bandejaProp[i].id_propuesta + '-' + this.bandejaProp[i].item, 
                onlyIdPropuesta: this.bandejaProp[i].id_propuesta,
                fecha: this.bandejaProp[i].fecha, 
                idPlan: this.bandejaProp[i].id_plan, 
                cliente: this.bandejaProp[i].nombre_cliente, 
                primaNeta: this.bandejaProp[i].prima_neta, 
                idPoliza: this.bandejaProp[i].id_poliza + '-' + this.bandejaProp[i].item, 
                estado: this.status, 
                tipoPropuesta: this.tipoPropuesta, 
                tipo_propuesta: this.bandejaProp[i].tipo_propuesta,
                dias: this.cuentaDias(this.bandejaProp[i].fecha), 
                directorio: "clip.png",
                rutIntermediario: this.bandejaProp[i].rut_intermediario,
                rutEjecutivo: this.bandejaProp[i].rut_ejecutivo,
                letra: this.letraPropuesta})
            }

            
            
          },

          listarAdjuntos(idPropuesta, tipo, item) {
            console.log(idPropuesta);
            console.log(tipo);
            this.editItem(item);
            //this.modalShow = true;
            this.modal = true;
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
            this.rutLogged = JSON.parse(window.localStorage.getItem('rutLogueado'));
            this.tokenDown = token;
            let numero = '*';
            axios.get('http://' + this.$url + '/api/listardocpropuestas/'+ idPropuesta + '/' + rutLogueado + '/' + t, {

              params: {
                          'token' : token
                      }

            }
            ).then(response => {
              console.log("adjuntos");
              console.log(response);
              this.adjuntos = response.data;
              console.log(this.adjuntos);
              console.log(this.adjuntos.data.length);
              console.log('SUCCESS!!');
            })
            .catch(error => {
              console.log('FAILURE!!');
            });
            //this.adjuntos.data.push({token});
            //console.log(this.adjuntos);
            //this.descargarAdjuntos();
          },

          descargarAdjuntos(idPropuesta, tipo, archivo) {
            console.log(idPropuesta);
            console.log(tipo);
            console.log(archivo);
            //this.modalShow = true;
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
            axios.get('http://' + this.$url + '/api/descargadocpropuestas/'+ idPropuesta + '/' + rutLogueado + '/' + t + '/' + archivo, {

              params: {
                          'token' : token
                      }

            }
            ).then(response => {
              console.log("downloadFiles");
              console.log(response);
              this.downloadFiles = response.data;
              console.log(this.downloadFiles);
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
          this.fillTable();
          this.headersButton = Object.values(this.headersMap);
          this.selectedHeaders = this.headersButton;
        },

        computed: {
          //Done to get the ordered headers
          showHeaders () {
            return this.headersButton.filter(s => this.selectedHeaders.includes(s));
          }
        }

        
    

    }

</script>

<style type="text/css">
  .v-sheet {
    border-radius: 0px!important;
  }
  .v-card {
    box-shadow: 0px 0px 0px 0px !important;
  }

  .v-text-field {
    padding-top: 0px;
     margin-top: 0px;
  }

  .v-applicaction {
    font-family: Roboto,sans-serif;
  }

  .v-card__title {
    width: 70%;
  }

  tbody tr:nth-of-type(even) {
    background-color: rgb(250 ,250, 250);
  }

  tbody tr:nth-of-type(odd) {
    background-color: rgba(236, 237, 237);
  }

  .v-data-table td, .v-data-table th {
    padding: 0 15px;
  }

  .search-table {
    display: inline-block;
    width: 48%;
  }

  .show-columns {
    display: inline-block;
  }
</style>