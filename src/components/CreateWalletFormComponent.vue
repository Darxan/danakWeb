<template>
  <div class="modal" v-if="state">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-body">
            <form>
                <fieldset>
                    <legend>Create withdraw account</legend>
                    <div class="mb-3">
                        <label for="disabledSelect" class="form-label">Wallet type</label>
                        <select id="disabledSelect" class="form-select" v-model='selectedWallet'
                            @change="changePaymentMethod(selectedWallet)">
                                <option 
                                        v-for="item in withdrawMethodsList" 
                                        :key="item.id"
                                        :value="item.id">
                                {{ item.name }}
                                </option>
                        </select>
                    </div>
                    <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Wallet address</label>
                    <input
                      type="text"
                      id="disabledTextInput"
                      class="form-control"
                      placeholder="8600 **** **** 1212"
                      v-mask='currentMask'
                      v-model="walletNumber">
                    </div>
                    
                    <div class="mb-3">
                    
                    </div>
                </fieldset>
            </form>
            <div class="d-flex justify-content-between mt-4">
                <button class="btn btn-secondary btn-sm px-4 py-1 border" 
                        @click="closeModal">
                        Close
                </button>
                <button class="btn btn-success btn-sm px-4 py-1" @click="create">
                    Update
                </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { axiosGet } from '@/store/axiosBase'
export default {
   name: 'withdraw_create_modal_form',
   props: {
    state: Boolean,
  },
  data:()=>{
      return {
          withdrawMethodsList: [
          ],
          selectedWallet: null,
          walletNumber: null,
          currentMask: null
      }
  },
  mounted() {
    axiosGet('api/v1/payment/method/list').then(response => {
        this.withdrawMethodsList = response.data.data
    })
  },
  
  methods:{
    closeModal(){
        this.$emit('close', false)
    },
    create(){
        let selected = this.withdrawMethodsList.find(item => item.id == this.selectedWallet)
        let object = {
            card_type: selected.id,
            card_number: this.walletNumber
        }
        this.$emit('createWallet', object)
        this.walletNumber = null
    },
    changePaymentMethod(id){
        let selected = this.withdrawMethodsList.find(item => item.id == id)
        this.walletNumber = selected.code
        this.currentMask = '' + selected.mask
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
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  background: #fff;
  width: 30%;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  margin: 0 auto;
  padding: 20px 30px;
  height: auto;
}
.modal-footer {
  margin-top: 15px;
}
.modal-enter, .modal-leave {
  opacity: 0;
}
.modal-enter .modal-container, .modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>