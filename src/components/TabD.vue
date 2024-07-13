<template>
    <div>
        <h1>Tab D content</h1>
        <h4>Initial Inject - {{ pUsername }}</h4>
        <h4>Normal Inject - {{ username }}</h4>

        <h4>Refs Inject - {{ count }}</h4>
        <h4>Reactive Inject - {{ lusername }} {{ fusername }}</h4>
        <button @click="incrementCount">Increment from Child</button>

    </div>
</template>

<script>
import { inject, toRefs } from 'vue';

export default {


    name: "TabD",
    inject: ['pUsername'],
    setup() {
        const username = inject('prUsername', 'mugisha')
        const count = inject('count', 0)
        const user = inject('userdata', { lusername: 'mimi', fusername: 'wewe' })
        const incrementCount = inject('incrementCount')

        return {
            username,
            count,
            ...toRefs(user),
            incrementCount
        }
    },

}
</script>

<style scoped></style>