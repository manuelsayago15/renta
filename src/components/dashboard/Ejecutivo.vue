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
                        <p class="m-0"><span id="inicio_diez"></span><span id="gion_diez">&nbsp;&nbsp;-&nbsp;&nbsp;</span> <span id="fin_diez"></span></p>
                        <h3 class="m-0 font-weight-bold text-uppercase"><span id="total_diez"></span> Pólizas</h3>
                        <p class="m-0 font-weight-bold text-right">10 Días</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-card-info-2 text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0"><span id="inicio_veinte"></span>&nbsp;&nbsp;-&nbsp;&nbsp;<span id="fin_veinte"></span></p>
                        <h3 class="m-0 font-weight-bold text-uppercase"><span><span id="total_veinte"></span></span> Pólizas</h3>
                        <p class="m-0 font-weight-bold text-right">20 Días</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-card-info-3 text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0"><span id="inicio_treinta"></span>&nbsp;&nbsp;-&nbsp;&nbsp;<span id="fin_treinta"></span></p>
                        <h3 class="m-0 font-weight-bold text-uppercase"><span><span id="total_treinta"></span></span> Pólizas</h3>
                        <p class="m-0 font-weight-bold text-right">30 Días</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="card card--dashboard bg-card-info-4 text-white">
                      <div class="card-body card-body--dashboard">
                        <p class="m-0"><span id="inicio_cuarenta"></span>&nbsp;&nbsp;-&nbsp;&nbsp;<span id="fin_cuarenta"></span></p>
                        <h3 class="m-0 font-weight-bold text-uppercase"><span><span id="total_cuarenta"></span></span> Pólizas</h3>
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
                            	<li class="nav-item" v-for="coin in polizaventamonedasEjecutivo.data">
                            		<a class="nav-link nav-link--dashboard" 
                               		:class="{active:clicked == coin.moneda}" 
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
                              <!--  <li class="nav-item"><a class="nav-link nav-link--dashboard active" href="#ventas-ultimos-dias-uf" data-toggle="tab" aria-controls="ventas-ultimos-dias-uf" aria-selected="true" id="ventas-ultimos-dias-uf-tab">UF</a></li>-->

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
                            <line-chart :chart-data="datacollection" class="small"></line-chart>
                          </div>
                        </div>
                        <div class="row pt-1">
                          <div class="col-sm-6 col-lg-12 col-xl-6">
                            <div class="d-flex"><img class="img-fluid" src="/src/assets/images/icon-up.svg">
                              <div class="pl-3">
                                <h5 class="m-0 text-uppercase font-weight-bold">Mayor Venta</h5>
                                <div>
                                  <p v-for="mayor in polizaventaRangoEjecutivo.data" v-if="mayor != ''">
                                  	<span id="fecha_mayor">
                                      {{ edita_fecha(mayor.fecha_mayor) }}
                                    </span>&nbsp;
                                    <span id="unidad_mayor">
                                      {{mayor.unidad}}
                                    </span>
                                    <span id="cantidad_mayor">
                                      {{mayor.prima_mayor}}
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
                                	<p v-for="mayor in polizaventaRangoEjecutivo.data" 
                                  	v-if="polizaventaRangoEjecutivo.data">
	                                  	<span id="fecha_menor">
	                                      {{ edita_fecha(mayor.fecha_menor) }}
	                                    </span>&nbsp;
	                                    <span id="unidad_menor">
	                                      {{mayor.unidad}}
	                                    </span>
	                                    <span id="cantidad_menor">
	                                      {{mayor.prima_menor}}
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
                    <div class="row">
                      <div class="col-lg-6">
                        <h4 class="header-title m-0 font-weight-bold">Top Corredores</h4>
                      </div>
                      <div class="col-lg-6">
                        <ul class="nav nav-pills justify-content-end" role="tablist" id="topCorredores-tabs">
                        	<li class="nav-item" v-for="topCoins in polizaventamonedasEjecutivo.data">
                        		<a class="nav-link nav-link--dashboard" 
                           		:class="{active: clickedTop == topCoins.moneda}" 
                           		@click="fillData3(topCoins.moneda)" data-toggle="tab" aria-controls="ventas-categorias-uf" aria-selected="true" id="ventas-categorias-uf-tab" v-if="topCoins.moneda != ''"> <!-- Vacío temporalmente-->
                           			{{topCoins.unidad}}
                           		</a>
                           		<a v-else class="nav-link nav-link--dashboard" 
                           			:class="{active: clickedTop == 1}" 
                           		 	data-toggle="tab" aria-controls="ventas-categorias-uf" aria-selected="true">
                           			{{topCoins.unidad}}
                           		</a>
	                           	</li>
                        </ul>
                      </div>
                    </div>
                    <div class="tab-content" id="topCorredores-content">
                      <div class="bar-chart2 tab-pane fade show active" role="tabpanel" aria-labelledby="#topCorredores-uf-tab" id="topCorredores"> 
                        <bar-chart :chart-data="datacollection3" class="small"></bar-chart>
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
    import LineChart from '@/assets/js/LineChart.js'
    import BarChart from '@/assets/js/BarChart.js'
    Vue.use(VueAxios, axios)

    export default {
      name: 'Ejecutivo',
	  components:{
	  	LineChart,
	    BarChart
	  },
      data () {
        return {
        	datacollection: null,
        	datacollection2: null,
        	datacollection3: null,
        	polizaVencimientoEjecutivo: [],
        	polizaventamonedasEjecutivo: [],
			polizaMonedaUltimosDias: [],
        	polizaventaRangoEjecutivo: [],
        	polizaVentasEjecutivo: [],
        	polizaUltEjecutivo: [],
        	top: [],
        	ejecutivo: '',
        	clicked: '',
        	clicked15: '',
        	clickedTop: '',
        	coin: 1,

        }
      },

      methods: {

      	fillData2 (m) {
      			var ventaMonedas = this.polizaventamonedasEjecutivo.data.length;
	      		for (var i = 0; i < ventaMonedas; i++){
	      			if(m == this.polizaventamonedasEjecutivo.data[i].moneda){
		            	this.clicked = this.polizaventamonedasEjecutivo.data[i].moneda;
		            	console.log(this.clicked);
		          	}
	      		}

	      		var polizaVent = this.polizaVentasEjecutivo.length;
	      		console.log("length");
	      		console.log(polizaVent);
	      		var macroplan = Array(0);
	            var total = Array(0);
	            var count = 0;
	      		for (var i=0;i<polizaVent;i++) {
	      			console.log("test");
	      			console.log(this.polizaVentasEjecutivo[i].id_moneda);
	      			console.log(m);
	                if(this.polizaVentasEjecutivo[i].id_moneda==m){
	                	//console.log("count");
	                	//count = count + 1;
	                	//console.log(count);
	                   macroplan.push(this.polizaVentasEjecutivo[i].macroplan);
	                   total.push(this.polizaVentasEjecutivo[i].total);
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
  			var ventaMonedas = this.polizaventamonedasEjecutivo.data.length;
	  		for (var i = 0; i < ventaMonedas; i++){
	  			if(m == this.polizaventamonedasEjecutivo.data[i].moneda){
	            	this.clicked15 = this.polizaventamonedasEjecutivo.data[i].moneda;
	            	console.log(this.clicked15);
	          	}
	  		}

      		var poliza = this.polizaUltEjecutivo.data.length;
      		var dias = Array(0);
            var total = Array(0);
      			//console.log(poliza);
      		for (var i=0;i<poliza;i++) {
      			//console.log(poliza);
      			//console.log(this.polizaUlt.data[i]);
                if(this.polizaUltEjecutivo.data[i].id_moneda==m){
                    dias.push(this.edita_fecha2(this.polizaUltEjecutivo.data[i].fecha_proc));
                    total.push(this.polizaUltEjecutivo.data[i].total);
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
	        this.menorMayor(m);
      },

      fillData3 (m) {
  			var ventaMonedas = this.polizaventamonedasEjecutivo.data.length;
	  		for (var i = 0; i < ventaMonedas; i++){
	  			if(m == this.polizaventamonedasEjecutivo.data[i].moneda){
	            	this.clickedTop = this.polizaventamonedasEjecutivo.data[i].moneda;
	            	console.log(this.clickedTop);
	          	}
	  		}

      		var poliza = this.top.data.length;
      		var corredor = Array(0);
            var total = Array(0);
      			//console.log(poliza);
      		for (var i=0;i<poliza;i++) {
      			//console.log(poliza);
      			//console.log(this.polizaUlt.data[i]);
                if(this.top.data[i].id_moneda==m){
                    corredor.push(this.top.data[i].nombres);
	                total.push(this.top.data[i].total);
                	//console.log(dias);
              }
            }
	        this.datacollection3 = {
	          labels: corredor,
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
	        //this.menorMayor(m);
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
			axios.get('http://200.91.27.159:8000/api/polizaventasejecutivo/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('polizaVentasEjecutivo');
				console.log(response);
				this.polizaVentasEjecutivo = response.data;
				console.log(this.polizaVentasEjecutivo);
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
			axios.get('http://200.91.27.159:8000/api/polizaultimasventasejecutivo/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log(response);
				console.log('polizaUltEjecutivo');
				this.polizaUltEjecutivo = response.data;
				console.log('SUCCESS!!');
			})
			.catch(error => {
			  console.log('FAILURE!!');
			});
        },

        topCorredores () {
        	var token = JSON.parse(window.localStorage.getItem('token'));
	        const rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
	        if (token === 0) {
	        	this.$router.push('./');
	        }
	        //console.log(rutLogueado);
	        //console.log("Token");
	        //console.log(token);
	        let numero = '*'
			axios.get('http://200.91.27.159:8000/api/polizatopintermediarioejecutivo/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('topCorredores');
				console.log(response);
				this.top = response.data;
				//console.log(this.polizaventamonedas.data[0].moneda);
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
			axios.get('http://200.91.27.159:8000/api/polizavencimientoejecutivo/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('polizaVencimientoEjecutivo');
				console.log(response);
				this.polizaVencimientoEjecutivo = response.data;
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
	        let numero = 15
			axios.get('http://200.91.27.159:8000/api/polizaventamonedasejecutivo/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('polizaventamonedasejecutivo');
				console.log(response);
				this.polizaventamonedasEjecutivo = response.data;
				console.log(this.polizaventamonedasEjecutivo);
				console.log(this.polizaventamonedasEjecutivo.data);
				console.log(this.polizaventamonedasEjecutivo.data.length);
				console.log('SUCCESS!!');
				//this.fillData2(this.polizaventamonedasEjecutivo.data[0].moneda);
				//console.log("fillData2");
			})
			.catch(error => {
			  console.log('FAILURE!!');
			});

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
			axios.get('http://200.91.27.159:8000/api/polizaventarangoejecutivo/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('polizaventarangoejecutivo');
				console.log(response);
				this.polizaventaRangoEjecutivo = response.data;
				console.log('SUCCESS!!');
			})
			.catch(error => {
			  console.log('FAILURE!!');
			});
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
			axios.get('http://200.91.27.159:8000/api/polizaventamonedasejecutivo/'+ rutLogueado+'/'+numero, {

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
				
			})
			.catch(error => {
			  console.log('FAILURE!!');
			});
			//this.fillData(this.polizaMonedaUltimosDias.data[0].moneda);
				//console.log("fillData");
        },

        

        edita_fecha: function(fecha) {
		    var fn = fecha.split("-");
		    return fn[2] + "-" + fn[1] + "-" + fn[0];
		},
		edita_fecha2: function(fecha) {
		    var fn = fecha.split("-");
		    return fn[2] + "-" + fn[1];
		},

      },

      created (){
      	this.vencimientos();
      	this.polizaVentaMonedas();
      	this.polizaVentaMonedasUltimosDias();
      	this.barChart();
      	this.lineChart();
      	this.topCorredores();
      	this.menorMayor();
      }
    

    }

</script>

<style>
	.small {
	  	width: 295px;
    	height: 254px;
	}
</style>