var tween = gsap.to(".shape", {
    x: 400,
    duration: 2,
    ease: "linear",
    paused: true
  });
  
document.getElementById("play").onclick = () => tween.play();
document.getElementById("pause").onclick = () => tween.pause();
document.getElementById("reverse").onclick = () => tween.reverse();
document.getElementById("restart").onclick = () => tween.restart();