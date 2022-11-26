const hamburger = document.querySelector('.promo__hamburger'),
      menu = document.querySelector('.promo__menu'),
      closeElem = document.querySelector('.promo__menu__close');
      overlay = document.querySelector('.promo__menu__overlay'),

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
                menu.classList.remove('active');
    }
});

const counters = document.querySelectorAll('.skills__scale-value'),
      lines = document.querySelectorAll('.skills__scale-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Smooth scroll and pageup

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href=up]").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();

