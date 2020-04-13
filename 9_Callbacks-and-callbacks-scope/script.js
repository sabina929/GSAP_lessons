// GSAP animation callbacks:
// onComplete | onCompleteParams
// onRepeat | onRepeatParams
// onReverseComplete | onReverseCompleteParams
// onStart | onStartParams
// onUpdate | onUpdateParams

// ----------------------
// onComplete | onCompleteParams
// ----------------------

//  gsap.to(".text", {
//     x: 200,
//     duration: 2,
//     onComplete: onComplete,
//     onCompleteParams: ["Hello", 2],

//   });


//   // DON'T USE ARROW FUNCTION!!!
//   function onComplete(msg, num) {
//     console.log(msg, num)

//     // CALBACK SCOPE
//     console.log(this) //OUR TWEEN
//     console.log(this.targets())
//     console.log(this.targets()[0])
//   }


  class Text {
    constructor() {
      this.animation = gsap.to(".text", {scale:4, onComplete:onComplete, callbackScope: this})
      this.message = "Hello I am Text"

      function onComplete() {
        console.log("onComplete")
        // console.log(this) // OUR TWEEN
        // AFTER ADDING CALLBACKSCOPE: THIS
        console.log(this) // OUR TEXT CLASS
        console.log(this.message)
        console.log(this.animation.duration())
        console.log(this.animation.repeat())
      }
    
    }
  }

  let t = new Text()