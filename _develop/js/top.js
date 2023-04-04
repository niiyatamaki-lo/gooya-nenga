$(function () {
  const location = window.location.pathname;

  if ((location == '/') || (location == '/index.html') || (location == '/index.html/')) {
    const isSp = window.innerWidth <= 650 ? true : false;
    const controller = new ScrollMagic();

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

      new ScrollScene({
        triggerElement: "#l-wrap",
        triggerHook: 0,
        offset: 0,
        duration: window.innerHeight * .3,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#l-header__contents").css({
          background: `rgba(255, 255, 255, ${(1 * p)})`
        });
      }).addTo(controller);
    }

    if (!isSp) {
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
        duration: window.innerHeight * 4.5,
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
        triggerElement: "#p-feature",
        triggerHook: .8,
        duration: window.innerHeight * .4,
      }).on("progress", (prog) => {
        const p = prog.progress;
        $("#bg-white").css({
          opacity: 1 - (1 * p)
        });
        $("#bg-black").css({
          opacity: (1 * p)
        });
      }).addTo(controller);

      new ScrollScene({
        triggerElement: "#p-point",
        triggerHook: .8,
        duration: window.innerHeight * .4,
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