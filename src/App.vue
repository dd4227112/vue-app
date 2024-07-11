<template>
    <h1>TemplateRef</h1>
    <replace-data />
    <replace-method />
    <VModel />
    <computed-component/>
    <watch-component/>
</template>

<script>
import ComputedComponent from './components/ComputedComponent.vue'
import ReplaceData from './components/ReplaceData.vue'
import ReplaceMethod from './components/ReplaceMethod.vue'
import VModel from './components/VModel.vue'
import WatchComponent from './components/WatchComponent.vue'


export default {
    components: { ReplaceData, ReplaceMethod, VModel, ComputedComponent, WatchComponent },
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