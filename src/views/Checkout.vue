<template>
  <div class="wrapper__full-checkout">
    <div class="flex">
        <div class="block__left-checkout">
            <h2>Checkout</h2>
            <section>
              <h3>PAYMENT FIELDS</h3>
              <ul>
                <li>
                  <label for="cardholder">Card Holder</label>
                  <input value="" class="inp-creditcard inp-lg" name="cardholder" />
                </li>
                <li>
                  <ol>
                    <li><label for="exp">Exp</label><input /></li>
                    <li><label for="cvv">CVV</label><input /></li>
                    <li><label for="billingzip">Billing zip</label><input /></li>
                  </ol>
                </li>
              </ul>
           <hr/>
              <h3>BILLING ADDRESS</h3>
              <ul>
                <li>
                  <label for="address">Street Address</label><input class="inp-lg" />
                </li>
                <li>
                  <ol>
                    <li><label for="city">City</label><input class="inp__city" /></li>
                    <li><label for="state">State</label>
                     <DropStates />
                    </li>
                    <li><label for="zip">Zipcode</label><input /></li>
                  </ol>
                </li>
              </ul>
            </section>
           
          </div>
          <AsideCheckout />
    </div>
    <div class="block__bottom">
        <ol class="list__tip-bar">
          <li v-for="(itm,index) in tipbar" 
          :class="['li-tip',{'active':itm.status}]"
          :key="index"
          @click="setTipAmt($event,itm.percentage)"
          ><label>{{getPercentageAmt(itm.percentage)}}</label><span class="sp-amt amt-10" data-amt="1.33">1.33</span>
          </li>
     
        </ol>
      </div>
  </div>

 


</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import AsideCheckout from "@/components/AsideCheckout.vue";
import DropStates from "@/components/common/statesDropdown.vue";

export default {
  name: "Checkout",
  setup() {
    const store = useStore();
    const tipbar = computed(()=>store.getters['GETTIPBAR']);

    const getPercentageAmt =(pert) =>{
     return (pert !==0) ? pert+'%' : "Other";
    }

    const setTipAmt = (evt,per) =>{
        let amt =  Number(evt.currentTarget.querySelector('.sp-amt').innerText);
      
        alert(amt);
        tipbar.value.forEach((itm) =>{
            itm.status = (itm.percentage === per) ? true : false;
            if(itm.status){
                store.commit('SETTIPAMOUNT',amt)
            }
        });
       
    }

    const selectState = (val) =>{
      alert(val);

    }

    return{
      selectState,
        setTipAmt,
        getPercentageAmt,
        tipbar
    }
  },
  components: {
    DropStates,
    AsideCheckout
  },
};
</script>
<style scoped lang="scss">
.wrapper__full-checkout {
  clear: both;
  position: relative;
  display: block;
  background:#eee;
  width: 100%;
  min-height: 20vh;
  h2 {
    text-align: left;
    margin-left: 20px;
  }
  .block__left-checkout {
    width: 79%;
    section {
      clear: both;
      overflow: hidden;
      margin: 10px;
      border-radius: 5px;
      margin-bottom: 25px;
      margin-right: 20px;
      padding: 30px 30px 0px 40px;
      border: solid 1px #ccc;
      background:#fff;
      text-align: left;
      hr{
        height:1px;
        margin-bottom:20px;
        background:#eee;
        border:0px;
        border-bottom:solid 1px #999;
      }
      h3 {
        text-align: left;
        color:#666;
        margin: 0px;
        font-size: 13px;
      }
      ul {
        flex-direction: column;
        margin: 14px 0px;
        > li {
          display: block;
          width: 100%;
          clear: both;
          margin-bottom: 24px;
          position: relative;
          input {
            height: 40px;
            border: solid 1px #ccc;
          }
          > input.inp-lg {
            width: 100%;
            max-width: 500px;
          }
          > input.inp-creditcard {
            height: 40px;
          }
          input.inp__city{
            width:250px;
          }
          label {
            display: block;
            font-size: 13px;
            padding-bottom: 2px;
            top: 0px;
            left: 0px;
          }

          > ol {
            display: flex;
            flex-direction: row;
            > li {
              margin-right: 14px;
              position: relative;
              label {
                display: block;
                font-size: 13px;
                top: 0px;
                left: 0px;
              }
            }
          }
        }
      }
    }
  }

  .list__tip-bar{
    flex-direction: row;
    width:480px;
    border:solid 1px #ccc;
    justify-content:space-between;
    border-radius:8px;
    margin-bottom:50px;
    >li{
        border-right:solid 1px #ccc;
        width:100%;
        min-height:40px;
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        padding:6px 0px 4px 0px;
        font-size:13px;
        label{
            font-weight: bold;
            padding:0px;margin:0px;
           
        }
        span{
            padding:0px;margin:0px;
        }
    }
    >li:last-child{
        border-right:none;
    }
    >li.active{
        background:#666;
        color:#fff;
    }
  }

}
</style>
