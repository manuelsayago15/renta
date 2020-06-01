<template>
	<div id="wrapper">
    	<Topbar></Topbar>
    	<SideMenu></SideMenu>
        <div class="content-page">
            <div class="content p-0">
              <div class="container-fluid">
                <!--<div class="page-title-box p-0 pt-1">
                  <div class="row align-items-center">
                    <div class="col-sm-6">
                      <h4 class="page-title">Próximos vencimientos</h4>
                      <ol class="breadcrumb">
                      </ol>
                    </div>
                  </div>
                </div>-->
                <!--<div class="row">
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-primary text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0">
                        	<span id="inicio_diez" v-for="ven in polizaVencimiento">
                        		{{ edita_fecha(ven[0].fecha_inicio) }}
                        	</span>
                        	<span id="gion_diez">&nbsp;&nbsp;-&nbsp;&nbsp;</span> 
                        	<span id="fin_diez" v-for="ven in polizaVencimiento">
                        		{{ edita_fecha(ven[0].fecha_fin) }}
                        	</span>
                        </p>
                        <h3 class="m-0 font-weight-bold text-uppercase">
                        	<span id="total_diez" v-for="ven in polizaVencimiento">
                        		{{ven[0].total}}
                        	</span> 
                        	Pólizas
                        </h3>
                        <p class="m-0 font-weight-bold text-right">10 Días</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-card-info-2 text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0">
                        	<span id="inicio_veinte" v-for="ven in polizaVencimiento">
                        		{{ edita_fecha(ven[1].fecha_inicio) }}
                        	</span>&nbsp;&nbsp;-&nbsp;&nbsp;
                        	<span id="fin_veinte" v-for="ven in polizaVencimiento">
                        		{{ edita_fecha(ven[1].fecha_fin) }}
                        	</span>
                        </p>
                        <h3 class="m-0 font-weight-bold text-uppercase">
                        	<span>
                        		<span id="total_veinte" v-for="ven in polizaVencimiento">
                        			{{ven[1].total}}
                        		</span>
                        	</span>
                        	Pólizas
                        </h3>
                        <p class="m-0 font-weight-bold text-right">20 Días</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-card-info-3 text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0">
                        	<span id="inicio_treinta" v-for="ven in polizaVencimiento">
                        		{{ edita_fecha(ven[2].fecha_inicio) }}
                        	</span>&nbsp;&nbsp;-&nbsp;&nbsp;
                        	<span id="fin_treinta" v-for="ven in polizaVencimiento">
                        		{{ edita_fecha(ven[2].fecha_fin) }}
                        	</span>
                        </p>
                        <h3 class="m-0 font-weight-bold text-uppercase">
                        	<span>
                        		<span id="total_treinta" v-for="ven in polizaVencimiento">
                        			{{ven[2].total}}
                        		</span>
                        	</span> 
                        	Pólizas
                        </h3>
                        <p class="m-0 font-weight-bold text-right">30 Días</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-card-info-4 text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0">
                        	<span id="inicio_cuarenta" v-for="ven in polizaVencimiento">
                        		{{ edita_fecha(ven[3].fecha_inicio) }}
                        	</span>&nbsp;&nbsp;-&nbsp;&nbsp;
                        	<span id="fin_cuarenta" v-for="ven in polizaVencimiento">
                        		{{ edita_fecha(ven[3].fecha_fin) }}
                        	</span>
                        </p>
                        <h3 class="m-0 font-weight-bold text-uppercase">
                        	<span>
                        		<span id="total_cuarenta" v-for="ven in polizaVencimiento">
                        			{{ven[3].total}}
                        		</span>
                        	</span> 
                        	Pólizas
                        </h3>
                        <p class="m-0 font-weight-bold text-right">40 Días</p>
                      </div>
                    </div>
                  </div>
                </div>-->
                <div class="row">
                  <div class="col-lg-6">
                    <div class="card card--dashboard">
                      <div class="card-body card-body--dashboard">
                        <div class="row">
                          <div class="col-lg-6">
                            <h4 class="header-title m-0 font-weight-bold">Ventas por categorías</h4>
                          </div>
                          <div class="col-lg-6">
                            <ul class="nav nav-pills justify-content-end" role="tablist" id="ventas-categorias-tabs">

                               <li class="nav-item" v-for="coin in polizaventamonedas.data">
                            		<a class="nav-link nav-link--dashboard" 
                               		:class="{active: clicked == coin.moneda}" 
                               		@click="fillData2(coin.moneda)" data-toggle="tab" aria-controls="ventas-categorias-uf" aria-selected="true" id="ventas-categorias-uf-tab" v-if="coin.moneda != ''">
                               			{{coin.unidad}}
                               		</a>
                               		<a v-else class="nav-link nav-link--dashboard" 
                               			:class="{active:clicked == 1}" 
                               		 	data-toggle="tab" aria-controls="ventas-categorias-uf" aria-selected="true">
                               			{{coin.unidad}}
                               		</a>
                               	</li>
                               
                            </ul>
                          </div>
                        </div>
                        <div class="tab-content" id="ventas-categorias-tabs-content">
                          <div class="bar-chart tab-pane fade show active" role="tabpanel" aria-labelledby="ventas-categorias-tab" id="ventas-categorias-todos">
                            <bar-chart :chart-data="datacollection2" class="small"></bar-chart>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="card card--dashboard">
                      <div class="card-body card-body--dashboard">
                        <div class="row">
						  <div class="col-lg-6">
						    <h4 class="header-title m-0 font-weight-bold">Ventas últimos 15 días</h4>
						  </div>
						  <div class="col-lg-6">
						    <ul class="nav nav-pills justify-content-end" role="tablist" id="ventas-ultimos-dias-tabs">
						      	

						       <li class="nav-item" v-for="coins in polizaMonedaUltimosDias.data">
                            		<a class="nav-link nav-link--dashboard" 
                               		:class="{active: clicked15 == coins.moneda}" 
                               		@click="fillData(coins.moneda)" data-toggle="tab" aria-controls="ventas-categorias-uf" aria-selected="true" id="ventas-categorias-uf-tab" v-if="coins.moneda != ''"> <!-- Vacío temporalmente-->
                               			{{coins.unidad}}
                               		</a>
                               		<a v-else class="nav-link nav-link--dashboard" 
                               			:class="{active: clicked15 == 1}" 
                               		 	data-toggle="tab" aria-controls="ventas-categorias-uf" aria-selected="true">
                               			{{coins.unidad}}
                               		</a>
                               	</li>
						     </ul>
						  </div>
						</div>

                        <div class="tab-content" id="ventas-ultimos-dias-content">
                          <div class="line-chart tab-pane fade show active" role="tabpanel" aria-labelledby="ventas-ultimos-dias-uf-tab" id="ventas-ultimos-15dias">
                            <line-chart :chart-data="datacollection" class="smallChart"></line-chart>
                          </div>
                        </div>
                        
                        <div class="row pt-1">
                          <div class="col-sm-6 col-lg-12 col-xl-6">
                            <div class="d-flex"><img class="img-fluid" src="/src/assets/images/icon-up.svg">
                              <div class="pl-3">
                                <h5 class="m-0 text-uppercase font-weight-bold">Mayor Venta</h5>
                                <div>
                                  <p>
                                  	<span id="fecha_mayor">
                                      {{ fechaMayor }}
                                    </span>&nbsp;
                                    <span id="unidad_mayor">
                                      {{mayorMenor.unidad}}
                                    </span>
                                    <span id="cantidad_mayor">
                                      {{mayorMenor.prima_mayor}}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6 col-lg-12 col-xl-6">
                            <div class="d-flex"><img class="img-fluid" src="/src/assets/images/icon-down.svg">
                              <div class="pl-3">
                                <h5 class="m-0 text-uppercase font-weight-bold">Menor Venta</h5>
                                <div>
                                  <p>
                                  	<span id="fecha_menor">
                                      {{ fechaMenor }}
                                    </span>&nbsp;
                                    <span id="unidad_menor">
                                      {{mayorMenor.unidad}}
                                    </span>
                                    <span id="cantidad_menor">
                                      {{mayorMenor.prima_menor}}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card card--dashboard">
                  <div class="card-body card-body--dashboard">
                    <h4 class="header-title m-0 font-weight-bold">Últimas propuestas</h4>
                    <div class="table-responsive mb-0">
                      <table class="table table-striped table-small-font table-sm" id="top-intermediarios" style="width: 100%">
                        <thead>
                          <tr>
                            <th class="text-center" data-priority="1">Id Propuesta</th>
                            <th class="text-center" data-priority="2">Fecha</th>
                            <th class="text-center" data-priority="2">Plan</th>
                            <th class="text-center" data-priority="1">Cliente</th>
                            <th class="text-center" data-priority="3">Prima Neta</th>
                            <th class="text-center" data-priority="1">Estado</th>
                            <th class="text-center" data-priority="3">Tipo</th>
                            <th class="text-center" data-priority="1">Días</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="text-center" v-for="prop in propuestas">
                          	<td>{{prop.id_propuesta}}-{{prop.item}}</td>
                          	<td> {{ edita_fecha(prop.fecha) }}</td>
                          	<td>{{prop.id_plan}}</td>
                          	<td v-if="prop.nombre_cliente === null"> 
                          		{{prop.rut_cliente}} - {{prop.dig_ver_cliente}} </td>
                          	<td v-else> {{prop.nombre_cliente}} </td>
                          	<td>{{prop.prima_neta}} </td>
                          	<td v-if="prop.estatusitem === 'P' ">
                          		<img title="En proceso" class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/pendiente.png">
                          	</td>
                          	<td v-if="prop.estatusitem === 'R'">
                          		<img title="Rechazado" class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/eliminar.png">
                          	</td>
                          	<td v-if="prop.tipo_propuesta === 'CF'">
                          		<img title="Carga formulario" class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/formulario.png">
                          	</td>
                          	<td v-if="prop.tipo_propuesta === 'FW'">
                          		<img title="Formulario web" class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/web.png">
                          	</td>
                          	<td v-if="prop.tipo_propuesta === 'CFE'">
                          		<img title="Endoso" class="img-fluid dt-icons" src="/src/assets/images/bandeja-iconos/Endoso.png">
                          	</td>
                          	<td class="text-center" v-if="cuentaDias(prop.fecha) >= 5">
                          		<div style="background-color:red; color:#fff; height: 25px; width: 25px; border-radius: 50%; margin: 0 auto;">
                          			<strong> {{cuentaDias(prop.fecha)}} </strong>
                          		</div>
                          	</td>
                          	<td class="text-center" v-if="cuentaDias(prop.fecha) >= 0 && cuentaDias(prop.fecha) <= 2">
                          		<div style="background-color:#FBBC05; color:#fff; height: 25px; width: 25px; border-radius: 50%; margin: 0 auto;">
                          			<strong> {{cuentaDias(prop.fecha)}} </strong>
                          		</div>
                          	</td>
                          	<td class="text-center" v-if="cuentaDias(prop.fecha) >= 3 && cuentaDias(prop.fecha) <= 4">
                          		<div style="background-color:red; color:#fff; height: 25px; width: 25px; border-radius: 50%; margin: 0 auto;">
                          			<strong> {{cuentaDias(prop.fecha)}} </strong>
                          		</div>
                          	</td>
                          </tr>
                          <tr class="text-center" v-if="propuestas.length == 0">
                          	<td class="text-center" colspan="8">
                          		<div>No existe información disponible</div>
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
</template>

