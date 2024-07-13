<template>
    <div>
        <h2>User Details (Pros on composition API)</h2>
        firstName: <input name="firstName" v-model.lazy="firstName" /><br>
        lastName: <input name="lastName" v-model.lazy="lastName" />
        <h2>New name is {{ newName }}</h2>

    </div>
    <person-greeting :firstName="firstName" :lastName="lastName" @sentName="sendFullname"/>
</template>

<script>
import { ref } from 'vue';
import PersonGreeting from './PersonGreeting.vue';


export default {
    components: { PersonGreeting },
    name: "personComponent",
    setup() {
        const firstName = ref('')
        const lastName = ref('')
        const newName = ref('')
        function sendFullname(name) {
            // alert(`sent full name is ${name}`)
             newName.value = name
        }
        return {
            firstName,
            lastName,
            sendFullname,
            newName

        }
    }
}
</script>

<style scoped></style>