<template>
  <div class="wrapper__full-modal">
    <div class="modal-content">
      <h3>{{ mTitle }}</h3>
      <CloseModal closemodaltype="checkout" editType="isEditBool"/>
      <div class="modal-body">
        <section
          v-for="(sect, index) in sectOpts"
          :class="['mSect',
                  { req: sect.required },
                  { 'error-req': sect.errorDisplay }]" 
          :key="sect.title"
          :data-title="sect.title"
          :id="'sect_' + index">
          <h3>{{ sect.title }}<span :class="['opt', { req: sect.required }]"></span></h3>
          <optionBlock
            :req="sect.required"
            :title="sect.title"
            :options="getOptions(index)"
            @emitOptions="setOptionChoses"
            />
        </section>
      </div>

      <div class="modal-btn-wrap">
        <div class="wrap__btn-checkout">
          <fieldset class="fieldset__btn-checkout">
            <select @change="updateBySelect($event)" id="sel__qty">
              <option
                v-for="(opt, index) in selectDrop"
                :key="index"
                :selected="parseInt(index + 1) == parseInt(modalQty)"
              >
                {{ opt }}
              </option>
            </select>
          </fieldset>
          <a
            href="javascript:void(0)"
            @click="AddToCart($event)"
            class="link__btn-checkout"
            ><em>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="CartIcon-module__cartImage"
                data-testid="cart-available"
              >
                <path
                  class="cart-icon"
                  d="M17 20h-5a2 2 0 11-2.897-1.788L4.929 4H2a1 1 0 110-2h2.929a2 2 0 011.919 1.436L7.6 6h13.916a1.5 1.5 0 011.43 1.95l-1.883 6a1.5 1.5 0 01-1.43 1.05h-9.39l.882 3H19a2 2 0 11-2 2z"
                ></path></svg
            ></em>
            Add to Cart
            <span class="sp__price" id="sp_price">{{modalPrice}}</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import CloseModal from "@/components/common/CloseModal.vue";
import optionBlock from "@/components/common/optionBlock.vue";

