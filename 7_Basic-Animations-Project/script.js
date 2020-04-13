var tl = gsap.timeline();

tl.from("#demo", { opacity: 0 })
  .from("h1", { opacity: 0, x: 40 })
  .from("h2", { opacity: 0, x: -40 })
  .from("p", { opacity: 0, y: 20 })
  .from("#shapes > .shape", {
    scale: 0,
    stagger: 0.1,
    opacity: 0,
    transformOrigin: "50% 50%"
  });
