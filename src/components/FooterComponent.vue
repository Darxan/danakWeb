<template>
    <footer class="section_five">
        <div class="container">
            <div class="images">
                <img src="@/assets/images/paypal.svg" alt="">
                <img src="@/assets/images/mc.svg" alt="">
                <img src="@/assets/images/visa.svg" alt="">
                <img src="@/assets/images/ya_money.svg" alt="">
                <img src="@/assets/images/qiwi.svg" alt="">
                <img src="@/assets/images/webmoney.svg" alt="">
            </div>
            <p class="cash">{{ $t("bizga_ergashing")}}</p>
            <div class="social_btns">
                <a href="#"><i class="fab fa-vk"></i></a>
                <a href="#"><i class="fab fa-odnoklassniki"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
            <div class="texts">
                <!-- Mualliflik huquqi © - Danak barcha huquqlar himoyalangan 2021 -->
                <p> {{ $t("footer_title") }} </p>
                <span><a href="#">{{ $t("foydalanuvchi_shartnomasi") }} </a><span> va </span><a href="#"> {{ $t("maxfiylik_siyosati")}}</a></span>
            </div>
            <div class="download_img">
                <a href="#"><img src="@/assets/images/playmarket.svg" alt=""></a>
                <a href="#"><img src="@/assets/images/appstore.svg" alt=""></a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  
}
</script>
<style scoped>

</style>
