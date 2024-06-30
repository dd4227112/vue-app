<template>
    <div>
        <h1 v-bind="$attrs">Props as object with options</h1>
        <h2> {{ title }} has {{ likes }} Number of likes, given name {{ name }}, is published? {{
            isPublished ? 'Yes' : 'No' }}</h2>

    </div>
</template>

<script>
export default {
    name: "ArticleComponent",
    props: {
        title: String,
        likes: Number,
        isPublished: Boolean,
        name: {
            type: String,
            required: true,
            default: "Fear Woman"

        },
    },
    inheritAttrs: false, //prevent default vue behaviour of bind non  prop attribute to the root component instead of a specific element
}
</script>

<style scoped></style>