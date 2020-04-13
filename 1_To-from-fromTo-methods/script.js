// GSAP.TO()
// gsap.to(".shape", {
//   stagger: 0.2,
//   x: 500,
//   y: 100,
//   scale: 2,
//   skewX: 40,
//   skewY: 40,
//   rotation: 135,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   duration: 2
// });

// GSAP.FROM()
// gsap.from(".shape", {
//   stagger: 0.2,
//   x: 500,
//   y: 100,
//   scale: 2,
//   skewX: 40,
//   skewY: 40,
//   rotation: 135,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   duration: 1
// });

// GSAP.FROMTO()
gsap.fromTo(
    ".shape",
    { x: 100, y: 0, opacity: 0.5 },
    {
      stagger: 0.2,
      x: 200,
      y: 10,
      opacity: 1,
      scale: 1.4,
      skewX: 40,
      skewY: 40,
      rotation: 135,
      backgroundColor: "blue",
      borderRadius: "50%",
      duration: 1
    }
  );
  
  // DELAY
  // gsap.to(".text1", {x:200, duration:2})
  // gsap.to(".text2", {x:200, duration:2, delay: 2})
  
  // REPEAT. For infinite loop write -1
  // gsap.to(".text1", {x:200, duration:1, repeat: -1, yoyo: true})
  // gsap.to(".text2", {x:200, duration:1})
  
  // EASING. bounce, bounce.in, bounce.inOut, elastic, linear, back, back(number)
  gsap.to(".text1", {
    x: 200,
    duration: 2,
    ease: "back(3)"
  });
  gsap.to(".text2", { x: 200, duration: 1, delay: 2, ease: "linear" });
  
  // STAGGER. each - as default; amount - sharing staggered times between elements; from: "end" / "center" / "edges"; ease: "power2" / "power4" / "power4.in" / "power1"

  // gsap.to("#shapes .sh", { y: -100, duration: 0.8, stagger: 0.2 });
  
  gsap.to("#shapes .sh", {
    y: -80,
    repeat: -1,
    yoyo: true,
    stagger: {
      amount: 0.5,
      from: "edges",
      ease: "elastic"
    }
  });
  
  // const shapes = document.querySelectorAll(".shape");
  
  // shapes.forEach(shape => {
  //   shape.addEventListener("mouseover", () =>{
  //     gsap.to(".shape", {
  //   stagger: 0.2,
  //   x: 500,
  //   y: 200,
  //   rotation: 360,
  //   fill: "yellow",
  //   duration: 2
  // });
  //   })
  // })
  