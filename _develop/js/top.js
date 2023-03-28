// console.log('top');$(function () {
//   const isSp = window.innerWidth <= 650 ? true : false;

//   // 全体のアニメーション構成に影響範囲が大きいため、pc,spで完全に切り分ける
//   if (!isSp) {
//     const controller = new ScrollMagic();

//     new ScrollScene({
//       triggerElement: "#p-concept",
//       triggerHook: 1,
//       duration: window.innerHeight * .5,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       $("#p-hero__contents").css({
//         opacity: 1 - (1 * p)
//       });
//     }).addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-concept",
//       duration: window.innerHeight * 2.5,
//       triggerHook: "onLeave",
//     }).setPin("#p-concept").addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-concept",
//       triggerHook: 0,
//       duration: window.innerHeight,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       $("#p-concept__image").css({
//         transform: `translate(${100 - p*100}%, 0)`
//       });
//     }).addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-concept",
//       duration: window.innerHeight * .8,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       $("#p-concept__inner").css({
//         opacity: (1 * p)
//       });
//     }).addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-detail",
//       triggerHook: 1,
//       offset: -(window.innerHeight * .4),
//       duration: window.innerHeight * .4,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       console.log(p)
//       $("#p-concept__contents").css({
//         opacity: 1 - (1 * p)
//       });
//       $("#p-concept__image").css({
//         opacity: 1 - (1 * p)
//       });
//     }).addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-detail",
//       duration: window.innerHeight * 2.3,
//       triggerHook: "onLeave",
//     }).setPin("#p-detail").addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-detail",
//       offset: window.innerHeight * .7,
//       duration: window.innerHeight * .6,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       $("#p-detail__image01").css({
//         opacity: (1 * p)
//       });
//       $("#p-detail__image02").css({
//         opacity: (1 * p)
//       });
//     }).addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-detail",
//       offset: window.innerHeight * .6,
//       duration: window.innerHeight,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       $("#p-detail__head01").css({
//         opacity: (1 * p)
//       });
//       $("#p-detail__wat01").css({
//         opacity: (1 * p)
//       });
//       $("#p-detail__text01").css({
//         opacity: (1 * p)
//       });
//       $("#p-detail__head01").css({
//         transform: `translate(0, ${1 - p}rem)`
//       });
//       $("#p-detail__wat01").css({
//         transform: `translate(0, ${1 - p}rem)`
//       });
//       $("#p-detail__text01").css({
//         transform: `translate(0, ${1 - p}rem)`
//       });
//       $("#p-detail__head02").css({
//         opacity: (1 * p)
//       });
//       $("#p-detail__wat02").css({
//         opacity: (1 * p)
//       });
//       $("#p-detail__text02").css({
//         opacity: (1 * p)
//       });
//       $("#p-detail__head02").css({
//         transform: `translate(0, ${1 - p}rem)`
//       });
//       $("#p-detail__wat02").css({
//         transform: `translate(0, ${1 - p}rem)`
//       });
//       $("#p-detail__text02").css({
//         transform: `translate(0, ${1 - p}rem)`
//       });
//     }).addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-detail",
//       offset: window.innerHeight * 2,
//       duration: window.innerHeight * .4,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       $("#p-detail__cover").css({
//         opacity: (1 * p)
//       });
//     }).addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-feature__contents",
//       duration: window.innerHeight * 4,
//       triggerHook: 0,
//       triggerHook: "onLeave",
//     }).setPin("#p-feature__contents").addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-feature__contents",
//       duration: window.innerHeight * 4,
//       triggerHook: 0,
//       triggerHook: "onLeave",
//     }).setPin("#p-detail__cover").addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-feature__contents",
//       duration: window.innerHeight * 4,
//       triggerHook: 0,
//       triggerHook: "onLeave",
//     }).setPin("#p-point").addTo(controller);


//     new ScrollScene({
//       triggerElement: "#p-feature__contents",
//       triggerHook: 0,
//       duration: window.innerHeight * .5,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       $("#p-feature__headArea").css({
//         opacity: (1 * p)
//       });
//     }).addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-feature__contents",
//       triggerHook: 0,
//       offset: window.innerHeight * .5,
//       duration: window.innerHeight * .6,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       $("#p-feature__iconItem01").css({
//         opacity: (1 * p)
//       });
//       $("#p-feature__iconItem01").css({
//         transform: `translate(0, ${1 - p}rem)`
//       });

//     }).addTo(controller);
//     new ScrollScene({
//       triggerElement: "#p-feature__contents",
//       triggerHook: 0,
//       offset: window.innerHeight * 1,
//       duration: window.innerHeight * .6,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       $("#p-feature__iconItem02").css({
//         opacity: (1 * p)
//       });
//       $("#p-feature__iconItem02").css({
//         transform: `translate(0, ${1 - p}rem)`
//       });

