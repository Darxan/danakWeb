<template>
    <div v-if="isMounted">
        <section class="section_table pt-5 pb-5 flex-column">
            <div class="container ">
                <h1 class="w-100 text-center align-items-center">Your withdraw wallets list</h1>
                <div class="section_table_body d-flex flex-column">
                    <table id="customers">
                        <tr>
                            <th> {{ $t("card_number") }} </th>
                            <th> {{ $t("withdraw_method") }} </th>
                            <th> {{ $t("images") }} </th>
                            <th>Actions</th>
                        </tr>
                        <tr v-for="wallet in walletList" :key="wallet.id">
                            <td>{{ maskCardNumber(wallet.card_number) }}</td>
                            <td>{{ wallet.card_type.name }}</td>
                            <td> <img :src="getImgUrl(wallet.card_type.image)" alt="" width="40" > </td>
                            <td class="action_button_container">
                                <button @click="changeCardNumber(wallet.id)">
                                    <img src="@/assets/icons/edit.svg" alt="">
                                </button>
                                <button @click="removeCardAction(wallet.id)">
                                    <img src="@/assets/icons/trash-2.svg" alt="">
                                </button>
                            </td>
                        </tr>
                    </table>
                    <div class="container d-flex pt-4 justify-content-end align-items-end w-100 px-4">
                        <button class="btn btn-success px-4 btn-sm py-1"
                                @click="createModal = true">
                            {{ $t("create") }}
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <Additional />
        <Modal :state='showModal' 
                @close='closeModal'
                @updateCard="updateCard" 
                :cardObject='currentCard'/>
        <Agree :state='deleteModal'
               :cardId="currentCardId" 
               @close='deleteModal=false' 
               @confirm='removeCard'/>
        <CreateModal 
            :state="createModal"
            @close='createModal = false' 
            @createWallet="createNewWallet" 
        />
        <Information />
    
    </div>
</template>

<script>
import { axiosGet, axiosPost } from '@/store/axiosBase.js'
import Additional from '@/components/AdditionalActions'
import Modal from '@/components/ModalComponent'
import Agree from '@/components/AgreeComponent'
import Information from '@/components/InformationComponent'
import CreateModal from '@/components/CreateWalletFormComponent'
export default {
    data:() =>{
        return {
            walletData: null,
            isMounted: false,
            showModal: false,
            currentCard: {
                cardNumber: null,
                cardId: null
            },
            deleteModal: false, 
            currentCardId : null,
            createModal: false
        }
    },
    async mounted () {
        axiosGet('/api/v1/useraccount/list/').then(resp => {
            this.walletData = resp.data.data
            this.isMounted = true
        });
    },
    computed: {
        walletList() {
            return this.walletData 
        }
    },
    methods:{
        getUserAccountCardList(){
            axiosGet('/api/v1/useraccount/list/').then(resp => {
                this.walletData = resp.data.data
            });
        },
        maskCardNumber(numbers){
            let result =""
            for (let index = 0; index < numbers.length; index++) {
                if(index > 4 && index < 9 && numbers[index] != " ") result += '*'
                else result += numbers[index]
            }
            return result
        },
        getImgUrl(pic) {
            return 'http://185.206.212.179'+pic
            return 'http://127.0.0.1:3000'+pic
        },
        closeModal(state){
            this.showModal = false
            this.deleteModal = false
        },
        changeCardNumber(id){
            this.showModal = true
            this.currentCard = this.walletData.find(item => item.id == id)
        },
        removeCardAction(id){
            this.currentCardId = id
            this.deleteModal = true
        },
        removeCard(id){
            this.deleteModal = false
            axiosPost.post(`/api/v1/withdraw/account/delete/${id}`).then(response =>{
                this.getUserAccountCardList()
            })
        },
        updateCard(card) {
            axiosPost.post(`/api/v1/withdraw/account/update/`, {id: card.id, number: card.card_number})
            .then(response =>{
                this.getUserAccountCardList()
                this.showModal = false
            })
        },
        createNewWallet(newObj){
            axiosPost.post(`/api/v1/withdraw/account/create/`, {...newObj})
            .then(response =>{
                this.getUserAccountCardList()
                this.createModal = false
            })
        }
    },
    components: {
        Additional,
        Modal,
        Agree,
        Information,
        CreateModal
    },
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.section_table {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9fafb;
    height: auto;
    padding-top: 2rem;
    padding-bottom: 3rem;
    margin-top: 9vh;
}

.section_table .container .section_table_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.section_table .container .section_table_header .inputs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60rem;
}
.section_table .container .section_table_header .inputs .items {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    height: 3rem;
}
.section_table .container .section_table_header .inputs .items p {
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
    color: #a6aeb7;
    margin-bottom: 5px;
}
.section_table .container {
    width: 78%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
}
.section_table_body {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-top: 2rem;
    border-radius: 8px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    height: auto;
}    
#customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 90%;
    height: 90%;
  }
  
  #customers td, #customers th {
    padding: 15px;
  }
  #customers tr {
      border-bottom: 1px solid #f2f2f2;
      padding-left: 1rem;
      padding-right: 1rem;
  }
  
  #customers th {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: left;    
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
    color: #a6aeb7;
    margin-bottom: 5px;
  }
  #customers tr td {
    padding: 16px 12px;
    font: 14px/1;
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
    color: #282828;
    font-size: 14px;

  }
  #customers tr td a {
    color: #3498db;
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
    text-decoration: none;
  }
.action_button_container {
    display: flex;
    height: 100%;
    width: 60%;
}
.action_button_container button {
    background: none;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 6px;
}
.action_button_container button:hover {
    border: 1px solid black;
}
.action_button_container button img {
    width: 22px;
}

.section_1 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.section_1 .container {
    width: 82%;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    height: 40vh;
    padding: 2rem 2rem;
}
.section_1 .container h1 {
    font-size: 36px;    
    font-weight: 300;
    line-height: 1.22;
    text-transform: none;
    margin-bottom: 12px;
    font-family: sans-serif;
}
.section_1 .container p {
    font-size: 14px;
    line-height: 1.43;
    font-family: sans-serif;
}
.section_1 .container .section_cards{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 32px 0 rgb(3 31 92 / 10%);
    border-radius: 8px;
}
.section_1 .container .section_cards .items {
    width: 250px;
    height: 7rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    padding: 16px 36px 5px 32px;
    background: #fff;
    border-left: 5px solid #009551;
    border-radius: 8px;
    position: relative;
    z-index: 2;
}

.section_1 .container .section_cards .items:nth-child(2){
    border-left: none;
    background: #f6f8fa;
    z-index: 1;
    width: 235px;
    padding: 16px 36px 5px 32px;
    margin-left: -15px;
}
.section_1 .container .section_cards .items p {
    font-size: 12px;
    line-height: 15px;
    color: #a6aeb7;
    margin-bottom: 8px;
    text-align: left;
}
.section_1 .container .section_cards .items:nth-child(2) p a {
    text-decoration: none;  
    color: #3498db;
    font-size: 14px;
}
.section_1 .container .section_cards .items:nth-child(2) p a:hover {
    text-decoration: underline;
}
.section_1 .container .section_cards .items h1 {
    margin-right: 12px;
    font-size: 24px;
    line-height: 1.25;
    font-weight: 600;
    vertical-align: middle;
    font-family: sans-serif;
}
.section_1 .container .section_cards .items:nth-child(2) h1{
    font-weight: 600;
    color: #a6aeb7;
}
@media (max-width: 1000px){
    .section_table_body {
        width: auto;
    }
}
</style>