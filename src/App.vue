<template>
    <h1>TemplateRef</h1>
    <div>
        <TemplateRef />
    </div>
    <div>
        <PostList />
    </div>
    <div>
        <ResidentComponent />
    </div>
    <div>
        <CreatePost />
    </div>



</template>

<script>
import ResidentComponent from './components/ResidentComponent.vue';
import PostList from './components/PostList.vue';
import CreatePost from './components/CreatePost.vue';
import TemplateRef from './components/TemplateRef.vue'


export default {
    name: "App",
    components: {
        PostList,
        ResidentComponent,
        CreatePost,
        TemplateRef
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