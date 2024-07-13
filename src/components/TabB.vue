<template>
    <div>
        <h1>Tab B content</h1>
        <tab-c />
    </div>
</template>

<script>
import TabC from './TabC.vue'
export default {
    components: { TabC },
    name: "TabB"

}
</script>

<style scoped></style>