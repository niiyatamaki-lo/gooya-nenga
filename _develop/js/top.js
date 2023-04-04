$(function () {
  const location = window.location.pathname;

  if ((location == '/') || (location == '/index.html') || (location == '/index.html/')) {
    const isSp = window.innerWidth <= 650 ? true : false;

    // 全体のアニメーション構成に影響範囲が大きいため、pc,spで完全に切り分ける
    if (isSp) {
      /**
       * curtain effect
       */
      function activeAnimate() {
        $('.js-fade, .js-fade__bottom').each(function () {
          const scrollTop = $(window).scrollTop();
          const triggerTop = $(this).offset().top;
          const windowHeight = $(window).height();

          if ($(this).hasClass('js-fade')) {
            if (scrollTop > triggerTop - windowHeight / 1.3) {
              $(this).addClass('is-fade');
            } else {
              $(this).removeClass('is-fade');
            }
          }

          if ($(this).hasClass('js-fade__bottom')) {
            if (scrollTop > triggerTop - windowHeight / 1.3) {
              $(this).addClass('is-fade__bottom');
            } else {
              $(this).removeClass('is-fade__bottom');
            }
          }
        });
      }
      $(window).on('scroll', activeAnimate);
    }

    if (!isSp) {
      const controller = new ScrollMagic();

      new ScrollScene({
        triggerElement: "#l-wrap",
        triggerHook: 0,
        offset: 0,
        duration: window.innerHeight * 1,
        triggerHook: "onLeave",
      }).setPin("#p-hero").addTo(controller);

      new ScrollScene({
        triggerElement: "#l-wrap",
        triggerHook: 0,
        offset: 0,
        duration: window.innerHeight * .3,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#p-hero").css({
          opacity: 1 - (1 * p)
        });
        $("#bg-white").css({
          opacity: 1 - (1 * p)
        });
        $("#l-header__contents").css({
          background: `rgba(255, 255, 255, ${(1 * p)})`
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#l-wrap",
        triggerHook: 0,
        offset: window.innerHeight * .4,
        duration: window.innerHeight,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#bg-black").css({
          opacity: (1 * p)
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-concept",
        triggerHook: 0,
        offset: 0,
        duration: window.innerHeight * 7.5,
        triggerHook: "onLeave",
      }).setPin("#p-concept").addTo(controller);


      new ScrollScene({
        triggerElement: "#p-concept",
        triggerHook: 0,
        offset: 0,
        duration: window.innerHeight * 1,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#p-concept__inner").css({
          opacity: (1 * p)
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-concept",
        triggerHook: 0,
        offset: window.innerHeight * .9,
        duration: window.innerHeight * 1,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#p-concept__textArea").css({
          transform: `translate(0, ${100 - (p*100)}px)`
        });
        $("#p-concept__textArea").css({
          opacity: (1 * p)
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-concept",
        triggerHook: 0,
        offset: window.innerHeight * .9,
        duration: window.innerHeight * 1,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#p-concept__image").css({
          transform: `translate(${100 - p*100}%, 0)`
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-concept",
        triggerHook: 0,
        offset: window.innerHeight * 3.3,
        duration: window.innerHeight * .8,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#p-concept__inner").css({
          opacity: 1 - (1 * p)
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-concept",
        triggerHook: 0,
        offset: window.innerHeight * 4.5,
        duration: window.innerHeight * .5,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#bg-white").css({
          opacity: (1 * p)
        });
        $("#bg-black").css({
          opacity: 1 - (1 * p)
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-concept",
        triggerHook: 0,
        offset: window.innerHeight * 6.5,
        duration: window.innerHeight * .8,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#p-concept__image").css({
          opacity: 1 - (1 * p)
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-detail",
        triggerHook: 0,
        offset: 0,
        duration: window.innerHeight * 5,
        triggerHook: "onLeave",
      }).setPin("#p-detail").addTo(controller);

      new ScrollScene({
        triggerElement: "#p-detail",
        triggerHook: 0,
        offset: 0,
        duration: window.innerHeight * .6,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#p-detail__item01").css({
          opacity: (1 * p)
        });
        $("#p-detail__item02").css({
          opacity: (1 * p)
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-detail",
        triggerHook: 0,
        offset: window.innerHeight,
        duration: window.innerHeight * 1,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#p-detail__head01").css({
          opacity: (1 * p)
        });
        $("#p-detail__wat01").css({
          opacity: (1 * p)
        });
        $("#p-detail__text01").css({
          opacity: (1 * p)
        });
        $("#p-detail__head01").css({
          transform: `translate(0, ${100 - p*100}px)`
        });
        $("#p-detail__wat01").css({
          transform: `translate(0, ${100 - p*100}px)`
        });
        $("#p-detail__text01").css({
          transform: `translate(0, ${100 - p*100}px)`
        });
        $("#p-detail__head02").css({
          opacity: (1 * p)
        });
        $("#p-detail__wat02").css({
          opacity: (1 * p)
        });
        $("#p-detail__text02").css({
          opacity: (1 * p)
        });
        $("#p-detail__head02").css({
          transform: `translate(0, ${100 - p*100}px)`
        });
        $("#p-detail__wat02").css({
          transform: `translate(0, ${100 - p*100}px)`
        });
        $("#p-detail__text02").css({
          transform: `translate(0, ${100 - p*100}px)`
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-detail",
        triggerHook: 0,
        offset: window.innerHeight * 4,
        duration: window.innerHeight * 1,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#bg-white").css({
          opacity: 1 - (1 * p)
        });
        $("#bg-black").css({
          opacity: (1 * p)
        });
        $("#p-detail__item01").css({
          opacity: 1 - (1 * p)
        });
        $("#p-detail__item02").css({
          opacity: 1 - (1 * p)
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-feature",
        triggerHook: 0,
        offset: 0,
        duration: window.innerHeight * 8.5,
        triggerHook: "onLeave",
      }).setPin("#p-feature").addTo(controller);

      new ScrollScene({
        triggerElement: "#p-feature",
        triggerHook: 0,
        offset: 0,
        duration: window.innerHeight * .9,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#p-feature__headArea").css({
          opacity: (1 * p)
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-feature",
        triggerHook: 0,
        offset: window.innerHeight * 2,
        duration: window.innerHeight * 1.5,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#p-feature__iconItem01").css({
          opacity: (1 * p)
        });
        $("#p-feature__iconItem01").css({
          transform: `translate(0, ${100 - p*100}px)`
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-feature",
        triggerHook: 0,
        offset: window.innerHeight * 2.7,
        duration: window.innerHeight * 1.5,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#p-feature__iconItem02").css({
          opacity: (1 * p)
        });
        $("#p-feature__iconItem02").css({
          transform: `translate(0, ${100 - p*100}px)`
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-feature",
        triggerHook: 0,
        offset: window.innerHeight * 3.4,
        duration: window.innerHeight * 1.5,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#p-feature__iconItem03").css({
          opacity: (1 * p)
        });
        $("#p-feature__iconItem03").css({
          transform: `translate(0, ${100 - p*100}px)`
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-feature",
        triggerHook: 0,
        offset: window.innerHeight * 6,
        duration: window.innerHeight * 1,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#p-feature__headArea").css({
          opacity: 1 - (1 * p)
        });
        $("#p-feature__headArea").css({
          transform: `translate(0, ${-p*30}px)`
        });
        $("#p-feature__iconItem01").css({
          opacity: 1 - (1 * p)
        });
        $("#p-feature__iconItem01").css({
          transform: `translate(0, ${-p*30}px)`
        });
        $("#p-feature__iconItem02").css({
          opacity: 1 - (1 * p)
        });
        $("#p-feature__iconItem02").css({
          transform: `translate(0, ${-p*30}px)`
        });
        $("#p-feature__iconItem03").css({
          opacity: 1 - (1 * p)
        });
        $("#p-feature__iconItem03").css({
          transform: `translate(0, ${-p*30}px)`
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-feature",
        triggerHook: 0,
        offset: window.innerHeight * 7.9,
        duration: window.innerHeight * .8,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#bg-white").css({
          opacity: (1 * p)
        });
        $("#bg-black").css({
          opacity: 1 - (1 * p)
        });
      }).addTo(controller);


      const pointImage01 = TweenMax.fromTo("#p-point__image01", .5, {
        opacity: '0'
      }, {
        opacity: '1'
      });
      new ScrollScene({
        triggerElement: "#p-point__image01",
        triggerHook: 0.8,
      }).setTween(pointImage01).addTo(controller);

      const pointImage02 = TweenMax.fromTo("#p-point__image02", .5, {
        opacity: '0'
      }, {
        opacity: '1'
      });
      new ScrollScene({
        triggerElement: "#p-point__image02",
        triggerHook: 0.8,
      }).setTween(pointImage02).addTo(controller);

      const pointImage03 = TweenMax.fromTo("#p-point__image03", .5, {
        opacity: '0'
      }, {
        opacity: '1'
      });
      new ScrollScene({
        triggerElement: "#p-point__image03",
        triggerHook: 0.8,
      }).setTween(pointImage03).addTo(controller);

      const pointImage04 = TweenMax.fromTo("#p-point__image04", .5, {
        opacity: '0'
      }, {
        opacity: '1'
      });
      new ScrollScene({
        triggerElement: "#p-point__image04",
        triggerHook: 0.8,
      }).setTween(pointImage04).addTo(controller);

      const pointFrame01 = TweenMax.fromTo("#p-point__frameInner01", .5, {
        opacity: '0',
        transform: 'translate(1rem, 0)'
      }, {
        opacity: '1',
        transform: 'translate(0, 0)'
      });
      new ScrollScene({
        triggerElement: "#p-point__frameInner01",
        triggerHook: 0.8,
      }).setTween(pointFrame01).addTo(controller);

      const pointFrame02 = TweenMax.fromTo("#p-point__frameInner02", .5, {
        opacity: '0',
        transform: 'translate(-1rem, 0)'
      }, {
        opacity: '1',
        transform: 'translate(0, 0)'
      });
      new ScrollScene({
        triggerElement: "#p-point__frameInner02",
        triggerHook: 0.8,
      }).setTween(pointFrame02).addTo(controller);

      const pointFrame03 = TweenMax.fromTo("#p-point__frameInner03", .5, {
        opacity: '0',
        transform: 'translate(1rem, 0)'
      }, {
        opacity: '1',
        transform: 'translate(0, 0)'
      });
      new ScrollScene({
        triggerElement: "#p-point__frameInner03",
        triggerHook: 0.8,
      }).setTween(pointFrame03).addTo(controller);

      const pointFrame04 = TweenMax.fromTo("#p-point__frameInner04", .5, {
        opacity: '0',
        transform: 'translate(-1rem, 0)'
      }, {
        opacity: '1',
        transform: 'translate(0, 0)'
      });
      new ScrollScene({
        triggerElement: "#p-point__frameInner04",
        triggerHook: 0.8,
      }).setTween(pointFrame04).addTo(controller);
    }
  }
});