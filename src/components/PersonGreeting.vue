<template>
    <div>
        <h2>Personal Greeting</h2>
        <!-- <h3>Hello {{ firstName }} {{ lastName }}</h3> -->
        <!-- using computed property -->
        <!-- <h3> Hello {{ fullName }}</h3> -->
        <!-- using computed property compotion API -->
        <h3> Hello {{ fullName }}</h3>
        <h4>sent data back to the parent component with comopostion api by clicking the button below</h4>
        <button @click="sendFullname">send full</button>
        <h2>Mixins(Reusability) with composition API</h2>
    </div>
</template>

<script>
import { computed, } from "vue";
export default {
    name: "PersonGreeting",
    props: ['firstName', 'lastName'],

    setup(props, context) {
        const fullName = computed(() => {
            return `${props.firstName} ${props.lastName}`
        })
        function sendFullname() {
            context.emit('sentName', fullName.value)
        }
        return {
            fullName,
            sendFullname
        }
    },
    //using computed
    // computed: {
    //     fullName() {
    //         return `${this.firstName} ${this.lastName}`
    //     }
    // }
}
</script>

<style scoped></style>