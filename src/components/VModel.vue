<template>
    <div>
        <hr>
        <h1>Replace V-model with Composition API</h1>
        <label>
            Street
        </label>
        <input name="street" v-model="street" />
        <label>
            City
        </label>
        <input name="city" v-model="city" />
        <label>
            Country
        </label>
        <input name="country" v-model="country" />


    </div>
</template>

<script>
import { ref, toRefs, reactive } from "vue";
export default {
    name: "VModel",
    setup() {
        const street = ref('')

        const nationality = reactive({
            city: ref(''),
            country: ref('')
        })

        return {
            ...toRefs(nationality),
            street

        }
    }
}
</script>

<style lang="scss" scoped></style>