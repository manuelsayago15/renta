<template>
	<div class="login-page">
		<div class="left-contianer" :style="{ backgroundImage: 'url(' + require('../assets/images/bg-login.jpg') + ')' }" style="background-position-center right; background-size: cover;">
        	<div class="brand-wrap"><img class="logo" src="../assets/images/logo-blanco.png" alt="Logo renta nacional"></div>
    	</div>
    	<div class="right-container" id="main">
	        <div class="login-form-wrap">
	            <div class="brand-movil"><img src="../assets/images/logo-renta-nacional.png" alt="Logo renta nacional"></div>
	            <h1 class="title">Portal intermediarios</h1>
	            <form form method="post" v-on:submit="iniciarSesion()">
                <div class="form-group" id="form-group-rut">
                    <div class="switch-wrap">
                      <label class="rut redlabel" for="rut">RUT</label>
                      <div class="switch-group">
                        <input type="checkbox" @click="rutOrPassport" id="checkLogin" switch="none">
                        <label for="checkLogin" data-on-label="" data-off-label=""></label>
                      </div>
                      <label class="passport" for="passport">Pasaporte</label>
                    </div>
                    <input class="form-control" v-show="loginSelected == 0" v-model="rut" type="text" id="rut" name="rut" placeholder="RUT"  maxlength="12" @keypress="isNumber($event)" v-on:keyup="checkRut()" >
                    <input class="form-control" v-show="loginSelected == 1" v-model="pasaporte" type="text" id="passport" name="passport" placeholder="Pasaporte">
                </div>
	                  
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input class="form-control" type="password" id="passwordInput" name="password" >
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
                <div  class="alert alert-danger alert-dismissible fade show" role="alert">
                    <b>Por favor, valide (los) siguiente(s) error(es):</b>
                    <ul>
                        <li> </li>
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
            identificacion: '27052222',
            password: '123',
            dig_verificador: 'K',
            rut: '',
            pasaporte: '',
            errors: []
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


        //Login Methods
        iniciarSesion: function() {
            var errors = [];
            if (this.validarCamposVacios()) {
            console.log("got in");
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
				  console.log('SUCCESS!!');
          var arrDatos = [];
          var id = resp.user.id;
          var rut_logueado = resp.user.identificacion;
          var dv_logueado = resp.user.dig_verificador;
          var id_tipo_usuario=resp.user.id_tipo_usuario;
          var nombre_logueado=resp.user.nombres+" "+resp.user.apellidos;
          var id_empresa=resp.user.id_empresa;
          var id_oficina=resp.oficina[0].id;
          console.log(this.password);
          console.log(nombre_logueado);
				})
				.catch(function(){
				  console.log('FAILURE!!');
				});
           	
                //var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
               // $('#content').html('<div class="loading"><img src="assets/images/loader.gif"/><br/></div>');
                /*$.ajax({
                    url: dominio + 'login',
                    dataType: 'json',
                    type: 'POST',
                    data: {
                        identificacion: rut_no_dig_ver,
                        password: $('#passwordInput').val(),
                        dig_verificador: dig_ver
                    },
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    success: function(resp) {
                       
                        var arrDatos = [];
                        var id = resp.user.id;
                        var rut_logueado = resp.user.identificacion;
                        var dv_logueado = resp.user.dig_verificador;
                        var id_tipo_usuario=resp.user.id_tipo_usuario;
                        var nombre_logueado=resp.user.nombres+" "+resp.user.apellidos;
                        var id_empresa=resp.user.id_empresa;
                        var id_oficina=resp.oficina[0].id;

                        window.sessionStorage.setItem('token', resp.token);
                        window.localStorage.setItem('token', JSON.stringify(resp.token));
                        window.localStorage.setItem('id_oficina', JSON.stringify(id_oficina));
                        window.localStorage.setItem('id_tipo_usuario', JSON.stringify(id_tipo_usuario));
                        window.localStorage.setItem('nombre_logueado', JSON.stringify(nombre_logueado));
                        window.localStorage.setItem('id_empresa', JSON.stringify(id_empresa));
                        window.localStorage.setItem('rutLogueado', JSON.stringify(rut_logueado));
                        window.localStorage.setItem('dvLogueado', JSON.stringify(dv_logueado));
                        window.localStorage.setItem('oficina', JSON.stringify(resp.oficina));
                        $('#content').fadeIn(1000000);
                        if(id_tipo_usuario=='1'){
                            window.location = './page-dashboard/gerente-sucursal.html';
                        }
                        if(id_tipo_usuario=='11'){
                            window.location = './page-dashboard/gerente-zonal.html';
                        }
                        if(id_tipo_usuario=='2'){
                            window.location = './page-dashboard/ejecutivo.html';
                        }
                        if(id_tipo_usuario=='3'){
                            window.location = './page-dashboard/intermediario.html';
                        }
                        if(id_tipo_usuario=='4'){
                            window.location = './page-admin/admin-liquidadores.html';
                        }
                       
                    },
                    error: function(resp) {
                        var errors = [];
                        errors.push('<li>Credenciales inválidas.</li>');
                        $('#alert').show();
                        $('#message').show();
                        $('#errors').show();
                        $('#alert').addClass("alert alert-danger alert-dismissible fade show");
                        $('#message').html("Por favor, valide (los) siguiente(s) error(es):");
                        $('#errors').html(errors);
                        $('#rutInput').val("");
                        $('#passportInput').val("");
                        $('#passwordInput').val("");
                       // $('#content').fadeToggle();
                       removeSpinner($('body'))
                    }
                }); */
                return false;
            }
        },

        rutOrPassport: function() {
          console.log("I'm here");
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