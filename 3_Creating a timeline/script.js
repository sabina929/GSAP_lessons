// SET() - CREATES A TWEEN W/O DURATION
// gsap.set("#wrapper", {x:50, y: 50});
// gsap.set("#wrapper", { scale: 0.7 });

// CREATING TIMELINE - .timeline().from().from().from()
gsap
  .timeline()
  .from("#wrapper", { opacity: 0, duration: 1 })
  .from(".text1", { opacity: 0, scale: 0, ease: "back" })
  .from("#shapes .shape", {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.6,
    ease: "back"
  })
  .from(".text2", { opacity: 0, xPercent: 100, duration: 0.6, ease: "back" });
