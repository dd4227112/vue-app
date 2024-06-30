<template>
    <div class="card">
        <slot>Default Content</slot>
    </div>
    <div class="card">
        <div class="card-header">
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <slot>Default Content</slot> <!-- Leave this slot without a name and will be considered as defaul slot -->
        </div>
        <div class="card-footer">
            <slot name="footer">Default Content</slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: ['content']
}
</script>

<style scoped>
.card {
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 16px;
    margin-bottom: 20px;
    width: 200px;
}

.card:hover {
    box-shadow: 4px 8px 16px 4px rgb(0, 0, 0, 0.2);
}
</style>