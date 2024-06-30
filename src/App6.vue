<template>
    <h1>Component Event</h1>
    <CComponent />
    <button @click="showPopup = true, closedBy = false">show popup</button>

    <div v-show="showPopup">
        <PopUpComponent @close="closePopup" />
    </div>
    <p v-show="closedBy">Popup closed by {{ name }} aged {{ age }}</p>
    <h2>V-model with Components</h2>
    <InputComponent v-model="username" />

    <p> Input Data :{{ JSON.stringify(username, null, 2) }}</p>
    <h1>SLOTS</h1>
    <card-component>Card Content</card-component>
    <card-component>
        <h3>Card Content</h3>
    </card-component>
    <card-component> <img src="./assets/image.jpeg" alt="" width="200" height="200"></card-component>

    <card-component>
        <template v-slot:header>
            <h2>Heading</h2>
        </template>

        <template v-slot:default>
            <img src="./assets/image.jpeg" alt="" width="200" height="200">
            <p>This djdf df fh sod djsd dj fbhfjndf </p>
        </template>
        <template v-slot:footer>
            <button>Read More..</button>
        </template>
    </card-component>
    <h2>Slot Props</h2>
    <NameList>
        <template v-slot:default="slotProps">
            {{ slotProps.name }} {{ slotProps.movies }}
        </template>
    </NameList>
    <NameList>
        <template v-slot:default="slotProps">
            <p> {{ slotProps.movies }} {{ slotProps.name }}</p>
        </template>
    </NameList>
    <NameList>
        <template v-slot:default="slotProps">
            <p> {{ slotProps.movies }}</p>
        </template>
    </NameList>
    <h1>Dynamic Components</h1>
    <button @click="activeTab = 'TabA'">TAb A</button>
    <button @click="activeTab = 'TabB'">TAb B</button>
    <button @click="activeTab = 'TabC'">TAb C</button>


    <!-- <TabA v-if="activeTab == 'TabA'" />
    <TabB v-if="activeTab == 'TabB'" />
    <TabC v-if="activeTab == 'TabC'" /> -->
    <!-- alternative of the commmented code above using dynamic component feature -->
    <keep-alive>
        <component :is="activeTab"></component>
    </keep-alive>
    <card-component>
        <template v-slot:header>
            <h2>Heading</h2>
        </template>

        <template v-slot:default>
            <img src="./assets/image.jpeg" alt="" width="200" height="200">
            <p>This djdf df fh sod djsd dj fbhfjndf </p>
        </template>
        <template v-slot:footer>
            <button>Read More..</button>
        </template>
    </card-component>
</template>

<script>
import TabC from './components/TabC.vue';
import TabB from './components/TabB.vue';
import TabA from './components/TabA.vue';
import InputComponent from './components/InputComponent.vue'
import CComponent from './components/CComponent.vue';
import PopUpComponent from './components/PopUpComponent.vue'
import CardComponent from './components/CardComponent.vue';
import NameList from './components/NameList.vue'

export default {
    name: "App",
    data() {
        return {
            showPopup: false,
            closedBy: false,
            name: '',
            age: '',
            username: '',
            activeTab: "TabA"
        }
    },
    components: {
        PopUpComponent,
        CComponent,
        InputComponent,
        CardComponent,
        NameList,
        TabA,
        TabB,
        TabC
    },
    provide: {
        username: "danieldavid",
        password: "12345678"

    },
    methods: {

        closePopup(data) {
            this.showPopup = false
            this.name = data.fullName
            this.age = data.age
            this.closedBy = true
        }
    }

}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>