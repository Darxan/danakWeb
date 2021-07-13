<template>
    <div v-cloak>
        <notifications position='center center' width="400px" :duration='5000' group="register"/>
        <div class="section" :style="{ backgroundImage: 'url(' + require('@/assets/images/dala.png') + ')' }">
            <div class="card">
                <router-link to="/home" class="back">
                    <i class="fa fa-chevron-left"></i>
                </router-link>
                <img src="@/assets/logo/danak.svg" alt="" class="card_image">
                    <div class="card_btns">
                        <facebook-login class="facebook_auth"
                            appId="307600717226201"
                            @login="facebookAuthentication"
                            @logout="onLogout"
                            loginLabel="Facebook"
                            @get-initial-status="facebookAuthentication">
                        </facebook-login>
                        <g-signin-button
                            :params="googleParams"
                            @success="authGoogleSuccess"
                            @error="onSignInError">
                           <i class="fab fa-google"></i>&nbsp; Google
                        </g-signin-button>
                    </div>
                    <div class="card_t">
                    <p>Elektron pochta orqali</p>
                    </div>
                    <div class="card_inputs">
                        <span class="first_input input_container">
                            <input 
                                    type="text" 
                                    placeholder="Username" 
                                    v-model="form.username">
                                    
                        </span>
                        <span class="first_input input_container">
                            <input 
                                    type="email" 
                                    placeholder="Email" 
                                    v-model="form.email">
                        </span>
                        <span class="first_input input_container">
                            <input 
                                    type="email" 
                                    placeholder="Refferer" 
                                    v-model="form.ref_parent">
                        </span>
                        <span class="second_input input_container">
                            <input 
                                    type="password" 
                                    placeholder="Parol"
                                    v-model="form.password"
                                    >
                        </span>
                        <span class="second_input input_container">
                            <input 
                                    type="password" 
                                    placeholder="Confirm password"
                                    v-model="form.password2"
                                    >
                        </span>
                    </div>
                    <button v-if="validationPassword" 
                            class="card_submit_button" 
                            @click.prevent="register">
                            Kirish
                    </button>
            </div>
        </div>
    </div>
