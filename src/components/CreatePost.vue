<template>
    <div>
        <form action="" @submit.prevent="CreatePost">
            <div>
                <label for="userId"> User Id</label>
                <input type="text" v-model="postData.userId">
            </div>
            <div>
                <label for="title"> Title</label>
                <input type="text" v-model="postData.title">
            </div>
            <div>
                <label for="body"> Body</label>
                <input type="text" v-model="postData.body">
            </div>
            <div>
                <button>save</button>
            </div>
        </form>
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.id }}.{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <hr>
        </div>

    </div>
</template>

<script>
import loadDataMixin from '../mixins/loaddata'
import axios from 'axios'

export default {
    name: "CreatePost",
    data() {
        return {
            postData: {
                title: '',
                body: '',
                userId: ''
            },

        }
    },
    methods: {
        CreatePost() {
            const data = this.postData
            axios.post('https://jsonplaceholder.typicode.com/posts', data).then(() => {
                this.loadData();
            }).catch((error) => {
                console.log(error);
            })
        },

    },
    mixins:[loadDataMixin]
}
</script>

<style scoped>
div {
    margin: 15px;
}
</style>