$(document).ready(function () {
  // ---------- Menu toggle ----------
  $('.fa-bars').click(function () {
    $(this).toggleClass('fa-times');
    $('summary').toggleClass('summary-toggle');
  });

  $(window).on('scroll load', function () {
    $('.fa-bars').removeClass('fa-times');
    $('summary').removeClass('summary-toggle');
  });

  // ---------- Counter Animation (on scroll) ----------
  const counterSection = $('.counting');
  let counterStarted = false;

  function startCounter() {
    $('.count').each(function () {
      const $this = $(this);
      const countTo = parseInt($this.attr('data-count'));

      $({ countNum: 0 }).animate(
        { countNum: countTo },
        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum + '+');
          }
        }
      );
    });
  }

  // Trigger when section becomes visible
  $(window).on('scroll', function () {
    const topOfWindow = $(window).scrollTop();
    const windowHeight = $(window).height();
    const sectionTop = counterSection.offset().top;

    if (!counterStarted && topOfWindow + windowHeight > sectionTop + 100) {
      startCounter();
      counterStarted = true;
    }
  });
});
