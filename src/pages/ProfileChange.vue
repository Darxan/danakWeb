<template>
    <div>
        <notifications position='center center' width="400" group="login"/>
        <!-- <div class="card_container mt-9vh">
            <div class="card_1">
                <div class="cards text-center">
                    <h1 class="">Profil</h1>
                    <div class="profile_button p">
                    <img src="../assets/images/user.png" alt="" class="p image"><br>
                        <button class="btn btn-success">Change img</button>
                        <button class="btn btn-success">Delete</button>
                    </div>
                    <div class="inputs p">
                        <p>Ismingiz</p>
                        <input type="" class="form-control" v-model="firstname">
                    </div>
                    <div class="inputs p">
                        <p>Familiya</p>
                        <input type="" class="form-control" v-model="surname">
                    </div>
                    <div class="inputs p">
                        <p>Tug'ilgan kun</p>
                        <input type="date" class="form-control" v-model="birthday">
                    </div>
                    <div v-if="showButton">
                        <button class="btn btn-danger w-50">{{ message }}</button><br>
                        <br>
                        <button class="btn btn-warning w-50" @click="delit">{{ del }}</button>
                    </div>
                </div>
                <div class="cards_2 text-center">
                    <h1 class="p">Пароль</h1>
                    <div class="inputs p">
                        <p>Ismingiz</p>
                        <input type="" class="form-control" v-model="password">
                    </div>
                    <div class="inputs p">
                        <p>Ismingiz</p>
                        <input type="" class="form-control" v-model="passwordNew">
                    </div>
                    <div class="inputs p">
                        <p>Ismingiz</p>
                        <input type="" class="form-control" v-model="passwordNewAgain">
                    </div>
                     <div v-if="showButtonPassword">
                        <button class="btn btn-danger w-50">{{ message }}</button><br>
                        <br>
                        <button class="btn btn-warning w-50" @click="delit_passwords">{{ del }}</button>
                    </div>
                </div>
            </div>  
        </div> -->
        <div class="container">

            <!-- <div class="cards">
                <h1> {{ $t("profile_change") }} </h1>
                <div class="card_image">
                    <img src="../assets/logo/danak.svg" alt="">
                </div>
                <div class="card_inputs">
                   <div class="input">
                       <label for="first_name"> {{ $t("ism") }} </label>
                       <input type="text" class="form-control" v-model="first_name" id="first_name">
                   </div>
                   <div class="input">
                       <label for="last_name"> {{ $t("familiya") }} </label>
                       <input type="text" class="form-control" v-model="last_name" id="last_name">
                   </div>
                   <div class="input">
                       <label for="date"> {{ $t("data_rojdeniya") }} </label>
                       <input type="date" class="form-control" v-model="date" id="date">
                   </div>
                </div>
                <div class="card_buttons">
                    <button class="btn btn-outline-danger"  :disabled="!showProfilButtons" @click="delete_input_length"> {{ $t("delete") }} </button>
                    <button class="btn btn-outline-success" :disabled="!showProfilButtons"> {{ $t("save") }} </button>
                </div>
            </div> -->

            <!-- ikkinchi card boshlandi -->

            <div class="cards">
               
               <div class="card_image">
                    <img src="../assets/logo/danak.svg" alt="">
               </div>
               <h3 class="text-center"> {{ $t("change_password") }} </h3>
               <div class="card_inputs">
                   <div class="input mt-3">
                       <label for="new_password"> {{ $t("new_password") }} </label>
                       <input type="password" class="form-control" v-model="new_password" id="new_password">
                   </div>
                   <div class="input mt-3">
                       <label for="confirm_new_password"> {{ $t("confirm_password") }} </label>
                       <input type="password" class="form-control" v-model="confirm_new_password" id="confirm_new_password">
                   </div>
               </div>
               <div class="card_buttons mt-4">
                   <router-link to="/home" 
                                class="btn btn-outline-danger btn-sm py-2 px-4"  
                                > 
                            {{ $t("bosh_sahifa") }} 
                    </router-link>
                   <button class="btn btn-outline-success btn-sm py-2 px-4"         
                            @click="save">{{ $t("save") }}
                    </button>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import { axiosPost } from '@/store/axiosBase' 
import axios from "axios"
import notification from '@/mixins/notification'  
    export default {
        mixins: [notification], 
  data () {
    return {
        new_password: '',
        confirm_new_password: '',
        first_name: '',
        last_name: '',
        date: '',
    }
  },
  methods:{
        async save() {
            axiosPost.post('/rest-auth/password/change/', {
                new_password1: this.new_password,
                new_password2: this.confirm_new_password
        }).then((response) =>{
            this.showMessage('login', 'success', 'Success', response.data.detail)
            console.log("response", response)
            setTimeout(() => {
                this.$router.push('/home')
            }, 2000);
        })
          .catch((e) => {
              this.showMessage('login', 'warn', 'Error', 'Error')
              console.log("e", e.response.data)
          })  
        },


      delete_input_length(){
          this.first_name = '',
          this.last_name = '',
          this.date = ''
      },
      
      delete_password_input_length(){
          this.new_password = '',
          this.confirm_new_password = ''
      }
  },
  computed: {
        showProfilButtons(){
            if(this.first_name || this.last_name || this.date){
                return true
            } 
        },
         showPasswordButtons(){
            if(this.new_password == this.confirm_new_password && this.new_password.length > 7 ){
                return true
            }
         }
  }
        
    }
</script>

<style scoped>
/* .card_container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-content: center;
}
.card_1 {
    width: 60%; 
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
}
.cards, .cards_2  {
    padding: 0rem 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    height: 88vh;
    margin: 1rem;
}
.cards_2 {
    height: 70vh;
}
.profile_button {
    position: relative;
}
.profile_button button {
    margin: 1rem;
}
.inputs {
    width: 100%;
    height: 100px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.p {
    padding: .4rem 3rem;
}
.image {
    width: 200px;
}

@media (max-width: 400px){
    .cards {
        border: none;
    }
} */

.container {
    width: 100%;
    margin-top: 9vh;
    display: flex;
    justify-content: center;
    align-content: center;
    height: auto;
    padding: 3rem 0rem;
    flex-direction: row;
    flex-wrap: wrap;
}
.container .cards {
    width: 25rem;
    height: auto;
    padding: .8rem;
    background-color: #fff;
    border: solid 1px #eaeaea;
    border-radius: 6px;
    margin: 1rem  5rem;
}
.container .cards h1{
    padding: 1rem;
}
.container .cards .card_image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    padding-bottom: 1rem;
}
.container .cards .card_image img {
    width: 15rem;
}
.container .cards .card_inputs {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
}
.container .cards .card_inputs .input {
    width: 80%;
    padding: .4rem 0rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
}
.container .cards .card_inputs .input label {
    padding: .4rem 0rem;
}
.container .cards .card_inputs input {
    width: 100%;
}
.container .cards .card_buttons {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.container .cards .card_buttons button {
    width: 100px;
}
</style>