<template>
   <div class="wrap__chx">
            <label :for="getFormId(num)">
                <input :id="getFormId(num)" 
                       :checked="getChecked(checked)"
                       :value="value"
                        @click="$emit('checkBoxOptions')" 
                        type='checkbox' class="chx inp-reset">{{value}}
                    </label>
            <span class="price">{{extra}}</span>
    </div>
</template>
<script>


    export default{
        props:['name','num','checked','value','extra'],
        name:"checkBoxElem",
        setup(){
            const getChecked =(bool) =>{
                return (bool) ? true : false;
            }
            const getFormId = (index) =>{
                return 'inp_chx'+index;
            }

            return{
                getChecked,
                getFormId
            }
        }
    }
</script>
<style lang="scss" scoped>

   .wrap__chx{
        width:100%;
        span.price{
            position: relative;
            float:right;
            &:before{
                content:"$ ";
            }
        }
    }
  
</style>