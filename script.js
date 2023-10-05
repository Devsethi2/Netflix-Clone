var tl = gsap.timeline({
    scrollTrigger : {
        trigger: ".row1",
        scroll: "body",
        // markers: true,
        start: "top 70%",
        end: "bottom 10%"
    }
})

tl.from(".row1", {
    x: -80,
    duration: 1,
    opacity: 0
})


var tl2 = gsap.timeline({
    scrollTrigger : {
        trigger: ".row2",
        scroll: "body",
        // markers: true,
        start: "top 70%",
        end: "bottom 10%"
    }
})

tl2.from(".row2", {
    x: 80,
    duration: 1,
    opacity: 0
})

var tl3 = gsap.timeline({
    scrollTrigger : {
        trigger: ".row3",
        scroll: "body",
        // markers: true,
        start: "top 70%",
        end: "bottom 10%"
    }
})

tl3.from(".row3", {
    x: -80,
    duration: 1,
    opacity: 0
})

var tl4 = gsap.timeline({
    scrollTrigger : {
        trigger: ".row4",
        scroll: "body",
        // markers: true,
        start: "top 70%",
        end: "bottom 10%"
    }
})

tl4.from(".row4", {
    x: 80,
    duration: 1,
    opacity: 0
})

var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".faq",
        scroll: "body",
        // markers: true,
        start: "top 90%",
        end: "bottom 10%"
    }
})

tl5.from(".faq", {
    y: 80,
    opacity: 0,
    duration: .5,
})


let content = document.querySelector(".content")

let flag = 0
function showPara(){
    if(flag == 0){
        showPara.style.display = "none"
        flag = 1
    }else{
        showPara.style.display = "block"
        flag = 0
    }
}