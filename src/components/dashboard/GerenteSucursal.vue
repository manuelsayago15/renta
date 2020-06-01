<template>
	<div id="wrapper">
		<Topbar></Topbar>
		<SideMenu></SideMenu>
		<div class="content-page">
			<div class="content p-0">
				<div class="container-fluid">
					<div class="row pt-2">
						<div class="col-lg-6">
							<div class="card card--dashboard">
								<div class="card-body card-body--dashboard">
									<div class="row">
										<div class="col-lg-6">
											<h4 class="header-title m-0 font-weight-bold">Ventas por categorías</h4>
										</div>
										<div class="col-lg-6">
											<ul class="nav nav-pills justify-content-end" role="tablist" id="ventas-categorias-tabs">
											 
											 <li class="nav-item" v-for="coin in polizaventamonedasSucursal.data">
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
									<div class="tab-content" 
									id="ventas-categorias-tabs-content">
										<div class="bar-chart tab-pane fade show active" role="tabpanel" aria-labelledby="ventas-categorias-todos" id="ventas-categorias-todos">
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
											<ul class="nav nav-pills justify-content-end" role="tablist" id="ventas-ultimos-15dias-tabs">
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
										<div class="line-chart tab-pane fade show active" 
											role="tabpanel" aria-labelledby="ventas-ultimos-15dias" id="ventas-ultimos-15dias">
											<line-chart :chart-data="datacollection" class="small"></line-chart>
										</div>
									</div>
									<div class="row pt-1">
										<div class="col-sm-6 col-lg-12 col-xl-6">
											<div class="d-flex"><img class="img-fluid" 
												src="/src/assets/images/icon-up.svg">
											 	<div class="pl-3">
											   	<h5 class="m-0 text-uppercase font-weight-bold">
											   		Mayor Venta
											   	</h5>
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
						<div class="row">
							<div class="col-lg-6">
								<div class="card card--dashboard">
									<div class="card-body card-body--dashboard">
										<div class="row">
											<div class="col-lg-6">
												<h4 class="header-title m-0 font-weight-bold">Top ejecutivos</h4>
											</div>
											<div class="col-lg-6">
												<ul class="nav nav-pills justify-content-end" role="tablist" id="topEjecutivos-tabs">
												  <li class="nav-item" v-for="topCoinsE in polizaventamonedasSucursal.data">
					                        		<a class="nav-link nav-link--dashboard" 
					                           		:class="{active: clickedTop == topCoinsE.moneda}" 
					                           		@click="fillData3(topCoinsE.moneda)" data-toggle="tab" aria-controls="ventas-categorias-uf" aria-selected="true" id="ventas-categorias-uf-tab" v-if="topCoinsE.moneda != ''"> <!-- Vacío temporalmente-->
					                           			{{topCoinsE.unidad}}
					                           		</a>
					                           		<a v-else class="nav-link nav-link--dashboard" 
					                           			:class="{active: clickedTop == 1}" 
					                           		 	data-toggle="tab" aria-controls="ventas-categorias-uf" aria-selected="true">
					                           			{{topCoinsE.unidad}}
					                           		</a>
						                          </li>
												</ul>
											</div>
										</div>
										<div class="tab-content" id="topEjecutivos-content">
											<div class=" bar-chart3 tab-pane fade show active" role="tabpanel" aria-labelledby="#topEjecutivos-tab" id="topEjecutivos">
												<bar-chart :chart-data="datacollection3" class="small"></bar-chart>
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
												<h4 class="header-title m-0 font-weight-bold">Top Corredores</h4>
											</div>
											<div class="col-lg-6">
												<ul class="nav nav-pills justify-content-end" role="tablist" id="topCorredores-tabs">
													<li class="nav-item" v-for="topCoins in polizaventamonedasSucursal.data">
						                        		<a class="nav-link nav-link--dashboard" 
						                           		:class="{active: clickedTopInt == topCoins.moneda}" 
						                           		@click="fillData4(topCoins.moneda)" data-toggle="tab" aria-controls="ventas-categorias-uf" aria-selected="true" id="ventas-categorias-uf-tab" v-if="topCoins.moneda != ''"> <!-- Vacío temporalmente-->
						                           			{{topCoins.unidad}}
						                           		</a>
						                           		<a v-else class="nav-link nav-link--dashboard" 
						                           			:class="{active: clickedTopInt == 1}" 
						                           		 	data-toggle="tab" aria-controls="ventas-categorias-uf" aria-selected="true">
						                           			{{topCoins.unidad}}
						                           		</a>
							                        </li>
												</ul>
											</div>
										</div>
										<div class="tab-content" id="topCorredores-content">
											<div class="" role="tabpanel" aria-labelledby="#topCorredores" id="topCorredores">
												<bar-chart :chart-data="datacollection4" class="small"></bar-chart>
											</div>
										</div>
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
        	polizaventamonedasSucursal: [],
			polizaMonedaUltimosDias: [],
        	polizaventaRangoSucursal: [],
        	polizaVentasSucursal: [],
        	polizaUltSucursal: [],
        	topEjecutivoArray: [],
        	topIntermediario: [],
        	ejecutivo: '',
        	clicked: '',
        	clicked15: '',
        	clickedTop: '',
        	clickedTopInt: '',
        	coin: 1,
        	mayorMenor: '',
        	fechaMayor: '',
        	fechaMenor: ''

        }
      },

      methods: {

      	fillData2 (m) {
      			var ventaMonedas = this.polizaventamonedasSucursal.data.length;
	      		for (var i = 0; i < ventaMonedas; i++){
	      			if(m == this.polizaventamonedasSucursal.data[i].moneda){
		            	this.clicked = this.polizaventamonedasSucursal.data[i].moneda;
		            	console.log(this.clicked);
		          	}
	      		}

	      		var polizaVent = this.polizaVentasSucursal.length;
	      		console.log("length");
	      		console.log(polizaVent);
	      		var macroplan = Array(0);
	            var total = Array(0);
	            var count = 0;
	      		for (var i=0;i<polizaVent;i++) {
	      			console.log("test");
	      			console.log(this.polizaVentasSucursal[i].id_moneda);
	      			console.log(m);
	                if(this.polizaVentasSucursal[i].id_moneda==m){
	                	//console.log("count");
	                	//count = count + 1;
	                	//console.log(count);
	                   macroplan.push(this.polizaVentasSucursal[i].macroplan);
	                   total.push(this.polizaVentasSucursal[i].total);
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
  			var ventaMonedas = this.polizaMonedaUltimosDias.data.length;
	  		for (var i = 0; i < ventaMonedas; i++){
	  			if(m == this.polizaMonedaUltimosDias.data[i].moneda){
	            	this.clicked15 = this.polizaMonedaUltimosDias.data[i].moneda;
	            	console.log(this.clicked15);
	          	}
	  		}

      		var poliza = this.polizaUltSucursal.data.length;
      		var dias = Array(0);
            var total = Array(0);
      			//console.log(poliza);
      		for (var i=0;i<poliza;i++) {
      			//console.log(poliza);
      			//console.log(this.polizaUlt.data[i]);
                if(this.polizaUltSucursal.data[i].id_moneda==m){
                    dias.push(this.edita_fecha2(this.polizaUltSucursal.data[i].fecha_proc));
                    total.push(this.polizaUltSucursal.data[i].total);
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
	        for(var i = 0; i < this.polizaventaRangoSucursal.data.length; i++){
				if (this.polizaventaRangoSucursal.data[i].moneda == m) {
					this.mayorMenor = this.polizaventaRangoSucursal.data[i];
				}
			}
			this.fechaMayor = this.edita_fecha(this.mayorMenor.fecha_mayor);
			this.fechaMenor = this.edita_fecha(this.mayorMenor.fecha_menor);
			console.log(this.fechaMayor);
			console.log(this.fechaMenor);
      },

      fillData3 (m) {
  			var ventaMonedas = this.polizaventamonedasSucursal.data.length;
	  		for (var i = 0; i < ventaMonedas; i++){
	  			if(m == this.polizaventamonedasSucursal.data[i].moneda){
	            	this.clickedTop = this.polizaventamonedasSucursal.data[i].moneda;
	            	console.log(this.clickedTop);
	          	}
	  		}

      		var poliza = this.topEjecutivoArray.data.length;
      		var ejecutivo = Array(0);
            var total = Array(0);
      			//console.log(poliza);
      		for (var i=0;i<poliza;i++) {
      			//console.log(poliza);
      			//console.log(this.polizaUlt.data[i]);
                if(this.topEjecutivoArray.data[i].id_moneda==m){
                    ejecutivo.push(this.topEjecutivoArray.data[i].nombres + ' ' + this.topEjecutivoArray.data[i].apellidos);
	                total.push(this.topEjecutivoArray.data[i].total);
                	//console.log(dias);
              }
            }
	        this.datacollection3 = {
	          labels: ejecutivo,
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

      fillData4 (m) {
  			var ventaMonedas = this.polizaventamonedasSucursal.data.length;
	  		for (var i = 0; i < ventaMonedas; i++){
	  			if(m == this.polizaventamonedasSucursal.data[i].moneda){
	            	this.clickedTopInt = this.polizaventamonedasSucursal.data[i].moneda;
	            	console.log(this.clickedTopInt);
	          	}
	  		}

      		var poliza = this.topIntermediario.data.length;
      		var corredor = Array(0);
            var total = Array(0);
      			//console.log(poliza);
      		for (var i=0;i<poliza;i++) {
      			//console.log(poliza);
      			//console.log(this.polizaUlt.data[i]);
                if(this.topIntermediario.data[i].id_moneda==m){
                    corredor.push(this.topIntermediario.data[i].intermediario);
	                total.push(this.topIntermediario.data[i].total);
                	//console.log(dias);
              }
            }
	        this.datacollection4 = {
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
			axios.get('http://' + this.$url + '/api/polizaventasgtesucursal/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('polizaVentasSucursal');
				console.log(response);
				this.polizaVentasSucursal = response.data;
				console.log(this.polizaVentasSucursal);
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
			axios.get('http://' + this.$url + '/api/polizaultimasventasgtesucursal/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log(response);
				console.log('polizaUltSucursal');
				this.polizaUltSucursal = response.data;
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
			axios.get('http://' + this.$url + '/api/polizatopintermediariogtesucursal/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('topIntermediario');
				console.log(response);
				this.topIntermediario = response.data;
				//console.log(this.polizaventamonedas.data[0].moneda);
				console.log('SUCCESS!!');
				console.log(this.topIntermediario.data[0].id_moneda);
				this.fillData4(this.topIntermediario.data[0].id_moneda);
			})
			.catch(error => {
			  console.log('FAILURE!!');
			});
        },

        topEjecutivo () {
        	var token = JSON.parse(window.localStorage.getItem('token'));
	        const rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
	        if (token === 0) {
	        	this.$router.push('./');
	        }
	        //console.log(rutLogueado);
	        //console.log("Token");
	        //console.log(token);
	        let numero = '*'
			axios.get('http://' + this.$url + '/api/polizatopejecutivogtesucursal/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('topEjecutivo');
				console.log(response);
				this.topEjecutivoArray = response.data;
				//console.log(this.polizaventamonedas.data[0].moneda);
				console.log('SUCCESS!!');
				console.log(this.topEjecutivoArray.data[0].id_moneda);
				this.fillData3(this.topEjecutivoArray.data[0].id_moneda);
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
			axios.get('http://' + this.$url + '/api/polizaventamonedasgtesucursal/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('polizaventamonedasSucursal');
				console.log(response);
				this.polizaventamonedasSucursal = response.data;
				console.log(this.polizaventamonedasSucursal);
				console.log(this.polizaventamonedasSucursal.data);
				console.log(this.polizaventamonedasSucursal.data.length);
				console.log('SUCCESS!!');
				this.fillData2(this.polizaventamonedasSucursal.data[0].moneda);
				console.log("fillData2");
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
			axios.get('http://' + this.$url + '/api/polizaventarangogtesucursal/'+ rutLogueado+'/'+numero, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log('polizaventarangosucursal');
				console.log(response);
				this.polizaventaRangoSucursal = response.data;
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
			axios.get('http://' + this.$url + '/api/polizaventamonedasgtesucursal/'+ rutLogueado+'/'+numero, {

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
				console.log("fillData");
				
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
      	this.menorMayor();
      	this.barChart();
      	this.polizaVentaMonedas();
      	this.lineChart();
      	this.polizaVentaMonedasUltimosDias();
      	this.topEjecutivo();
      	this.topCorredores();
      }
    

    }

</script>

<style>
	.small {
	  	width: 295px;
    	height: 254px;
	}
</style>