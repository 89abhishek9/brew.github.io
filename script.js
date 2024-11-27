









gsap.timeline({

    scrollTrigger:{
        trigger:".contain1",
        start:"90% 50%",
        end:"100% 0%",
        // markers:true,
        scrub:true,
    }
})
.to("#bee",{
      top:"80%",
      left:"15%",
      cameraOrbit: "90deg 75deg",


})


gsap.timeline({

    scrollTrigger:{
        trigger:".contain2",
        start:"90% 50%",
        end:"100% 0%",
        // markers:true,
        scrub:true,
    }
})
.to("#bee",{
      top:"170%",
      left:"15%",
      cameraOrbit: "50deg 75deg",


})



gsap.timeline({

    scrollTrigger:{
        trigger:".contain3",
        start:"70% 50%",
        end:"100% 0%",
        // markers:true,
        scrub:true,
    }
})
.to("#bee",{
      top:"270%",
      left:"15%",
      cameraOrbit: "0deg 79deg",


})

gsap.timeline({

    scrollTrigger:{
        trigger:".contain4",
        start:"70% 50%",
        end:"100% 0%",
        // markers:true,
        scrub:true,
    }
})
.to("#bee",{
      top:"390%",
      left:"-19%",
      cameraOrbit: "-360deg 76deg",


})

gsap.timeline({

    scrollTrigger:{
        trigger:".contain5",
        start:"70% 50%",
        end:"100% 0%",
        // markers:true,
        scrub:true,
    }
})
.to("#bee",{
      top:"500%",
      left:"-3%",
      cameraOrbit: "90deg 76deg", 


})