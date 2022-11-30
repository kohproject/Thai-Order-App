<template>
<button :class="['base__btn',{'disbtn':!clBool}]" style="{'color':color,'backgroundColor':bg}">
    <em :style="{'display':cartIcon}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="CartIcon-module__cartImage" data-testid="cart-available">
    <path class="cart-icon" d="M17 20h-5a2 2 0 11-2.897-1.788L4.929 4H2a1 1 0 110-2h2.929a2 2 0 011.919 1.436L7.6 6h13.916a1.5 1.5 0 011.43 1.95l-1.883 6a1.5 1.5 0 01-1.43 1.05h-9.39l.882 3H19a2 2 0 11-2 2z"></path></svg>
    </em>{{label}}
</button>
</template>
<script>

export default({
    props:['color','bg','label','clBool','cartIcon'],
    name:'BaseButton'
})
</script>

<style scoped lang="scss">
.cart-icon{fill:#ffffff;}
button.base__btn{
    background: #cc0000;
    border: 0px;
    width: 100%;
    left: 0px;
    height: 60px;
    font-weight: bold;
    font-size: 16px;
    right: 0px;
    text-align: center;
    color: #fff;
    em{
        width: 24px;
    height: 24px;
    display: block;
    position: absolute;
    left: 8px;
    top: 17px;
    }
    &:hover{
        cursor: pointer;
    }
}

button.base__btn.disbtn{
 background: #ddd;
 color:#ccc;
 &:hover{
     cursor:not-allowed;
 }
}
</style>
