<template>
  <div id="wrapper">
    <Topbar></Topbar>
    <!--<SideMenu></SideMenu>-->
    <div :class="$store.state.val">
      <div class="content">
        <div class="container-fluid">
            <div class="page-title-box pb-0">
                <h1 class="page-title bannerText py-3 text-center text-uppercase text-white">Bienvenido al portal de intermediarios</h1>
            </div>
            <div class="bannerBottom">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 banner-bottom-txt-container order-2 order-md-1">
                            <h2 class="text-white">Lorem ipsum</h2>
                            <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veritatis rerum voluptatibus quae ratione maiores fugiat quia qui impedit facilis consequatur ut, aspernatur reprehenderit sint dolor ab a repellendus
                                nesciunt.
                            </p>
                        </div>
                        <div class="col-md-6 p-0 order-1 order-md-2">
                          <img class="w-100 img-fluid d-md-none" src="/src/assets/images/fondo.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <nav>
                      <div class="justify-content-between nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="flex-grow-1 d-flex flex-column align-items-center justify-content-between nav-item nav-link " id="nav-info-tab" data-toggle="tab" href="#nav-info" role="tab" aria-controls="nav-info" aria-selected="true">
                            <img src="/src/assets/images/home/icon-info.svg" alt="Información">
                              <span>Informaciones</span>
                        </a>
                        <a class="flex-grow-1 d-flex flex-column align-items-center justify-content-between nav-item nav-link" id="nav-news-tab" data-toggle="tab" href="#nav-news" role="tab" aria-controls="nav-news" aria-selected="true">
                          <img src="/src/assets/images/home/icon-news.svg" alt="Noticias">
                          <span>Noticias</span>
                        </a>
                        <a class="flex-grow-1 d-flex flex-column align-items-center justify-content-between nav-item nav-link" id="nav-norm-tab" data-toggle="tab" href="#nav-norm" role="tab" aria-controls="nav-norm" aria-selected="true">
                          <img src="/src/assets/images/home/icon-book.svg" alt="Normativa">
                          <span>Normativa</span>
                        </a>
                        <a class="flex-grow-1 d-flex flex-column align-items-center justify-content-between nav-item nav-link" id="nav-biblioteca-tab" data-toggle="tab" href="#nav-biblioteca" role="tab" aria-controls="nav-biblioteca" aria-selected="true">
                          <img src="/src/assets/images/home/icon-book-2.svg" alt="Bibliioteca">
                          <span>Biblioteca</span>
                        </a>
                        <a class="flex-grow-1 d-flex flex-column align-items-center justify-content-between nav-item nav-link" id="nav-faq-tab" data-toggle="tab" href="#nav-faq" role="tab" aria-controls="nav-faq" aria-selected="true">
                          <img src="/src/assets/images/home/icon-faq.svg" alt="FAQ">
                          <span>Preguntas frecuentes</span>
                        </a>
                      </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab">
                            <div class="row">
                                <ul id="informaciones">
                                  <li v-for="infoHome in informacion.data">
                                    <div class="mx-2 news-txt-container">
                                      <p class="m-0 font-weight-bold font-18"> 
                                        {{infoHome.titulo}}
                                      </p>
                                      <p class="m-0 muted">{{ infoHome.creada }}</p>
                                      <p class="m-0"> {{ infoHome.informacion }} </p>
                                      <div class="no-border-btns d-flex"><a class="ver-mas-news ver-mas text-primary btn pl-0 d-flex align-items-center" href="../page-home/noticia-individual.html"><span class="mr-2">Ver más</span> <i class="renta-icon-right-arrow-circle"></i></a></div>
                                    </div>
                                  </li>
                                </ul>
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
      name: 'Home',
    /*components:{
      Topbar,
      SideMenu
    },*/
      data () {
        return {
          informacion: []
        }

       
      },

      methods: {
        info () {
          var token = JSON.parse(window.localStorage.getItem('token'));
          const rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
          if (token === 0) {
            this.$router.push('./');
          }
          let numero = 4
          axios.get('http://' + this.$url + '/api/listarinformacion/'+ numero, {

            params: {
                        'token' : token
                    }

          }
          ).then(response => {
            console.log('informacion');
            console.log(response);
            this.informacion = response.data;
          })
          .catch(error => {
            console.log('FAILURE!!');
          });
        },
      },

    created () {
      this.info();
    }
    

    }

</script>

<style type="text/css">
  .bannerBottom {
    background-image: url(/src/assets/images/fondo.jpg);
    background-position: 50%;
    background-size: cover;
    padding: 2rem 0;
  }
  .bannerText {
    background-color: #37485a;
  }
</style>
