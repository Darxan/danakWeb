<template>
    <div v-cloak>
        <notifications position='center center' width="400" group="login"/>
        <div class="section" :style="{ backgroundImage: 'url(' + require('@/assets/images/dala.png') + ')' }">
            <div class="card">
                <router-link to="/" class="back">
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
                            :params="googleSignInParams"
                            @success="onSignInSuccess"
                            @error="onSignInError">
                           <i class="fab fa-google"></i>&nbsp; Google
                        </g-signin-button>
                        <a href="#"><i class="fab fa-google"></i><span>&nbsp; Google - Orqali kirish</span></a>
                    </div>
                    <div class="card_t">
                    <p>Elektron pochta orqali</p>
                    </div>
                    <div class="card_inputs">
                        <span class="first_input input_container">
                            <input 
                                    type="text" 
                                    placeholder="Email" 
                                    v-model="form.email">
                        </span>
                        <span class="second_input input_container">
                            <input 
                                    type="password" 
                                    placeholder="Parol"
                                    v-model="form.password"
                                    >
                        </span>
                    </div>
                    <button class="card_submit_button" @click.prevent="login">Kirish</button>
                    <div class="card_parol_t">
                        <router-link to="/forget">Parolni unutdingizmi?</router-link>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
import facebookLogin from 'facebook-login-vuejs';
import { mapActions, mapGetters } from "vuex";
import notification from '@/mixins/notification'
export default ({
    name: 'login',
    mixins: [notification], 
    data() {
        return {
            form: {
                email: 'admin@admin.com',
                password: 123321123
            },
            googleSignInParams: {
                client_id: '91323451042-qhv2n2miqpkv7mdggp1pbkkmiodft1nf.apps.googleusercontent.com'
            }
            
        }
    },
    components: {
        facebookLogin
    },
    methods:{
        ...mapActions(["loginUser"]),
        async login() {
            const {...userdata} = this.form;
            await this.loginUser(userdata).then(response => {
                this.showMessage('login', 'success', 'Success', 'Вы успешно вошли в систему')
                if(response.status == 200){
                    setTimeout(() =>{
                        this.$router.push({ path: '/' })
                    }, 1500)
                }
            }).catch((e) => {
                let msg = e.response.data
                if(msg?.email){
                    this.showMessage('login', 'warn', 'Email', msg?.email[0])
                }
                if(msg?.non_field_errors){
                    this.showMessage('login', 'warn', 'Password error', msg?.non_field_errors[0])
                }
            })
        },
        onSignInSuccess (googleUser) {
            this.$store.dispatch('googleAuth', {access_token: googleUser.mc.access_token})
            .then(response =>{
                this.showMessage('login', 'success', 'Success', 'Вы успешно вошли в систему')
                if(response.status == 200){
                    setTimeout(() =>{
                        this.$router.push({ path: '/' })
                    }, 2000)
                }
            })
        },
        onSignInError (error) {
            console.log('OH NOES', error)
        },  
        facebookAuthentication(resp) {
            this.loading = true;
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
    margin-top: 9.3vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 5rem;
    padding-bottom: 4rem;
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
    border: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
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
    padding: 20px 0px 20px 0px;
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
    padding: 20px 0;
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
    width: 75%;
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