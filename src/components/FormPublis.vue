<template>
  <div class="container">
  

    <form @submit.prevent="inclui">
      <div id= "tweetbox" class="row">
        <div class="col-sm-12">
          <div class="form-group">
            <label for="audio"></label>
            <input
              type="text"
              id="audio"
              class="form-control"
              v-model="publi.audio"
              ref="audio"
              required
            />
          </div>
          <div class="form-group">
            <label for="users_id"></label>
            <input
              type="text"
              id="users_id"
              class="form-control"
              v-model="publi.users_id"
              ref="users_id"
              required
            />
          </div>
        </div>
      </div>
      

      <button id="botao" type="submit" variant="primary">
        <i></i> Twettar
      </button>
      
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      publi: {
        audio:null,
        users_id:null

      },
      
      erros: [],
    };
  },
  methods: {
    verificaForm() {
      // limpa vetor de erros
      this.erros = [];
     
     
      return false;
    },
    
    inclui() {
      axios
        .post(this.$urlAPI + "/publis", this.publi)
        .then((response) =>
          alert(`Ok! Publicacao criada ${response.data.id}`)
        );
      this.publi = {}; 
    },
  }
};
</script>


<style scoped>

#tweetbox{
  margin-top: 1000px;
  margin-bottom: 1000px;
}

#titulo{
    /* width: 1100px; */
    height: 200px;
    align-self: center
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
</style>