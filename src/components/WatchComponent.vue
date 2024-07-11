<template>
    <div>
        <hr>
        <h1>
            Replace Watchers
            <input type="text" v-model="name" />
            <br>
            <h2>Ref</h2>
            <input type="text" placeholder="First Name" v-model="firstName" />

            <br>
            <input type="text" placeholder="Last Name" v-model="lastName" />

            <h2>Reactive </h2>
            <br>
            <input type="text" placeholder="First Name" v-model="fName" />

            <br>
            <input type="text" placeholder="Last Name" v-model="lName" />
            <br>
            <input type="text" placeholder="City" v-model="options.city" />

        </h1>

    </div>
</template>

<script>
import { toRefs } from 'vue';
import { reactive, ref, watch } from 'vue';
import _ from 'lodash';

export default {
    setup() {
        const firstName = ref('')
        const lastName = ref('David')

        watch([firstName, lastName], (oldValues, newValues) => {
            console.log('FistName', oldValues[0], newValues[0]);
            console.log('LastName', oldValues[1], newValues[1]);
        }, {
            immediate: true, // to run immediately as the page reload
            deep: true
        })

        const profile = reactive({
            fName: '',
            lName: '',
            options: {
                city: ''
            }
        })
        // watch(profile, function (oldValue, newValue) {
        //     console.log('FistName', oldValue.fName, newValue.fName);
        //     console.log('LastName', oldValue.lName, newValue.lName);

        // })
        // Use this below to trace the change of old and new value since they are the same for reactive
        // watch(() => {
        //     return {
        //         ...profile
        //     }
        // }, function (oldValue, newValue) {
        //     console.log('FistName', oldValue.fName, newValue.fName);
        //     console.log('LastName', oldValue.lName, newValue.lName);

        // })

        // watching to indivial propert of an reactive object, we will use fName as example
        watch(() =>
            profile.fName
            , function (oldValue, newValue) {
                console.log('FistName', oldValue, newValue);

            })

        //using deep for object property

        // watch(() =>
        //     profile.options, function (oldValue, newValue) {
        //         console.log('City', oldValue, newValue);

        //     }, {
        //     deep: true
        // })

        // use deep copy of object property to get changes between the old and new values,using  libraries.Eg  cloneDeep function  from lodash
        //run npm add lodash
        // the inport _ from  lodash
        watch(() =>
            _.cloneDeep(profile.options), function (oldValue, newValue) {
                console.log('City', oldValue, newValue);

            }, {
            deep: true
        })

        return {
            firstName,
            lastName,
            ...toRefs(profile)
        }
    },
    data() {
        return {
            name: ''
        }
    },
    watch: {
        name(oldValue, newValue) {
            console.log(oldValue, newValue);
        }
    }
}
</script>

<style scoped></style>