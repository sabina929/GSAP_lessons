let animation = gsap.timeline();

let stagger = 1;

function init() {
  gsap.set(".demo", { autoAlpha: 1 });
  animation
    .from(".demo div", { y: 40, rotateX: 90, opacity: 0, stagger: stagger })
    .to(
      ".demo div",
      { y: -40, rotateX: -89, opacity: 0, stagger: stagger },
      stagger
    );
}
init();
