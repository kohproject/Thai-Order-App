<template>
  <aside :class="['aside', { 'long-aside': boolAside }]">
    <div class="inner">
      <h3 @click="$store.commit('SETBODYMODAL',null)">Your Order <span>total: {{ countTotal }}</span></h3>
      <div class="wrap__items-checkout">
        <dl>
          <dt class="legend__special">special instructions</dt>
        </dl>
        <div class="add-item-anim"></div>
        <ol>
          <li v-for="(box, index) in items" :key="box.name">
            <!-- <p>item{{index}}</p> -->
            <div :class="['box__itm-checkout',isSpecial(box)]" :id="getBoxId(box.name, index)">
              <h4>
                <span class="count">{{ box.count }}</span>
                <span class="sp__title">{{ box.name }}</span>
              </h4>
              <p class="price">{{ box.price }}</p>
              <div class="wrap__link-options">
                <a href="#" class="link__edit" @click="editItm(box)">EDIT</a>
                <a href="#" class="link__remove" @click="removeItm(box)"
                  >REMOVE</a>
              </div>
            </div>
          </li>
        </ol>
      </div>
      <a href="#" class="mobile__close-aside"></a>
    </div>
    <div class="wrap__totals">
      {{ cartTotal }}
      <ol class="list__mytotal">
        <li>
          <span>subtotal:</span>
          <span class="field">{{ subTotal }}</span>
        </li>
        <li>
          <span>tax:</span> <span class="field">{{ tax }}</span>
        </li>
        <li>
          <span>total:</span><span class="field">{{ total }}</span>
        </li>
      </ol>
    </div>
    <div class="wrap__btn-checkout">
      <BaseButton
        bg="#cc0000"
        color="#fff"
        cartIcon="block"
        label="Checkout"
        :totalAmt="btnTotal"
        :clBool="getDisabledStatus()"
        @click="setAsideCheckout($event)"
      />
    </div>
    <em class="mobile__aside-close" @click="$store.commit('SETBODYMODAL',null)"></em>
  </aside>
</template>
<script>
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";

import BaseButton from "@/components/common/BaseButton.vue";

