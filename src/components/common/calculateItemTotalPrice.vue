<script>
import {ref,computed} from 'vue';
import { useStore } from "vuex";
export default {
    name:"calculateItemTotalPrice",
    props:['price'],
    setup(props) {
        const store = useStore();
        const mExtra =  computed(() => store.getters['GETMODALEXTRA']);
        const mQty = computed(() => store.getters['GETMODALQTY']);
        const initPrice = ref(props.price);
        const itmTotal = ref(0);

        const calcTotal = () =>{
            itmTotal.value = (Number(initPrice.value) + mExtra.value);
            itmTotal.value  = (itmTotal.value  * mQty.value);
            
            return itmTotal.value;
        }


        return{
            calcTotal
        }
    },
}
</script>
