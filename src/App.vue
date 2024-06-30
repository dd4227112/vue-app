<template>
    <div>
        <h1>Teleport Component</h1>
        <!-- we are moving this component to root node with id = portal-root instead of id = app -->
        <Teleport to="#portal-root">
            <PortalComponent />
        </Teleport>
    </div>
</template>

<script>
import PortalComponent from './components/PortalComponent.vue'
export default {
    name: "App",
    components: {
        PortalComponent
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