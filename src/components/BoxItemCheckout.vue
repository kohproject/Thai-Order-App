<template>
  <div 
    :id="boxId"
    :data-id="boxId"
    :data-specialinstruct="specialInstruct"
    :data-options="boxOptions"
    :data-price="boxInitPrice.value"
    :data-extra="boxExtra.value"
    :class="['box__itm-checkout', 
            {'itm-special': getSpecialBool(specialInstruct) }, 
            getBoxClass(title)]">
    <h4>
      <span class="count">{{ mCount }}</span>
      <span class="sp__title">{{ boxName }}</span>
    </h4>
    <!-- <p class="desc">this is absolutely delicious</p> -->
    <!-- <p class="desc">{{ desc }}</p> -->
    <p class="price">{{ getBoxAmount() }}</p>
    <div class="wrap__link-options">
      <a href="#" class="link__edit" @click="$emit('emitEdit')"
        >EDIT</a
      >
      <a href="#" class="link__remove" @click="$emit('emitRemove')"
        >REMOVE</a
      >
    </div>
  </div>
</template>
<script>
import { ref} from "vue";

export default {
  name: "BoxItemCheckout",
  props: ["name","cnt","id","bIndex","bPrice","boxAmt","bOptions","bExtra","specInstruct","cl"],
  setup(props) {
    const boxName = ref(props.name);
    const mCount = ref(props.cnt);
    const boxId = ref(props.id);
    const boxIndex = ref(props.bIndex);
    const boxInitPrice = ref(props.bPrice);
    const boxOptions = ref(props.bOptions);
    const boxExtra = ref(props.bExtra);
    const title = ref(props.cl);
    const specialInstruct = ref(props.specInstruct);

    const getSpecialBool  = (spec) =>{
      return (spec !== null || spec !== '') ? true : false;
    }

    const getBoxAmount =() =>{
      return ((boxInitPrice.value + boxExtra.value) * mCount.value)
    }
  
    const getBoxClass = (btype) =>{
      return btype.replace('sect__','box-itm-');
    }

    const getBoxId =(id,ind) =>{
      alert('id'+id);
      alert('index'+ind);
    }
    
    return {
      boxName,
      mCount,
      boxId,
      boxExtra,
      boxIndex,
      boxOptions,
      boxInitPrice,
      specialInstruct,
      title,
      getBoxAmount,
      getSpecialBool,
      getBoxClass,
      getBoxId
    };
  }
}
</script>

<style lang="scss">

$asideBlue:#637b8b;

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
  color:$asideBlue;
  h4,
  p {
    margin: 0px;
    color:$asideBlue;
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
    position: relative;
    span.sp__title {
      display: inline-block;
      color:$asideBlue;
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
      overflow:hidden;
      
    }
    a:hover{
        background:#fefefe !important;
    }
  }
}
.box__itm-checkout.itm-special {
  border-color: #c7b3b3;
  padding-top:10px;
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
