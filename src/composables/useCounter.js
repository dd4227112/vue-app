import { ref } from "vue";

export default function useCounter(initalValue, countSize) { 
    const count = ref(initalValue)
    function incrementCount() {
         count.value = +countSize

    }
    return {
        count, incrementCount
    }

}