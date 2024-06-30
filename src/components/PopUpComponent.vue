<template>
    <h1>Popup is Here</h1>

    <button @click="$emit('close', inputData)">close</button>
    <div>{{
        JSON.stringify(inputData, null, 2) }}</div>
    <input type="text" v-model="inputData.fullName" />
</template>

<script>
export default {
    name: "PopUpComponent",
    data() {
        return {
            compontData: {
                name: "Dani Mugisha",
                age: 64
            },
            inputData: {
                fullName: ''
            }

        }
    },
    emits: {
        close(name) {
            // console.log(name.fullName.length);
            if (name.fullName.length < 3) {
                alert("Add more characters");
                return false;
            }
            return true;
        }

    }
}
</script>

<style scoped></style>