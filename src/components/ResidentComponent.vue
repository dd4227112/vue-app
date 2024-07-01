<template>
    <div>
        <h1>List of Resident with GET methods from Laravel api requests</h1>
        <button @click="loadData">Get Data</button>
        <h3>RESIDENTS</h3>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <div v-for="resident in residents" :key="resident.uuid">
            <p>{{ resident.householdNumber }}</p>
            <p>{{ resident.body }}</p>
            <p>{{ resident.ownershipStatus }}</p>
            <p>{{ resident.headOfHousehold }}</p>
            <p>{{ resident.village }}</p>
            <p>{{ resident.ward }}</p>
            <p>{{ resident.numberOfResident }}</p>
            <hr>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "ResidentComponent",
    data() {
        return {
            residents: [],
            errorMessage: ''
        }
    },
    methods: {
        loadData() {
            axios.get('http://localhost/APIs/mtaaApi/api/V1/household',
                {
                    headers: {
                        'Authorization': 'Basic YWRtaW5AYWRtaW4uY29tOjEyMzQ1Ng=='
                    }
                }
            ).then((response) => {
                const apiresponse = response.data;
                this.residents = apiresponse.data
            }).catch((error) => { this.errorMessage = error })
        }
    }
}
</script>

<style scoped></style>