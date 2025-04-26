var crcs = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crcs.style.left = dets.x + "px"
    crcs.style.top = dets.y + "px"
    blur.style.left = dets.x - 190 + "px"
    blur.style.top = dets.y - 190 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crcs.style.scale = 3
        crcs.style.border = "1px solid #fff"
        crcs.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crcs.style.scale = 1
        crcs.style.border = "0px solid #ff9100"
        crcs.style.backgroundColor = "#ff9100"
    })
})

gsap.to("#nav",{
    backgroundColor :"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        /*markers:true,*/
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start:"top -25%",
        end:"top -70%",
        scrub: 2,

    }
})

gsap.from("#about img, #about-us",{
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger:"#about",
        scroller: "body",
        start: "top 70%",
        end: "65%",
        scrub: 2
    }
})

gsap.from(".card",{
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger:".card",
        scroller: "body",
        start: "top 70%",
        end: "65%",
        scrub: 0.8
    }
})

gsap.from("#colon1",{
    y:-70,
    x: -70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 70%",
        end: "top 75%",
        scrub: 3
    }

})

