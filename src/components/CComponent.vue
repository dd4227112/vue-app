<template>
    <div>
        <h2>component C</h2>
    </div>
    <DComponent />
</template>

<script>
import DComponent from './DComponent.vue';

export default {
    name: "CComponent",
    components: {
        DComponent
    }

}
</script>

<style scoped></style>