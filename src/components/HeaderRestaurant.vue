<template>
    <header>
        <p class="txt__address">{{address}}</p>
        <h1>{{title}}</h1>
        <nav>
            <UserLogin v-on:clicked="$emit('clicked2',$event)"/>
        </nav>
    </header>
</template>
<script>
import {computed} from "vue";
import {useStore} from "vuex";
import UserLogin from "@/components/UserLogin.vue";
export default {
    name:"HeaderRestaurant",
    setup() {
        const store = useStore();
        const restObj = computed(() => store.getters["GETRESTAURANT"]);
        const title = restObj.value.name;
        const address = restObj.value.address;
        return{
            title,
            address
        }
    },
    components:{
        UserLogin
    }
}
</script>
<style lang="scss" scoped>
$header:#fff;
$forest:#006551;
$siam:#376a85;

header{
    height: 175px;
    width: 100%;
    background: $header;
    position: fixed;
    top: 0px;
    left: 0px;
    display: block;
    z-index: 999;
    border-top:solid 3px $siam;
  
}
h1{
    display:flex;
    height:48px;
    border:dashed 1px #fff;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color:$siam;
    align-items:center;
    justify-content:center;
    left:80px;top:35px;
    position: fixed;
    z-index: 999999;
    font-size:45px;
    margin:0px;
  
}

h1::before{
    content:'\2742';
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:50px;
    width:50px;
    position: absolute;
    mix-blend-mode: difference;
    left:-60px;
    top:-5px;
    font-size:60px;
}

nav{
    height: 40px;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 9999;
    display: block;
}
p.txt__address{
    font-size:14px;
    text-align:left;
    margin:0px;
    margin-left:0px;
    display: inline-block;
    padding:4px 60px 3px 30px;
    color:$siam;
    position:relative;
    &:before{
        content:'';
        display:block;
        width:18px;
        height:26px;
        position:absolute;
        left:0px;
        top:0px;
        opacity:.75;
        transform:scale(.85);
        background:url('../assets/locationIcon.svg') no-repeat;
        background-size:cover;
    }

}
</style>
