<template>
    <div>
        <div class="card_container mt-9vh">
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
        </div>
    </div>
</template>

<script>
import { axiosPost } from '@/store/axiosBase'   
    export default {
  data () {
    return {
        message: 'Save',
        del: 'Delete',
        firstname: '',
        surname: '',
        birthday: '',
        password: '',
        passwordNew: '',
        passwordNewAgain: ''

    }
  },
  methods:{
      delit(){
          this.firstname = '',
          this.surname = '',
          this.birthday = ''
      },
      delit_passwords() {
        this.password = '',
        this.passwordNew = '',
        this.passwordNewAgain = ''
      }
  },
  computed: {
      showButton(){
          if(this.firstname || this.surname || this.birthday){
              return true
          } 
      },
      showButtonPassword(){
          if(this.password || this.passwordNew || this.passwordNewAgain){
              return true
          }
      }
  }
        
    }
</script>

<style scoped>
.card_container {
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
}
</style>