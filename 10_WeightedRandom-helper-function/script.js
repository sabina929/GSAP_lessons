let svgNS = "http://www.w3.org/2000/svg";

function grid() {
  let svg = document.getElementById("grid");
  let rows = 10;
  let cols = 10;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let rect = document.createElementNS(svgNS, "rect");
      gsap.set(rect, {
        attr: { fill: "plum", width: 42, height: 42, x: c * 50, y: r * 50 }
      });
      svg.appendChild(rect);
    }
  }
}

grid();

function weightedRandom(collection, ease) {
  return gsap.utils.pipe(
    Math.random,
    gsap.parseEase(ease),
    gsap.utils.mapRange(0, 1, -0.5, collection.length - 0.5),
    gsap.utils.snap(1),
    (i) => collection[i]
  );
}

let colors = ["white", "plum", "BlueViolet"];
let randomColors = weightedRandom(colors, "power2");

let numbers = ["30", "40", "50", "60", "70", "80"];
let randomNumbers = weightedRandom(numbers, "power2");

gsap.fromTo(
  "rect",
  {
    fill: randomColors,
    width: randomNumbers,
    height: randomNumbers,
    x: randomNumbers * 20,
    y: randomNumbers * 50
  },
  {
    fill: randomColors,
    width: randomNumbers,
    height: randomNumbers,
    x: randomNumbers * 50,
    y: randomNumbers * 20
  }
);

// let animation = gsap.fromTo("rect",
// {
//   fill: randomColors,
//   width: randomNumbers,
//   height:randomNumbers,
//   x: randomNumbers * 20,
//   y: randomNumbers * 50
// },
//    {
//   fill: randomColors,
//   width: randomNumbers,
//   height:randomNumbers,
//   x: randomNumbers * 50,
//   y: randomNumbers * 20,
//   repeat:-1,
//   repeatDelay:.5,
//   yoyo: true,
//   paused: true
// });

// document.getElementById("change").onclick = () => {
//   let randomColors = weightedRandom(colors, "power3")
//   let randomNumbers = weightedRandom(numbers, "power2")

//   let animation = gsap.fromTo("rect",
// {
//   fill: randomColors,
//   width: randomNumbers,
//   height:randomNumbers,
//   x: randomNumbers * 20,
//   y: randomNumbers * 40
// },
//    {
//   fill: randomColors,
//   width: randomNumbers,
//   height:randomNumbers,
//   x: randomNumbers * 80,
//   y: randomNumbers * 20,
//   repeat:-1,
//   repeatDelay:0.1,
//   duration:.01,
//   yoyo: true,
//     ease:"power4.in"
//   // paused: true
// });
//   animation.play()
// }
