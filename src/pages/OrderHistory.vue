<template>
    <div v-if="isMounted">
        
        <section class="section_table pt-5 pb-5 flex-column mt-5">
            <div class="container ">
                <h1 class="w-100 text-center align-items-center"> {{ $t("order_history") }}  </h1>
                    <div class="table_container">
                        <div class="section_table_body">
                            <table id="customers">
                                <tr>
                                    <th> {{ $t("order_id") }} </th>
                                    <th> {{ $t("tolov_qilingan_summa") }} </th>
                                    <th> {{ $t("cashback") }} </th>
                                    <th> {{ $t("percentage") }} </th>
                                    <th> {{ $t("date") }} </th>
                                    <th> {{ $t("status") }} </th>
                                </tr>
                                <tr v-for="order in orders" :key="order.id">
                                    <td>{{ order.ali_express_order }}</td>
                                    <td>{{ order.payment_amount }}</td>
                                    <td>{{ order.comission_user }} $</td>
                                    <td>{{ order.percentage_user }} %</td>
                                    <td>{{ order.order_time }}</td>
                                    <td v-if="order.cash_status == 'Buyer Confirmed Receipt'">
                                        <span class="badge bg-success text-light py-2 px-2">
                                            {{ $t("tasdiqlangan") }}
                                        </span> 
                                    </td>   
                                    <td v-else-if="order.cash_status == 'Payment Completed'">
                                        <span class="badge bg-warning text-dark py-2 px-2">
                                            {{ $t("kutilmoqda")}}
                                        </span> 
                                    </td>
                                    <td v-else>
                                        <span class="badge bg-danger text-light py-2 px-2">
                                            {{ $t("bekor_qilingan") }}
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <table class="table table-dark table-hover">
                        ...
                    </table>
                <ul class="pagination mt-3" v-if="paginationCount > 1">
                    <li v-if="orderList.previous"> 
                        <button class="prev border-0 bg-light"
                                @click="getTransactionData('previous')">
                                <img src="@/assets/icons/arrow-left-circle.svg" alt="">
                        </button>
                    </li>
                    <li class="pageNumber"
                        v-for="item in paginationCount" :key="item"
                        :class="[currentPage == item ? 'active' : '']">
                        <span class="border-0" 
                                @click="getTransactionData(item)">
                                {{ item }}
                        </span>
                    </li>
                    <li v-if="orderList.next">
                        <button  @click="getTransactionData('next')" 
                        class="next border-0 bg-light">
                        <img src="@/assets/icons/arrow-right-circle.svg" alt="">
                        </button>
                    </li>
                </ul>
            </div>
        </section>
        <Additional />
        <Information />
    </div>
</template>

<script>
import Additional from '@/components/AdditionalActions'
import Information from '@/components/InformationComponent'
import { axiosGet } from '@/store/axiosBase.js'
export default {
    data:() =>{
        return {
            orderList: null,
            isMounted: false,
            currentPage: 1
        }
    },

    async mounted () {
        let resoponse = await axiosGet(`/api/v1/history`);
        if(resoponse.status == 200){
            this.isMounted = true
            this.orderList = resoponse.data
        }
    },
    computed:{
        orders(){
            return this.orderList.results
        },
        paginationCount() {
            if(this.orderList.count > 10){
                return Math.ceil(this.orderList.count / 10)
            }
                
        }
    },
    methods:{
        maskCardNumber(numbers){
            let result =""
            for (let index = 0; index < numbers.length; index++) {
                if(index > 4 && index < 14 && numbers[index] != " ") result += '*'
                else result += numbers[index]
            }
            return result
        },
        getTransactionData(page){
            let url = "/api/v1/history/?page=" + this.currentPage
            if(page == 'next'){
                this.currentPage++
                url = this.orderList.next
            }else if(page == 'previous') {
                this.currentPage--
                url = this.orderList.previous
            } else {
                this.currentPage = page
                url = "/api/v1/history/?page=" + page
            }
            axiosGet(url).then(response => {
                this.orderList = response.data
            })
        }
    },
    components: {
        Information,
        Additional
    },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

ul {
  background: #fff;
  display: flex;
  padding: 6px 18px;
  border-radius: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  align-items: center;
  margin-top: 1rem;
}

ul li {
  list-style: none;
  margin: 0 5px;
}

ul li.pageNumber {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

ul li span {
  display: block;
  text-decoration: none;
  color: #383838;
  font-weight: 600;
  border-radius: 50%;
}

ul li.pageNumber:hover span,
ul li.pageNumber.active span {
  background-color: #383838;
  color: #fff !important;
}

ul li:first-child {
  margin-right: 5px;
  font-weight: 700;
  font-size: 20px;
}

ul li:last-child {
  margin-left: 5px;
  font-weight: 700;
  font-size: 20px;
}
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
.table_container {
    width: 100%;
    height: auto;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    overflow-x: auto;
}
.section_table_body {
    width: 150vh;
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
    width: 95%;
    height: auto;
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

.section_cards_2{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
}
.section_cards_2 .container {
    width: 78%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 90%;
}
.section_cards_2 .container h1 {
    font-size: 28px;
    line-height: 1.14;
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
    color: #000;
    margin: 0;
}
.section_cards_2 .container .card_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: 90%;
}
.section_cards_2 .container .card_container .card {    
    border-radius: 12px;
    box-shadow: 0 4px 32px 0 rgb(3 31 92 / 6%);
    border: solid 1px #eff1f6;
    background: #fff;
    width: 350px;
    padding: 27px 32px 38px;
    position: relative;
    margin: 1.5rem;
    
}
.section_cards_2 .container .card_container .card .img_block {
    height: 138px;
    text-align: center;
}
.section_cards_2 .container .card_container .card .img_block img {
    width: auto;
    height: 100%;   
}
.section_cards_2 .container .card_container .card .description {
    margin: 25px 0 18px;
}
.section_cards_2 .container .card_container .card .description  .title{
    font-size: 18px;
    line-height: 1.22;
    font-weight: bold;
    color: #282828;
    text-align: center;
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
    margin: 0;
}  
.section_cards_2 .container .card_container .card .description .descr_text {
    margin: 16px 0 0;
    text-align: center;
    font-size: 14px;
    line-height: 1.43;
    color: #282828;
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
}
.section_cards_2 .container .card_container .card a {
    text-decoration: underline;
    color: #3498db;
    cursor: pointer;
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
}
.section_1 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.section_1 .container {
    width: 82%;
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
</style>







