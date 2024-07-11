<template>
    <div>
        <hr>
        <h1>Computed </h1>
        <label>
            City
        </label>
        <input name="city" v-model.lazy="city" />
        <label>
            Country
        </label>
        <input name="country" v-model="country" />
        <p> {{ address }}</p>

        <h1>Composotion ref Computed </h1>
        <label>
            City
        </label>
        <input name="city" v-model="refCity" />
        <label>
            Country
        </label>
        <input name="country" v-model="refCountry" />
        <p> {{ computedAddress }}</p>

        <h1>Composotion reactive Computed </h1>
        <label>
            City
        </label>
        <input name="city" v-model="reactiveCity" />
        <label>
            Country
        </label>
        <input name="country" v-model="reactiveCountry" />
        <p> {{ reactiveAddress }}</p>
    </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from "vue"
export default {
    name: "ComputedComponent",
    data() {
        return {
            city: '',
            country: ''
        }
    },
    setup() {
        const refCity = ref('')
        const refCountry = ref('')
        const computedAddress = computed(function () {
            return `My Compostion addres ${refCity.value} - ${refCountry.value}`
        })
        const reactiveData = reactive({
            reactiveCity: '',
            reactiveCountry: ''
        })
        const reactiveAddress = computed(function () {
            return `My  addres ${reactiveData.reactiveCity} - ${reactiveData.reactiveCountry}`
        })
        return {
            refCity,
            refCountry,
            computedAddress,
            ...toRefs(reactiveData),
            reactiveAddress
        }
    },
    computed: {
        address() {
            return `My  addres ${this.city} - ${this.country}`
        }
    }
}
</script>

<style scoped></style>