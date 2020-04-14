let select = (selector) => {
    return document.querySelector(selector);
  };
  
  let next = select("#next");
  let prev = select("#prev");
  
  let tl = gsap
    .timeline({
      paused: true,
      defaults: { duration: 1, scale: 0 }
    })
  
    .from(".b0", {scale:1})
  .addPause()
    .to(".b0", { opacity: 0 })
  
    .from(".b1", { rotation: -180 })
  .addPause()
    .to(".b1", { opacity: 0 })
  
    .from(".b2", { rotation: -180, y: -100 })
  .addPause()
    .to(".b2", { opacity: 0 })
  
    .from(".b3", { rotation: 180, y: 100 });
  // .to(".b3", {opacity:0})
  
  next.addEventListener("click", () => tl.play());
  prev.addEventListener("click", () => tl.reverse());
  