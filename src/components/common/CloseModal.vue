<template>
    <a href="javascript:void(0)" @click="closeModal($event)" class="close__modal"></a>
</template>
<script>
import {ref} from 'vue';
import {useStore} from 'vuex';
export default {
    name: "CloseModal",
    props:['closemodaltype','editType'],
    setup(props) {
        const store = useStore();
        const closeType = ref(props.closemodaltype);
        const editBool = ref(props.editType);
        const closeModal = (evt) =>{
            evt.preventDefault();

            if(editBool.value ===true){
                store.dispatch("RESETSTORE",null);
            }
            
            if(closeType.value === 'checkout'){
                store.dispatch("CLOSEADDMODAL",null);
                return false;
            }

            if(closeType.value === 'signup'){
                store.dispatch("RESETSIGNUP",null);
                return false;
            }

            return false;
        }
        return{
            closeModal
        }
    },
}
</script>
<style lang="scss" scoped>
 a.close__modal {
      display: block;
      width: 26px;
      height: 26px;
      position: fixed;
      top: 10px;
      right: 6px;
      z-index: 9999;
      &:hover{
          &:before,&:after{
              opacity: .9
          }
      }
      &:before,
      &:after {
        content: "";
        width: 24px;
        height: 5px;
        background: #4e95a7;
        display: block;
        position: absolute;
        top: 10px;
        transform: rotate(-44deg);
      }
      &:after {
        transform: rotate(44deg);
      }
    }
</style>