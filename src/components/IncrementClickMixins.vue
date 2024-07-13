<template>
    <div>
        <h1>Increment Count By Click</h1>
        <h2  @mouseover="incrementCount"> hovered value is {{ count }}</h2>
    </div>
</template>

<script>
import useCounter from '../composables/useCounter';
// import incremetCount from '@/mixins/incremetCount';
export default {
    name: "IncrementClickMixins",
    setup(){
        const { count, incrementCount} = useCounter(10, 500)
        return {
            count, incrementCount
        }
    },
}
</script>

<style scoped></style>