<template>

  <div class="container-fluid">
        <div id="publicar" class="container">
    <form @submit.prevent="inclui">
      <div class="row">
        <div class="col-sm-12">
          <div class="form-group">
            <label for="audio"></label>
            <input
              type="text"
              id="audio"
              class="form-control"
              v-model="publi.audio"
              ref="audio"
              placeholder="audio"
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
              placeholder="user_id"
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
    <!-- <div  id="cartao" class="card"> -->
      <div id="cartao">
       <div  id="cartao" v-for="publi in publis" :key="publi.id">
          <div 
              class="card-body"
              >
              
                <h2 id="nome"> <img src="https://www.livrariasfamiliacrista.com.br/media/catalog/product/cache/1/image/800x/56819907b1c49a4bc751319b3fccb0da/a/r/ar-3.jpg" alt="avatar" id="avatar">{{ publi.username }} @{{ publi.username }}</h2>
                <div style="text-align: left">
                  
              </div>
              </div>
            
     <div
               class="card-body"  id="img"
            >
            <img
              
              class="card-img-top"
              :src="publi.audio"
              alt="Card image cap"
              id='img'
            />
            
           
  <!-- </div> -->
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
        users_id:null
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
}
</script>

<style scoped>

#nome{
  width: 1250px;
  margin-bottom: 0px;
}
#avatar{
  border-radius: 20px !important;
  width: 40px;
  height: 40px;
}

img{
  margin-top: 0px;
  max-height: 500px;
  max-width: 500px;
}

#cartao{
  align-self: center;
  align-items: center;
  text-align: center;
 
   /* border-right: 1px solid gray;
  border-left: 1px solid gray; */
 
}

#title{
  margin-top: 0px;
    margin-left: 680px;
}

#itens{
  margin-left: 50px;
  margin-top: 5px;
}
#publicar{
  margin-top: 0px;
  max-width: 500px;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  border-bottom: 4px solid #ad76dc;
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