<template>
    <label :for="id">
        <input type="checkbox" class="switch inp-reset"
         :checked="toggleBool"
         :name="sectname"
         :id="id"
         @click="$emit('toggleEmit')" />
    </label>
</template>
<script>
    import {ref} from "vue";
    export default{
        props:['sname','status','id'],
        name:'toggleSwitchElem',
        setup(props){
            const toggleBool =ref(props.status);
            const sectname = ref(props.sname);
            return{
                toggleBool,
                sectname:sectname.value
            }
        }
    }
</script>