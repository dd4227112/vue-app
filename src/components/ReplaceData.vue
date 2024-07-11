<template>
    <div>
        <h1>Replace Data with Composition API</h1>
        <h2>First Option - {{ o_fistname }}</h2>
        <h2>Composition - {{ c_firstname }}</h2>
        <h2>Composition - {{ greeting }}</h2>
        <hr>
        <h2>Reactive</h2>
        <hr>
        <h2>Fist Option - {{ o_fistname }} {{ m_fistname }} aka {{ l_fistname }} </h2>
        <h2>Composition - {{ greetingaka }}</h2>
        <h2>Reactive - {{ reactingGreating }}</h2>
        <hr>
        <h2>Username - {{ Username }}</h2>
        <h2>reactiveUsername - {{ reactiveUsername.Username }}</h2>
    </div>
</template>

<script>
import { ref, toRefs } from "vue";
import { reactive } from "vue";
export default {
    name: "ReplaceData",
    data() {
        return {
            o_fistname: "David",
            m_fistname: "Daniel",
            l_fistname: "Peter"
        }
    },
    setup() {
        const c_firstname = ref('Dani');
        c_firstname.value = 'Edwin';
        const m_fistname = ref('Daniel');
        const l_fistname = ref('Pater');

        const greeting = `Hello ${c_firstname.value}`;
        const greetingaka = `Hello ${c_firstname.value} ${m_fistname.value} aka ${l_fistname.value}`
        //using reactive to replace .value each time
        const state = reactive({
            o_fistname: "David",
            m_fistname: "Daniel",
            l_fistname: "Peter"
        })
        const reactingGreating = `Hello ${state.o_fistname} ${state.m_fistname} aka ${state.l_fistname}`
        let Username = ref('danieldavid');
        let reactiveUsername = reactive({
            Username: 'mugisha'
        })
        setTimeout(() => {
            Username.value = 'mwesige',
                reactiveUsername.Username = 'mwesige'

            console.log('Username', Username)

        }, 2000)

        return toRefs({
            c_firstname: c_firstname,
            greeting: greeting,
            greetingaka: greetingaka,
            reactingGreating: reactingGreating,
            Username: Username,
            reactiveUsername
        }
        )
    }

}
</script>

<style scoped></style>