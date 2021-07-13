<template>
    <div class="row d-flex align-items-center justify-content-center minheight" 
        style="margin-top:90px; height: auto"
        v-cloak>
        <notifications position='center top' width="400" group="transaction"/>
        <div class="col-md-4 border mt-5 py-4 px-4 shadow">
            <form>
                <fieldset>
                    <legend class="text-center"> {{ $t("transaction_create") }} </legend>
                    <div v-for="item in userWalletList" 
                        :key="item.id"
                        class="d-flex">
                        <label 
                            :for="item.card_type.name"
                            class="border w-100 my-2 shadow-1 px-3 py-3 d-flex align-items-center"
                            :class="[card == item.id ? 'shadow bg-light' : '' ]">
                            <input type="radio" 
                                :id="item.card_type.name"  
                                v-model="card"
                                :value="item.id"
                                @click="selectTransactionAccount(item.id)">
                            <img :src="getImgUrl(item.card_type.image)" 
                                 alt=""
                                 class="mx-2" 
                                 style="max-width:50px; max-height: 30px">
                            <p>{{ item.card_number }}</p>
                        </label>
                    </div>
                    <div class="mb-3" v-if="card">
                        <label for="disabledTextInput" class="form-label">
                            {{ $t("selected_wallet_address") }}
                        </label>
                            <input
                            type="text"
                            id="disabledTextInput"
                            class="form-control"
                            placeholder="8600 **** **** 1212"
                            v-model="current.card_number"
                            readonly='true'>
                    </div>
                    <div class="mb-3 mt-2" v-if="card">
                        <label for="disabledTextInput" class="form-label">
                            {{ $t("amount_sum") }} (<strong> {{ $t("available") }}   {{userData.all}} $</strong>)
                        </label>
                            <input
                                type="number"
                                step="0.01"
                                id="disabledTextInput"
                                class="form-control"
                                placeholder="Min withdraw 0.10 $"
                                v-model="amount"
                                :max="userData.all"
                            >
                    </div>
                </fieldset>
            </form>
            <div class="d-flex justify-content-between mt-4" v-if="card">
                <router-link to="/home" 
                             class="btn btn-secondary btn-sm px-4 py-1"
                             style="color:#fff !important;">
                    Close
                </router-link>
                <button v-if="checkBalance"
                        class="btn btn-success btn-sm px-4 py-1" 
                        @click="create">
                    Create
                </button>   
            </div>
        </div>
    </div>
</template>

<script>
import { axiosGet, axiosPost } from '@/store/axiosBase'
import notification from '@/mixins/notification'
export default {
  mixins: [notification],
  name: 'transaction_create_form',
  data:() => {
      return {
          userWalletList: [
          ],
          selectedWallet: null,
          current: null,
          currentMask: null,
          card: null,
          amount: null,
          userData: null,
          minWithdraw: 0.10
      }
  },
  mounted() {
    axiosGet('/api/v1/useraccount/list/').then(resp => {
        this.userWalletList = resp.data.data
    });
    axiosGet('/api/v1/user/profile/information').then(response => {
        this.userData = response.data.data
    })    
  },
  
  methods:{
    create(){
        if(this.amount < 0.10) return this.showMessage('transaction', 'warn', 'Warning', 'Минимальная транзакция 0.10 $')
        this.minWithdraw = 1000
        let object = {
            card_id: this.card,
            amount: this.amount,
            client_card: this.current.card_number,
            pay_method_type: this.current.card_type.id
        }
        axiosPost.post('api/v1/transaction/create/', object).then(response => {
            this.showMessage('transaction', 'success', 'Success', 'Ваше транзакция успешно создан')
            if(response.status == 201){
                setTimeout(() =>{
                    this.minWithdraw = 0.10
                    this.$router.push({ path: '/transaction/history' })
                }, 1500)
            }
        })
    },
    
    getImgUrl(pic) {
        //   return 'http://127.0.0.1:3000'+pic
        return "https://danak.uz"+pic
    },
    selectTransactionAccount(id){
        this.current  = this.userWalletList.find(item => item.id == id)
        
    }
  },
  computed: {
      checkBalance() {
          if(this.userData?.all > this.minWithdraw && this.userData.all >= this.amount) {
             return true
          }
          else return false
      }
  },
}
</script>

<style scoped>
select{
    outline: none !important;
}
.form-select:focus {
    border-color: rgba(231, 238, 229, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(234, 238, 233, 0.6);
    outline: 0 none;
}
</style>