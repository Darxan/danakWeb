<template>
    <div class="minheight">
        <section class="form mt-9vh ">
            <div class="password_form_container text-center">
                <form class="password_form d-flex align-items-center flex-column ">
                    <a href="#">
                        <img src="../assets/logo/danak.svg" alt="" width="220">
                    </a>
                    <div class="from-groups w-100  d-flex align-items-center flex-column">
                        <label for="password" class="text-left pb-2">New password</label>
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
                          Confirm password
                          </label>
                        <input
                          type="password"
                          v-model="confirmpassword"
                          id="confirm"
                          class="form-control w-75">
                    </div>
                    <br>
                    <div  class="d-flex align-items-center flex-row justify-content-around w-100 mt-2">
                        
                        <router-link to="/" @click="delit" class="btn btn-warning btn-sm py-1 text-center  px-2 w-25">
                            Home
                        </router-link>
                        <button class="btn btn-success btn-sm py-1 text-center px-2 w-25"
                                :disabled="!showButtons">
                            Confirm
                        </button>
                    </div>
                </form>
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
            confirmpassword: ''
        }
    },
    methods: {
        fetchNewPassword(){
            axios.post("https://api.danak.uz/auth/users/reset_password_confirm/", {
                
            })
        }
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
.form {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: auto;
}
.password_form_container {
    width: 100%;
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
    margin-top: 5rem;
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
    padding: .5rem 0rem;
}
</style>