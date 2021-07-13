<template>
  <div id="all" class="container-fluid">
    <div id="publicar" class="container">
      <img  id="logoform" src="logo.png" alt="Twitter">
      <form id="tweetform" @submit.prevent="inclui">
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              
              <!-- <label for="upload-file" class="css-class">
              <input type="file" id="audio" hidden @change="choosFile"/>
            </label> -->
              <input
                type="text"
                id="audio"
                class="form-control"
                v-model="publi.audio"
                ref="audio"
                placeholder="Link da Imagem"
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
                placeholder="ID do usuário"
                required
              />
            </div>
          </div>
        </div>

        <button id="botao" type="submit" variant="primary">
          <i></i> <span> Twettar</span>
        </button>
      </form>
    </div>
    <!-- <div  id="cartao" class="card"> -->
    <div id="cartao" class="container">
      <div id="cartaopubli" v-for="publi in publis" :key="publi.id">
        <div class="card-body">
          <h2 id="nome">
            <img
              src="https://gitlab.com/uploads/-/system/user/avatar/3849734/avatar.png?width=40"
              alt="avatar"
              id="avatar"
            /> @{{ publi.username }}
          </h2>
          <!-- <div style="text-align: left"></div> -->
        </div>

        <div class="card-body" id="img">
          <img
            class="card-img-top"
            :src="publi.audio"
            alt="Card image cap"
            id="img"
          />
         <div id="icones">
            <b-icon id="heart" icon="heart-fill"></b-icon>
            <span icon="search" className="text-color-comment">10</span>
            <b-icon id="chat" icon="chat-right-fill"></b-icon>
            <span className="text-color-retweet">15</span>
            <b-icon id="share" icon="arrow-repeat"></b-icon>
            <span className="text-color-like">11</span>
          
          </div>
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
        users_id: null,
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
        .then((response) => alert(`Ok! Publicacao criada ${response.data.id}`));
      this.publi = {};
      window.setTimeout(function () {
        location.reload();
      }, 100);
    },
  },
};
</script>

<style scoped>

#nome {
  /* align-self: center; */
  margin-left: -50%;
  border-right:px double gray;
  border-left: px solid gray; 
  border-top: 0px ridge gray; 
  border-bottom: px ridge #ad76dc;
  

}
#heart{
  color:red;
  width: 20px;
  height: 20px;
   cursor:pointer
}
#chat{
  color:rgb(62, 62, 195);
  margin-left:10px;
  width: 20px;
  height: 20px;
  cursor:pointer
  
}
#share{
  color:rgb(68, 124, 51);
  margin-left:10px;
  width: 22px;
  height: 22px;
   cursor:pointer
}
#avatar {
  border-radius: 20px !important;
  width: 40px;
  height: 40px;
  align-self: center;
  /* margin-left: 50px; */
}

img {
  margin-top: 0px;
  /* max-height: 500px;
  max-width: 500px; */
  
}

#logoform{
  padding-bottom: 15px;
  padding-top: 10px;
  margin-left:45%

}
#icones {
  /* display: flex; */
  justify-content: space-between;
  margin-top: 20px;
  width: 400px;
  margin-left:40px;
  color: var(--twitter-background);
  text-align: center;
  align-items: center;
  
}

#tweetform {
  padding-bottom: 10px;
}
#audio{
background-color: #d6d1dd;
border-radius: 20px;
border-right:1px double gray;
border-left: 1px solid gray; 
border-top: 1px solid gray; 
border-bottom: 1px solid gray;
}

#users_id{
background-color: #d6d1dd;
border-radius: 20px;
border-right:1px double gray;
border-left: 1px solid gray; 
border-top: 1px solid gray; 
border-bottom: 1px solid gray;
}

#cartaopubli{
  border-top: 0px solid #ad76dc; 
  border-bottom: 1px solid #ad76dc;

}

#cartao {
  align-self: center;
  align-items: center;
  text-align: center;

  margin-top: 10px;
  max-width: 500px;
  border-radius: 15px;
  border-right:1px double gray;
  border-left: 1px solid gray; 
  border-top: 1px solid gray; 
  border-bottom: 4px solid #ad76dc;

  /* border-right: 1px solid gray;
  border-left: 1px solid gray; */
}

#title {
  margin-top: 0px;
  margin-left: 480px;
  
}

#all{
  background-color: #d6d1dd;
}

#itens {
  margin-left: 50px;
  margin-top: 5px;
}
#publicar {
  margin-top: 0px;
  max-width: 500px;
  border-radius: 20px;
  border-right: 1px groove  #ad76dc;
  border-left: 1px groove  #ad76dc;
  border-top: 5px groove  #ad76dc;
  border-bottom: 4px groove  #ad76dc;
}

#botao {
  background-color: #ad76dc !important;
  border: none !important;
  color: white !important;
  font-weight: 900 !important;
  text-transform: inherit !important;
  border-radius: 30px !important;
  height: 50px !important;
  margin-top: 20px !important;
  margin-bottom: 10px !important;
  margin-left: 80%;
  transition: all 0.5s;
  
}

/* #botao:hover {background-color: #3e8e41} */

#botao span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  
}

#botao span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  
  transition: 0.5s;
  
}

#botao:hover span {
  padding-right: 25px;
  
}



#botao:hover span:after {
  opacity: 1;
  right: 0;
 
}
</style>