<template>
    <div>
        <h1>Increment Count By Mouse Hover</h1>
        <button @click="incrementCount">clicked {{ count }} times</button>
    </div>
</template>

<script>
// import useIncrementCount from '@/composable/useIncrementCount'
// import incremetCount from '@/mixins/incremetCount';
import useCounter from '../composables/useCounter'
export default {
    name: "IncrementHoverMixin",
    setup(){
        const { count, incrementCount} = useCounter(20,200)
        return {
            count, incrementCount
        }
    },
    // data() {
    //     return {
    //         count: 0
    //     }
    // },
    // mixins: [incremetCount]

}
</script>

<style scoped></style>