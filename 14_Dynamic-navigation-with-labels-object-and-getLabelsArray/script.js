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
  
    .add("b0")
    .from(".b0", {})
    .addPause()
    .to(".b0", {opacity:0})
    
    .add("b1")
    .from(".b1", {rotation:-180})
    .addPause()
    .to(".b1", {opacity:0})
    
    .add("b2")
    .from(".b2", {rotation:180, y:-100})
    .addPause()
    .to(".b2", {opacity:0})
    
    .add("b3")
    .from(".b3", {rotation:180, y:100})
  
  // tl.play("b3")
  
  // tl.tweenTo("b3")
  
  // tl.tweenFromTo("b3", "b0")
  
  next.addEventListener("click", () => tl.play());
  prev.addEventListener("click", () => tl.reverse());
  
  // let labels = tl.labels
  // // console.log(labels)
  
  const getLabelsArray = (timeline) =>Object.keys(timeline.labels).map((v) => ({name: v, time: timeline.labels[v]})).sort((a, b) => a.time - b.time);
  

  let labels = getLabelsArray(tl);
  // console.log(labels)
  
  labels.forEach((label, index) => {
    // console.log(label.name);
  
    let dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    dot.setAttribute("data-label", label.name);
    document.querySelector(".dots").appendChild(dot);
    dot.addEventListener("click", function () {
      // console.log(this.getAttribute("data-label"));
      tl.play(this.getAttribute("data-label"));
    });
  });
  