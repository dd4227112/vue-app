<template>
    <h2>
        Hello {{ name }} - {{ title }}

    </h2>
</template>

<script>
export default {
    name: "GreetComponent",
    components: {

    },
    props: ['name', 'title']
}
</script>

<style scoped>
h2{
    font-size: large;
}
</style>