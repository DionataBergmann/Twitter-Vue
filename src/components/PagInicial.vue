<template>
  <div class="container-fluid">
        <h1  id='title'>Twitter
      
      </h1>
    <div class="row m-4">
        <div class="container-fluid">
           <h1>O que está acontecend</h1>
          <p> testando</p>
         </div>
      <div class="col-md-3" v-for="publi in publis" :key="publi.id">
        <div id='card-body'>
          <div class="card mb-4 shadow-lg" style="margin-left: 60px">
            <img
              class="card-img-top"
              :src="publi.audio"
              alt="Card image cap"
              id='img'
            />
            <div
              class="card-body"
            >
                <h2 id="card" style="text-align: center">{{ publi.username }}</h2>
                <div style="text-align: center">
                
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      publi: {
        id: null,
        username: null,
        audio: null,
      },
      filtro: "",
      publis: [],
     
    };
  },
  mounted() {
    this.listar();
  },
  methods: {
    listar() {
      axios
        .get(this.$urlAPI + "/publis")
        .then((response) => (this.publis = response.data));
      this.filtro = "";  
    }
  }
}
</script>

<style scoped>
#img{
    align-self: center;
    margin-top: 5px;
    height: 250px;
    width: 200px;
    max-height: 250px;
    min-height: 250px;
    max-width: 200px;
    min-width: 200px;
 
}
#card-body{
    margin-top: 5px;
    height: 500px;
    width: 362px;
    max-height: 500px;
    min-height: 500px;
    max-width: 362px;
    min-width: 362px;
}
#title{
  margin-top: 0px;
    margin-left: 680px;
}
#card{
  font-size: medium;
}
#itens{
  margin-left: 50px;
  margin-top: 5px;
}
</style>