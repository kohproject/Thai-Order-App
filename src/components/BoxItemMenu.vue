<template>
  <div
    :id="boxId"
    :class="['box__itm-menu', { boxhover: hoverBool }]"
    :data-options="itm.options"
    @mouseleave="setBoxMenu($event, false)"
    @mouseenter="setBoxMenu($event, true)"
    @click="$emit('clicked')"
  >
    <div
      class="outer"
      @mouseover="setBoxMenu($event, true)"
      @mouseout="setBoxMenu($event, false)"
    >
      <div class="inner">
        <h4>{{ itm.name.value }}</h4>
        <p class="desc">
          {{ itm.desc.value }}
        </p>
      </div>
      <p class="price">{{ itm.price.value }}</p>
    </div>
    <div class="block__expand">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <em></em>
  </div>
</template>
<script>
import { ref, toRefs } from "vue";
export default {
  name: "BoxItemMenu",
  props: ["sect","name", "desc", "options", "price", "id"],
  setup(props) {
    const itm = toRefs(props);
    const hoverBool = ref(false);
    const hoverStatus = ref(false);
    let boxId = itm.sect.value+"--box" + itm.id.value;
    let timer = 0;

    const timerFunct = (_bool, _delay) => {
      let delay = _delay || 700;

      timer = setTimeout(() => {
        if (_bool && hoverStatus.value === true) {
          hoverBool.value = _bool;
          return;
        }
        if (!_bool && hoverStatus.value === false) {
          hoverBool.value = _bool;
          return;
        }
        clearTimeout(timer);
      }, delay);
    };

    const setBoxMenu = (evt, bool) => {
      if (
        evt.type === "mouseenter" &&
        document.getElementsByClassName("boxhover").length > 0
      ) {
        document.getElementsByClassName("boxhover")[0]
          .classList.remove("boxhover");
      }

      if (evt.type === "mouseenter" || evt.type === "mouseover") {
        timerFunct((hoverStatus.value = bool));
      }
      if (evt.type === "mouseleave") {
        clearTimeout(timer);
        hoverStatus.value = bool;
        timerFunct(bool, 200);
      }

      if (evt.type === "mouseout") {
        timerFunct(bool);
      }
    };

    return {
      itm,
      boxId,
      hoverBool,
      hoverStatus,
      timerFunct,
      setBoxMenu
    };
  },
};
</script>

<style lang="scss">
$color-entrees: #78ab6b;
$color-noodles: #dd5f56;
$color-appetizers: #9956b8;
$color-sushi: #c2a174;
$color-soups: #35b2e7;
$color-salad: #b95bb1;
$color-curry: #836ce0;
$color-deserts: #60d19a;
$color-rice: #cc8d17;
$color-bev: #61acd0;

ul.list__main-menu.flexwrap {
  > li {
    position: relative;
  }
}

@keyframes loadingDots {
  0% {
    opacity: 0%;
  }
  33% {
    opacity: 33%;
  }
  75% {
    opacity: 75%;
  }
  100% {
    opacity: 100%;
  }
}

.box__itm-menu {
  font-size: 14px;
  margin: 0px 5px 12px 5px;
  border: solid 1px #ccc;

  background: #fffffc;
  text-align: left;
  width: 280px;
  min-height: 130px;

  padding: 10px 10px 5px 20px;
  position: relative;
  transition: scale 0.1s ease-in-out, padding 0.1s ease;
  .outer {
    transition: height 0.2s ease-in-out, padding 0.1s ease;
  }
  &:hover {
    cursor: pointer;
    border-top: solid 3px #cc0000 !important;
    border-color: #cc0000;
    z-index: 1;
    transition: all 0.1s ease-in-out;
    .inner {
      > h4 {
        color: #cc0000 !important;
      }
    }
    .block__expand {
      top: auto;
      bottom: 5px;
      z-index: 9999;
      right: 20px;
      position: absolute;
      text-align: center;
      font: normal 13px arial;
      width: 22px;
      height: 10px;
      display: block;
      position: absolute;
      > ul {
        display: flex;
        position: absolute;
        width: 22px;
        height: 10px;
        justify-content: space-between;
        flex-direction: row;
        > li {
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 6px;
          background: #cc0000;
          position: relative;
        }
        > li:nth-child(1) {
          animation: loadingDots 0.3s infinite;
        }
        > li:nth-child(2) {
          animation: loadingDots 0.75s infinite;
        }
        > li:nth-child(3) {
          animation: loadingDots 1s infinite;
        }
      }
    }

    &:after {
      z-index: 2;
      width: 55px;
      color: #cc0000;
      border: dashed 1px #cc0000 !important;
      transform: scale(1.05);
      transition: all 0.2s ease-in-out;
    }
  }
  &:before {
    content: "+";
    display: flex;
    width: 16px;
    height: 16px;
    flex-direction: column;
    text-align: center;
    top: 9px;
    right: 42px;
    color: #999;
    z-index: 99;
    position: absolute;
  }
  &:after {
    content: "add";
    display: block;
    width: 50px;
    height: 20px;
    color: #333;
    outline:dashed 1px #777;
    border-right:solid 1px #78ab6b;
    border-bottom:solid 1px #78ab6b;
    background: #fff;
    position: absolute;
    border-radius: 3px;
    font-size: 12px;
    left: auto;
    right: 11px;
    top: 8px;
    text-align: center;
    text-indent: 12px;
  }
  .inner {
    overflow: hidden;
    max-height: 80px;
    position: relative;
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      opacity: 1;
      transition: opacity 0.2s ease;
      background: linear-gradient(
        180deg,
        transparent 0%,
        transparent 55%,
        #fff 100%
      );
    }
  }
  p.price {
    color: #000;
    position: relative;
    margin: 0px;
    margin-top: 5px;
    font-weight: bold;
  }
  p.desc {
    margin: 5px 5px 5px 0px;
    color: #999;
  }
  h4 {
    font: bold 15px Helvetica;
    color: #777;
    max-width: calc(100% - 50px);
    color: #699869;
    margin: 0px;
    clear: both;
  }
}

