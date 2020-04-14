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
                <h4 class="page-title">Mi Perfil</h4>
                <ol class="breadcrumb">
                </ol>
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap align-items-start">
            <div class="card card--profile-image mx-2">
              <div class="card-body">
                <div class="d-flex align-items-center flex-column"><img class="img-fluid" id="image-uploaded" src="src/assets/images/profile-default.png">
                  <input class="d-none" id="image-upload" type="file" name="image" accept="image/x-png,image/gif,image/jpeg">
                  <div class="d-flex justify-content-center align-items-center pt-2">
                    <label class="profile-pic-icons m-0" id="image-label" for="image-upload" data-toggle="tooltip" data-placement="top" title="Subir foto"><i class="text-primary px-1 renta-icon-camera"></i></label><a class="profile-pic-icons d-none" id="profilePicRemove" href="#" data-toggle="tooltip" data-placement="top" title="Eliminar foto"><i class="text-primary px-1 renta-icon-trash"></i></a>
                    <button class="btn btn-primary py-1 px-2 d-none" id="profilePicSave" href="">Guardar</button>
                  </div>
                  <div class="alert text-center alert-danger d-none">Ese tipo de archivo no está permitido, asegúrate de subir una imagen.</div>
                </div>
              </div>
            </div>
            <div class="card--profile-fields mx-2">
              <div class="card">
                <div class="card-body">
                  <h4 class="header-title m-0 mb-2 font-weight-bold">Datos personales</h4>
                  <div class="form-row">
                    <div class="col-lg-4">
                      <label>Nombre</label>
                      <input class="form-control" type="text" disabled id="nombre">
                    </div>
                    <div class="col-lg-4">
                      <label>Apellido Paterno</label>
                      <input class="form-control" type="text" disabled id="apellido_p">
                    </div>
                    <div class="col-lg-4">
                      <label>Apellido Materno</label>
                      <input class="form-control" type="text" disabled id="apellido_m">
                    </div>
                  </div>
                  <div class="form-row mt-1">
                    <div class="col-lg-4">
                      <label>Rut</label>
                      <input class="form-control" type="text" disabled id="rut">
                    </div>
                    <div class="col-lg-4">
                      <label>Fecha de Nacimiento</label>
                      <input class="form-control" type="date" disabled id="fn">
                    </div>
                  </div>
                  <div class="form-row mt-1">
                    <div class="col-lg-4">
                      <label>Email</label>
                      <input class="profile-editable form-control" type="email" disabled id="email">
                      <input type="hidden" id="email_oculto">
                      <div id="alert" class="" role="alert">
                        <ul id="errorEmail">
                        </ul>
                    </div>
                    </div>
                    <div class="col-lg-4">
                      <label>Teléfono de contacto</label>
                      <input class="profile-editable form-control" disabled id="telefono"  type="number" maxlength="11" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" onkeypress="return esNumbero(event);">
                      <input type="hidden" id="telefono_oculto">
                      <div id="alertTel" class="" role="alert">
                        <ul id="errorTelefono">
                        </ul>
                    </div>
                    </div>
                  </div>
                  <div class="profile-form-buttons pt-3 d-flex justify-content-end align-items-center"><a class="text-primary underline" id="profileEditPersonalData" href="#">Editar</a><a class="btn btn-secondary ml-2 d-none" id="profileCancelarPersonalData" href="#">Cancelar</a><a class="btn btn-primary ml-2 d-none" id="profileSavePersonalData" href="#">Guardar</a></div>
                </div>
              </div>
              
              <div class="card d-none" id="bancarios">
                <div class="card-body">
                  <h4 class="header-title m-0 mb-2 font-weight-bold">Forma de Pago</h4>
                  <div class="switch-wrap d-flex my-3">
                    <label class="transfer redlabel" for="transferType">Transferencia</label>
                    <div class="switch-group mx-3">
                      <input type="checkbox" id="transferType" switch="none">
                      <label for="transferType" data-on-label="" data-off-label=""></label>
                    </div>
                    <label class="cheque" for="transferType">Cheque </label>
                  </div>
                  <div class="d-none" id="chequeData">
                    <div class="alert alert-info">
                      <p class="mb-0" >Se realizará el documento a nombre de <span class="bold" id="nombre_cheque"></span></p>
                    </div>
                    <div class="profile-form-buttons pt-3 d-flex justify-content-end align-items-center"><a class="btn btn-secondary ml-2" id="profileCancelarFormaPagoCheque" href="#">Cancelar</a><a class="btn btn-primary ml-2" id="profileSaveFormaPagoCheque" href="#">Guardar</a></div>
                    <input type="hidden" id="formaPago" value="T">
                  </div>
                  <div id="bankAccountData">
                    <div class="d-flex justify-content-between">
                      <h5 class="header-title m-0 mb-2">Datos bancarios</h5>
                    </div>
                    <div id="profileAddBankDataForm">
                      <div class="form-row">
                        <div class="col-lg-4">
                          <label>Rut asociado a la cuenta</label>
                          <input class="bank-editable form-control" type="text" id="rut_asociado" disabled >
                        </div>
                        <div class="col-lg-4">
                          <label>Tipo de Cuenta</label>
                          <select class="bank-editable form-control" id="tipo_cuenta" disabled >
                            <!--  <option value="-1">Seleccione...</option>  -->
                          </select>
                          <div id="alertTipoCuenta" class="" role="alert">
                            <ul id="errorTipoCuenta">
                            </ul>
                        </div>
                        </div>
                        <div class="col-lg-4">
                          <label>Banco</label>
                          <select class="bank-editable form-control" id="banco" disabled >
                            <!--  <option value="-1">Seleccione...</option>  -->
                          </select>
                          <div id="alertBanco" class="" role="alert">
                            <ul id="errorBanco">
                            </ul>
                        </div>
                        </div>
                      </div>
                      <div class="form-row mt-1">
                        <div class="col-lg-8">
                          <label>N° de cuenta</label>
                          <input class="bank-editable form-control" type="number" id="numero_cuenta" disabled onkeypress="return esNumbero(event);">
                          <div id="alertNumeroCuenta" class="" role="alert">
                            <ul id="errorNumeroCuenta">
                            </ul>
                        </div>
                        <input type="hidden" id="tipo_cuenta_oculto">
                        <input type="hidden" id="banco_oculto">
                        <input type="hidden" id="numero_cuenta_oculto">
                        <input type="hidden" id="email_cuenta_oculto">
                        </div>
                        <div class="col-lg-4">
                          <label>Email</label>
                          <input class="bank-editable form-control" type="email" id="email_cuenta" disabled>
                          <div id="alertEmailCuenta" class="" role="alert">
                            <ul id="errorEmailCuenta">
                            </ul>
                        </div>
                        </div>
                      </div>
                      <div class="profile-form-buttons pt-3 d-flex justify-content-end align-items-center"><a class="text-primary underline" id="profileEditBankData" href="#">Editar</a><a class="btn btn-secondary ml-2 d-none" id="profileCancelarBankData" href="#">Cancelar</a><a class="btn btn-primary ml-2 d-none" id="profileSaveBankData" href="#">Guardar</a></div>
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
    Vue.use(VueAxios, axios)
    //import Topbar from '@/components/Topbar'
    //import SideMenu from '@/components/SideMenu'

    export default {
      name: 'Perfil',
    /*components:{
      Topbar,
      SideMenu
    },*/
      data () {
        return {
          perfil: [],
        }

       
      },

       methods: {
          profile() {
            var token = JSON.parse(window.localStorage.getItem('token'));
            const rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
            if (token === 0) {
              this.$router.push('./');
            }
            console.log("rutLogueado");
            console.log(rutLogueado);
            console.log("Token");
            console.log(token);
            axios.get('http://200.91.27.159:8000/api/infousuario/'+ rutLogueado, {

              params: {
                          'token' : token
                      }

            }
            ).then(response => {
              console.log(response);
              this.perfil = response.data;
              console.log('SUCCESS!!');
            })
            .catch(error => {
              console.log('FAILURE!!');
            });
          },
        }
    

    }

</script>