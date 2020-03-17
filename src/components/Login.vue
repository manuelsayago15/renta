<template>
	<div class="login-page">
		<div class="left-contianer" :style="{ backgroundImage: 'url(' + require('../assets/images/bg-login.jpg') + ')' }" style="background-position-center right; background-size: cover;">
        	<div class="brand-wrap"><img class="logo" src="../assets/images/logo-blanco.png" alt="Logo renta nacional"></div>
    	</div>
    	<div class="right-container" id="main">
	        <div class="login-form-wrap">
	            <div class="brand-movil"><img src="../assets/images/logo-renta-nacional.png" alt="Logo renta nacional"></div>
	            <h1 class="title">Portal intermediarios</h1>
	            <form form method="post" >
	                <div class="form-group" id="form-group-rut">
	                    <div class="switch-wrap">
	                      <label class="rut redlabel" for="rut">RUT</label>
	                      <div class="switch-group">
	                        <input type="checkbox" id="checkLogin" switch="none">
	                        <label for="checkLogin" data-on-label="" data-off-label=""></label>
	                      </div>
	                      <label class="passport" for="passport">Pasaporte</label>
	                    </div>
	                    <input class="form-control" type="text" id="rutInput" name="rut" placeholder="RUT"  maxlength="12" onkeypress="return isNumber(event)"  >
	                    <input class="form-control" type="text" id="passportInput" name="passport" placeholder="Pasaporte">
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
	                       
	                        <input class="btn btn-primary  w-md waves-effect waves-light" onclick="addSpinner($('body'))" type="submit" value="Ingresar">
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
     
    Vue.use(VueAxios, axios)

    export default {
      name: 'app',
      data () {
        return {
            data: '',
            resp: '',
            identificacion: '27052222',
            password: '123',
            dig_verificador: 'K',
            backgroundImg: '../assets/images/bg-login.jpg'
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

        test() {
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
              /*this.$store.dispatch('signin', response.data)*/
            }).catch(error => {
              console.log('FAILURE')
              console.log(identificacion);
              this.error = error
              console.log(error)
            });
        },


        //Login Methods


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