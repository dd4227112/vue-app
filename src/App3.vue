<template>
    <h1>Methods</h1>
    <p v-html="calculateNumber(10, 60)"></p>
    <h2> Products are {{ multiplyNumber(10) }}</h2>
    <h2>User's name is {{ name }}</h2>


    <div>
        <button @click="changeUser">Change User</button>
        <button v-on:click="name = 'Alex Mwijage'">Change User</button>
        <button v-on:mouseenter="name = 'Jackson Simon'">Change User</button>
    </div>
    <h2>The number is {{ number }}</h2>
    <div>
        <button v-on:click="number += 1">Add</button> &nbsp;&nbsp;
        <button v-on:click="minus">Minus</button>
        <button v-on:click="minus($event), changeUser() ">Multiple Event</button>

    </div>
</template>
<script>
export default {
    name: "App",
    components: {

    },
    data() {
        return {
            baseNumber: 50, 
            name: "David Daniel",
            number: 0,
        }
    },
    methods: {
        calculateNumber(a, b) {
            return ('<h1>The total of all number is ' + (a + b) + '</h1>');
        },
        multiplyNumber(a) {
            var products = a * this.baseNumber;
            return products;
        },
        changeUser() {
            console.log('Events', event);
            return this.name = "Dani Mugisha"
        },
        minus() {
            console.log('Events', event);
            return this.number -= 1;
        }
    }

}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>