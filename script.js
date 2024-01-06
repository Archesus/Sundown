// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var elemC = document.querySelector('.elem-container')
var photoC = document.querySelector('.fixed-image')
elemC.addEventListener('mouseenter',() => {
    photoC.style.display = "block"
})
elemC.addEventListener('mouseleave',() => {
    photoC.style.display = "none"
})

photoC.addEventListener('mouseenter',()=> {
    photoC.style.display = "block"
})

//Not recommened
// var elem1 = document.querySelector('#elem1')
// elem1.addEventListener('mouseenter',() => {
//     var img = elem1.getAttribute('data-image')
//     photoC.style.backgroundImage = `url(${img})`
// })

// var elem2 = document.querySelector('#elem2')
// elem2.addEventListener('mouseenter',() => {
//     var img2 = elem2.getAttribute('data-image')
//     photoC.style.backgroundImage = `url(${img2})`
// })

// var elem3 = document.querySelector('#elem3')
// elem3.addEventListener('mouseenter',() => {
//     var img3 = elem3.getAttribute('data-image')
//     photoC.style.backgroundImage = `url(${img3})`
// })

// var elem4 = document.querySelector('#elem4')
// elem4.addEventListener('mouseenter',() => {
//     var img4 = elem4.getAttribute('data-image')
//     photoC.style.backgroundImage = `url(${img4})`
// })

// var elem5 = document.querySelector('#elem5')
// elem5.addEventListener('mouseenter',() => {
//     var img5 = elem5.getAttribute('data-image')
//     photoC.style.backgroundImage = `url(${img5})`
// })

// var elem6 = document.querySelector('#elem6')
// elem6.addEventListener('mouseenter',() => {
//     var img6 = elem6.getAttribute('data-image')
//     photoC.style.backgroundImage = `url(${img6})`
// })

// var elem7 = document.querySelector('#elem7')
// elem7.addEventListener('mouseenter',() => {
//     var img7 = elem7.getAttribute('data-image')
//     photoC.style.backgroundImage = `url(${img7})`
// })

var elems = document.querySelectorAll('.elem')
elems.forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
        var image = e.getAttribute('data-image')
        photoC.style.backgroundImage = `url(${image})`
    })
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    // centeredSlides: true,
    spaceBetween: 50,
});

var menu = document.querySelector('nav h3')
var fullScr = document.querySelector('.full-scr')
var logo = document.querySelector('.logo img')
var nav = document.querySelector('nav')
var flag = 0
menu.addEventListener('click',() => {
    if(flag == 0){
        fullScr.style.top = "0%"
        logo.style.opacity = "0"
        nav.style.borderBottom = "1px solid grey"
        flag = 1
    }
    else{
        fullScr.style.top = "-100%"
        logo.style.opacity = "1"
        nav.style.borderBottom = "none"
        flag = 0
    }
})

var loader = document.querySelector('.loader')
var tl = gsap.timeline()
tl.to(loader,{
    height: "0vh",
    delay: 2.4,
    duration: 1,
    ease: "expo.inOut"
})