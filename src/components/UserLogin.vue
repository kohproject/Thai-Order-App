<template>
  <ol>
    <li>
      <blockquote style="display: none">
        <strong>STATUS IS {{ registeredStatus }}</strong>
      </blockquote>
    </li>
    <li>
      <div v-if="registeredStatus">
        <p>Hello {{ userName }}</p>
        <ol>
          <li><a>logout</a></li>
          <li><a>add address</a></li>
        </ol>
      </div>
      <div  v-else>
        <ul class="list__login-block mo__hid">
          <li>
            <a class="link__signup" @click="$emit('clicked', $event)">signup</a>
          </li>
          <li>
            <a class="link__login" @click="$emit('clicked', $event)">login</a>
          </li>
        </ul>
        <a href="#" @click="setMobileLogin($event)" class="mobile__login">
          <img src="@/assets/loginIcon.svg">
        </a>
        <a href="#" @click="setAsideCart($event)" :data-count="totalCount" class="mobile_cart"></a>
      </div>
    </li>
  </ol>
</template>
<script>
import {useStore} from "vuex";
import { ref,watch,computed } from "vue";
export default {
  props: ["loginBool"],
  setup(props) {
    const store = useStore();
    const asideCart = computed(() => store.getters["GETCART"]);
    const registeredStatus = ref(props.loginBool);
    const totalCount = ref(0);
 
    const setAsideCart = (evt) =>{
      evt.preventDefault();
      let $body = document.getElementById('body');
      ($body.classList.contains('openAside')) 
      ? $body.classList.remove('openAside') 
      : $body.classList.add('openAside')
    }

    const setMobileLogin = (evt) =>{
      evt.preventDefault();
      return;
    }

    watch(asideCart, (newVal) => {
      totalCount.value = newVal.items.length;
    });

    return {
      registeredStatus: registeredStatus.value,
      totalCount,
      userName: "jone",
      setAsideCart,
      setMobileLogin,
    };
  },
};
</script>
<style lang="scss" scoped>
$forest: #006551;
$siam: #376a85;
ol {
  margin: 0px;
  padding: 0px;
  margin-left: 300px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  blockquote {
    margin: 0px;
    padding: 0px;
    height: 40px;
    min-width: 300px;
    background: $siam;
  }
}
ul.list__login-block {
  min-width: 200px;
  margin-top: 15px;
  > li {
    width: auto;

    > a {
      display: flex;
      justify-content: center;
      min-width: 60px;
      align-items: center;
      height: 36px;
      color: #fff;
    }
    > a.link__login {
      border-radius: 20px;
      padding-left: 22px;
      background: lighten($siam, 15%);
      min-width: 105px;
      position: relative;
      &:hover {
        background: lighten($siam, 2%);
        transform: scale(1.05);
        cursor: pointer;
        transition: all 0.1s ease-out;
      }
      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
      }
      &:before {
        border-radius: 20px;
        width: 22px;
        height: 22px;
        left: 8px;
        top: 5px;
        background: $siam;
        opacity: 0.7;
        border: solid 2px darken($siam, 4%);
      }
      &:after {
        left: 10px;
        top: 5px;
        border-radius: 20px;
        width: 24px;
        height: 24px;
        background: url("../assets/loginIcon.svg") no-repeat 40% 50%;
        background-size: 14px 15px;
        opacity: 0.9;
      }
    }

    > a.link__signup {
      color: #666;
      background: none;
      text-decoration: underline;
    }
  }
  > li:nth-child(1) {
    margin-right: 10px;
  }
}
</style>
