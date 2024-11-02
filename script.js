
document.addEventListener("DOMContentLoaded", ()=>{

    gsap.to("#quote", {
        x:50,
        x:-50,
        duration: 2,
        ease: "none",
        yoyo:true,
        repeat:Infinity
      });
})

gsap.registerPlugin(Draggable)

Draggable.create("img", {
    inertia:true,
    type:"rotation"
})



 
