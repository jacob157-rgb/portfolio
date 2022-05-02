$(document).ready(function () {
  $(".navbar-nav").on("click", "a", function () {
    $(".navbar-nav a.active").removeClass("active");
    $(this).addClass("active");
  });
});

$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 20) {
      $(".navbar-collapse").collapse("hide");
    }
  });
});

const sectionAll = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");
    console.log(sectionId);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('li a[href*="' + sectionId + '"]').classList.add("active");
    } else {
      document.querySelector('li a[href*="' + sectionId + '"]').classList.remove("active");
    }
  });
});
