<template>
<div class="scroll-column">
    <router-view />
</div>

</template>
<style lang="scss">
$default-scroll-overflow: ('#app');
@import '../rebase';
</style>
<style lang="scss" scoped>
@import '../core-dom';
.scroll-column {
    @include scroll(column, 20px 100px, 20px) {
        width: 100%;
    }
}
</style>