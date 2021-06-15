<template>
    <router-link to="/scroll">
        1.Vertial Scroll Not Overflow
    </router-link>
    <router-link to="/scroll">
        2.Vertial Scroll Overflow
    </router-link>
    <div>3. Flow Layout</div>
    <div class="flow">
        <div v-for="(_, i) in list.slice(0, 8)">{{i + 1}}</div>
    </div>
    <div>4. Flow Fill Layout And Reactive (Auto calcute height to equal width )</div>
    <div class="flow-fill">
        <div v-for="(_, i) in list.slice(0, 7)">
            <div class="flow__fill">{{ i + 1 }}</div>
            <div v-if="i === 0" class="flow-bottom overflow-1">
                Bottom Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow
            </div>
            <div v-else-if="i === 1" class="flow-bottom overflow-2">
                Bottom Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow
            </div>
            <div v-else class="flow-bottom">Bottom</div>
        </div>
    </div>
    <div>5. Theme Base</div>
    <div class="theme-app">
        <div class="theme-text">Theme Text</div>
    </div>
    <div>6. Theme Light</div>
    <div class="theme-app light">
        <div class="theme-text">Theme Text</div>
    </div>
    <div>7. Theme Dark</div>
    <div class="theme-app dark">
        <div class="theme-text">Theme Text</div>
    </div>
    <div>8. Static Animation</div>
    <div class="static-anim">
        <div class="static-image-anim" />
        <div class="static-image-anim-rotate" />
    </div>
    <div>9. Image Animation</div>
    <div class="image-anim">
        <div class="image-anim-vertial" />
        <div class="image-anim-5x4" />
    </div>
    <div>10. Buttons, Labels</div>
    <div class="buttons-labels">
        <div class="btn-1">Button1</div>
        <span class="label-1">Label1</span>
        <span class="label-1">Label1</span>
        <span class="label-1">Label1</span>
        <span class="text-1">Text1</span>
    </div>
    <div>11. Scroll Row Overflow</div>
    <div class="scroll-row">
        <div v-for="(_, i) in list.slice(0, 8)">{{i + 1}}</div>
    </div>
    <div>12. Scroll Row Not Overflow</div>
    <div class="scroll-row">
        <div v-for="(_, i) in list.slice(0, 3)">{{i + 1}}</div>
    </div>
    <div>13. Full Screen Modal (For Test)</div>
    <div class="full-screen-modal">
        <span @click="show('modal-scroll')">SHOW_SCROLL_MODAL</span>
        <span @click="show('modal-scroll-notouch')">SHOW_SCROLL_MODAL_NOTOUCH</span>
    </div>
   
    <div v-if="state.active === 'modal-scroll'" class="modal-backdrop" @click="close">
        <div class="modal-scroll" @click.stop="">
            <div v-for="(_, i) in list.slice(0, 8)">{{i + 1}}</div>
        </div>
    </div>

    <div v-if="state.active === 'modal-scroll-notouch'" class="modal-touchstop">
        <div v-if="state.active === 'modal-scroll-notouch'" class="modal-backdrop-notouch" @click="close">
            <div class="modal-scroll" @click.stop="">
                <div v-for="(_, i) in list.slice(0, 8)">{{i + 1}}<input /></div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { reactive, useContext, inject } from 'vue';
const list = new Array(20)
const state = reactive({ active: '' })
const onLock = inject('onLock')

const show = (name) => {
    state.active = name
    onLock(true)
}
const close = (name) => {
    state.active = ''
    onLock(false)
}
</script>

<style lang="scss" scoped>
$default-theme-container: '.theme-app';
$default-colors: (
    m-red: blue,
    // red: yellow,
);
@import '../../core-dom';

.flow {
    background-color: #ccc;
    padding: 5px 10px;
    @include flow(3, 10px 20px) {
        border: 1px solid red;
    }
}

.flow-fill {
    padding: 5px;
    padding-bottom: 35px;
    
    @include flow(3, 5px 35px, fill) {
        background-color: #ccc;
       
    }
    @include screen(pad) {
        @include flow(4, 5px 35px, fill);
    }
    @include screen(pc-small) {
        @include flow(5, 5px 35px, fill);
    }
    @include screen(pc) {
        @include flow(6, 5px 35px, fill);
    }
    @include screen(pc-wide) {
        @include flow(7, 5px 35px, fill);
    }

    .flow-bottom {
        @include position(absolute, 100% x x);
        &.overflow-1 {
            @include text-overflow-font(11px, 1);
        }
        &.overflow-2 {
            @include text-overflow(2);
        }
    }
}
.theme-text {
    @include set-font(16px red);
    @include theme(dark) {
        @include set-font(#fff);
        @include set-box(
            linear-gradient(to right, #000, $black-0) #000, 
            0 3px,
        );
    }
    @include theme(light) {
        @include set-font(#000);
        @include set-box(#ccc #666, 0 2px);
    }
}

.static-image-anim {
    $rate: 0.8;
    display: inline-block;
    @include anim-image-static(60px * $rate 100px * $rate, ease-in-out);
    @include static-anim((
        (background-position: 0 0),
        (background-position: 0 100%),
        (background-position: 0 0),
    ));
    @include set-animation(1s, infinite);
    @include set-image-url('../assets/arrow.png');
}

.static-image-anim-rotate {
    $rate: 0.8;
    display: inline-block;
    @include anim-image-static(60px * $rate 100px * $rate, linear);
    @include static-anim((
        (background-position: 0 0, transform: rotate(0)),
        (background-position: 0 100%, transform: rotate(360deg)),
        (background-position: 0 0, transform: rotate(720deg)),
    ));
    @include set-animation(1s, infinite);
    @include set-image-url('../assets/arrow.png');
}

.image-anim-vertial {
    $rate: 0.2;
    display: inline-block;
    @include anim-image(60vw * $rate 100vw * $rate, 12, column);
    @include set-animation(1s, infinite);
    @include set-image-url('../assets/arrow-v.png');
}

.image-anim-5x4 {
    $rate: 1;
    display: inline-block;
    @include anim-image(122px * $rate 162.5px * $rate, 5 4, row);
    @include set-animation(1s, infinite);
    @include set-image-url('../assets/fire-5x4.jpg');
}
.buttons-labels {
    background-color: #ccc;
    margin: 20px;
}
.btn-1 {
    @include btn(300px 51px, m-red blue);
    // display: block;
}
.labels-wrapper {
    background-color: #ccc;
    // overflow: hidden;
}
.label-1 {
    @include label(5px 7px, red blue, x 1px);
}
.text-1 {
    @include text(m-red);
}
.scroll-row {
    @include scroll-nobar(row, 0, 20px) {
        background-color: #ccc;
        width: 100px;
        height: 100px;
    }
}
.full-screen-modal {
    > span {
        display: inline-block;
        padding: 5px;
        margin: 5px;
        border: 1px solid #666;
    }
}
.modal-touchstop {
    @include position(fixed, 0);
    touch-action: none;
}

.modal-backdrop-notouch {
    @include position(absolute, 0);
    background-color: rgba($black, 0.3);
    @include flex(column, center);
}
.modal-backdrop {
    @include position(fixed, 0);
    background-color: rgba($black, 0.3);
    @include flex(column, center);
}
.modal-scroll {
    @include scroll-nobar(column unlock, 25px, 20px) {
        background-color: $white;
        width: 200px;
        height: 200px;
    }
    
}
</style>
