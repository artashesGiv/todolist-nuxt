<template>
    <section class="completed-task-page container">
        <ui-page-title title="Completed Task" />
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'Completed Tasks',
    position: 3,
    icon: 'check-fill' as Icons,
})

useHead({
    title: 'Completed Tasks',
    meta: [{ name: 'description', content: 'Completed tasks pages' }],
})
</script>

<style scoped lang="scss"></style>
