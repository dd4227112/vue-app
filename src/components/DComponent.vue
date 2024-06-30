<template>
    <div>
        <h2>component D</h2>
        <h3>Your Username - {{ username }} and Password - {{ password }}</h3>
    </div>
</template>

<script>
export default {
    name: "D-Component",
    inject: [
        'username',
        'password'
    ]

}
</script>

<style scoped></style>