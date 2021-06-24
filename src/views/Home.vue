<template>
  <div style="background:#eee;">
        <section class="section_one">
        <div class="container">
            <h1>{{ $t("pitsa_sayohat") }}</h1>
            <p class="cash">{{ $t("cashback_dokonlar")}}</p>
            <div class="content">
                <a href="">
                    <div class="markets">
                        <img src="@/assets/images/ali.png" alt="">
                        <p>0.14 % - {{ $t("dan_qaytib_keladi") }} </p>
                        <h3>6.46 % {{ $t("gacha")}}</h3>
                        <h4>{{ $t("card_title") }}</h4>
                    </div>
                </a>
                <a href="">
                    <div class="markets">
                        <img src="@/assets/images/unishop.png" alt="">
                        <p>0.14 % - {{ $t("dan_qaytib_keladi") }} </p>
                        <h3>6.46 % {{ $t("gacha")}}</h3>
                        <h4> {{ $t("card_title_2") }} </h4>
                    </div>          
                </a>
            </div>
        </div>
        <a href="#section_two" class="arrow"><img src="@/assets/icons/arrow-down.svg" alt=""></i></a>
    </section>
    <!-- birinchi section tugadi -->

    <!-- ikkinchi section boshlandi -->
    <section class="section_two" id="section_two">
        <h1> {{ $t("section_2_title") }} </h1>
        <p> {{ $t("section_2_title_2") }} </p>
        <img src="@/assets/images/paypal.png" alt="">
    </section>
    <!-- ikkinchi section tugadi -->

    <!-- uchinchi section boshlandi -->
    <section class="section_three">
        <div class="container">
            <h1> {{ $t("section_3_title") }}  <i class="fas fa-heart"></i>   {{ $t("section_3_title_2qismi") }} </h1>
            <p class="cash"> {{ $t("section_3_title_2") }} </p>
            <img src="@/assets/images/jamoa.webp" alt="">
            <div class="social_btns">
                <a href=""><button><i class="fab fa-facebook-f"></i><p>Facebook</p>&nbsp;<p>1711</p></button></a>
                <a href=""><button><i class="fab fa-vk"></i><p>VKontakte</p>&nbsp;<p>803</p></button></a>
                <a href=""><button><i class="fab fa-twitter"></i><p>Twitter</p>&nbsp;<p>1072</p></button></a>
                <a href=""><button><i class="fab fa-odnoklassniki"></i><p>Одноклас..</p>&nbsp;<p>702</p></button></a>
            </div>
        </div>
    </section>
    <!-- uchinchi section tugadi -->

    <!-- to'rtinchi section boshlandi -->
    <section class="section_four">
        <div class="container">
        <div class="items">
            <h2> {{ $t("section_4_item_title_1") }} </h2><br>
            <a href="#"> {{ $t("section_4_item1_link1") }} </a><br>
            <a href="#"> {{ $t("section_4_item1_link2") }} </a><br>
            <a href="#"> {{ $t("section_4_item1_link3") }} </a><br>
            <a href="#"> {{ $t("section_4_item1_link4") }} </a><br>
            <a href="#"> {{ $t("section_4_item1_link5") }} </a><br>
        </div>
        <div class="items">
            <h2> {{ $t("section_4_item_title_2") }}</h2><br>
            <a href="#"> {{ $t("section_4_item2_link1") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link2") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link3") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link4") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link5") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link6") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link7") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link8") }} </a><br>
        </div>
        <div class="items">
            <h2> {{ $t("section_4_item_title_3") }} </h2><br>
            <a href="#"> {{ $t("section_4_item3_link1") }} </a><br>
            <a href="#"> {{ $t("section_4_item3_link2") }} </a><br>
            <a href="#"> {{ $t("section_4_item3_link3") }} </a><br>
            <a href="#"> {{ $t("section_4_item3_link4") }} </a><br>
        </div>
        <div class="items">
            <h2> {{ $t("section_4_item_title_4") }}</h2><br>
            <p> {{ $t("section_4_item4_link") }} </p>
        </div>
    </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  
}
</script>
