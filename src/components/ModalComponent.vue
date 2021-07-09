<template>

  <div class="modal" v-if="state" @click="closeModal">
    <div class="modal-wrapper" @click.stop>
      <div class="modal-container">
        <div class="modal-body">
            <h3> {{ $t("change_withdraw_account") }} </h3>
            <div class="form-group">
                <label for="payment" class="py-2"> {{ $t("current_number") }} </label>
                <input
                  type="text"
                  class="form-control"
                  id="payment"
                  v-model="currentCart.card_number">
            </div>
            <div class="d-flex justify-content-between mt-4">
                <button class="btn btn-success btn-sm" 
                        @click="closeModal">
                        {{ $t("close") }}
                </button>
                <button class="btn btn-success btn-sm" @click="update">
                    {{ $t("update") }}
                </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: 'modal',
   props: {
    state: Boolean,
    cardObject: Object
  },
  computed:{
    currentCart(){
      return this.cardObject
    }
  },
  methods:{
    closeModal(){
        this.$emit('close', this.state)
    },
    update(){
        this.$emit('updateCard', this.cardObject)
    }
  },
}
</script>

<style scoped>

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