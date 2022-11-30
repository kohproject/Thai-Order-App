<template>
    <input :type="inptype" :value="$inpVal" :class="inpclass" :id="inpId"/>
</template>


<script>
import{ref} from 'vue'
export default({
    props:['inptype','inpclass','inpId','inpVal'],
    name:"InputForm",
    setup(props) {
        const $inpVal =ref(props.inpVal);
        return{
            $inpVal
        }
    }
})
</script>

<style scoped lang="scss">
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
    border-radius: 16px;
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
  height: 16px;
  display: inline-block;
  margin-right: 5px;
  overflow: visible;
  outline: 0px;
  appearance: none;
  border: solid 1px #1bc86d;
  &:before,
  &:after {
    content: '';
    top: 12px;
    left: 6px;
    position: absolute;
    background: #fff;
    width: 6px;
    height: 3px;
    top: 11px;
    left: 8px;
    display: none;
    transform: rotate(46deg);
  }
  &:checked {
    border: solid 1px green;
    background: green;
    transform: scale(1.1);
    width: 16px;
    height: 16px;
    &:before,
    &:after {
     content: '';
      width: 13px;
      height: 3px;
      left: 8px;
      display: block;
      transform: rotate(-46deg);
      transition: all 0.3s ease;
    }
    &:after{
      width: 5px;
      top: 5px;
      left: 1px;
      transform: rotate(46deg);
    }
    &:before {
      width: 16px;
      height: 3px;
      border-right:solid 1px #999;
      top: 4px;
      left: 3px;
  
    }
  }
}

</style>