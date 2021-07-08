<template>
  <div class="modal" v-if="state">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-body">
            <h5 class="w-100 text-center"> {{ $t("delete_account") }} </h5>
            <div class="d-flex justify-content-center  pt-3">
              <div class="w-50 d-flex justify-content-between">
                <button class="btn btn-success btn-sm pr-1 px-4" 
                        @click="closeModal">
                        {{ $t("close") }}
                </button>
                <button class="btn btn-danger btn-sm pl-1 px-4"
                        @click="agree">
                    {{ $t("delete") }}
                </button>
              </div>
                
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
    cardId: [String, Number]
  },
  data:() =>{
      return{}  
  },
  methods:{
    closeModal(){
        this.$emit('close', false)
    },
    agree() {
       this.$emit('confirm', this.cardId)
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
  width: 25%;
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