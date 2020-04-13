// DELAY - relative position to the prev. tween. "+=number" or "-=number" or "<" - start at the same time as the prev. tween or "<0.2" - start 0.2s after prev. tween

var animation = gsap.timeline();

// animation
//   .to(".shape1", { duration: 0.5, x: 100 })
//   .to(".shape2", { duration: 2, x: 100 }, "+=1")
//   .to(".shape3", { duration: 1, x: 100 }, "<");

//ABSOLUTE TIME
// animation
//   .to(".shape1", { duration: 0.5, x: 100 })
//   .to(".shape2", { duration: 2, x: 100 },1)
//   .to(".shape3", { duration: 1, x: 100 },3);

animation
  .to(".shape1", { duration: 0.5, x: 100 })
  .to(".shape2", { duration: 2, x: 100 },1)
  .to(".shape3", { duration: 1, x: 100 },"<0.2");