// sticky navigation

let navbar = $(".navbar");

$(window).scroll(() => {
  let oTop = $(".panel").offset().top - window.innerHeight;

  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

// Counter Animation

let nCount = (selector) => {
  $(selector).each(function() {
    $(this).animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 4000,
        easing: "swing",
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      }
    );
  });
};

let a = 0;

$(window).scroll(function() {
  const oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});
