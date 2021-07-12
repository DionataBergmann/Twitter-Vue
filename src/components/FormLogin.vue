<template>
 
<form class="form-signin mt-5" @submit.prevent="logar">
  <div class="text-center mb-4">
    <img id="logo" src="logo maior.png" alt="Twitter" class="mx-3">
  </div>

  <div class="form-label-group">
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required
           v-model="email">
    <label for="inputEmail">E-mail do Usuário</label>
  </div>

  <div class="form-label-group">
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required
           v-model="password">
    <label for="inputPassword">Senha de Acesso</label>
  </div>
  <p style="text-align: center">
      Ou crie sua <router-link to="/register">conta</router-link>.
    </p>

  <button id="botao" class="btn btn-lg btn-secondary btn-block" type="submit">Entrar</button>
</form>    

</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: null,
      password: null
      
    }
  },
  methods: {
    logar() {
      axios.post(this.$urlAPI+"/login", {email: this.email, password: this.password})
           .then(response => {
             if (response.data.username == null) {
               alert("Erro... Login ou senha inválidos")
             } else {
               localStorage.setItem("token", response.data.token)
               this.$parent.mudaUser(response.data.username)               
               this.$router.push("/pag1")
             }
           })
    }
  }
}
</script>

<style scoped>
#botao{
  background-color: #ad76dc;
  color: #000000;
  font-size: x-large;
}
#logo{
  margin-top: 50px;
  margin-bottom: 35px;
}
template {
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #000000;
  
}
.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}
.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}
.form-label-group > input,
.form-label-group > label {
  height: 3.125rem;
  padding: .75rem;
}
.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #000;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}
.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}
.form-label-group input:-ms-input-placeholder {
  color: transparent;
}
.form-label-group input::-ms-input-placeholder {
  color: transparent;
}
.form-label-group input::-moz-placeholder {
  color: transparent;
}
.form-label-group input::placeholder {
  color: transparent;
}
.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: .25rem;
}
.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 12px;
  color:#000;
}
/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #ad76dc;
  }
}
/* Fallback for IE
-------------------------------------------------- */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #000;
  }
}


</style>