<template>
    <div v-cloak>
        <notifications position='center center' group="forget"/>
        <div class="section" :style="{ backgroundImage: 'url(' + require('@/assets/images/dala.png') + ')' }">
            <div class="card">
                <router-link to="/" class="back">
                    <i class="fa fa-chevron-left"></i>
                </router-link>
                 <img src="@/assets/logo/danak.svg" alt="" class="card_image">
                    <div class="card_btns">
                    </div>
                    <div class="card_t">
                    <p>Elektron pochta</p>
                    </div>
                    <div class="card_inputs">
                        <span class="first_input input_container">
                            <input 
                                type="text" 
                                placeholder="Email" 
                                v-model="form.email">
                        </span>
                    </div>
                    <button class="card_submit_button" @click.prevent="forget">Kirish</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import notification from '@/mixins/notification'
export default ({
    name: 'forget',
    mixins: [notification], 
    data() {
        return {
            form: {
                email: 'admin@admin.com'
            },
        }
    },
    
    methods:{
        ...mapActions(["forgetPass"]),
        async forget() {
            const {...userdata} = this.form;
            let resp = await this.forgetPass(userdata)    
            if(resp.response.status === 200){
                this.showMessage('login', 'success', 'Success', 'Вы успешно вошли в систему')
                setTimeout(() =>{
                    this.$router.push({ path: '/' })
                }, 1500)
            }
            if(resp.response.status === 400){
                let msg = "Пользователь с данным электронной адресом не существует"
                this.showMessage('forget', 'warn', 'Ошибка', msg)
            }
           
        },
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
    background-position: center center no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 5rem;
    padding-bottom: 4rem;
}
.section::before {
    content: '';
    position: absolute;
    
    width: 100%;
    height: 100%;
    /* background: rgba(0,0,0,0.4); */
}
.section .card {
    width: 400px;
    background: #fff;
    height: 100%;
    margin-top: 2rem;
    border-radius: 8px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    padding-bottom: 3rem;
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
    padding: 40px 0px 30px 0px;
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
</style>