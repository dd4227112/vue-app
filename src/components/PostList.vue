<template>
    <div>
        <h1>List of Posts with GET methods from api requests</h1>
        <button @click="loadData">Get Data</button>
        <h3>POSTS</h3>
        <p style="color: red;" v-if="errorMessage">{{ errorMessage }}</p>
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.id }}.{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <hr>
        </div>
    </div>
</template>

<script>
import loadDataMixin from '../mixins/loaddata'


export default {
    name: "PostList",
    mixins: [loadDataMixin]


    // created(){
    //     this.loadData();
    // }
}
</script>

<style scoped></style>