let phrases = [
    "Text1",
    "Text2",
    "Text3",
    "Text4",
    "Text5",
    "Text6",
    "Text7",
    "Text8",
    "Text9",
    "Text10"
  ];
  
  let demo = document.querySelector("#demo");
  
  let animation = gsap.timeline({ repeat: 5, repeatDelay: 0.6 });
  
  function createLayers() {
    phrases.forEach((phrase) => {
      let layer = document.createElement("div");
      layer.innerHTML = phrase;
      demo.appendChild(layer);
    });
  }
  
  function animateText() {
    let layers = document.querySelectorAll("#demo div");
    layers.forEach((element, index) => {
      animation.fromTo(
        element,
        { opacity: 0, scale: 0 },
        {
          scale: 1,
          opacity: 1,
          repeat: 1,
          yoy0: true,
          yoyoEase: true,
          repeatDelay: 0.5
        }
      );
    });
    gsap.set("#demo", { visibility: "visible" });
  }
  
  createLayers();
  animateText();