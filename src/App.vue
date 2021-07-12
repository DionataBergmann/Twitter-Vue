<template>
  <div id="app" >
    <!-- <menu-principal :user="user"/> -->
     <navbar-component :username="username"/>
    <sidebar-component/>
   
    <router-view/>
  </div>

</template>

<script>
// import MenuPrincipal from './components/Sidebar.vue'
import SidebarComponent from './components/SidebarComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'
export default {
  name: 'App',
  components: {
    // MenuPrincipal
     NavbarComponent,
    SidebarComponent,
  
  },
  data() {
    return {
      username: null
    }
  },
  methods: {
    mudaUser(username) {
      this.username = username
    }
  }
}
</script>

<style>
body{
  background-color: black;
}

</style>