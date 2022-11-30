<template>
    <div class="box__item-checkout">
        <p><span class="price"></span></p>
    </div>
</template>

<script>
import {computed} from "vue";
import { useStore } from "vuex";
export default{
    name:"ItemCheckout",
    setup() {
        const store = useStore();
        const cartCheckout = computed(() => store.getters['GETCART']);
        return{
            cartCheckout
        }
    },
}
</script>
<style lang="scss" scoped>
    .box__item-checkout{
        .price{
            font-size:14px;
        }
    }
</style>
