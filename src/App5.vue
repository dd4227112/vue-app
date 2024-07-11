<template>
    <h1>Computed Properties </h1>
    <h1>Full name {{ firtstName }} {{ lastName }}</h1>
    <h1>Computed Full name {{ fullName }} </h1>
    <h1>Sum of Price {{ total }} </h1>

    <h3>List of Expensive Products</h3>
    <table style="width: 100%;">

        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
        <template v-for="item in items" :key="item.id">
            <tr v-if="item.price > 300">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
            </tr>

        </template>
    </table>
    <h3>List of Expensive Products(computed Property)</h3>
    <table style="width: 100%;">

        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
        </tr>

        <tr v-for="item in expensiveItems" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
        </tr>
    </table>
    <h3>computed Property and Settler</h3>
    <button @click="changeFullName">set name</button>
    <h1>WATCHERS</h1>
    <h3>Volume Tracker 0-20</h3>
    <h4>Current Volume = {{ volume }}</h4>
    <div>
        <button v-bind:disabled="isDisabled" isabled @click="volume += 2">
            Increase
        </button>
        <button @click="volume -= 2">
            Decrease
        </button>
    </div>
    Name: <input type="text" name="movi" v-model="movie">
    Tittle: <input type="text" name="movi" v-model="movieInfo.title">
    Actor: <input type="text" name="movi" v-model="movieInfo.actor">

    <div>
        <p>Movie Lists</p>
        <p v-for="movie in movieLists" :key="movie">{{ movie }} </p>
        <button @click="movieLists.push('The Dragon', 'Most Wanted')">add movie</button>
    </div>
    <Greet name="David Daniel" title="Software Developer" />
    <Greet name="Dani Daniel" title="Software Engineer" />
    <Greet :name="firtstName" :title="fullName" /> <!-- assigning dynamic props -->
    <ArticleComponent id="my_article" name="Fear me" title="Article Title" :likes="500" :isPublished="false" />
    <h1>Provide and Inject</h1>
    <AComponet />
</template>
<script>
import AComponet from "./components/AComponent.vue";
import ArticleComponent from './components/ArticleComponent.vue'
import Greet from './components/GreetComponent.vue'
export default {
    name: "App",
    data() {
        return {
            firtstName: "David",
            lastName: "Daniel",
            items: [
                {
                    id: 1, name: 'Desktop', price: 500
                },
                {
                    id: 2, name: 'Monitor', price: 340
                },
                {
                    id: 3, name: 'Keyboard', price: 500
                },
            ],
            volume: 0,
            isDisabled: false,
            movie: " David",
            movieInfo: {
                title: '',
                actor: ''
            },
            movieLists: [
                'expendable', 'Impossible Misson'
            ]
        }

    },
    components: {
        Greet,
        ArticleComponent,
        AComponet,
    },
    methods: {
        changeFullName() {
            return this.computedFullName = 'Alex Mwijaje';
        }
    },
    computed: {
        fullName() {
            return `${this.firtstName} ${this.lastName}`;
        },
        total() {
            return this.items.reduce((total, item) => (total = total + item.price), 10)
        },
        expensiveItems() {
            return this.items.filter(item => item.price > 200);
        },
        computedFullName: {
            get() {
                return `${this.firstName} ${this.lastName}`
            },
            set(value) {
                const names = value.split(" ")
                this.firtstName = names[0]
                this.lastName = names[1]
            }

        }
    },
    watch: {
        volume(newValue, oldValue) {
            if (newValue >= 15 && newValue <= 20 && newValue > oldValue) {
                alert('High Volume of ' + newValue + ' is not recommended for your ears')
                this.isDisabled = false
            }
            if (newValue >= 20) {
                this.isDisabled = true
            }
        },
        //immediate watcher run after the page load
        movie: {
            handler(value) {
                console.log(`Insert new data ${value}`)
            },
            immediate: true,
        },
        //deep  watcher force watcher to excute on object watcher method
        movieInfo: {
            handler(newValue) {
                console.log(`The full movie info is name ${this.movie} titled ${newValue.title} acted by ${newValue.actor}`)
            },
            deep: true
        },
        movieLists: {
            handler(value) {
                console.log(`The movie list is ${value}`)
            },
            deep: false
        }

    },
    provide: {
        password: "12345678",
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