<template>
    <textarea
    :value="specialVal" 
    :id="txtId"
    type="textarea"
    @change="setBlockVal($event)"
    class="textarea inp-reset"
    placeholder="Add any special instructions here"></textarea>
</template>
<script>
    import {ref} from "vue";
    export default{
        props:['eltitle','id'],
        name:'textareaBoxElem',
        setup(props,{emit}){
            const inpTitle = ref(props.eltitle);
            const txtId = ref(props.id);
            const specialVal = ref('');
            const setBlockVal = (evt) =>{
                if(evt.target.value === '') return;
                emit("setSpecialTextarea", evt.target.value, txtId.value);
            }
          
            return{
                specialVal,
                txtId,
                inpTitle,
                setBlockVal
            }  
        }
    }
</script>
<style scoped>
.textarea{
    min-height:90px;
    width:96%;
}
</style>
