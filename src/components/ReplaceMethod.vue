<template>
    <div>
        <h1>Replace Ref with Method</h1>
        <h2>Personal Name {{ firstName }}</h2>
        <button @click="changeName('Daniel Peter')">change name</button>
    </div>
    <hr>
    <h3>Number count is {{ count }}</h3>
    <button @click="incrementCount">Increment Count</button>
    <h3>Profile {{c_firstName }} {{ c_middleName }}</h3>
    <button @click="changeProfile">change Profile</button>


</template>

<script>
import { ref, reactive , toRefs} from "vue";
export default {
    name: "ReplaceMethod",
    setup() {
        const count = ref(0)
        function incrementCount() {
            count.value++
        }
        function changeProfile() {
            profile.c_firstName = 'Alex'
            profile.c_middleName = 'Mwijage'
        }
        const profile = reactive({
            c_firstName: 'Amos',
            c_middleName: 'Juma'
        })
        return  {
            count,
            incrementCount,
            // profile,
            ...toRefs(profile),
            changeProfile
           
        }
    },
    data() {
        return {
            firstName: "David"
        }
    },
    methods: {
        changeName(a) {
            this.firstName = a
        }
    }
}
</script>

<style scoped></style>