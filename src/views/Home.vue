<template>
  <div class="home">
    <HeaderRestaurant @clicked2="setLoginBlock" />
    <div class="container margintop">
      <main v-bind:menu="mainMenu">
       
        <NavList :navArr="navMenuArr" @clicked="scrollToSect" />
     
        <div class="wrapper__full-menu">
          <UserLogin @clicked="showSignupModal" :loginBool="userBool"/>
          <SectionBlock
            v-for="itm in mainMenu"
            :key="itm.section"
            :sectId="'sect_'+itm.section"
            :sectMenu="itm.menu"
            :sectClass="'sect__'+itm.section"
            @clicked2="clickedSelectBox"
          />
        </div>
        <div class="buffer"></div>
      </main>
      <Aside/>
    </div>
    <ModalAddItem  />
    <ModalSignup :switchType="sType" @upLogin="setLoginStatus"  /> 
  </div>
</template>

<script>
// @ is an alias to /src
import { ref,computed }  from "vue";
import { useStore } from 'vuex';

import NavList from "@/components/NavList.vue";
import SectionBlock from "@/components/SectionBlock.vue";
import Aside from "@/components/Aside.vue";
import ModalAddItem from "@/components/ModalAddItem.vue";
import ModalSignup from "@/components/ModalSignup.vue";

import HeaderRestaurant from "@/components/HeaderRestaurant.vue";
export default {
  name: "Home",
  setup() {
    const store = useStore();
    const sType = ref(null);
    const userBool = ref(false);
    const $ = (id) => document.getElementById(id);
    const mainMenu = computed(() => store.getters['GETMENU']);
    const isMobile = computed(() => store.getters['GETISMOBILE']);


    const navMenuArr =  mainMenu.value.map((itm) =>{
      if(itm.menu.length >0){
        return itm.section;
      }
    });

    const setLoginStatus = (_bool) =>{ userBool.value = _bool};
    const showSignupModal = (evt,toggleClass) =>{
     evt.preventDefault();
      store.dispatch('ACTBODYMODAL',['open-modal','modal-menu',toggleClass])
     return false;
    };

    const setLoginBlock = (evt) =>{
      evt.preventDefault();
     
      let type = (evt.currentTarget.innerText ==='login') ? 'login' : 'signup';
        store.dispatch('ACTBODYMODAL',['open-modal','modal-signup',type]);
      return false;
    }
    const clickedSelectBox = (obj) =>{
  
      if(isMobile.value){
        $(obj.bId).classList.add('boxhover');

        let $timer = setTimeout(() =>{
          $(obj.bId).classList.remove('boxhover');
          setSelectBox(obj);
          clearTimeout($timer);
        },999);
        return;
      }

      setSelectBox(obj);
    }

    const setSelectBox = (obj) =>{
      store.commit('SETMODALQTY',obj.count);
      store.commit('SETINITPRICE',obj.initPrice);
      store.dispatch('SELECTBOX',obj);
    }

    const getTopVal = (type) =>{
     return $('sect_'+type).offsetTop;
    }

    const scrollToSect = (type) =>{
      
      window.scroll({
        left:0,
        top:getTopVal(type),behavior: 'smooth'})
    };

    const mobileBool = (window.innerWidth < 600) ? true : false;
    store.commit("SETISMOBILE", mobileBool);
  
    return {
      navMenuArr,
      mainMenu,
      sType,
      userBool,
      clickedSelectBox,
      setLoginStatus,
      setLoginBlock,
      scrollToSect,
      showSignupModal
    }
  },

  components: {
    HeaderRestaurant,
    NavList,
    SectionBlock,
    Aside,
    ModalAddItem,
    ModalSignup
  },
};
</script>


<style lang="scss" type="text/css">
$color-entrees: #699869;
$color-noodles: #b85ad6;
$color-appetizers: #539895;
$color-sushi: #c2a174;
$color-soups: #6b9aaa;
$color-salad: #c56cb7;
$color-bev: #8058db;

.container {
  display: flex;
  height: 100%;
  align-items: stretch;
  p.price {
    &:before {
      content: "$";
    }
  }

  .buffer{
    width:100%;clear:both;min-height:50vh;
  }
  main {
    flex: 4;
    position: relative;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    height: auto;
    .wrapper__full-menu {
      clear: both;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      background: #eee;
      position: relative;
      height: 100%;
      margin-top: 40px;
      padding-top: 20px;
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
    }
  }
  aside {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    min-width: 300px;
    width: auto;
    position: relative;
    background: #eee;
    height: 100%;
    flex: 1;
    margin-top: 40px;
    text-align: left;
    padding: 0px 10px;

    dl {
      font-size: 12px;
      dt.legend__special {
        text-indent: 10px;
        &:before {
          content: "★";
          color: #cc0000;
          padding-right: 5px;
        }
      }
    }
    .wrap__items-checkout {
      overflow: hidden;
      overflow-y: auto;
      height: auto;
    }
    .wrap__btn-checkout {
      display: flex;
      justify-content: stretch;
      overflow: hidden;
      flex: 1;
      min-width: 300px;
      position: fixed;
      bottom: 20px;
    }
  }
}

.container.margintop{
  margin-top:55px;
}
</style>
