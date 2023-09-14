<template>
    <h1>Todolist</h1>
    <button @click="onClick">toggle</button>
    <transition-expand>
        <div v-if="toggle" class="test"></div>
    </transition-expand>
    <h2>test text</h2>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const toggle = ref(false)
const onClick = () => {
    toggle.value = !toggle.value
}
</script>

<style lang="scss">
.test {
    border: 1px solid #000;
    height: 100px;
    width: 100px;
}
</style>