export default {
  name: "ModalAddItem",
  setup() {
    const store = useStore();
    const boxObj = computed(() => store.getters["GETMODALSELECT"]);
    const modalQty = computed(() => store.getters["GETMODALQTY"]);
    const modalPrice = computed(() => store.getters['GETMODALPRICE']);
    const boxPrice = computed(() => store.getters["GETINITPRICE"]);
    const sectOpts = computed(() => store.getters['GETMODALFORMOPTIONS']); 
    const userChoose = computed(() => store.getters['GETUSERCHOOSE']);
    const isEditBool = computed(() => store.getters['GETISEDIT']);
    const isMobileBool = computed(() => store.getters['GETISMOBILE']);
    const asideCart = computed(() => store.getters['GETCART']);

    const mTitle = ref("");
    const errorDisplay = ref(false);
    const selectDrop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let titleOptions = { title: "", options: []};

    watch(boxObj, (newVal) => {
      mTitle.value = newVal.name;
      // store.commit("SETMODALPRICE", getModalPrice(c,getExtraValue(newVal.options), newVal.count));
      store.commit("SETMODALQTY", newVal.count);
      store.commit("SETINITPRICE",newVal.initPrice);
      store.commit("SETRESETBOOL",false);
      store.dispatch("CALCULATEMODALPRICE", newVal.initPrice);
    });

    const getOptions = (num) =>{
      return (userChoose.value !== null) 
              ? userChoose.value[num] 
              : sectOpts.value[num].selection;
    };

    // const getModalPrice = (intPrice, mExtra, qty) =>{
    //   let extVal = (mExtra) ? mExtra : 0;
    //   let mprice = Number(intPrice + extVal);
    //       mprice = (mprice * qty);
      
    //  return mprice;
    // }

    const setOptionChoses = (seltype, selTitle, req, val, _id) => {
      if(req ===true && (val !==null ||  val !==undefined)) resetErrorMess(selTitle);

      let itmTitle = _id.replaceAll('-',' ');
         if(itmTitle.indexOf('_') !== -1){
            itmTitle = itmTitle.slice(0, -2)
          }

      let arr =[];
      let bOption = boxObj.value.options.find(itm =>itm.title === itmTitle.trim());
          bOption.extraVal = null;
  
        switch(seltype){
          case 'radio':
          bOption.sectVal = {"type":seltype, "value":val};
          bOption.selection.list.forEach(itm => {
            itm.status = false;
            if(itm.name === val){
              itm.status = true;
              bOption.extraVal = (itm.extra !== null) ? itm.extra : 0;
            }
          });
          break;

          case 'check':
            val.forEach(itm =>{
              if(itm.status){
                arr.push(itm);
              }
            });
            bOption.extraVal = arr.reduce((partialSum, a) => partialSum + a.extra, 0);
            bOption.sectVal = {"type":seltype, "value":arr.map(itm => itm.add)};
          break;

          case 'toggle':
            bOption.sectVal = {"type":seltype, "value":val.value};
            bOption.extraVal = (val.extra) ? val.extra : 0;
          break;

          case 'sptextarea':
            bOption.sectVal = {"type":seltype, "value":val};
            bOption.extraVal = 0;
          break;
        }
     
      boxObj.value.options.map(obj => (obj.title === bOption.title) ? bOption : obj);

      store.commit("SETMODALFORMOPTIONS",boxObj.value.options);
      store.commit('SETMODALEXTRA',getExtraValue(boxObj.value.options));
      store.dispatch("CALCULATEMODALPRICE", boxPrice.value);     
    };

    const getExtraValue = (arr) =>{
      return arr.reduce((partialSum, a) => partialSum + a.extraVal, 0);
    }
  
    // const removePreviousEntries = (_title) => {
    //   return titleOptions.options.filter((el) => el.title !== _title);
    // };
    
    const resetErrorMess =(title) =>{
      sectOpts.value.forEach(itm=>{
        itm.errorDisplay = (itm.title===title) ? false : true;
      });
      return;
    };

    const checkRequiredOptions = () => {
      let fArr = sectOpts.value.filter((itm) => itm.required === true);
      let fArr2 =[];
      let obj = {valid:false, arr:fArr2};

        fArr.filter((itm) => {
          let $el = titleOptions.options.find((jtm) => jtm.title === itm.title);
            if ($el !== undefined) {
              fArr2.push($el);
            }
        });

         fArr2.forEach((itm) =>{
          if(itm.userchoose === null || itm.userchoose == "" || itm.userchoose === undefined){
            obj.valid =true;
          }
        });
      return obj;
    };

    const displayInvalid =(arr)=>{ 
    
      arr.forEach(itm =>{
          sectOpts.value.forEach(jtm => {
            if(jtm.title === itm.title){
              jtm.errorDisplay = true;
            }
          });
      });

      
    };
    
    const AddToCart = (evt) => {
      evt.preventDefault();
      
      let checkReqObj = checkRequiredOptions();
     
      if (checkReqObj.valid) {
        displayInvalid(checkReqObj.arr);
        return false;
      }

    //this is an Edit item
    if(isEditBool.value){
      let reducedArr = asideCart.value.items.filter(itm => itm.id !== boxObj.value.id);
      store.commit("UPDATECART", reducedArr);
    }

      store.dispatch("CALCULATEMODALPRICE",boxObj.value.initPrice);
      store.dispatch("ADDCHECKOUT", Object.assign(boxObj.value,{ price:modalPrice.value, count: modalQty.value}));
      
      if(isMobileBool.value){
        displayCartTemp();
        return;
      }

      return resetPage();
    };

    const displayCartTemp = () =>{
      store.commit("SETBODYMODAL",null);
      store.commit("SETBODYMODAL","openAside");
      store.commit("SETBODYMODAL","bounceCart");
      setTimeout(function(){ return resetPage()},900)
    
    }

    const resetPage = () => {
      titleOptions = { title: "", options: [] };
      store.dispatch("RESETSTORE",null);
   
      return false;
    };

    const updateBySelect = (evt) => {
      store.commit("SETMODALQTY", Number(evt.target.value));
      store.dispatch("CALCULATEMODALPRICE", boxPrice.value);
    };

    /* ========= VALIDATE ====================== */
    const validateModal = () => {
      let bool = false;
      let isRequired = false;
      let requiredSect = null;
      let errorSect = {};

      sectOpts.value.forEach((sect) => {
        if (sect.required) {
          errorSect = sect;
          isRequired = true;
          requiredSect = sect.sectVal;
        }
      });

      if (isRequired && requiredSect === null) {
        errorSect.errorDisplay = true;
        bool = false;
      }
      return bool;
    };

    return {
      sectOpts,
      CloseModal,
      errorDisplay,
      selectDrop,
      mTitle,
      modalQty,
      modalPrice,
      isEditBool,
      getOptions,
      AddToCart,
      updateBySelect,
      validateModal,
      setOptionChoses,
    };
  },
  components: {
    optionBlock,
    CloseModal
  },
};
</script>

