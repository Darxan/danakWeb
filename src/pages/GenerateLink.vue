<template>
    <section class="container border">
        <notifications position='center top' width="400" group="generate"/>
        <div class="cards text-center p-4 container mt-4">
            <div class="texts p-1">
                <h1>Создай кэшбэк-ссылку</h1>
                <p>Создайте кэшбэк-ссылку на товар и поделитесь ею с другом. Если друг совершит покупку — Вы получите за нее кэшбэк.</p>
            </div>
            <div class="inputs p-3">
                <input type="text" 
                placeholder="Укажите ссылку на товар"
                v-model="generateUrl"
                >
                <button 
                    class="btn btn-warning btn-sm py-2 px-4"
                    :disabled="generateButton"
                    @click="generateLink"
                >
                    Создать
                </button>
            </div>
            <div class="content d-flex flex-column w-25 my-3" 
                v-if="responseUrl"
                style="border: 1px solid #d5d53e;">
                <div class="form-group d-flex bg-white my-2 py-0 px-2">
                    <input type="text" 
                        :value="responseUrl"
                        id="new-link"   
                        readonly='true'
                        @click="selectGeneratedLink('new-link')"
                        class="form-control coppy bg-white border-0">
                        <button
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Copy"
                            class="btn btn-default bg-white border-0"
                            @click="selectGeneratedLink('new-link')">
                            <img src="@/assets/icons/copy.svg" 
                            alt="copy">
                        </button>
                </div>
            </div>
        </div>
        <div class="container py-3">
            <div class="w-100  py-3 mb-2 ">
                <!-- <h1 class="text-center">Siz yaratgan daromadli linklar</h1> -->
            </div>
            <div class="row">
                <div class="col-md-3 col-sm-6" v-for="item in generatedList" :key="item.id">
                    <div class="form-group d-flex bg-white shadow my-2 py-3 px-2">
                        <input type="text" 
                            :value="item.url"
                            :id="item.id" 
                            readonly='true'
                            @click="selectGeneratedLink(item.id)"
                            class="form-control coppy bg-white border-0">
                            <button
                              data-toggle="tooltip" 
                              data-placement="top" 
                              title="Copy"
                              class="btn btn-default bg-white border-0"
                              @click="selectGeneratedLink(item.id)">
                                <img src="@/assets/icons/copy.svg" 
                                alt="copy">
                            </button>
                    </div>
                    </div>
                </div>
        </div>
        
    </section>
</template>

<script>
import { axiosPost } from '@/store/axiosBase'
import notification from '@/mixins/notification'
export default {
    mixins: [notification],
    name: 'generate_link',
    data:() => {
        return {
            generateUrl: null,
            generateButton: false,
            responseUrl: null,
            generatedList: null
        }
    },
    created(){
        axiosPost('/api/v1/generated/link/list').then(response => {
            this.generatedList = response.data.data
        })
    },
    methods: {
        generateLink() {
            if(this.generateUrl === null) return this.showMessage('generate', 'warn', 'Warning', 'Linkni kiriting')
            this.generateButton = true
            axiosPost.post('/api/v1/generate/link', { url: this.generateUrl })
            .then(response => {
                this.responseUrl = response.data?.generate_url
                this.generateButton = false
                this.generateUrl = ''
                this.showMessage('generate', 'success', 'Success', 'Ваше доходный линк создан!')
            }).catch(error => {
                console.log(error)
                this.generateButton = false
                this.generateUrl = ''
                this.showMessage('generate', 'warn', 'Error', 'URL da xatolik bor')
            })
        },
        selectGeneratedLink(id){
            const currentInput = document.getElementById(`${id}`)
            currentInput.select();
            currentInput.setSelectionRange(0, 99999);
            document.execCommand("copy");
            this.showMessage('generate', 'success', 'Copied!', '')
        }
    },
}
</script>

<style scoped>


.cards {
    height: auto;
    /* border: 1px solid #eaeaea; */
    border-radius: 6px;
    display: flex;  
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1.5rem;
}
.cards .inputs {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70%;
    height: auto;
}
.cards .inputs input {
    outline: none;
    padding: .4rem .6rem;
    box-shadow: none;
    border: 1px solid #d5d53e;
    width: 60%;
}
.cards .inputs button {
    margin-left: .7rem;
}
@media (max-width: 1120px) {
    .cards .inputs {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}
</style>