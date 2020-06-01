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
                            <td class="text-center" v-if="bandeja.tipo_propuesta === 'CFE'"
                             @click="listarAdjuntos(bandeja.id_propuesta, bandeja.rut_cliente, 2)">
                              <img class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/clip.png"/>
                              <b-modal v-model="modalShow">
                                <ul v-for="files in adjuntos.data">
                                  <li>
                                    <a :href="'http://200.91.27.159:8000/api/descargadocpropuestas/'+bandeja.id_propuesta+'/'+bandeja.rut_intermediario+'/'+ 2 + '/'+files" 
                                      @click.native="descargarAdjuntos(bandeja.id_propuesta, bandeja.rut_intermediario, 2, files)" download>
                                      {{files}}
                                    </a>
                                  </li>
                                </ul>
                              </b-modal>
                            </td>
                            <td class="text-center" v-if="bandeja.tipo_propuesta === 'CF'"
                             @click="listarAdjuntos(bandeja.id_propuesta, bandeja.rut_intermediario, 1)">
                              <img class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/clip.png"/>
                              <b-modal v-model="modalShow">
                                <ul v-for="files in adjuntos.data">
                                  <li>
                                    <a :href="'http://200.91.27.159:8000/api/descargadocpropuestas/'+bandeja.id_propuesta+'/'+bandeja.rut_intermediario+'/'+ 1 + '/'+files" 
                                      @click.native="descargarAdjuntos(bandeja.id_propuesta, bandeja.rut_intermediario, 1, files)" download>
                                      {{files}}
                                    </a>
                                  </li>
                                </ul>
                              </b-modal>
                            </td>
                            <td class="text-center" v-if="bandeja.tipo_propuesta === 'FW'"
                             @click="listarAdjuntos(bandeja.id_propuesta, bandeja.rut_intermediario, 3)">
                              <img class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/clip.png"/>
                              <b-modal v-model="modalShow">
                                <ul v-for="files in adjuntos.data">
                                  <li>
                                    <router-link to="#" 
                                      @click.native="descargarAdjuntos(bandeja.id_propuesta, bandeja.rut_intermediario, 3, files)">
                                      {{files}}
                                    </router-link>
                                  </li>
                                </ul>
                              </b-modal>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <template>
                        <v-card-title>
                          
                          <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Buscar"
                            style="width: 25px;!important"
                            hide-details
                          ></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers" :items="data" :search="search" class="elevation-1" loading loading-text="" >
                          <template v-slot:item.estado="{ item }">
                            <img :src="'/src/assets/images/bandeja-iconos/' + item.estado" style="width: 25px; height: 25px" />
                          </template>

                          <template v-slot:item.tipoPropuesta="{ item }" >
                            <img :src="'/src/assets/images/bandeja-iconos/' + item.tipoPropuesta" style="width: 25px; height: 25px" />
                          </template>

                          <template v-slot:item.dias="{ item }">
                            <v-chip :color="getColor(item.dias)" style="color:#fff;">{{ item.dias }}</v-chip>
                          </template>

                          <template v-slot:item.directorio="{ item }">
                            <img :src="'/src/assets/images/bandeja-iconos/' + item.directorio" style="width: 25px; height: 25px" />
                            <b-modal v-model="modalShow">
                                <ul v-for="files in adjuntos.data">
                                  <li>
                                    <a :href="'http://200.91.27.159:8000/api/descargadocpropuestas/'+bandeja.id_propuesta+'/'+bandeja.rut_intermediario+'/'+ 2 + '/'+files" 
                                      @click.native="descargarAdjuntos(bandeja.id_propuesta, bandeja.rut_intermediario, 2, files)" download>
                                      {{files}}
                                    </a>
                                  </li>
                                </ul>
                              </b-modal>
                              <v-app id="inspire">

                                  <v-dialog v-model="dialog" persistent max-width="290">
                                    <template v-slot:activator="{ on }">
                                      <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
                                    </template>
                                    <v-card>
                                      <v-card-title class="headline">Use Google's location service?</v-card-title>
                                      <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                                      <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
                                        <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
                                      </v-card-actions>
                                    </v-card>
                                  </v-dialog>

                              </v-app>
                          </template>
                        
                        </v-data-table>

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
          dialog: false,

          

         /* params: {
            data: [
             ['Id Propuesta', 'Fecha Ingreso', 'Plan', 'Cliente', 'Prima Neta', 'Póliza-Ítem', 'Estado', 'Tipo', 'Días',' this.msg'],
            ],
            header: 'row',
            enableSearch: true,
            sort: [0, 1],
            stripe: true,
            pagination: true,
            pageSize: 10,
            pageSizes: [10, 25, 50, 100],
            columnWidth: [{column: 0, width: 120}, {column: 1, width: 120}, {column: 2, width: 80},
            {column: 3, width: 240}, {column: 4, width: 80}, {column: 5, width: 100}, {column: 6, width: 60}, {column: 7, width: 60}, {column: 8, width: 60}, {column: 9, width: 60}],
          },*/

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
        }

       
      },

      

       methods: {
          img () {
            return "hola";
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

            for (var i = 0; i < 5; i++){
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
                directorio: "clip.png"})
            }
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
              } else if (this.bandejaProp[i].tipo_propuesta === 'FW') {
                  this.tipoPropuesta = 'web.png';
                } else if (this.bandejaProp[i].tipo_propuesta === 'CFE') {
                    this.tipoPropuesta = 'Endoso.png';
                  } else {
                      this.tipoPropuesta = 'NPI';
                  }

              /*this.data.push({
                idPropuesta: this.bandejaProp[i].id_propuesta + '-' + this.bandejaProp[i].item, 
                fecha: this.bandejaProp[i].fecha, 
                idPlan: this.bandejaProp[i].id_plan, 
                cliente: this.bandejaProp[i].nombre_cliente, 
                primaNeta: this.bandejaProp[i].prima_neta, 
                idPoliza: this.bandejaProp[i].id_poliza + '-' + this.bandejaProp[i].item, 
                estado: this.status, 
                tipoPropuesta: this.tipoPropuesta, 
                dias: this.cuentaDias(this.bandejaProp[i].fecha), 
                directorio: "clip.png"})
            }*/

            this.data.push({
                idPropuesta: '123456' + '-' + '7', 
                fecha: '2020-06-01', 
                idPlan: '55555', 
                cliente: 'Manuel Saago', 
                primaNeta: '123896', 
                idPoliza: '123' + '-' + '456', 
                estado: 'Pendiente', 
                tipoPropuesta: 'shit', 
                dias: '8', 
                directorio: "clip.png"})
            }
          },

          listarAdjuntos(idPropuesta, rut, tipo) {
            //console.log(idPropuesta);
            //console.log(rut);
            //console.log(tipo);
            this.modalShow = true;
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
            axios.get('http://' + this.$url + '/api/listardocpropuestas/'+ idPropuesta + '/' + rut + '/' + t, {

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
            this.adjuntos.data.push({token});
            console.log(this.adjuntos);
          },

          descargarAdjuntos(idPropuesta, rut, tipo, archivo) {
            //console.log(idPropuesta);
            //console.log(rut);
            //console.log(tipo);
            //this.modalShow = true;
            if (tipo == 1) {
              var t = 'P';
            } else {
              var t = 'E';
            }
            var token = JSON.parse(window.localStorage.getItem('token'));
            this.tokenDown = token;
            const test = JSON.parse(window.localStorage.getItem('rutLogueado'));
            if (token === 0) {
              this.$router.push('./');
            }
            //console.log(test);
            //console.log("Token");
            //console.log(token);
            let rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
            let numero = '*';
            axios.get('http://' + this.$url + '/api/descargadocpropuestas/'+ idPropuesta + '/' + rut + '/' + t + '/' + archivo, {

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
        }

        
    

    }

</script>