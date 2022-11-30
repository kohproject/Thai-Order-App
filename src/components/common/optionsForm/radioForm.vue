<template>
    <div class="flex-wrap">
        <input name="radiooption" 
            :id="id"
            :value="getRadioName(false)"
            :v-model="userSelected()"
            @click="setSelected($event,id)"
            type='radio' 
            class="rad inp-reset">
        <label :for="getRadioName(true)">{{itmName}}</label>
        <span class="priceItm" v-if="itmExtra === null">{{getChecked()}}</span>
        <span class="extra price"  v-if="itmExtra !== null">{{itmExtra}}</span>
        <span class="extra price hid"  v-if="itmExtra === null">0</span>
    </div>
</template>
<script>
    import {ref} from 'vue';
    export default{
        props:['itmName','itmExtra','chxbool','id'],
        name:'radioBoxElem',
        setup(props,{emit}){ 
            const checkBool = ref(props.chxbool);
            const extraCost = ref(props.itmExtra);
            const setSelected =(evt,id) =>{
                checkBool.value = (evt.currentTarget.checked) ? true : false;
                emit('radioClicked',getRadioName(false),id)
            }
            const getRadioName = (bool) =>{
                return (bool) ? "inp_rad-"+props.itmName : props.itmName;
            }
            const getChecked = () =>{
                return (checkBool.value) ? extraCost.value : 0;
            }
            const userSelected =() =>{
                return (checkBool.value) ? getRadioName(false) : null;
            }

            return{
                userSelected,
                setSelected,
                getRadioName,
                getChecked
            }
        }

    }
</script>
<style scoped lang="scss">
.flex-wrap{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;

    span.priceItm{
        float:right;
        text-align:right;
        display:block;
        min-width:30%;
      
        &:before{
            content:"$ "
        }
    }
    span.extra{
        margin-left:auto;
        display:flex;
        &:before{
            content:'extra $ ';
            display:inline-block;
            white-space: nowrap;
        }
    }
    span.extra.hid{
        display:none;
    }
    
}
</style>