<script>
	import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import moment from 'moment'
    import LineChart from '@/assets/js/LineChart.js'
    import BarChart from '@/assets/js/BarChart.js'
    Vue.use(VueAxios, axios)

    export default {
      name: 'Intermediario',
	  components: {
	      LineChart,
	      BarChart
	    },
	  
      data () {
        return {
        	datacollection: null,
        	datacollection2: null,
        	propuestas: [],
        	polizaVencimiento: [],
        	polizaVentas: [],
        	polizaUlt: [],
        	polizaventamonedas: [],
        	polizaMonedaUltimosDias: [],
        	polizaventarango: [],
        	dias: '',
        	clicked: '',
        	clicked15: '',
        	mayorMenor: '',
        	fechaMayor: '',
        	fechaMenor: ''
        }
      },

      mounted () {

      },

      methods:{
      	fillData2 (m) {
      		console.log(m);
      		var ventaMonedas = this.polizaventamonedas.data.length;
      		for (var i = 0; i < ventaMonedas; i++){
      				console.log(this.polizaventamonedas.data[i].moneda);
      			if(m == this.polizaventamonedas.data[i].moneda){
	            	this.clicked = this.polizaventamonedas.data[i].moneda;
	            	console.log(this.clicked);
	          	}
      		}

      		var polizaVent = this.polizaVentas.length;
      		var macroplan = Array(0);
            var total = Array(0);
      		for (var i=0;i<polizaVent;i++) {
      			//console.log("test");
      			//console.log(this.polizaVentas[0].id_moneda);
      			//console.log(m);
                if(this.polizaVentas[i].id_moneda==m){
                   macroplan.push(this.polizaVentas[i].macroplan);
                   total.push(this.polizaVentas[i].total);
                }
            }
      		this.datacollection2 = {
		      labels: macroplan,
		      datasets: [
		        {
		          label: '',
		          backgroundColor: '#30658E',
		          data: total
		        }
		      ]
		    }
      	},

      	fillData (m) {

      		var ventaMonedasUltDias = this.polizaMonedaUltimosDias.data.length;
      		for (var i = 0; i < ventaMonedasUltDias; i++){
      			if(m == this.polizaMonedaUltimosDias.data[i].moneda){
	            	this.clicked15 = this.polizaMonedaUltimosDias.data[i].moneda;
	            	console.log(this.clicked15);
	          	}
      		}

      		var poliza = this.polizaUlt.data.length;
      		var dias = Array(0);
            var total = Array(0);
      			//console.log(poliza);
      		for (var i=0;i<poliza;i++) {
      			//console.log(poliza);
      			//console.log(this.polizaUlt.data[i]);
                if(this.polizaUlt.data[i].id_moneda==m){
                    dias.push(this.edita_fecha2(this.polizaUlt.data[i].fecha_proc));
                    total.push(this.polizaUlt.data[i].total);
                	//console.log(dias);
              }
            }
	        this.datacollection = {
	          labels: dias,
	          datasets: [
	            {
	              label: '',
	              backgroundColor: '#EDEEFA',
	              borderColor: '#30658E',
	              data: total
	            }, /*{
	              label: 'Data One',
	              backgroundColor: '#f87979',
	              data: [this.getRandomInt(), this.getRandomInt()]
	            }*/
	          ],
	          
	        }
	        this.menorMayor();
			for(var i = 0; i < this.polizaventarango.data.length; i++){
				if (this.polizaventarango.data[i].moneda == m) {
					this.mayorMenor = this.polizaventarango.data[i];
				}
			}
			this.fechaMayor = this.edita_fecha(this.mayorMenor.fecha_mayor);
			this.fechaMenor = this.edita_fecha(this.mayorMenor.fecha_menor);
			console.log(this.fechaMayor);
			console.log(this.fechaMenor);

      },
      /*getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },*/
      test () {
      	/*console.log(this.polizaUlt.data.length);
      	console.log(this.polizaUlt.data);
      	console.log(this.propuestas);
      	console.log(this.polizaUlt);
      	console.log(this.polizaVencimiento);*/
      	console.log(this.polizaventamonedas);
      	console.log(this.polizaventamonedas.data);
      	console.log(this.polizaVentas);
      	//this.fillData2(this.polizaventamonedas.data[2].moneda);
      },
        propuestasData() {
	        var token = JSON.parse(window.localStorage.getItem('token'));
	        const test = JSON.parse(window.localStorage.getItem('rutLogueado'));
	        if (token === 0) {
	        	this.$router.push('./');
	        }
	        //console.log(test);
	        //console.log("Token");
	        //console.log(token);
	        let rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
	        let numero = 5;
			axios.get('http://' + this.$url + '/api/propuestas/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log("propuestas");
				console.log(response);
				this.propuestas = response.data;
				console.log('SUCCESS!!');
			})
			.catch(error => {
			  console.log('FAILURE!!');
			});
        },

        vencimientos() {
        	var token = JSON.parse(window.localStorage.getItem('token'));
	        const rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
	        if (token === 0) {
	        	this.$router.push('./');
	        }
	        //console.log(rutLogueado);
	        //console.log("Token");
	        //console.log(token);
	        let numero = 10
			axios.get('http://' + this.$url + '/api/polizavencimiento/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('polizaVencimiento');
				console.log(response);
				this.polizaVencimiento = response.data;
				console.log('SUCCESS!!');
			})
			.catch(error => {
			  console.log('FAILURE!!');
			});
        },

        barChart () {
        	var token = JSON.parse(window.localStorage.getItem('token'));
	        const rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
	        if (token === 0) {
	        	this.$router.push('./');
	        }
	        //console.log(rutLogueado);
	        //console.log("Token");
	        //console.log(token);
	        let numero = '*'
			axios.get('http://' + this.$url + '/api/polizaventas/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('polizaventas');
				console.log(response);
				this.polizaVentas = response.data;
				console.log('SUCCESS!!');
			})
			.catch(error => {
			  console.log('FAILURE!!');
			});
        },

        lineChart () {
        	var token = JSON.parse(window.localStorage.getItem('token'));
	        const rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
	        if (token === 0) {
	        	this.$router.push('./');
	        }
	        //console.log(rutLogueado);
	        //console.log("Token");
	        //console.log(token);
	        let numero = 15
			axios.get('http://' + this.$url + '/api/polizaultimasventas/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log(response);
				this.polizaUlt = response.data;
				console.log('polizaUlt');
				console.log('SUCCESS!!');
			})
			.catch(error => {
			  console.log('FAILURE!!');
			});
        },

        polizaVentaMonedas () {
        	var token = JSON.parse(window.localStorage.getItem('token'));
	        const rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
	        if (token === 0) {
	        	this.$router.push('./');
	        }
	        //console.log(rutLogueado);
	        //console.log("Token");
	        //console.log(token);
	        let numero = '*'
			axios.get('http://' + this.$url + '/api/polizaventamonedas/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('polizaventamonedas');
				console.log(response);
				this.polizaventamonedas = response.data;
				//console.log(this.polizaventamonedas.data.length);
				//console.log(this.polizaventamonedas.data[0].moneda);
				console.log('SUCCESS!!');
				this.fillData2(this.polizaventamonedas.data[0].moneda);
				console.log("fillData2");

			})
			.catch(error => {
			  console.log('FAILURE!!');
			});
			/*this.fillData2(this.polizaventamonedas.data[0].moneda);
			console.log("fillData2");*/
        },

        polizaVentaMonedasUltimosDias () {
        	var token = JSON.parse(window.localStorage.getItem('token'));
	        const rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
	        if (token === 0) {
	        	this.$router.push('./');
	        }
	        //console.log(rutLogueado);
	        //console.log("Token");
	        //console.log(token);
	        let numero = 15
			axios.get('http://' + this.$url + '/api/polizaventamonedas/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('polizaMonedaUltimosDias');
				console.log(response);
				this.polizaMonedaUltimosDias = response.data;
				console.log(this.polizaMonedaUltimosDias.data.length);
				console.log(this.polizaMonedaUltimosDias.data[0].moneda);
				console.log('SUCCESS!!');
				this.fillData(this.polizaMonedaUltimosDias.data[0].moneda);
				
			})
			.catch(error => {
			  console.log('FAILURE!!');
			});
			console.log("Probando");
			console.log(this.polizaMonedaUltimosDias.data);
			
        },

        menorMayor () {
        	var token = JSON.parse(window.localStorage.getItem('token'));
	        const rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
	        if (token === 0) {
	        	this.$router.push('./');
	        }
	        //console.log(rutLogueado);
	        //console.log("Token");
	        //console.log(token);
	        let numero = 15
			axios.get('http://' + this.$url + '/api/polizaventarango/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('polizaventarango');
				console.log(response);
				this.polizaventarango = response.data;
				console.log(this.polizaventarango.data);
				console.log(this.polizaventarango);
				console.log(this.polizaventarango.error);
				console.log('SUCCESS!!');
			})
			.catch(error => {
			  console.log('FAILURE!!');
			});
        },

        /*test() {
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
              //this.$store.dispatch('signin', response.data)
            }).catch(error => {
              console.log('FAILURE')
              console.log(identificacion);
              this.error = error
              console.log(error)
            });
        },*/
       	
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
      	this.vencimientos();
      	this.menorMayor();
      	this.barChart();
      	this.polizaVentaMonedas();
      	this.lineChart();
      	this.polizaVentaMonedasUltimosDias();
      	this.propuestasData();
    }
    

    }

</script>

<style>
  .small {
    width: 295px;
    height: 254px;
  }
  .smallChart {
  	width: 350px;
    height: 224px;
  }
</style>