export default {
  name: "Aside",
  setup() {
    const store = useStore();
    const asideCart = computed(() => store.getters["GETCART"]);
    const salesTax = computed(() => store.getters["GETSALESTAX"]);
    const items = ref([]);
    const tax = ref(0);
    const btnTotal = ref(0);
    const count = ref(0);
    const countTotal = ref(0);
    const subTotal = ref(0);
    const total = ref(0);
    const boolAside = ref(false);

  
    const isSpecial = (box) =>{
      let specialObj = box.options.filter(itm =>itm.selection.type ==='sptextarea');
      return (specialObj[0].sectVal !== null) ? 'box-special' : "";
    }

    const getBoxExtra = (box) => {
      let extraTotal = box.options.reduce((partialSum, a) => partialSum + a.extraVal,0);
      return Number(extraTotal);
    };
    const getBoxId = (name, id) => {
      return name.replace(/\s+/g, "-") + "_" + id;
    };
    const getCount = (box) => {
      return box.count;
    };
    const getDisabledStatus = () =>{
      return (asideCart.value.items.length > 0) ? true : false;
    };
    const getReducedArr = (boxitm) => {
      return asideCart.value.items.filter((itm) => itm !== boxitm);
    };
    const fixAmtTotal = (amt) => {
      return amt.toFixed(2);
    };
    // const calculateBoxPrice = (price, extraVal, qty) => {
    //   let boxprice = Number(price) + extraVal;
    //   boxprice = Nsumber(boxprice * qty);
    //   alert(boxprice);
    //   return boxprice;
    // };

    const setAsideCheckout = (evt) => {
      evt.preventDefault();
      // console.log(asideCart.value);
      //router.back();
      return false;
    };

    //edit item
    const editItm = (box) => {
      store.dispatch("EDITSELECTBOX", box);
    };
    //remove item
    const removeItm = (box) => {
      store.dispatch("SETUPDATECART", getReducedArr(box));
    };
    const setgetLocal = (bool, name, val) => {
      if (bool) {
        localStorage.setItem(name, val);
        return;
      }
      return localStorage.getItem(name);
    };

  

    watch(asideCart, (newVal) => {
      items.value = newVal.items;
      tax.value = 0;
      subTotal.value = 0;
      total.value = 0;
      countTotal.value =0;

      items.value.forEach((itm, index) => {
        itm.id = getBoxId(itm.name, index);
        countTotal.value += itm.count;

        let extVal = itm.options.reduce((partialSum, a) => partialSum + a.extraVal,0);
        subTotal.value += Number((itm.initPrice + Number(extVal)) * itm.count);
      });

      tax.value = Number(subTotal.value * fixAmtTotal(salesTax.value));
      tax.value = fixAmtTotal(tax.value);
      total.value = Number(Number(subTotal.value) + Number(tax.value));
      total.value = fixAmtTotal(total.value);

      btnTotal.value = total.value;
      boolAside.value = Number(items.value.length) > 3 ? true : false;


      setgetLocal(true, "myCart", items.value);
    });

    return {
      count,
      asideCart,
      items,
      btnTotal,
      countTotal,
      boolAside: boolAside.value,
      subTotal,
      tax,
      total,
     
      isSpecial,
      getCount,
      getBoxExtra,
      getBoxId,
      getDisabledStatus,
      setAsideCheckout,
      editItm,
      removeItm,
      fixAmtTotal,
    };
  },
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
$asideBlue:#637b8b;

aside {
  min-width: 300px;
  width: 100%;
  position: relative;
  background: #eee;
  height: 100%;
  flex: 1;
  display: flex;
  margin-right: 25px;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  .wrap__items-checkout {
    overflow: hidden;
    overflow-y: auto;
    padding-right: 5px;
    height: auto;
    position: relative;
    width: 100%;
    max-height: 440px;
  }
  .inner {
    position: fixed;
    height: 100%;
    max-height: 75vh;
    width: 99%;
    max-width: 320px;
    padding: 0px 2px 0px 5px;
    background: #fff;
    >h3{
      position:relative;
      text-indent: 8px;
      color:$asideBlue;
      >span{
        float: right;
        font-weight: normal;
        color: $asideBlue;
        display: block;
        margin-right: 1.5%;
        background: #eee;
        padding: 4px 20px 4px 15px;
        font-size: 16px;
        border-radius: 4px;
        }
    }
    // background:green;
  }
  .wrap__totals,
  .wrap__btn-checkout {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 320px;
    width: 100%;
    position: fixed;
    bottom: 20px;
  }
  .wrap__totals {
    bottom: 85px;

    .list__mytotal {
      > li {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        position: relative;
        padding: 2px 10px;
        border-bottom: solid 1px #ccc;
        span {
          text-align: right;
        }
        span.field {
          min-width: 75px;
          padding-left: 12px;
          padding-right: 4px;
          text-align: right;
          &:before {
            content: "$";
          }
        }
      }
      >li:last-child{
        border-bottom: none;
      } 
    }
  }
}

//box in aside list
.box__itm-checkout {
  width: 99%;
  border: solid 1px #ccc;
  text-align: left;
  height: 100px;
  max-height: 75px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background: #fffffe;
  position: relative;
  padding: 5px 12px 0px 30px;
  font-size: 14px;
  h4,
  p {
    margin: 0px;
  }
  p.desc {
    margin-top: 8px;
    font-size: 11px;
    display: none;
    position: relative;
    &:after {
      content: "";
      display: block;
      top: 0px;
      background: #fff;
      left: 0px;
      width: 100%;
      height: 100%;
    }
  }
  h4 {
    font: bold 15px Helvetica;
    width: 90%;
    color:$asideBlue;
    position: relative;
    span.sp__title {
      display: inline-block;
      max-width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    span.count {
      display: grid;
      place-items: center;
      width: 20px;
      height: 20px;
      background: #bbb;
      color: #fff;
      border-radius: 20px;
      position: absolute;
      font: normal 12px arial;
      left: -26px;
    }
  }
  p.price {
    position: absolute;
    top: 10px;
    right: 12px;
    color: #000;
  }
  .wrap__link-options {
    clear: both;
    position: absolute;
    bottom: 8px;
    a {
      display: inline-block;
      margin-right: 10px;
      font: bold 12px Helvetica;
      text-align: center;
      padding: 4px 12px 4px 12px;
      min-width: 75px;
      color:$asideBlue;
      border-radius: 4px;
      border: solid 1px transparent;
      border: dashed 1px #ccc;
      background: #fff;
    }
  }
}
.box__itm-checkout.box-special {
  border-color: #c7b3b3;
  padding-top: 10px;
  overflow: visible;
  &:before {
    content: "";
    background: #fff;
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: -2px;
    left: 7%;
    transform: translateX(-93%);
  }
  &:after {
    content: "★";
    color: #cc0000;
    font-size: 12px;
    display: block;
    width: 20px;
    height: 1px;
    position: absolute;
    top: -10px;
    left: 9%;
    transform: translateX(-91%);
  }
}
</style>