<template>
    <div>
        <h1>Tab A content</h1>
        <h4>Itinial - {{ initUsername }} </h4>
        <h4>Refs Provide - {{ count }} </h4>

        <h4>Reactive Provide - {{ lusername }} {{ fusername }} </h4>
        <button @click="incrementCount">Increment Count</button>
        <tab-b />

    </div>
</template>

<script>
import TabB from './TabB.vue'
import { ref, reactive, toRefs, provide } from 'vue'

export default {
    setup() {
        provide('prUsername', 'danielmugisha')

        const count = ref(1)
        const user = reactive({
            lusername: 'esther',
            fusername: 'daniel'
        })
        provide('count', count)
        provide('userdata', user)

        function incrementCount() {
            return count.value += 5
        }
        provide('incrementCount', incrementCount)
        return {
            count,
            ...toRefs(user),
            incrementCount
        }
    },
    data() {
        return {
            initUsername: 'danieldavid'
        }
    },
    provide() {
        return {
            pUsername: this.initUsername
        }
    },
    components: { TabB },
    name: "TabA"
}
</script>

<style scoped></style>