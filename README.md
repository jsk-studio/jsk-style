github: https://github.com/jsk-repo/jsk-style
demo: https://jsk-repo.github.io/scss-demo.github.io

## 全局滚动下比较好的弹层方案

1. pc web 环境下, 当弹层变化时调用 js 函数 `recordScrolled` 和 `resetScrolled` 
2. h5/webview 环境下
    - 设置需要递归填充的根元素, 如: `$default-scroll-overflow: ('#app')`
    - 如有需要设置 `$default-app-container` 默认选择器 `body`
    - 如有需要设置 `$default-scroll-lock` 默认 `.lock`, 当弹层变化时变更 `className` 到 `$default-app-container`
    - 弹层中的滚动元素需要设置 `@include scroll(column unlock)`

TODOLIST
1. h5/webview: 弹层中如果有 input 则滚动锁定失效
2. pc - h5/webview 响应式方案