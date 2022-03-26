// slider
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.banner-sec')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown'){
        changeSlide('down')
    }
})
function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

// wish list btn
let btn = document.getElementById('wishlist-btn');
btn.addEventListener('click', () =>{
   const wish = document.querySelector('.wishlist');
   wish.style.cssText = "visibility: visible; opacity: 1; display: block; position:fixed; bottom:0; left:0; transition: all 1s ease-in-out;"
} );

let clsbtn = document.getElementById('close-btn');
clsbtn.addEventListener('click', () => {
    const wish = document.querySelector('.wishlist');
    wish.style.cssText = "visibility: hidden; opacity: 0; display: none;"
} )