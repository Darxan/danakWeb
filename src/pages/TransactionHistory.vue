<template>
    <div v-if="isMounted">
        <section class="section_table pt-5 pb-5 flex-column">
            <div class="container" >
                <h1 class="w-100 text-center align-items-center"> {{ $t("transaction_history") }} </h1>
                <div class="section_table_body" >
                    <table id="customers" v-if="transactionData.length > 0">
                        <tr>
                            <th> {{ $t("card_number") }} </th>
                            <th>{{ $t("date") }}</th>
                            <th> {{$t("withdraw_method")}} </th>
                            <th> {{ $t("summa") }} </th>
                            <th>{{ $t("Status")}}</th>
                        </tr>
                        <tr v-for="transaction in transactionList" :key="transaction.id">
                            <td>{{ maskCardNumber(transaction.client_card) }}</td>
                            <td>{{ transaction.payment_time }}</td>
                            <td>{{ transaction.pay_method_type }}</td>
                            <td>$ {{ transaction.amount }}</td>
                            <td v-if="transaction.payment_status == 0">IN PROGRESS</td>
                            <td v-if="transaction.payment_status == 1">Completed</td>
                        </tr>
                    </table>
                     <h1 v-else class="text-muted"> Xozircha yo'q </h1>
                </div>
                <ul class="pagination mt-3" v-if="paginationCount > 1">
                    <li v-if="transactionData.previous"> 
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
                    <li v-if="transactionData.next">
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
    name: 'transaction-history',
    data:() =>{
        return {
            transactionData: null,
            isMounted: false,
            currentPage: 1,
            totalPages: null
        }
    },
    async mounted () {
        let resoponse = await axiosGet(`/api/v1/transaction/history?page=${this.currentPage}`);
        if(resoponse.status == 200){
            this.isMounted = true
            this.transactionData = resoponse.data
        }
    },
    computed:{
        transactionList(){
            return this.transactionData.results
        },
        paginationCount() {
            if(this.transactionData.count > 10){
                this.totalPages = Math.ceil(this.transactionData.count / 10)
                return Math.ceil(this.transactionData.count / 10)
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
        getImgUrl(pic) {
            return require('../assets/'+pic)
        },
        getTransactionData(page){
            let url = "/api/v1/transaction/history?page=" + this.currentPage
            if(page == 'next'){
                if(this.totalPages > this.currentPage) this.currentPage++
                url = "/api/v1/transaction/history?page=" + this.currentPage
            }else if(page == 'previous') {
                if(this.currentPage > 1) this.currentPage--
                url = "/api/v1/transaction/history?page=" + this.currentPage
            } else {
                this.currentPage = page
                url = "/api/v1/transaction/history?page=" + page
            }
            axiosGet(url).then(response => {
                this.transactionData = response.data
            })
        }
    },
    components: {
        Information,
        Additional,
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







