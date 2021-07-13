<template>
    <div class="minheight">
        <notifications position='center center' width="400" group="confirm"/>
        <h1 class="text-dark"></h1>
        <section class="form mt-9vh" v-if="!successCardState">
            <div class="password_form_container text-center ">
                <div class="password_form d-flex align-items-center flex-column py-4 px-4" 
                      >
                    <a href="#">
                        <img src="../assets/logo/danak.svg" alt="" width="220">
                    </a>
                    <div class="border py-4 px-2 my-2">
                        <h3 class="text-left">Accountingizni faollashtirish uchun ushbu tugmachaga bosing</h3>
                    </div>
                    
                    <div class="d-flex align-items-center flex-row justify-content-around w-100 mt-2">
                        <button class="btn btn-success btn-sm py-1 text-center px-2 w-50"
                                type="submit" @click="confirmAccount">
                            Tasdiqlash
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div class="row my-6 mb-4 d-flex align-items-center justify-content-center" v-if="successCardState">
            <div class="col-md-3 ">
                <div class="card shadow py-5 px-2 w-100 text-center ">
                    <h1 class="text-muted">Successfuly updated your password😊</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import notification from '@/mixins/notification'
export default {
    name: 'confirm-new-password',
    mixins: [notification], 
    data () {
        return {
            form: {
                uid: this.$route.query.uid,
                token: this.$route.query.key,
            },
            successCardState: false
        }
    },
    methods: {
        confirmAccount(){
            if(this.form.uid == undefined && this.form.token == undefined){
                return this.showMessage('confirm', 'warn', 'Error', 'Xatolik yuz berdi yangitdan tasdiqlash codini oling')
            } 
            const {...newData} = this.form
            axios.post("https://api.danak.uz/auth/users/activation/", newData)
            .then(response => {
                this.successCardState = true
                setTimeout(() => {
                    this.$router.push('/home')
                }, 1500)
            }).catch((e) => {
                this.showMessage('confirm', 'warn', 'uid', e.response.data?.uid[0])
            })
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