<style lang="scss">
.cart-icon {
  fill: #ffffff;
}
input.rad {
  width: 24px;
  height: 24px;
  border: solid 1px #ccc;
  border-radius: 24px;
  outline: none;
  appearance: none;
  display: inline-block;
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    background: transparent;
    box-sizing: border-box;
    border-radius: 30px;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:checked {
    &:after {
      background: green;
      width: 15px;
      height: 15px;
      transition: all 0.25s ease;
    }
  }
}

input.switch {
  width: 40px;
  height: 20px;
  border: solid 1px #ccc;
  border-radius: 16px;
  outline: none;
  appearance: none;
  display: inline-block;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    background: #bbb;
    border-radius: 14px;
    left: 3px;
    top: 2px;
    transition: left 0.2s ease;
  }
  &:after {
    content: "no";
    position: absolute;
    left: 44px;
    color: #777;
    top: 2px;
    font: bold 13px helvetica;
    text-transform: uppercase;
  }
  &:checked {
    border-color: green;
    background: green;
    transform: scale(1.1);
    &:before {
      left: 21px;
      background: white;
      transition: all 0.2s ease;
    }
    &:after {
      content: "yes";
      color: green;

      transition: all 0.2s ease;
    }
  }
}

input.chx {
  width: 17px;
  height: 17px;
  display: inline-block;
  margin-right: 5px;
  overflow: visible;
  outline: 0px;
  appearance: none;
  border: solid 1px #ccc;
  &:before,
  &:after {
    content: "";
    width: 2.5px;
    height: 15px;
    background: transparent;
    position: absolute;
    display: block;
    transform: rotate(0deg) translate3d(5px, -7px, 1px) scale(1.1);
  }
  &:checked {
    border: solid 1px green;
    background: green;
    transform: scale(1.1);
    width: 19px;
    height: 19px;
    &:before,
    &:after {
      background: #fff;
      border: solid 1px #fff;
      color: #fff;
      transform: rotate(44deg) translate3d(6px, -6px, 1px) scale(1.1);
      transition: all 0.3s ease;
    }
    &:before {
      height: 7px;
      transform: rotate(-42deg) translate3d(-4px, 5px, 1px);
    }
  }
}

@keyframes errorPulse {
  0%{
    transform: scale(1);
   
  }
  50%{
    transform: scale(1.3);
   
  }
  100%{
    transform: scale(1);
 
  }
}

section.req.error-req {
  border-color: #cc0000;
  background: #fffdfc;
  animation: "errorPulse" .3s 1;
  h3 {
    color: #cc0000;
    animation: "errorPulse" .2s 1;

  }
  span.opt.req {
    &:after {
      color: #990000 !important;
      animation: "errorPulse" .1s 1;
    }
  }
}

section > textarea {
  min-height: 70px;
  width: 96%;
  padding: 1%;
  margin: 5px 10px;
}

fieldset.fieldset__btn-checkout {
  display: flex;
  min-width: 80px;
  max-width: 80px;
  height: 50px;
  margin: 0px;
  padding: 0px;
  appearance: none;
  top: 0px;
  left: 0px;
  background: #cc0000;
  position: relative;
  border: 0px;
  &:before {
    content: "";
    display: block;
    width: 70px;
    height: 40px;
    top: 4px;
    left: 4px;
    border: solid 1px #554;
    border-radius: 6px;
    background: #fff;
    position: absolute;
  }
  &:after {
    content: "Quantity";
    display: block;
    height: 12px;
    width: 44px;
    font: normal 9pt arial;
    background: #fff;
    padding: 0px 0px 0px 4px;
    color: #888;
    position: absolute;
    top: -3px;
    right: 8px;
  }
  select {
    width: 90px;
    height: 50px;
    border: 0px;
    margin: 0px 12px;
    outline: none;
    background: transparent;
    z-index: 2;
  }
}

/* ============================== */

