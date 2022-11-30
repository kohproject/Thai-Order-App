<template>
  <a href="javascript:void(0)" 
  @click="$emit('clicked')" 
  :class="['link__nav',lClass]">{{aTitle}}</a>
</template>
<script>
import {ref} from 'vue'
export default ({
    props:['title','cl'],
    name:'LinkNavMain',
    setup(props){
        const aTitle= ref(props.title);
        const lClass = ref(props.cl);
         
      return {
          aTitle,
          lClass
      }
    }
})

</script>
<style lang="scss" scoped>
$color-entrees:#78ab6b;
$color-noodles:#dd5f56;
$color-appetizers:#9956b8;
$color-sushi:#c2a174;
$color-soups:#35b2e7;
$color-salad:#b95bb1;
$color-curry:#836ce0;
$color-deserts:#60d19a;
$color-rice:#cc8d17;
$color-bev:#61acd0;

$navBlue:#637b8b;
.wrap__nav-list ul.list__main-nav > li{

  a.link__nav.active{
    background:#eee !important;
    border-bottom:solid 2px #eee;
    transition:background .1s ease-in;
  }

  a.link__nav{
    color:darken($navBlue,15%);
  }
  a.link__entrees {
    border-top-color: $color-entrees;
  }
  a.link__noodle {
    border-top-color: $color-noodles;
  }
  a.link__appetizers {
    border-top-color: $color-appetizers;
  }
  a.link__sushi {
    border-top-color: $color-sushi;
  }
  a.link__soups{
    border-top-color: $color-soups;
  }
  a.link__salad {
    border-top-color: $color-salad;
  }
  a.link__curry {
    border-top-color: $color-curry;
  }
  a.link__deserts {
    border-top-color: $color-deserts;
  }
  a.link__rice {
    border-top-color: $color-rice;
  }
  a.link__beverage {
    border-top-color: $color-bev;
  }
}
</style>