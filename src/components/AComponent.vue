<template>
    <div>
        <h2>component A</h2>
        <p>My username here is {{ username }}</p>
    </div>
    <BComponent />
    <CComponent />
</template>

<script>
import BComponent from "./BComponent.vue";
import CComponent from "./CComponent.vue";
export default {
    name: "AComponent",
    data() {
        return {
            username: "danieldavid",
        }
    },
    components: {
        BComponent,
        CComponent
    },
    provide() {
        return {
            username: this.username,
        }
    }

}
</script>

<style scoped></style>