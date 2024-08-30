gsap.from(".nav-msg #uber,#in",{
    y:-100,
    delay:0.2,
    duration:0.5,
    stagger:0.2,
    opacity:0,
})

gsap.from(".nav-msg p",{
    y:-100,
    delay:0.2,
    duration:0.5,
    stagger:0.2,
    opacity:0,
})

gsap.from("#imgs",{
    y:-500,
    delay:0.5,
    duration:1.3,
    opacity:0
})

gsap.from(".btn-area",{
    stagger:0.3,
})

gsap.from("#lc,#ld",{
    x:-500,
    delay:0.5,
    duration:1.3,
    opacity:0,
    stagger:0.3
})

gsap.from("#trui,#trr",{
    x:-500,
    delay:0.5,
    duration:1.3,
    opacity:0,
  stagger:0.2
})

gsap.from("#textt",{
    y:-100,
    opacity:0,
    dealy:1,
    color:"black",
    duration:2,
})

gsap.from("#imgs2",{
    x:-500,
    delay:1,
    duration:2.3,
    opacity:0,
   scrollTrigger:{
    trigger:".container #imgs2",
    scroll:"body",
    
   }
        

    
})


gsap.from("#btn,#spy",{
    x:500,
    delay:1,
    duration:2.3,
    opacity:0,
  stagger:0.2,
  scrollTrigger:{
    trigger:".container #imgs2",
    scroll:"body",
    
   }
        
})