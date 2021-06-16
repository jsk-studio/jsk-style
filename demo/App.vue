<template>
<div class="scroll-column" :class="{ inline: !isRecord }">
    <div class="header">
        <a :href="isRecord ? pathname : pathname + '?record=1'" >CHANGE SCROLL MODE RECORD: {{isRecord}}</a>
    </div>
    <router-view />
</div>

</template>

<script setup>

import { provide, reactive } from 'vue'
import { recordScrolled, resetScrolled } from '../index.js'

const state = reactive({ lock: '' })
const isRecord = location.search.includes('record=1')
const pathname = location.pathname
if (isRecord) {
    // for test
    const style = document.createElement('style')
    style.innerText="html,body,#app{overflow:visible;}\n#app{height:auto}"
    document.head.appendChild(style)
}

const onLock = lock => {
    if (lock) {
        if (isRecord) {
            recordScrolled()
        } else {
            document.body.className = 'lock'
        }
    } else {
        if (isRecord) {
            resetScrolled()
        } else {
            document.body.className = ''
        }
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
    padding: 30px 0;
    &.inline {
        @include scroll(column, 10px 100px, 20px) {
            width: 100%;
        }
    }
}
.header {
    @include position(fixed, 0 0 x);
    @include set-box($white blue, 1px);
    height: 30px;
    z-index: 1;
}
</style>