var indiceImagen=0;

export default {
  
  created() {
    setInterval(() => {
      //console.log("element.in       ")
      this.indiceImagen++;
   }, 3*1000)
},
  
  data() {

    let imagem;
    const source=      
    "https://ssd-2023-240gb----youtube.s3.us-west-2.amazonaws.com/ssd-2023-240gb.json"
    fetch(source)
    .then(response => response.json())
    .then(data => this.imagem = data)
    

    return { 
      indiceImagen : indiceImagen , //Math.floor(Math.random()*10000),
      imagem: {},
     }
  },
  template: 
`
<!--Header do Boostrap--------->
<header>
    <div class="bg-dark collapse" id="navbarHeader" >
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">Informações</h4>
            <p class="text-muted">
Certificados obtidos até o ano 2023<br>
</p>
          </div>
          <div class="col-sm-4 offset-md-1 py-4">
            <h4 class="text-white">Julian Gamboa</h4>
            <ul class="list-unstyled">
              <li><a href="https://github.com/julian-gamboa-bahia" class="text-white">Github</a></li>
              <li><a href="https://github.com/julian-gamboa-ensino" class="text-white">Github Eduativo</a></li>
              <li><a href="https://www.linkedin.com/in/julian-gamboa-bahia/" class="text-white">Linkeind</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark box-shadow">
      <div class="container d-flex justify-content-between">
<a href="" class="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
          <strong> {{etiqueta}} (2023) </strong>
        </a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
</header>

<!--END Header do Boostrap--------->          
<main role="main">
<div class="album py-5 bg-light">
<div class="container">          
<!--ROW. Inicio---------> 
<div class="row">
<!--Elemento da Matriz---------> 
<div class="col-md-4">
<div class="card mb-4 box-shadow">
<!--Image--------->          
          <img id="imagem-1" v-bind:src="imagem[indiceImagen]"
          class="card-img-top" alt="Image 1" style="height: 225px; width: 100%; display: block;" 
           >
           

<app-janela-modal-classificar  SetInterval_avanco_certificados_automatico={{SetInterval_avanco_certificados_automaticoBIDIRECTIONAL}} SetInterval_avanco_certificados_automatico={{SetInterval_avanco_certificados_automaticoBIDIRECTIONAL}}
nome_imagem="{{imagem[indiceImagen]}}"
etiqueta_imagem="{{etiqueta}}" >  
</app-janela-modal-classificar>
</div>
</div>
<!--COL------>           
<div class="col-md-4">
<div class="card mb-4 box-shadow">
<!--Image--------->          
          <img id="imagem-2" v-bind:src="imagem[indiceImagen+1]"
          class="card-img-top" alt="Image 2" style="height: 225px; width: 100%; display: block;" 
          >
<app-janela-modal-classificar  SetInterval_avanco_certificados_automatico={{SetInterval_avanco_certificados_automaticoBIDIRECTIONAL}}
          nome_imagem="{{imagem[indiceImagen+1]}}"
          etiqueta_imagem="{{etiqueta}}" >  
          </app-janela-modal-classificar>
        </div>
</div>
<!--END: COL. ------>      
<!--COL. ------>           
<div class="col-md-4">
<div class="card mb-4 box-shadow">
<!--Image--------->          
  <img id="imagem-3" v-bind:src="imagem[indiceImagen+2]"
  class="card-img-top" alt="Image 3" style="height: 225px; width: 100%; display: block;" 
  >
  <app-janela-modal-classificar  SetInterval_avanco_certificados_automatico={{SetInterval_avanco_certificados_automaticoBIDIRECTIONAL}}  
  nome_imagem="{{imagem[indiceImagen+2]}}"
  etiqueta_imagem="{{etiqueta}}" >  
  </app-janela-modal-classificar>
</div>
</div>
<!--END: COL. ------>      
</div>  
<!--END: ROW. ------>


<!--ROW. Inicio---------> 
<div class="row">
<!--Elemento da Matriz---------> 
<div class="col-md-4">
<div class="card mb-4 box-shadow">
<!--Image--------->          
          <img id="imagem-4" v-bind:src="imagem[indiceImagen+3]"
          class="card-img-top" alt="Image 4" style="height: 225px; width: 100%; display: block;" 
          >
          <app-janela-modal-classificar  SetInterval_avanco_certificados_automatico={{SetInterval_avanco_certificados_automaticoBIDIRECTIONAL}}
          nome_imagem="{{imagem[indiceImagen+3]}}"
          etiqueta_imagem="{{etiqueta}}" >  
          </app-janela-modal-classificar>
                </div>
</div>
<!--COL. ------>           
<div class="col-md-4">
<div class="card mb-4 box-shadow">
<!--Image--------->          
          <img id="imagem-5" v-bind:src="imagem[indiceImagen+4]"
          class="card-img-top" alt="Image 5" style="height: 225px; width: 100%; display: block;" 
          >
          <app-janela-modal-classificar  SetInterval_avanco_certificados_automatico={{SetInterval_avanco_certificados_automaticoBIDIRECTIONAL}}
          nome_imagem="{{imagem[indiceImagen+4]}}"
          etiqueta_imagem="{{etiqueta}}" >  
          </app-janela-modal-classificar>
        </div>
</div>
<!--END: COL. ------>      
<!--COL. ------>           
<div class="col-md-4">
<div class="card mb-4 box-shadow">
<!--Image--------->          
  <img id="imagem-6" v-bind:src="imagem[indiceImagen+5]"
  class="card-img-top" alt="Image 6" style="height: 225px; width: 100%; display: block;" 
  >
  <app-janela-modal-classificar  SetInterval_avanco_certificados_automatico={{SetInterval_avanco_certificados_automaticoBIDIRECTIONAL}}
  nome_imagem="{{imagem[indiceImagen+5]}}"
  etiqueta_imagem="{{etiqueta}}" >  
  </app-janela-modal-classificar>
</div>
</div>
<!--END: COL. ------>      
</div>  
<!--END: ROW. ------>



<!--ROW. Inicio---------> 
<div class="row">
<!--Elemento da Matriz---------> 
<div class="col-md-4">
<div class="card mb-4 box-shadow">
<!--Image--------->          
          <img id="imagem-7" v-bind:src="imagem[indiceImagen+6]"
          class="card-img-top" alt="Image 7" style="height: 225px; width: 100%; display: block;" 
          >
          <app-janela-modal-classificar  SetInterval_avanco_certificados_automatico={{SetInterval_avanco_certificados_automaticoBIDIRECTIONAL}}
          nome_imagem="{{imagem[indiceImagen+6]}}"
          etiqueta_imagem="{{etiqueta}}" >  
          </app-janela-modal-classificar>
        </div>
</div>
<!--COL. ------>           
<div class="col-md-4">
<div class="card mb-4 box-shadow">
<!--Image--------->          
          <img id="imagem-8" v-bind:src="imagem[indiceImagen+7]"
          class="card-img-top" alt="Image 8" style="height: 225px; width: 100%; display: block;" 
          >
          <app-janela-modal-classificar  SetInterval_avanco_certificados_automatico={{SetInterval_avanco_certificados_automaticoBIDIRECTIONAL}}
          nome_imagem="{{imagem[indiceImagen+7]}}"
          etiqueta_imagem="{{etiqueta}}" >  
          </app-janela-modal-classificar>
        </div>
</div>
<!--END: COL. ------>      
<!--COL. ------>           
<div class="col-md-4">
<div class="card mb-4 box-shadow">
<!--Image--------->          
  <img id="imagem-9" v-bind:src="imagem[indiceImagen+8]"
  class="card-img-top" alt="Image 9" style="height: 225px; width: 100%; display: block;" 
  >
  <app-janela-modal-classificar  SetInterval_avanco_certificados_automatico={{SetInterval_avanco_certificados_automaticoBIDIRECTIONAL}}
  nome_imagem="{{imagem[indiceImagen+8]}}"
  etiqueta_imagem="{{etiqueta}}" >  
  </app-janela-modal-classificar>
</div>
</div>
<!--END: COL. ------>      
</div>  
<!--END: ROW. ------>
</div>
</div>
</main>

  <footer class="text-muted">
    <div class="container">

      <p>Colocado no meu <a href="https://github.com/julian-gamboa-ensino/julian-gamboa-ensino.github.io/tree/aws-lambda-sam-cli/abril-2023-fonte">Github de ensino</a> </p>                        
    </div>
  </footer>



  `
}

/*

<div id="app">
      <button @click="getPosts">{{  indiceImagen }}</button>
      <br>
      <a v-bind:href="post[indiceImagen]" target="_blank">{{post[indiceImagen]}}</a>           
  </div>


*/ 