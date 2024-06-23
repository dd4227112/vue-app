<template>
  <!--Conditional rendering-->
  <h2 v-bind:style="headingObject">Conditional rendering</h2>
  <h3>1. V-IF</h3>
  <h3 v-if="number === 10">The number is greater than 10</h3>
  <template v-if="display"> <!--Wrap the content into template tag instead of div which may cause css conflict-->
    <h2>David Daniel</h2>
    <h3>Software Developer @ shulessoft LTD</h3>
  </template>
  <h3>2. V-ELSE</h3>
  <h3 v-if="number >= 10">The number is greater or equal 10</h3>
  <h3 v-else>The number is not equal to 10</h3>
  <h3>3. V-ELSE-IF</h3>
  <h3 v-if="number > 10">The number is greater than 10</h3>
  <h3 v-else-if="number < 10">The number is less that 10</h3>
  <h3 v-else-if="number == 10">The number is equal to 10</h3>
  <h3 v-else>The number is incorrect</h3>
  <h2>4. V-SHOW</h2>
  <div v-show="showElements">
    <h3>Company: ShuleSoft LTD</h3>
    <h3>Location: Mbezi Beach- Dar Es Salaam</h3>
  </div>
  <!--List  rendering-->
  <h2 v-bind:style="headingObject">List rendering</h2>
  <h3>1. v-for directive</h3>
  <h3>1.1 Array of Strings </h3>

  <h5 v-for="string in arrayString" :key="string">{{ string }}</h5>
  <h5 v-for="(string, index) in arrayString" :key="string"> {{ index }} - {{ string }}</h5>
  <h3>1.2 Array of Objects </h3>
  <h5 v-for="(arrayObject) in arrayObjects" :key="arrayObject.name"> {{ arrayObject.name }} has {{ arrayObject.age }}
    year
    old
    and got grade {{ arrayObject.grade }}</h5>
  <template v-for="(arrayStrings) in arrayString" :key="arrayStrings">
    <h5>{{ arrayStrings }}</h5>
    <input type="text" placeholder="name">
    <hr>
  </template>
  <button @click="shuffle">submit</button>

  <h3>1.2 Array of Arrays </h3>
  <template v-for="actor in actors" :key="actor.name">
    <h3>{{ actor.name }}</h3>
    <h5 v-for="movie in actor.movies" :key="movie">{{ movie }}</h5>
  </template>
  <h3>1.3 Object key value pair </h3>
  <h4 v-for="(info, x, index) in myInfos" :key="info"> {{ index }} {{ x }} {{ info }}</h4>
  <!-- Conditional list rendering -->
  <h2 v-bind:style="headingObject"> Conditional List rendering</h2>
  <template v-for="(arrayStrings) in arrayString" :key="arrayStrings">
    <h5 v-if="!arrayStrings.includes('php')">{{ arrayStrings }}</h5>
  </template>

</template>



<script>
import _ from "lodash"
export default {
  name: "App",
  components: {},
  methods: {
    shuffle() {
      this.arrayString = _.shuffle(this.arrayString);
    }
  },
  data() {
    return {
      number: 10,
      display: true,
      showElements: false,
      headingObject: {
        textAlign: 'center',
        color: '#2c3e50',
        textTransform: 'uppercase'
      },
      arrayString: ['css', 'html', 'java', 'php', 'go'],
      arrayObjects: [
        { name: "Alice", age: 20, grade: "B" },
        { name: "Bob", age: 21, grade: "A" },
        { name: "Charlie", age: 19, grade: "A" }
      ],
      actors: [
        {
          name: "Tom Hanks",
          movies: ["Forrest Gump", "Cast Away", "Saving Private Ryan"]
        },
        {
          name: "Leonardo DiCaprio",
          movies: ["Titanic", "Inception", "The Revenant"]
        },
        {
          name: "Meryl Streep",
          movies: ["The Devil Wears Prada", "Sophie's Choice", "Mamma Mia!"]
        }
      ],
      myInfos: {
        name: "David Daniel",
        channel: "Youtube",
        course: "Vue Js 3"
      },
    }
  },
};
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