//     }).addTo(controller);
//     new ScrollScene({
//       triggerElement: "#p-feature__contents",
//       triggerHook: 0,
//       offset: window.innerHeight * 1.5,
//       duration: window.innerHeight * .6,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       $("#p-feature__iconItem03").css({
//         opacity: (1 * p)
//       });
//       $("#p-feature__iconItem03").css({
//         transform: `translate(0, ${1 - p}rem)`
//       });

//     }).addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-feature__contents",
//       triggerHook: 0,
//       offset: window.innerHeight * 3,
//       duration: window.innerHeight * .5,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       $("#p-feature__iconItem01").css({
//         opacity: (1 - 1 * p)
//       });
//       $("#p-feature__iconItem01").css({
//         transform: `translate(0, ${-p}rem)`
//       });
//       $("#p-feature__iconItem02").css({
//         opacity: (1 - 1 * p)
//       });
//       $("#p-feature__iconItem02").css({
//         transform: `translate(0, ${-p}rem)`
//       });
//       $("#p-feature__iconItem03").css({
//         opacity: (1 - 1 * p)
//       });
//       $("#p-feature__iconItem03").css({
//         transform: `translate(0, ${-p}rem)`
//       });
//       $("#p-feature__headArea").css({
//         opacity: (1 - 1 * p)
//       });
//     }).addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-feature__contents",
//       triggerHook: 0,
//       offset: window.innerHeight * 3.7,
//       duration: window.innerHeight * .5,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       // $("#p-detail__cover").css({opacity: (1- 1*p)});
//     }).addTo(controller);

//     new ScrollScene({
//       triggerElement: "#p-feature__contents",
//       triggerHook: 0,
//       offset: window.innerHeight * 4.1,
//       duration: window.innerHeight * .35,
//     }).on("progress", (prog) => {
//       const p = prog.progress;
//       $("#p-point").css({
//         opacity: (1 * p)
//       });
//     }).addTo(controller);

//     const pointImage01 = TweenMax.fromTo("#p-point__image01", .5, {
//       opacity: '0'
//     }, {
//       opacity: '1'
//     });
//     new ScrollScene({
//       triggerElement: "#p-point__image01",
//       triggerHook: 0.8,
//     }).setTween(pointImage01).addTo(controller);

//     const pointImage02 = TweenMax.fromTo("#p-point__image02", .5, {
//       opacity: '0'
//     }, {
//       opacity: '1'
//     });
//     new ScrollScene({
//       triggerElement: "#p-point__image02",
//       triggerHook: 0.8,
//     }).setTween(pointImage02).addTo(controller);

//     const pointImage03 = TweenMax.fromTo("#p-point__image03", .5, {
//       opacity: '0'
//     }, {
//       opacity: '1'
//     });
//     new ScrollScene({
//       triggerElement: "#p-point__image03",
//       triggerHook: 0.8,
//     }).setTween(pointImage03).addTo(controller);

//     const pointImage04 = TweenMax.fromTo("#p-point__image04", .5, {
//       opacity: '0'
//     }, {
//       opacity: '1'
//     });
//     new ScrollScene({
//       triggerElement: "#p-point__image04",
//       triggerHook: 0.8,
//     }).setTween(pointImage04).addTo(controller);

//     const pointFrame01 = TweenMax.fromTo("#p-point__frameInner01", .5, {
//       opacity: '0',
//       transform: 'translate(1rem, 0)'
//     }, {
//       opacity: '1',
//       transform: 'translate(0, 0)'
//     });
//     new ScrollScene({
//       triggerElement: "#p-point__frameInner01",
//       triggerHook: 0.8,
//     }).setTween(pointFrame01).addTo(controller);

//     const pointFrame02 = TweenMax.fromTo("#p-point__frameInner02", .5, {
//       opacity: '0',
//       transform: 'translate(-1rem, 0)'
//     }, {
//       opacity: '1',
//       transform: 'translate(0, 0)'
//     });
//     new ScrollScene({
//       triggerElement: "#p-point__frameInner02",
//       triggerHook: 0.8,
//     }).setTween(pointFrame02).addTo(controller);

//     const pointFrame03 = TweenMax.fromTo("#p-point__frameInner03", .5, {
//       opacity: '0',
//       transform: 'translate(1rem, 0)'
//     }, {
//       opacity: '1',
//       transform: 'translate(0, 0)'
//     });
//     new ScrollScene({
//       triggerElement: "#p-point__frameInner03",
//       triggerHook: 0.8,
//     }).setTween(pointFrame03).addTo(controller);

//     const pointFrame04 = TweenMax.fromTo("#p-point__frameInner04", .5, {
//       opacity: '0',
//       transform: 'translate(-1rem, 0)'
//     }, {
//       opacity: '1',
//       transform: 'translate(0, 0)'
//     });
//     new ScrollScene({
//       triggerElement: "#p-point__frameInner04",
//       triggerHook: 0.8,
//     }).setTween(pointFrame04).addTo(controller);

//   }
// });
