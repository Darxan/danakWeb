<template>
    <div>
        <section class="form mt-9vh">
            <div class="password_form_container text-center">
                <div class="password_form">
                    <a href="#">
                        <img src="../assets/logo/danak.svg" alt="" width="250">
                    </a>
                    <div class="inputs">
                        <p>Yangi parol</p>
                        <input type="text" v-model="password" class="form-control w-75">
                    </div>
                    <div class="inputs">
                        <p class="text-left">Yangi parolni tasdiqlang</p>
                        <input type="text" v-model="confirmpassword" class="form-control w-75">
                    </div>
                    <br>
                    <div v-if="showButtons" class="d-flex align-items-center flex-row justify-content-around w-100">
                        <button class="btn btn-danger w-25">
                            Save
                        </button>
                        <button @click="delit" class="btn btn-warning w-25">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                password: '',
                confirmpassword: ''
            }
        },
        methods: {
            delit(){
                this.password = '',
                this.confirmpassword = ''
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
    height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
}
.password_form {
    width: 22rem;
    height: 70vh;
    background: white;
    margin-top: 5rem;
    border-radius: 6px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
.password_form a {
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 2rem 0rem;
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