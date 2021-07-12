<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#"><b-button variant="dark" v-b-toggle.sidebar-no-header><b-icon icon="list"></b-icon></b-button></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
         <router-link id="nav" class="navbar-brand" to="/pag1">
              <b-icon icon="house-door"></b-icon>
              Página Inicial
              </router-link>
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <b-nav-form>
           <!-- <button > <b-icon id="teste" icon="search"></b-icon></button> -->
          <b-form-input id="botao" text-variant="light" size="sm" class="mr-sm-2" placeholder="Buscar no Twitter"></b-form-input>
        
        </b-nav-form>

      <!-- Dropdown -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
          <i class="fas fa-user mr-1"></i>
          <span v-if="username">{{username}}</span>
          <span v-else>(Não Logado)</span>
        </a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/login">Login</router-link>
          <a class="dropdown-item" href="#" @click="sair">Logout</a>
        </div>
      </li>
 
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
  export default{
    name:'NavbarComponent',
     props: {
    username: String
  },
  methods: {
    sair() {
      localStorage.removeItem("token")
      this.$parent.mudaUser(null)
    }
  }
  }
</script>

<style scoped>
#teste{
  color: red;
}
#botao{
 
  border: none !important;
  border-radius: 30px !important;
 
 
}
</style>