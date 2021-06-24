<template>
<section class="profil_section" style="padding-top: 9rem">
      <div class="container">
          <div class="items">
              <div class="column">
                  <p class="text">Profil</p>
                  <form action="">
                  <div class="img_section">
                      <p><img src="@/assets/icons/user.svg" alt=""></p>
                      <div class="buttons">
                          <button>Rasmni almashtirish</button>
                          <button>O'chirish</button>
                      </div>
                  </div>
                  <div class="inputs">
                      <div class="item">
                          <p>Ism</p>
                          <input type="text" placeholder="Ism">
                      </div>
                      <div class="item">
                          <p>Familiya</p>
                          <input type="text" placeholder="Familiya">
                      </div>
                      <div class="item">
                          <p>Tug'ilgan kuni</p>
                          <input type="text" placeholder="Tug'ilgan kun">
                      </div>
                      <div class="item_2 item">
                          <p>Jinsi</p>
                          <div class="input_2">
                          <p><input class="checkbox" type="radio" name="btn" checked> Erkak</p>
                          <p><input class="checkbox" type="radio" name="btn">Ayol</p>
                      </div>
                      </div>
                  </div>
              </form>
              </div>
          </div> 
          <div class="items">
              <div class="section">
                  <div class="select select_1">
                  <h1>
                      Mintaqa va til
                  </h1>
                  <p>
                      Mintaqangiz uchun faqat mavjud takliflarni ko'rish uchun mamlakatni ko'rsating
                  </p>
                      <div class="container">
                              <p>Mamlakat</p>                         
                              <select name="cars" id="cars">
                              <option value="volvo">Volvo</option>
                      </select>         
                      </div>
                  </div>
              </div>
              <div class="section select_2">
                  <div class="select select_1">
                  <h1>
                      Mintaqa va til
                  </h1>
                  <p>
                      Mintaqangiz uchun faqat mavjud takliflarni ko'rish uchun mamlakatni ko'rsating
                  </p>
                      <div class="container">
                              <p>Mamlakat</p>                         
                              <select name="cars" id="cars">
                              <option value="volvo">Volvo</option>
                      </select>         
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
<script>
export default({
    name: 'profile',
    data(){
        return {
            msg: "Profile"
        }
    }
})
</script>

<style scoped>
.profil_section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.profil_section .container {
    width: 78%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.profil_section .container .items {
    width: 48%;
    height: 100%;
}
.profil_section .container .items:nth-child(1){
    border-radius: 6px;
    border: solid 1px #eaeaea;
}
.profil_section .container .items:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}
.profil_section .container .items:nth-child(2) .section:nth-child(1) {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: solid 1px #eaeaea;
}
.profil_section .container .items:nth-child(2) .section:nth-child(2){
    width: 100%;
    height: 53.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: solid 1px #eaeaea;
}
.profil_section .container .items:nth-child(1){
    display: flex;
    justify-content: center;
    align-items: center;
}
.profil_section .container .items:nth-child(1) .column {
    width: 85%;
    height: 90%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
}   
.profil_section .container .items:nth-child(1) .column .text {
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.27px;
    color: #000000;
    margin: 0;
    height: 5%;
    width: 100% 
}
.profil_section .container .items:nth-child(1) .column form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 40rem;
    padding-bottom: 1em;
    width: 100%;
}

.profil_section .container .items:nth-child(1) .column form .img_section {
    width: 100%;
    height: 15rem;
    margin-top: -2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}

.profil_section .container .items:nth-child(1) .column form .img_section p i {
    font-size: 8rem;
    color: grey;
}
.profil_section .container .items:nth-child(1) .column form .img_section .buttons {
    width: 15rem;
    display: flex;
    justify-content: space-between;
    align-items: center ;
    height: 2.2rem;
}
.profil_section .container .items:nth-child(1) .column form .img_section .buttons button {
    border: 1px solid #b0b0b0;
    padding: 0.4rem .8rem;
    background: none;
    color: #585858;
    border-radius: 4px;
    cursor: pointer;
}
.profil_section .container .items:nth-child(1) .column form .inputs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80%;
    width: 100%;
    flex-direction: column;
}
.profil_section .container .items:nth-child(1) .column form .inputs .item {
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 90%;
}
.profil_section .container .items:nth-child(1) .column form .inputs .item input {
    width: 100%;
    height: 42px;
    border-radius: 3px;
    border: solid 1px #e6e6e6;
    padding: 10px 35px 10px 14px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    color: #000000;
    outline: none;
}
.profil_section .container .items:nth-child(1) .column form .inputs .item p {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.27px;
    color: #000000;
    margin: 0;
    font-family: sans-serif;
}
.profil_section .container .items:nth-child(1) .column form .inputs .item_2 .input_2{
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.profil_section .container .items:nth-child(1) .column form .inputs .item_2 .input_2 p{
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.profil_section .container .items:nth-child(2) .select_1 {
    width: 80%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
}
.profil_section .container .items:nth-child(2) .select_1 .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column ;
    height: 30%;
}
.profil_section .container .items:nth-child(2) .select_1 h1 {
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.27px;
    color: #000000;
    margin: 0;
    font-family: sans-serif;
}
.profil_section .container .items:nth-child(2) .select_1 p {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.27px;
    color: #000000;
    margin: 0;
    font-family: sans-serif;
}
.profil_section .container .items:nth-child(2) .select_1 .container select {
    width: 100%;
    height: 50%;
}
@media (max-width: 750px){
    .profil_section {
        height: 200vh;
        background: #fff;
        padding: 0;
        margin: 0;

    }
    .profil_section .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 100%;
        padding: 0;
        margin: 0;
    }
    
    .profil_section .container .items{
        width: 80%;
        margin: 1rem;
        height: 100vh;
    }.profil_section .container .items:nth-child(2) .section:nth-child(1), .profil_section .container .items:nth-child(2) .section:nth-child(2){
        width: 100%;
        margin: 1rem;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        border: solid 1px #eaeaea;
    }
    .section_four {
        margin: 0;
        background: #000;
        padding: 0;
    }
}

</style>
