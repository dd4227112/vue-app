import axios from 'axios'
export default {
    data() {
        return {
            posts: [],
            errorMessage: ''
        }
    },
    methods: {
        loadData() {
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                this.posts = response.data
            }).catch((error) => { this.errorMessage = error })
        }
    },
}