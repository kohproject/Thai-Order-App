<template>
  <aside :class="['aside', { 'long-aside': boolAside }]">
    <div class="inner">
      <h3>
        Your Order | <span>total: {{ countTotal }}</span>
      </h3>
      <div class="wrap__items-checkout">
        <ol>
          <li v-for="box in items" :key="box.name">
            <!-- <ItemCheckout
              :name="box.name"
              :price="getBox(box).price"
              :count="getBox(box).count"
              :desc="box.desc"
              @emitRemove="removeItm"
            /> -->
          </li>
        </ol>
      </div>
    </div>
    <div class="wrap__totals">
      {{ cartTotal }}
      <ol class="list__mytotal">
        <li>
          <span>subtotal:</span>
          <span class="field">{{ asideCart.subtotal }}</span>
        </li>
        <li>
          <span>tax:</span> <span class="field">{{ asideCart.tax }}</span>
        </li>
        <li>
          <span>total:</span><span class="field">{{ asideCart.total }}</span>
        </li>
      </ol>
    </div>
   
  </aside>
</template>
<script>
import { ref} from "vue";
// import ItemCheckout from "@/components/ItemCheckout.vue";
export default {
  name: "AsideCheckout",
  props:['name','cnt','totalAmt','specialInstruct'],
  setup() {
   
    const btnBool = ref(false);
    const boolAside = ref(false);
    const btnTotal = ref(0);
    const total = ref(0);
    
    const getBox =(obj) =>{
      console.log(obj);
      obj.price =8;
      obj.count=1;
      return obj;
    }


    btnTotal.value = total;
    // btnBool.value = Number(items.value.length) > 0 ? true : false;
    // boolAside.value = Number(items.value.length) > 3 ? true : false;

    return {
  
      btnTotal,
      btnBool: btnBool.value,
      boolAside: boolAside.value,
      getBox
    };
  },
  // components: {
  //   ItemCheckout
  // },
};
</script>

<style lang="scss">
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
    bottom: 80px;

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
    }
  }
}
</style>