// gsap
//   .timeline()
//   .from("#wrapper", { duration: 1, opacity: 0 })
//   .from(".text1", { duration: 1, opacity: 0, scale: 0, ease: "back" })
//   .from("#shapes .shape", {
//     duration: 1.6,
//     opacity: 0,
//     y: 50,
//     stagger: 0.4,
//     ease: "back"
//   }, "+=1")
//   .from(".text2", { duration: 0.5, opacity: 0, yPercent: 100 }, "<+.8");

gsap
  .timeline()
  .from("#wrapper", { duration: 1, opacity: 0 })
  .from(".text1", { duration: 1, opacity: 0, scale: 0, ease: "back" })
  .from(
    "#shapes .shape",
    {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "back"
    },
    "+=.2"
  )
  .from(".text2", { duration: 0.5, opacity: 0, yPercent: 100 }, 1.6);
