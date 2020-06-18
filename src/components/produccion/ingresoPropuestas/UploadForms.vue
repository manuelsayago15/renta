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
                                <h4 class="page-title">Carga de formulario</h4>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="javascript:void(0);">Producción</a></li>
                                    <li class="breadcrumb-item"><a href="javascript:void(0);">Ingreso de propuesta</a></li>
                                    <li class="breadcrumb-item active"><span>Carga de formulario</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <form id="formulario" method="POST" enctype="multipart/form-data">
                                        <div class="form-row">

                                            <div class="col-lg-3">
                                                <label>RUT</label>
                                                <input class="form-control" v-model="rut" type="text" id="rut" name="rut" placeholder="RUT" v-on:change="validarRut()" maxlength="12" @keypress="isNumber($event)" v-on:keyup="checkRut()" >
                                                <div id="alert" class="" role="alert">
                                                    <ul id="errorRut">
                                                    </ul>
                                                </div>
                                            </div>
    
                                            <div class="col-lg-3">
                                                <label>Producto</label>
                                                <select 
									                type="text"
									                name="producto" 
									                v-model="productoSeleccionado" 
									                @change="buscaPlanes" 
									                id="producto" 
                                                    class="form-control">
									                <option value="">Seleccione...</option>
									                  <option 
									                    v-for="(producto, key) in productos" :value="producto.id" :key="key">
									                    {{ producto.nombre }}
									                  </option>
									              </select>
                                            </div>
                                            <div class="col-lg-3">
                                                <label>Planes</label>
                                                <select name="plan" id="plan" type="text"
                                                	v-model="planSeleccionado" class="form-control">
                                           			<option value="">Seleccione ...</option>
                                           			<option 
									                    v-for="(plan, key) in planes" :value="plan.id_plan" :key="key">
									                    {{ plan.nombre_plan }}
									                </option>
                                       			</select>

                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-lg-3">
                                                <label>ítem</label>
                                                <input class="form-control" type="number" maxlength="3" v-model="items" id="itemInput" name="itemInput">
                                                <div id="alert" class="" role="alert">
                                                    <ul id="errorItem">
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <label>Oficinas</label>
                                                <select class="form-control" v-model="oficinaSeleccionada" id="oficinasSel">
                                              		<option value="">Seleccione ...</option>
                                              		<option 
									                    v-for="(oficina, key) in oficinas" :value="oficina.id" :key="key">
									                    {{ oficina.nombre }}
									                </option>
                                            </select>

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
                                    </form>
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
			    addRemoveLinks: true,
                dictDefaultMessage: "Adjuntar archivos",
        	},
        	dropzone: [],
        	productos: [],
        	planes: [],
        	productoSeleccionado: '',
        	planSeleccionado: '',
        	oficinas: [],
        	oficinaSeleccionada: '',
        	rut: '',
        	errors: [],
        	items: ''
        }
      },

      methods: {
      	buscaProductos() {
	        var token = JSON.parse(window.localStorage.getItem('token'));
	        const test = JSON.parse(window.localStorage.getItem('rutLogueado'));
	        if (token === 0) {
	        	this.$router.push('./');
	        }
	        //console.log(test);
	        //console.log("Token");
	        //console.log(token);
	        let rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
			axios.get('http://' + this.$url + '/api/productosplanes/', {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log("productos");
				console.log(response);
				this.productos = response.data;
				console.log('SUCCESS!!');
			})
			.catch(error => {
			  console.log('FAILURE!!');
			});
        },

        buscaPlanes() {
        	var producto = this.productoSeleccionado;
	        var token = JSON.parse(window.localStorage.getItem('token'));
	        const test = JSON.parse(window.localStorage.getItem('rutLogueado'));
	        if (token === 0) {
	        	this.$router.push('./');
	        }
	        //console.log(test);
	        //console.log("Token");
	        //console.log(token);
	        let rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
			axios.get('http://' + this.$url + '/api/planes/' + producto, {

				params: {
                    'token' : token
                }

			}
			).then(response => {
				console.log("planes");
				console.log(response);
				this.planes = response.data;
				console.log('SUCCESS!!');
			})
			.catch(error => {
			  console.log('FAILURE!!');
			});
        },

        buscaOficinas() {
        	var office = JSON.parse(window.localStorage.getItem('oficina'));
        	this.oficinas = office;
        	
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

	        let rutAux = this.rut.split("-");
	        console.log(rutAux);
	        rutAux[0] = rutAux[0].split(".").join("");
	        console.log(rutAux);

	        const formData = new FormData();
	        formData.append('rut_intermediario', rutLogueado);
            formData.append('dv_intermediario', dv_logueado);

            console.log(this.dropzone);

            for (var i = 0; i < this.dropzone.length; i++) {
                formData.append('directorio' + i, this.dropzone[i]);
            }
            console.log(this.oficinaSeleccionada);
            formData.append('rut_cliente', rutAux[0]);
            formData.append('dig_ver_cliente', rutAux[1]);
            formData.append('id_oficina', this.oficinaSeleccionada);
            formData.append('id_plan', this.planSeleccionado);
            formData.append('num_items', this.items);
            formData.append('token', token);
            console.log(formData.get('directorio0'));
			axios.post('http://' + this.$url + '/api/propuestas/', formData, {

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

        validarRut: function() {
            var rut =this.rut;
            var dig_ver;
            var rut_no_dig_ver=0;
            this.errors = [];
        
            rut = rut.split(".").join("");
            rut = rut.replace('-', '');

            if (rut.length == 7)
                rut_no_dig_ver = rut.substring(0, 6);
            else if (rut.length == 8)
                rut_no_dig_ver = rut.substring(0, 7);
            else if (rut.length == 9)
                rut_no_dig_ver = rut.substring(0, 8);

            dig_ver = rut.charAt(rut.length - 1);

            if(rut_no_dig_ver==0)
            {
                this.errors = [];
                this.errors.push("Rut inválido");
                this.rut='';
                //this.rut.focus();
            }

           if(rut_no_dig_ver.length == 0 || rut_no_dig_ver.length > 8 )
            {
            this.errors = [];
            this.errors.push("Rut introducido inválido");
            this.rut='';
            this.password='';
            //this.rut.focus();
            return false;
          } 
          else 
             {
              if(this.getDV(rut_no_dig_ver) == dig_ver)
              {
                return true;
              }
              else
                {
                    this.errors = [];
                    this.errors.push("Rut introducido inválido");
                    this.rut='';
                    this.password='';
                    //this.rut.focus();
                    return false;
                }
            }
      },

      getDV: function(numero) {
        var nuevo_numero = numero.toString().split("").reverse().join("");
        for(var i=0,j=2,suma=0; i < nuevo_numero.length; i++, ((j==7) ? j=2 : j++)) {
            suma += (parseInt(nuevo_numero.charAt(i)) * j); 
        }
        var n_dv = 11 - (suma % 11);
        return ((n_dv == 11) ? 0 : ((n_dv == 10) ? "K" : n_dv));
      },

        // Permitir sólo números en el imput
        isNumber: function(evt) {
            var charCode = evt.which ? evt.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode === 75) return false;

            return true;
        },

        checkRut: function(rut) {

            // Obtiene el valor ingresado quitando puntos y guión.
            var valor = this.clean(this.rut);
            //console.log(valor);
            // Divide el valor ingresado en dígito verificador y resto del RUT.
            var cuerpo = valor.slice(0, -1);
            //console.log(cuerpo);
            var dv = valor.slice(-1).toUpperCase();
            //console.log(dv);
            
            // Separa con un Guión el cuerpo del dígito verificador.
            this.rut = this.format(this.rut);

            // Calcular Dígito Verificador "Método del Módulo 11"
            var suma = 0;
            var multiplo = 2;

            // Para cada dígito del Cuerpo
            for (var i = 1; i <= cuerpo.length; i++) {
                // Obtener su Producto con el Múltiplo Correspondiente
                var index = multiplo * valor.charAt(cuerpo.length - i);

                // Sumar al Contador General
                suma = suma + index;

                // Consolidar Múltiplo dentro del rango [2,7]
                if (multiplo < 7) {
                    multiplo = multiplo + 1;
                } else {
                    multiplo = 2;
                }
            }

            // Calcular Dígito Verificador en base al Módulo 11
            var dvEsperado = 11 - (suma % 11);

            // Casos Especiales (0 y K)
            dv = dv == "K" ? 10 : dv;
            dv = dv == 0 ? 11 : dv;

            // Validar que el Cuerpo coincide con su Dígito Verificador
            if (dvEsperado != dv) {
               //alert("El RUT ingresado Es  INCORRECTO .");
                return false;
            } else {
                //alert("El RUT ingresado Es CORRECTO.");
                return true;
            }
            //this.validarRut();
        },

        format: function(rut) {
            rut = this.clean(this.rut)

            var result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
            for (var i = 4; i < rut.length; i += 3) {
                result = rut.slice(-3 - i, -i) + '.' + result
            }

            return result
        },

        clean: function(rut) {
            return typeof rut === 'string' ?
            rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase() : ''
        },

        //Solo permite introducir numeros.
		esNumbero(evt) {
		    var charCode = evt.which ? evt.which : evt.keyCode;
		    //alert(charCode)
		    if(charCode > 31 && (charCode < 48 || charCode > 57)){
		        return false;
		    }
		         
		    return true;
		}


      	
	  },

	  created () {
	  	this.buscaProductos();
	  	this.buscaOficinas();
	  }
    

    }

</script>