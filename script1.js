


 var crsr = document.querySelector("#cursor")
  var blr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
crsr.style.left = dets.x+30 + "px"
crsr.style.top = dets.y+"px"
blr.style.left = dets.x - 250 +"px"
blr.style.top = dets.y - 250 +"px"
})

var h4all = document.querySelectorAll('#nav h4')
h4all.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
crsr.style.scale = 3
crsr.style.border ='0.5px solid #ffff'
crsr.style.backgroundColor = 'transparent'
    })
    elem.addEventListener('mouseleave', function(){
crsr.style.scale = 1
crsr.style.border ='0.2px solid #95c11e'
crsr.style.backgroundColor = 'transparent'
    })
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.to("#last h1" , {
    y:50,
    scrollTrigger:{
        trigger:"#last h1",
        scroller:"body",
        // markers:true,
        start:"top 25%",
        end:"top 20%",
        scrub:3
    }
})