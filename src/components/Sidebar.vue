<template>
  <div id="tam" class="wrapper">
   
      <template>
        <img  id="logo" src="logo.png" alt="Twitter" class="mx-3">
        <div class="p-3">
          
          <nav class="mb-3">
            <b-nav vertical>
              <router-link id="nav" class="navbar-brand" to="/pesquisa">
              <b-icon icon="house-door"></b-icon>
              Página Inicial
              </router-link>
      
              <router-link id="nav" class="navbar-brand" to="/pesquisa">
              <b-icon icon="hash"></b-icon>
              Explorar
              </router-link>

              <router-link id="nav" class="navbar-brand" to="/pesquisa">
               <b-icon icon="bell"></b-icon>
              Notificações
              </router-link>

              <router-link id="nav" class="navbar-brand" to="/pesquisa">
               <b-icon icon="envelope"></b-icon>
              Mensagens
              </router-link>

              <router-link id="nav" class="navbar-brand" to="/pesquisa">
               <b-icon icon="person"></b-icon>
              Perfil
              </router-link>

              <router-link id="nav" class="navbar-brand" to="/pesquisa">
               <b-icon icon="three-dots"></b-icon>
              Mais
              </router-link>
         
              
            </b-nav>
          </nav>
          <b-button id="botao" variant="primary" block @click="hide">Twettar</b-button>
        </div>
      </template>
    
  </div>
</template>


<script>
export default {
    name : `MenuPrincipal`,
}
</script>

<style scoped>
#nav{
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#botao{
 background-color: #ad76dc !important;
  border: none !important;
  color:white !important;
  font-weight: 900 !important;
  text-transform: inherit !important;
  border-radius: 30px !important;
  height: 50px !important;
  margin-top: 20px !important;
}
#tam{
  max-width: 300px;
  margin-left: 230px;
  border-right: 1px solid gray;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color:white;
  background-color: rgb(0, 0, 0);
  padding-left: 20px;
  padding-right: 20px;
  flex: 0.2;
}
#logo{
  margin-top: 10px;
  margin-left: 15px;
  margin-bottom: 5px;
  width: 30px;
  height: 40px;
}


</style>