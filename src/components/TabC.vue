<template>
    <div>
        <h1>Tab C content</h1>
        <input type="text">
        <tab-d />
    </div>
</template>

<script>
import TabD from './TabD.vue'
export default {
    components: { TabD },
    name: "TabC"

}
</script>

<style scoped></style>