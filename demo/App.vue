<template>
<div class="scroll-v">
    <router-view />
</div>

</template>
<style lang="scss">
$default-scroll-overflow: ('#app');
@import '../lib/rebase.scss';

</style>
<style lang="scss" scoped>
@import '../lib/core-dom.scss';
.scroll-v {
    @include scroll-v(0);
}
</style>