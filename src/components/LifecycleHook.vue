<template>
    <div>
        <h1>Lifecycle Hook</h1>
        <TemplateRef/>
        <personComponent/>
    </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';
import TemplateRef from './TemplateRef.vue';
import personComponent from './personComponent.vue';

export default {
    name: "LifecycleHook",
    components:{TemplateRef, personComponent},
    // onbeforecreated() and oncreate() have been replaceed by setup method in compostion API, so we don't have them
    setup() {
        onBeforeMount(() => {
            console.log('onBeforeMount', 'Composition Lifecycle hooks onBeforeMount')

        })

        onMounted(() => {
            console.log('onMounted', 'Composition Lifecycle hooks onMounted')

        })
        onBeforeUpdate(function () {
            console.log('onBeforeUpdate', 'Composition Lifecycle hooks onBeforeUpdate')

        })
        onUpdated(() => {
            console.log('onUpdated', 'Composition Lifecycle hooks onUpdated')

        })
        onBeforeUnmount(() => {
            console.log('onBeforeUnmount', 'Composition Lifecycle hooks onBeforeUnmount')

        })
        onUnmounted(() => {
            console.log('onUnmounted', 'Composition Lifecycle hooks onUnmounted')

        })
    },
    beforeCreate() {
        console.log('beforeCreate', 'lifecycle hooks beforeCreate')
    },
    created() {
        console.log('created', 'lifecycle hooks created')
    },
    beforeMount() {
        console.log('beforeMount', 'lifecycle hooks beforeMount')
    },
    mounted() {
        console.log('mounted', 'lifecycle hooks mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate', 'lifecycle hooks beforeUpdate')
    },
    updated() {
        console.log('updated', 'lifecycle hooks updated')
    },
    beforeUnmount() {
        console.log('beforeUnmount', 'lifecycle hooks beforeUnmount')
    },
    unmounted() {
        console.log('unmounted', 'lifecycle hooks unmounted')
    }

}
</script>

<style scoped></style>