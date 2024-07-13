<template>
    <h1>Replacing Compostion API cont...</h1>
    <!-- <tab-a /> -->
    <!-- <lifecycle-hook/> -->
    <IncrementClickMixins />
    <IncrementHoverMixin />
</template>


<script>
import IncrementClickMixins from './components/IncrementClickMixins.vue'
import IncrementHoverMixin from './components/IncrementHoverMixin.vue'
// import LifecycleHook from './components/LifecycleHook.vue'
// import TabA from './components/TabA.vue'

export default {
    components: { IncrementClickMixins, IncrementHoverMixin },
    name: "App",

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