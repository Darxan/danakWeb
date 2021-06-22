<template>
<div id="mySidenav" class="sidenav">
    <router-link tag="a" 
                 class="col" 
                 class-active="active"
                 exact
                 v-for="item in sidebarMenus"
                 :key="item.id"
                 :to="item.path"
                 
                 >
                 <div @click="close">
                     <img :src="getImgUrl(item.imgUrl)" alt="">
                    <span >{{ item.title }}</span>
                 </div>
                 
    </router-link>
</div>
</template>

<script>
export default {
    data:() =>{
        return {
            sidebarMenus:[
                {id:1, title: 'Bosh sahifa', imgUrl: 'icons/home.svg', path: '/'},
                {id:2, title: 'About', imgUrl: 'icons/home.svg', path: '/about'},
                {id:3, title: 'Mening naqd pulim', imgUrl: 'icons/home.svg', path:'/'},
                {id:4, title: 'To\'lov tarixi', imgUrl: 'icons/home.svg', path:'/'},
                {id:5, title: 'Mening hamyonim', imgUrl: 'icons/home.svg', path:'/'},
                {id:6, title: 'Sozlamalar', imgUrl: 'icons/home.svg', path:'/'},
            ]
        }
    },
    methods:{
        getImgUrl(pic) {
          return require('../assets/'+pic)
        },
        close(){
          this.$emit('close')
        }
    },
}
</script>

<style scoped>
/* SIDEBAR BEGIN */
#mySidenav li:hover,
#mySidenav li:active{
    background-color: indianred;
    cursor: pointer;
}
.sidenav {
    height: 100%;
    width: 310px;
    position: fixed;
    z-index: 3;
    top: 4%;
    left: 0;
    background: #fff;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    box-shadow: 2px 5px 3px 0 rgb(0 0 0 / 6%);
    display: flex; 
    flex-direction: column;
  }
  
  .sidenav a {
    text-decoration: none;
    background: #fff;
    color: black;
    width: 100%;
    padding: .3rem;
    padding-left: 2rem;
    letter-spacing: 0.3px;
    font: 400 16px/54px 'Rubble', 'Proxima Nova', sans-serif;
  }
  .sidenav a span {
      padding-left: 1rem;
  }
  .sidenav a:hover {    
    border-right: 4px solid tomato;
    background: #fbf5cc;
  }
  .sidebar__links{
    border-right: 4px solid tomato; 
    background-color: #fbfbfb; 
    font-weight: bold;
  }  
/* SIDEBAR END  */

</style>