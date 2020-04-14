gsap.registerPlugin()
let scaleDistributor = gsap.utils.distribute({
    base: 0.2,
    amount: 1.5,
    from: "center",
    ease: "power1"
  });
  
  let d = gsap.utils.distribute({
    base: 0.5,
    amount: 0.5,
    from: "edges",
    ease: "power2.in"
  });
  
  let distanceDistributor = gsap.utils.distribute({
    base: 2,
    amount: 0.5,
    from: "edges",
    ease: "power4.in"
  });
  
  function weightedRandom(collection, ease) {
    return gsap.utils.pipe(
      Math.random,
      gsap.parseEase(ease),
      gsap.utils.mapRange(0, 1, -0.5, collection.length - 0.5),
      gsap.utils.snap(1),
      (i) => collection[i]
    );
  }
  
  let colors = ["red", "green", "blue"];
  let randomColors = weightedRandom(colors, "bounce");
  
  gsap.to(".letter", {
    opacity: d,
    scaleY: distanceDistributor,
    color: randomColors,
    duration: 0.1,
    stagger: 0.1,
    repeat: -1,
    repeatDelay: 0.2,
    ease: "power1",
    yoyo: true
  });
  
  gsap.to(".splitted", {
    duration: 3,
    text: "Hello I am splitted text",
    ease: "bounce.in",
    repeat: -1,
    repeatDelay: 1
  });
  