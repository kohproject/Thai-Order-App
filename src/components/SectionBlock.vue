<template>
   <section :id="sectId" :data-title="sectTitle" :class="['sect',sectCl, {'active':boolAct}]">
        <ul class="list__main-menu flexwrap">
            <li v-for="(box,index) in menuArr" :key="index">
               
                <BoxItemMenu 
                    :sect="sectCl"
                    :name="box.name" 
                    :desc="box.desc"
                    :price="box.price" 
                    :id="index"
                    :options="box.options"
                    @clicked="setBoxItem(index,Object.assign(box,{'title':sectCl}))"/>
            </li>
        </ul>
    </section>
</template>

<script>
import {ref} from 'vue'
import BoxItemMenu from '@/components/BoxItemMenu.vue'

export default ({
  props:['sectClass','sectMenu','activeStatus','sectId'],
  name: 'SectionBlock',
  setup(props,{emit}){
      const sectCl = ref(props.sectClass).value;
      const boolAct = ref(props.activeStatus).value;
      const sectTitle = ref(props.sectId);
      const menuArr =ref(props.sectMenu).value;
    
      const setBoxItem = (_index,_box) =>{
       
        let boxId = sectTitle.value +"--box"+_index;
            boxId = boxId.replace('sect_','sect__');
     
       
         emit('clicked2',Object.assign({bId:boxId}, _box));
      }

      return{
          setBoxItem,
          sectCl,
          boolAct:Boolean(boolAct),
          sectTitle:sectTitle.value.replace('sect_','+ '),
          menuArr
      }
    },
   
  components:{
      BoxItemMenu
  }
 
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


section{
    clear: both;
    border-bottom: solid 1px #ddd;
    border-top: solid 1px #fff;
    margin: 0px;
    background:#eee;
    padding-bottom: 20px;
    padding-top: 40px;
    min-height:400px;
    position: relative;
    padding-left: 20px;
    &:before{
        content:attr(data-title);
        color:#888;
        display:block;
        padding:1px 6px 2px 3px;
        background:#f3f3f3;
        position: absolute;
        font:normal 11px verdana;
        text-shadow:2px 2px 0px #fff;
        left:25px;top:5px;
        z-index: 99;
    }
    &:first-of-type {
     
        border-top: none;
    }
}

</style>
