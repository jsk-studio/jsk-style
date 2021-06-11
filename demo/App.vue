<template>
<div class="scroll-column">
    <router-view />
</div>

</template>
<script setup>
import { provide, reactive } from 'vue'
const state = reactive({ lock: '' })
const onLock = lock => {
    if (lock) {
        document.getElementById('app').className = 'lock'
    } else {
        document.getElementById('app').className = ''
    }
}
provide('onLock', onLock)
</script>
<style lang="scss">
$default-scroll-overflow: ('#app');
@import '../rebase';
</style>
<style lang="scss" scoped>
@import '../core-dom';
.scroll-column {
    @include scroll(column, 10px 100px, 20px) {
        width: 100%;
    }
}
</style>