<template>
	<div id="wrapper">
		<Topbar></Topbar>
		<SideMenu></SideMenu>
		<div class="content-page">
            <div class="content p-0">
              <div class="container-fluid">
                <div class="page-title-box p-0 pt-1">
                  <div class="row align-items-center">
                    <div class="col-sm-6">
                      <h4 class="page-title">Próximos vencimientos</h4>
                      <ol class="breadcrumb">
                      </ol>
                    </div>
                  </div>
                </div>
                <div class="row">
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
                </div>

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
                             <!--  <li class="nav-item"><a class="nav-link nav-link--dashboard active" href="#ventas-categorias-uf" data-toggle="tab" aria-controls="ventas-categorias-uf" aria-selected="true" id="ventas-categorias-uf-tab">UF</a></li>-->
                            </ul>
                          </div>

                        </div>
                        <div class="tab-content" id="ventas-categorias-tabs-content">
                          <div class="bar-chart tab-pane fade show active" role="tabpanel" aria-labelledby="ventas-categorias-tab" id="ventas-categorias-todos">
                            <canvas id="ventas-categorias-chart"></canvas> 
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
                            </ul>
                          </div>
                        </div>
                        <div class="tab-content" id="ventas-ultimos-dias-content">
                          <div class="line-chart tab-pane fade show active" role="tabpanel" aria-labelledby="ventas-ultimos-dias-uf-tab" id="ventas-ultimos-15dias">
                            <canvas id="ventas-ultimos-15dias-chart"></canvas>
                          </div>
                        </div>
                        <div class="row pt-1">
                          <div class="col-sm-6 col-lg-12 col-xl-6">
                            <div class="d-flex"><img class="img-fluid" src="/assets/images/icon-up.svg">
                              <div class="pl-3">
                                <h5 class="m-0 text-uppercase font-weight-bold">Mayor Venta</h5>
                                <p class="m-0"><span id="fecha_mayor"></span>&nbsp;<b><span id="unidad_mayor"></span><span id="cantidad_mayor"></span></b></p>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6 col-lg-12 col-xl-6">
                            <div class="d-flex"><img class="img-fluid" src="/assets/images/icon-down.svg">
                              <div class="pl-3">
                                <h5 class="m-0 text-uppercase font-weight-bold">Menor Venta</h5>
                                <p class="m-0"><span id="fecha_menor"></span>&nbsp;<b><span id="unidad_menor"></span><span id="cantidad_menor"></span></b></p>
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
                        
                        </ul>
                      </div>
                    </div>
                    <div class="tab-content" id="topCorredores-content">
                      <div class="bar-chart2 tab-pane fade show active" role="tabpanel" aria-labelledby="#topCorredores-uf-tab" id="topCorredores"> 
                        <canvas id="topCorredores-chart"></canvas>
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
    Vue.use(VueAxios, axios)

    export default {
      name: 'Ejecutivo',
	  /*components:{

	  },*/
      data () {
        return {
        	polizaVencimientoEjecutivo: [],
        	polizaventamonedasEjecutivo: [],
        	polizaVentasEjecutivo: [],
        	topCorredores: [],

        }
      },

      methods: {

      	fillData2 (m) {
      		//console.log(this.polizaventamonedas.data[0].moneda);
      		//console.log(this.polizaventamonedas.data[1].moneda);
      		//console.log(this.polizaventamonedas.data[2].moneda);
      		//console.log(this.polizaVentas.length);
      		

          	if(m == this.polizaventamonedasEjecutivo.data[0].moneda){
            	this.clicked = 1;
            	console.log(this.clicked);
          	}else if (m == this.polizaventamonedasEjecutivo.data[1].moneda) {
          		this.clicked = 2;
          	}
          	else if (m == this.polizaventamonedasEjecutivo.data[2].moneda) {
          		this.clicked = 3;
          	}

      		var polizaVent = this.polizaVentasEjecutivo.length;
      		var macroplan = Array(0);
            var total = Array(0);
      		for (var i=0;i<polizaVent;i++) {
      			//console.log("test");
      			//console.log(this.polizaVentasEjecutivo[0].id_moneda);
      			//console.log(m);
                if(this.polizaVentasEjecutivo[i].id_moneda==m){
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
      			//console.log("heylo");
      			//console.log(m);
      		if(m == this.polizaventamonedasEjecutivo.data[0].moneda){
            	this.coin = 1;
          	}else if (m == this.polizaventamonedasEjecutivo.data[1].moneda) {
          		this.coin = 2;
          	}
          	else if (m == this.polizaventamonedasEjecutivo.data[2].moneda) {
          		this.coin = 3;
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
	        this.menorMayor(m);
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
				console.log('polizaventas');
				console.log(response);
				this.polizaVentasEjecutivo = response.data;
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
				this.polizaUlt = response.data;
				console.log('polizaUlt');
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
				console.log('polizaventamonedas');
				console.log(response);
				this.polizaventamonedas = response.data;
				//console.log(this.polizaventamonedas.data);
				//console.log(this.polizaventamonedas.data[0].moneda);
				console.log('SUCCESS!!');
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
				console.log('polizaventarango');
				console.log(response);
				this.polizaventarango = response.data;
				console.log(this.polizaventarango.data);
				//console.log(this.polizaventamonedas.data[0].moneda);
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
				console.log('polizaventarango');
				console.log(response);
				this.topCorredores = response.data;
				console.log(this.polizaventarango.data);
				//console.log(this.polizaventamonedas.data[0].moneda);
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

      },

      created (){
      	
    }
    

    }

</script>