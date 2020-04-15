// let targets = new SplitText("p", { type: "chars" });
// // console.log(targets.chars[0].textContent);

// // elastic(amp, freq)
// gsap.from(targets.chars, {
//   y: 50,
//   duration: 2.4,
//   stagger: 0.03,
//   ease: "elastic(2.4, 0.0)"
// });


Splitting();
// gsap.from(".parag1.splitting .char", {
//   y: 50,
//   duration: 2.4,
//   stagger: 0.03,
//   ease: "elastic(2.4, 0.0)"
// });
// gsap.from(".parag2.splitting .char", {
//   y: 50,
//   duration: 0.5,
//   stagger: 0.03,
//   ease: "elastic(4, 1.0)"
// });
// gsap.from(".parag3.splitting .char", {
//   y: 100,
//   duration: 1,
//   stagger: 0.08,
//   ease: "elastic(2, 1)"
// });

gsap.timeline()
    .from(".parag1.splitting .char", {
      y: 50,
      duration: 2.4,
      stagger: 0.03,
      ease: "elastic(2.4, 0.0)"
    })
    .from(".parag2.splitting .char", {
      y: 50,
      duration: 0.5,
      stagger: 0.03,
      ease: "elastic(4, 1.0)"
    }, "<.8")
    .from(".parag3.splitting .char", {
      y: 100,
      duration: 1,
      stagger: 0.08,
      ease: "elastic(2, 1)"
    }, "<.8");