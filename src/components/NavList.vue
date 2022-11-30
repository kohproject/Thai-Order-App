<template>
  <div class="wrap__nav-list">
    <ul class="list__main-nav" id="nav_menu">
      <li v-for="itm in linkArr" :key="itm.title">
        <linkNavMain @clicked="$emit('clicked',itm.title)" 
        :title="itm.title" 
        :cl="itm.cl" 
        />
      </li>
    </ul>
  </div>

</template>
<script>
import LinkNavMain from '@/components/LinkNavMain.vue'
import {ref} from 'vue'
export default {
  props:['navArr'],
  name: "NavList",
   setup(props) {
   const navItms = ref(props.navArr);
   let linkArr = navItms.value.map((itm,index) =>{
    return {'title':itm.toString(),'cl':'link__'+itm.toString(), status:(index ===0)}
   });

 

  return{
    linkArr
  }
  },
  components:{
    LinkNavMain
  }
};
</script>


<style lang="scss">

.wrap__nav-list {
  height: 40px;
  width: 100%;
  z-index: 99999;
  position: fixed;
  
  ul.list__main-nav {
    height: 40px;
    border-bottom: solid 1px #999;
    margin-left:5px;
    margin-right: -5px;

    > li {
      margin-right: 5px;
      a {
        display: flex;
        flex-direction: column;
        justify-items: center;
        justify-content: center;
        padding: 0px 32px;
        border-bottom: solid 1px #999;
        height: 40px;
        background: #fefefe;
        border-top: solid 3px #999;
      }
     
      a.active {
        border-bottom: solid 1px #fff;
        background: #fff !important;
      }
    }
  }
}
</style>