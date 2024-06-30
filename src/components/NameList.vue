<template>
    <div>
        <h3 v-for="actor in actors" :key="actor.name">
            <slot :name="actor.name" :movies="actor.movies"></slot>
        </h3>
    </div>
</template>

<script>
export default {
    name: " NameList",
    data() {
        return {
            actors: [
                {
                    name: "Tom Hanks", movies: "Forrest Gump"
                },
                {
                    name: "Leonardo DiCaprio", movies: "Titanic"
                },
                {
                    name: "Meryl Streep", movies: "The Devil Wears Prada"
                }
            ]
        }
    }
} </script>

<style scoped></style>
