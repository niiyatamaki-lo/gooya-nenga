// slider用

$(function () {
  $('.js-benchImage').on('click', function() {

    const target = $(this).data('target');
    const image = $(this).data('image');

    if (target == 'js-sliderItem01') {
      $(`.${target}`)
      .removeClass('is-bench-01-a')
      .removeClass('is-bench-01-b')
      .removeClass('is-bench-01-c')
      .addClass(`is-bench-01-${image}`);
    }

    if (target == 'js-sliderItem02') {
      $(`.${target}`)
      .removeClass('is-bench-02-a')
      .removeClass('is-bench-02-b')
      .removeClass('is-bench-02-c')
      .addClass(`is-bench-02-${image}`);
    }
  });
});