.wrapper__full-modal {
  height: 0px;
  width: 0px;
  overflow: hidden;
  display: block;
  background: #fff;
  position: fixed;
  top: 100%;
  left: 50%;
  background: #eee;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-in-out;

  .modal-content {
    overflow-y: auto;
    min-width: calc(99% + 20px);
    padding-top: 60px;
    padding-bottom: 60px;
    height: 100%;
    max-height: 90vh;
    border-top: solid 4px #4e95a7;
    text-align: left;
    > section {
      border-radius: 4px;
      border: solid 1px #ccc;
      margin-bottom: 15px;
      background: #fff;
      padding-bottom: 10px;
      width: calc(100% - 14px);
    }

    > h3 {
      position: fixed;
      height: 50px;
      width: 100%;
      z-index: 9999;
      margin: 2px 0px;
      padding: 12px;
      background: #eee;
      top: 4px;
      left: 0px;
      font-size: 25px;
      font-weight: normal;
    }
    .modal-btn-wrap {
      position: absolute;
      height: 50px;
      bottom: 0px;
      width: 100%;

      .wrap__btn-checkout {
        height: 50px;
        border: none;
        width: 100%;
        background: #cc0000;
        color: #fff;
        display: flex;
        padding: 0px;
        position: relative;
        align-items: center;
        justify-content: space-between;
        a.link__btn-checkout {
          position: relative;
          height: 100%;
          flex: stretch;
          min-width: 220px;
          color: #fff;
          font-weight: bold;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          width: 100%;
          margin-right: 20px;
        }
        fieldset.fieldset__btn-checkout {
          display: flex;
          min-width: 80px;
          max-width: 80px;
          height: 50px;
          margin: 0px;
          padding: 0px;
          appearance: none;
          top: 0px;
          left: 0px;
          background: #cc0000;
          position: relative;
          border: 0px;
        }
      }
    }
  }
  .modal-body {
    padding: 0px 10px;
    min-height: 200px;

    section {
      border-radius: 4px;
      border: solid 1px #ccc;
      margin-bottom: 15px;
      background: #fff;
      padding-bottom: 10px;
      width: calc(100% - 14px);

      > h3 {
        margin: 10px 20px 10px 20px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        width: 96%;
        span.opt {
          margin-right: 10px;
          display: block;
          min-width: 76px;
          min-height: 22px;
          font-size: 10px;
          height: 100%;
          position: relative;
          padding: 4px 12px;

          &:after {
            content: " optional";
            display: flex;
            min-width: 40px;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            font-weight: 600;
            font-family: arial;
            background-color: #ebf5f6;
            letter-spacing: 0.1em;
            color: #5fa2a5;
            text-transform: uppercase;
            padding: 4px 8px;
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
          }
        }
        span.opt.req {
          &:after {
            content: " required!";
            background: #ffefee;
            color: #ff6d6d;
          }
        }
      }
      ol {
        > li {
          padding: 0px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: center;
          width: 100%;
          height: 40px;
          position: relative;
          border-bottom: dotted 1px #ccc;
          label {
            min-width: 60%;
            display: inline-flex;
            align-items: center;
          }
          
        }
      }
    }
  }

  section.req.error-req {
    border-color: #cc0000;
    background: #fffdfc;
  }
}

body.open-modal {
  position: relative;
  width: 100%;
  overflow: hidden;
  .container {
    filter: blur(5px);
    transition: filter 0.1s ease-in;
  }
  &:before {
    content: "";
    display: block;
    z-index: 999;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #333;
    opacity: 0.75;
    transition: all 0.3s ease;
  }
}

body.open-modal.modal-menu {
  .wrapper__full-modal {
    display: block;
    min-width: 330px;
    max-width: 90vw;
    width: 40%;
    height: 90vh;
    border: solid 1px #ccc;
    top: 50%;
    left: 50%;
    z-index: 9999;
    transform: translate3d(-50%, -50%, 9999);
    transition: top 0.15s ease-in, height 0.5s cubic-bezier(1, 0.06, 0.63, 0.98);
  }
}

a.link__btn-checkout {
  position: relative;
  height: 100%;
  flex: stretch;
  min-width: 220px;
  color: #fff;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-right: 20px;
  em {
    font-style: Normal;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 30px;
    height: 30px;
    justify-content: flex-end;
    padding-right: 10px;
  }
  span.sp__price {
    font-style: Normal;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 60px;
    height: 40px;
    justify-content: flex-end;
    padding-right: 4px;
    &:before {
      content: "$";
    }
  }
}
</style>

