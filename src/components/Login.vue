<template>
	<div class="login-page">
		<div class="left-contianer" :style="{ backgroundImage: 'url(' + require('../assets/images/bg-login.jpg') + ')' }" style="background-position-center right; background-size: cover;">
        	<div class="brand-wrap"><img class="logo" src="../assets/images/logo-blanco.png" alt="Logo renta nacional"></div>
    	</div>
    	<div class="right-container" id="main">
	        <div class="login-form-wrap">
	            <div class="brand-movil"><img src="../assets/images/logo-renta-nacional.png" alt="Logo renta nacional"></div>
	            <h1 class="title">Portal intermediarios</h1>
	            <form form method="post" @submit.prevent="iniciarSesion()">
                <div class="form-group" id="form-group-rut">
                    <div class="switch-wrap">
                      <label class="rut" :class="{redlabel:loginSelected == 0}" for="rut">RUT</label>
                      <div class="switch-group">
                        <input type="checkbox" @click="rutOrPassport" id="checkLogin" switch="none">
                        <label for="checkLogin" data-on-label="" data-off-label=""></label>
                      </div>
                      <label class="passport" :class="{redlabel:loginSelected == 1}" for="passport">Pasaporte</label>
                    </div>
                    <input class="form-control" v-show="loginSelected == 0" v-model="rut" type="text" id="rut" name="rut" placeholder="RUT" v-on:change="validarRut()" maxlength="12" @keypress="isNumber($event)" v-on:keyup="checkRut()" >
                    <input class="form-control" v-show="loginSelected == 1" v-model="pasaporte" type="text" id="passport" name="passport" placeholder="Pasaporte" v-on:keyup="limpiar_errors()">
                </div>
	                  
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input class="form-control" type="password" v-model="password" id="passwordInput" name="password" >
                </div>

                <div class="form-group row m-t-20">
                    <div class="col-sm-6">
                        <div class="custom-control custom-checkbox">
                            <input class="custom-control-input" type="checkbox" id="customControlInline">
                            <label class="custom-control-label" for="customControlInline">Recordar contraseña</label>
                        </div>
                    </div>

                    <div class="col-sm-6 text-right">
                       <!--  <button class="btn btn-primary w-md waves-effect waves-light" type="button" id="entrar">Ingresar</button>-->
                       
                        <input class="btn btn-primary  w-md waves-effect waves-light"  type="submit" value="Ingresar">
                    </div>
                </div>
                <div class="form-group m-t-10 mb-0 row">
                    <div class="col-12 m-t-20"><a href="#"><i class="mdi mdi-lock"></i> Olvidaste tu contraseña</a></div>
                </div>
                <div v-if="errors.length > 0" class="alert alert-danger alert-dismissible fade show" role="alert">
                    <b>Por favor, valide (los) siguiente(s) error(es):</b>
                    <ul>
                      <li v-for="(error, i) in errors">{{error}}</li>
                    </ul>
                </div>
                <div id="alert" class="" role="alert">
                    <b id="message"></b>
                    <ul id="errors">
                    </ul>
                </div>
	            </form>
	        </div>
	    </div>
	</div>
    
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import backgroundImg from '../assets/images/bg-login.jpg'
    //import $ from 'jquery'
     
    // Importamos JQuery
	const $ = require('jquery')
	// Lo declaramos globalmente
	window.$ = $
     
    Vue.use(VueAxios, axios)

    export default {
      name: 'app',
      data () {
        return {
            data: '',
            resp: '',
            clicked: true,
            loginSelected: 0,
            //backgroundImg: '../assets/images/bg-login.jpg',

            //Login data
            identificacion: '',
            password: '',
            dig_verificador: '',
            rut: '',
            pasaporte: '',
            errors: [],
            arrDatos: [],
            id: '',
            rut_logueado: '',
            dv_logueado: '',
            id_tipo_usuario: '',
            nombre_logueado: '',
            id_empresa: '',
            id_oficina: ''
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

        test: function(){
          this.$router.push('./intermediario');
        },
        //Login Methods
        iniciarSesion: function() {
            var errors = [];
            console.log(this.validarRut());
            if (this.validarCamposVacios()) {
              //console.log("got in");
              if (this.rut != "") {
                var rut =this.rut;
                var dig_ver;
                var rut_no_dig_ver=0;
            
                rut = rut.split(".").join("");
                rut = rut.replace('-', '');
    
                if (rut.length == 7)
                    rut_no_dig_ver = rut.substring(0, 6);
                else if (rut.length == 8)
                    rut_no_dig_ver = rut.substring(0, 7);
                else if (rut.length == 9)
                    rut_no_dig_ver = rut.substring(0, 8);
    
                dig_ver = rut.charAt(rut.length - 1);
              }
              else
                {
                 if (this.pasaporte!= "") {
                     rut_no_dig_ver = this.pasaporte;
                     dig_ver = 'p';
                 }
                }

	        	//let fd = new FormData();
	        	//fd.append('file', this.file)
		        const formData = new FormData();
		        formData.append('identificacion', rut_no_dig_ver);
		        formData.append('password', this.password);
		        formData.append('dig_verificador', dig_ver);
            //console.log("before axios");
            //console.log(rut_no_dig_ver);
            //console.log(this.password);
            //console.log(dig_ver);
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
    				).then(resp => {
    				  
              console.log(resp);
              //console.log(resp.data.user);
              //console.log(resp.data.user.tipo_documento);
              //var arrDatos = [];
              //this.id = resp.user.id;
              this.rut_logueado = resp.data.user.identificacion;
              //console.log(this.rut_logueado);
              this.dv_logueado = resp.data.user.dig_verificador;
              this.id_tipo_usuario=resp.data.user.id_tipo_usuario;
              this.nombre_logueado=resp.data.user.nombres+" "+resp.data.user.apellidos;
              this.id_empresa=resp.data.user.id_empresa;
              this.id_oficina=resp.data.oficina[0].id;

              //console.log(resp.data.token);
              window.sessionStorage.setItem('token', resp.data.token);
              window.localStorage.setItem('token', JSON.stringify(resp.data.token));
              window.localStorage.setItem('id_oficina', JSON.stringify(this.id_oficina));
              window.localStorage.setItem('id_tipo_usuario', JSON.stringify(this.id_tipo_usuario));
              window.localStorage.setItem('nombre_logueado', JSON.stringify(this.nombre_logueado));
              window.localStorage.setItem('id_empresa', JSON.stringify(this.id_empresa));
              window.localStorage.setItem('rutLogueado', JSON.stringify(this.rut_logueado));
              window.localStorage.setItem('dvLogueado', JSON.stringify(this.dv_logueado));
              window.localStorage.setItem('oficina', JSON.stringify(resp.oficina));
              console.log(window.localStorage);
              if(this.id_tipo_usuario=='1'){
                //window.location = './page-dashboard/gerente-sucursal.html';
                this.$router.push('./gerente-sucursal');
              }
              if(this.id_tipo_usuario=='11'){
                //window.location = './page-dashboard/gerente-zonal.html';
                this.$router.push('./gerente-zonal');
              }
              if(this.id_tipo_usuario=='2'){
                this.$router.push('./ejecutivo');
                //window.location = './page-dashboard/ejecutivo.html';
              }
              if(this.id_tipo_usuario=='3'){
                //window.location = './page-dashboard/intermediario.html';
                this.$router.push('./intermediario');
              }
              if(this.id_tipo_usuario=='4'){
                //window.location = './page-admin/admin-liquidadores.html';
                this.$router.push('./admin-liquidadores');
              }

              console.log('SUCCESS!!');
    				})
    				.catch(error => {
    				  console.log('FAILURE!!');
              console.log(error);
              console.log(this.errors.length);
              this.errors.push('Credenciales inválidas');
    				});
            return false;
            }
        },

        rutOrPassport: function() {
          //console.log("I'm here");
          if (this.clicked == true) {
            this.clicked = false;
            console.log(this.clicked);
          }else {
            this.clicked = true;
          }

          if (this.clicked == false){
            this.loginSelected = 1;
            //console.log(this.loginSelected);
          }else if(this.clicked == true){
            this.loginSelected = 0;
          }
        },

        validarCamposVacios: function() {

            if (((this.rut) || (this.pasaporte)) && (this.password)) {
                return true;
            }
            this.errors = [];

            if ((!this.rut) && (!this.pasaporte)) {
                this.errors.push("El rut o pasaporte es obligatorio");
            }
            if (!this.password) {
                this.errors.push("La contraseña es obligatoria");
            }
        },

        limpiar_errors: function() {

            this.errors = [];
            this.errors.length = 0;
        },
        limpiar_campos: function() {

            this.errors = [];
            this.rut = '';
            this.pasaporte = '';
            this.password = '';

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
        }

      },

      /*addSpinner: function(el, static_pos){
        var spinner = el.children('.spinner');
        if (spinner.length && !spinner.hasClass('spinner-remove')) return null;
          !spinner.length && (spinner = $('<div class="spinner' + (static_pos ? '' : ' spinner-absolute') + '"/>').appendTo(el));
          animateSpinner(spinner, 'add');
      },*/

      mounted () {


      },

      watch: {

      },

      computed: {
      	imageUrl: function() {
    			return "url("+ this.backgroundImg + ")";
    		}
      }


  }

</script>

<style>
	
</style>