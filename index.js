

function hasVerticalScrollbar() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
}
  
function hasHorizontalScrollbar() {
    return document.body.scrollWidth > (window.innerWidth || document.documentElement.clientWidth);
}
  
const scrolledPoint = { x: 0, y: 0 }
  
export function recordScrolled() {
    scrolledPoint.y = window.scrollY
    scrolledPoint.x = window.scrollX
    document.body.style.position = 'fixed'
    document.body.style.left = 0
    document.body.style.top = 0
    document.body.style.right = 0
    document.body.style.bottom = 0
    document.body.style.touchAction = 'none'

    if (scrolledPoint.x > 0) {
        document.body.style.left = `-${scrolledPoint.x}px`
    }
    if (scrolledPoint.y > 0) {
        document.body.style.top = `-${scrolledPoint.y}px`
    }
    if (hasVerticalScrollbar()) {
        document.body.parentNode.style.overflowY = 'scroll'
    }
    if (hasHorizontalScrollbar()) {
        document.body.parentNode.style.overflowX = 'scroll'
    }
}
  
export function resetScrolled() {
    document.body.setAttribute('style', '')
    document.body.parentNode.setAttribute('style', '')
    window.scrollTo(scrolledPoint.x, scrolledPoint.y)
    scrolledPoint.x = 0
    scrolledPoint.y = 0
}