</template>
<script>
import facebookLogin from 'facebook-login-vuejs';
import { mapActions } from "vuex";
import notification from '@/mixins/notification'
export default ({
    name: 'register',
    mixins: [notification],
    data() {
        return {
            form: {
                username: 'testet',
                email: 'founderdao@gmail.com',
                ref_parent: 344434,
                password: 12345678,
                password2: 12345678
            },
            googleParams: {
                client_id: '91323451042-qhv2n2miqpkv7mdggp1pbkkmiodft1nf.apps.googleusercontent.com'
            }
            
        }
    },
    components: {
        facebookLogin
    },
    computed: {
        validationPassword() {
            if(this.form.password === this.form.password2 && this.form.password != ''){
                return true
            }else{ return false } 
        }
    },
    methods:{
        ...mapActions(["registerUser"]),

        register() {
            const {...userdata} = this.form;
            this.registerUser(userdata).then(response => {
                if(response.status == 201){
                    let username = response?.data?.username
                    let msg = "Вы успешно зарегистрировались зайдите свою почту и подтвердите свою личность"
                    this.showMessage('register', 'success', username, msg)
                }
            }).catch((e) => {   
                let value = e.response.data
                if(value?.email){
                    this.showMessage('register', 'warn', 'Email', value?.email[0])
                } else if(value?.password){
                    this.showMessage('register', 'warn', 'Password', value?.password[0])
                }
                
            })
        },
        authGoogleSuccess (data) {
            this.$store.dispatch('googleAuth', {access_token: data.qc.access_token})
            .then(response =>{
                this.showMessage('register', 'success', 'Success', 'Вы успешно вошли в систему')
                if(response.status == 200){
                    setTimeout(() =>{
                        this.$router.push({ path: '/home' })
                    }, 1500)
                }
            })
        },
        onSignInError (error) {
            console.log('OH NOES', error)
        },  
        facebookAuthentication(resp) {
            const token = resp.response.authResponse.access_token;
            this.$store.dispatch('facebookAuth', {access_token: token})
        },
        onFacebookInError(error) {
            this.$store.dispatch("SET_ERROR", error);
        },
        onLogout(){
            this.$store.dispatch("logoutUser").then(() => {
                this.$router.push("/login");
            });
        }
    }
});
</script>
<style scoped>
[v-cloak]{
    display: none;
}
.section {
    width: 100%;
    height: 100%;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 5rem;
    padding-bottom: 4rem;
    margin-top: 5vh;
}
.section .card {
    width: 400px;
    background: #fff;
    height: 70%;
    margin-top: 2rem;
    border-radius: 8px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
.section .card .back {
    position: absolute;
    top: 8%;
    left: -6%;
    width: 46px;
    height: 46px;
    background: #fff;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    -webkit-box-shadow: 0 4px 16px 0 rgb(0 0 0 / 16%);
    box-shadow: 0 4px 16px 0 rgb(0 0 0 / 16%);
    font-size: 20px;
    text-decoration: none;
}
.section .card .card_image {
    width: 50%;
    padding: 20px 0px 0px 10px;
}
.section .card .card_texts {
    display: flex;
    width: 75%;
    justify-content: space-between;
    margin-top: -1rem;
}
.section .card .card_texts h1{
    color: #282828;
    font-size: 24px;
    font-weight: 100;
    line-height: 1.17;
    font-family: verdana;
}
.section .card .card_texts span{
    margin-top: .5rem;
}
.section .card .card_texts span a {
    text-decoration: none;
    color: #00284b;
    cursor: pointer;
    font-family: verdana;
}
.section .card .card_btns {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.section .card .card_btns a {
    text-decoration: none;
    color: white;
    width: 100%;
    border-radius: 20px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .2rem;
    font-size: 14px;
    font-family: verdana;
}

.card_t {
    width: 75%;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 1.43;
    color: #a0aab4;
    position: relative;
    display: inline-block;
    background: #fff;
    font-family: verdana;
}
.section .card .card_inputs {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.section .card .card_inputs .input_container {
    width: 100%;
    height: 40px;
    margin-bottom: 0.5rem;
    position: relative;
}
.section .card .card_inputs .input_container input {
    width: 100%;
    height: 100%;
    font-size: 16px;
    border: none;
    outline: none;
    border-bottom: 1px solid #a0aab4;
    transition: .3s;
}
.section .card .card_inputs .input_container input:focus {
    transition: .3s;
    border-bottom: 1px solid #009551;
}
.section .card .card_submit_button {
    width: 75%;
    height: 45px;
    border: none;
    background: #00b261;
    font-size: 20px;
    line-height: 2px;
    transition: .3s;
    color: white;
    border-radius: 6px;
    margin-bottom: 30px;
}
.section .card .card_submit_button:hover {
    background: #009551;
    transition: .3s;
    cursor: pointer;
}
.card_parol_t {
    width: 75%;
    display: flex;  
    align-items: center;
    position: relative;
    display: inline-block;
    background: #fff;
    font-family: verdana;
    padding: 10px 0;
}
.card_parol_t a {
    font-size: 14px;
    line-height: 1.43;
    color: grey;
    text-decoration: none;
}
.section .card .card_inputs .input_container button {
    border: none;
    background: none;
    position: absolute;
    top: 25%;
    right: 0;
    font-size: 18px;
}
.facebook_auth{
    text-decoration: none;
    color: white;
    width: 100%;
    border-radius: 20px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .2rem;
    font-size: 14px;
    font-family: verdana;
    border-radius: 100px;
    cursor: pointer;
}
.g-signin-button {
    text-decoration: none;
    color: #fff;
    width: 75.5%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: verdana;
    background-color: #dd4b39;
    cursor: pointer;
}
</style>