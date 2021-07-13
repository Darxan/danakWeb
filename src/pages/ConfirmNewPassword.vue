<template>
    <div class="minheight">
        <section class="form mt-9vh d-flex justify-content-center align-items-center" style="height: 100vh">
            <div class="password_form_container text-center" v-if="form">
                <form class="password_form d-flex align-items-center flex-column" @submit.prevent>
                    <a href="#">
                        <img src="../assets/logo/danak.svg" alt="" width="220">
                    </a>
                    <div class="from-groups w-100  d-flex align-items-center flex-column">
                        <label for="password" class="text-left pb-2"> {{ $t("new_password") }} </label>
                        <input
                          type="password"
                          v-model="password"
                          id="password"
                          class="form-control w-75">
                    </div>
                    <div class="from-groups w-100  d-flex align-items-center flex-column">
                        <label
                          for="confirm"
                          class="text-left pb-2">
                          {{ $t("confirm_password") }}
                          </label>
                        <input
                          type="password"
                          v-model="confirmpassword"
                          id="confirm"
                          class="form-control w-75">
                    </div>
                    <br>
                    <div  class="d-flex align-items-center flex-row justify-content-around w-100 mt-2">
                        
                        <router-link to="/" class="btn btn-warning btn-sm py-1 text-center  px-1 w-25">
                            {{ $t("bosh_sahifa") }}
                        </router-link>
                        <button class="btn btn-success btn-sm py-1 text-center px-2 w-25"
                                :disabled="!showButtons" @click="showText">
                            {{ $t("confirm") }}
                        </button>
                    </div>
                </form>
            </div>        
            <div class="text" v-if="text">
                <div>
                    <h1> {{ $t("new_password_created") }} </h1>
                    <router-link to="/"  class="btn btn-warning btn-sm py-1 text-center  px-1 w-25 mt-1">
                        {{ $t("bosh_sahifa") }}
                    </router-link>
                </div>
            </div>
            <div class="loader_container"  v-if="loader">   
                <div class="loader"></div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'confirm-new-password',
    data () {
        return {
            password: '',
            confirmpassword: '',
            form: true,
            text: false,
            loader: false
        }
    },
    methods: {
        fetchNewPassword(){
            axios.post("https://api.danak.uz/auth/users/confirm/password/", {
                
            })
        },
        showText(){
            this.form = false,
            this.loader = true 
            this.text = true
            setTimeout(() => {
                this.loader = false;
            }, 3000);
        },
    },
    computed: {
        showButtons(){
            if(this.password == this.confirmpassword && this.password.length > 7 ){
                return true
            }
        }
    }
    
}
</script>

<style scoped>
.loader_container {
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
}
.loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.text {
    width: auto;
    height: 91vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.text div {
    border-radius: 6px;
    padding: 2rem;
    transition-delay: 20s;
    background: white;
    width: 75%;
    text-align: center;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
}
.password_form_container {
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 3rem;
}
.password_form {
    width: 340px;
    /* height: 70vh; */
    background: white;
    border-radius: 6px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 2rem 0 3rem 0
}
.password_form a {
    display: flex;
    justify-content: center;
    align-content: center;
}
.password_form .inputs {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem 0rem;
}
.from-groups {
    padding: 1rem 0rem;
}
</style>