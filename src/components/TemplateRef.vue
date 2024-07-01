<template>
    <div>
        <form action="" @submit.prevent="CreatePost">
            <div>
                <label for="username"> Username</label>
                <input type="text" v-model="postData.username" ref="usernameInput">
                <!--Ref used to creare a reference to html element-->
            </div>
            <div>
                <label for="password"> Password</label>
                <input type="text" v-model="postData.password">
            </div>

            <div>
                <button>save</button>
            </div>
        </form>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "TemplateRef",
    data() {
        return {
            postData: {
                username: '',
                password: '',
            }
        }
    },
    mounted() {
        this.$refs.usernameInput.focus();
    },
    methods: {
        CreatePost() {
            const data = this.postData
            axios.post('https://jsonplaceholder.typicode.com/posts', data).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>
div {
    margin: 15px;
}
</style>