div.box__itm-menu {


  em {
    display: block;
    width: 16px;
    height: 16px;
    overflow: hidden;
    position: absolute;
    left: 0px;
    top: 0px;
    &:before {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      background: orange;
      position: absolute;
      left: -12px;
      top: -14px;
      transform: rotate(-40deg);
    }
  }
  .inner > h4 {
    color: #637b8b !important;
  }
  &:hover {
    border: solid 1px #cc0000;
    em{
      &:before{
        background: #cc0000 !important;
      }
    }
  }
}

section.sect__entrees div.box__itm-menu{
  &:after{ 
    border-right:solid 1px $color-entrees;
    border-bottom:solid 1px $color-entrees;
  }
  em::before{background:$color-entrees}
} 
section.sect__noodle div.box__itm-menu{
  &:after{ 
    border-right:solid 1px $color-noodles;
    border-bottom:solid 1px $color-noodles;
  }
  em::before{background:$color-noodles}
}
section.sect__appetizers div.box__itm-menu{
  &:after{ 
    border-right:solid 1px $color-appetizers;
    border-bottom:solid 1px $color-appetizers;
  }
  em::before{background:$color-appetizers}
}
section.sect__rice div.box__itm-menu{
  &:after{ 
    border-right:solid 1px $color-rice;
    border-bottom:solid 1px $color-rice;
  }
  em::before{background:$color-rice}
} 
section.sect__soups div.box__itm-menu{
  &:after{ 
    border-right:solid 1px $color-soups;
    border-bottom:solid 1px $color-soups;
  }
  em::before{background:$color-soups}
}
section.sect__curry div.box__itm-menu{
  &:after{ 
    border-right:solid 1px $color-curry;
    border-bottom:solid 1px $color-curry;
  }
  em::before{background:$color-curry}
}
section.sect__salad div.box__itm-menu{
  &:after{ 
    border-right:solid 1px $color-salad;
    border-bottom:solid 1px $color-salad;
  }
  em::before{background:$color-salad}
}
section.sect__deserts div.box__itm-menu{
  &:after{ 
    border-right:solid 1px $color-deserts;
    border-bottom:solid 1px $color-deserts;
  }
  em::before{background:$color-deserts}
}
section.sect__beverage div.box__itm-menu{
  &:after{ 
    border-right:solid 1px $color-bev;
    border-bottom:solid 1px $color-bev;
  }
  em::before{background:$color-bev}
}

.box__itm-menu.boxhover {
  border: none !important;
  padding: 0px;
  transform: scale(1.03);

  em{display:none}

  &:after {
    top: 0px;
  }
  &:before {
    top: 0px;
    color: #cc0000;
  }
  .outer {
    padding: 10px 10px 5px 20px;
    background: #fff;
    border: solid 1px #cc0000;
    border-top: solid 3px #cc0000;
    position: fixed;
    top: -15px;
    height: auto;
    max-height: 240px;
    min-width: 100%;
    min-height: 110%;

    .inner {
      overflow: visible;
      max-height: unset;
      position: relative;
      h4 {
        font-size: 17px;
      }
      p.desc {
        margin: 8px 5px 5px 0px;
        color: #666;
      }

      &:after {
        opacity: 0;
      }
    }
  }
  .block__expand {
    display: none;
    * {
      display: none;
    }
  }
}
</style>
