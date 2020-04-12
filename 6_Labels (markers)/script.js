// LABEL - add("asdfgh") -> creating marker
var animation = gsap
  .timeline()
  .from("#wrapper", { duration: 1, opacity: 0 })
  .from(".text1", { duration: 3, opacity: 0, scale: 0, ease: "back" })
  .from(
    "#shapes .shape",
    {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.5,
      ease: "back"
    },
    "+=.5"
  )
  .add("test")
  .from(".text2", { duration: 0.5, opacity: 0, yPercent: 100 });

// animation.play("test");

document.getElementById("play").onclick = () => {
  animation.play();
};
document.getElementById("pause").onclick = () => animation.pause();
document.getElementById("reverse").onclick = () => animation.reverse();
document.getElementById("restart").onclick = () => animation.restart();

document.getElementById("test").onclick = () => animation.play("test");
