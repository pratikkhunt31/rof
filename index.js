const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// const category = document.querySelectorAll(".category span");

// const products = document.querySelectorAll(".product");

// category.forEach((span) => {
//   span.addEventListener("click", () => {
//     products.forEach((product) => {
//       if (product.id === span.textContent.toLowerCase().replace(" ", "-")) {
//         product.classList.remove("hide");
//       } else {
//         product.classList.add("hide");
//       }
//     });
//     category.forEach((span) => span.classList.remove("active"));
//     span.classList.add("active");
//   });
// });

// const mostLoved = document.querySelectorAll('#most-loved .product-card');
// const productImg = document.querySelector('#most-loved .product-card .product-img img');
// const colors = document.querySelectorAll('#most-loved .colors span');

// mostLoved.forEach(card => {
//     colors.forEach(span => {
//         span.addEventListener('click', () => {
//             colors.forEach(span => span.classList.remove('active'));
//             span.classList.add('active');
//             if (span.hasAttribute('data-img')) {
//                 productImg.src = span.getAttribute('data-img');
//             }

//         });
//     });
// });

const cards = document.querySelectorAll(".product .product-card");

cards.forEach((card) => {
  const img = card.querySelector(".product-img img");
  const colors = card.querySelectorAll(".colors span");

  colors.forEach((span) => {
    span.addEventListener("click", function () {
      colors.forEach((c) => c.classList.remove("active"));

      this.classList.add("active");

      if (span.hasAttribute("img") && span.classList.contains("active")) {
        img.src = span.getAttribute("img");
      }
      // if (this.dataset.img) {
      //     img.src = this.dataset.img;
      // }
    });
  });
});

const cards2 = document.querySelectorAll(".product .just-for");

cards2.forEach((card) => {
  const img = card.querySelector(".product-img img");
  const colors = card.querySelectorAll(".colors span");

  colors.forEach((span) => {
    span.addEventListener("mouseover", function () {
      colors.forEach((c) => c.classList.remove("active"));

      this.classList.add("active");

      if (span.hasAttribute("img")) {
        img.src = span.getAttribute("img");
      }
    });
  });
});

/*** jQuery ***/

$(document).ready(function () {
  // $(".category span").on("click", function () {
  //   let selected = $(this).text().toLowerCase().replace(" ", "-");

  //   $(".product").each(function () {
  //     if ($(this).attr("id") === selected) {
  //       $(this).removeClass("hide");
  //     } else {
  //       $(this).addClass("hide");
  //     }
  //   });

  //   $(".category span").removeClass("active");
  //   $(this).addClass("active");
  // });

  $(".category span").on("click", function () {
    let id = $(this).text().toLowerCase().replace(" ", "-");

    $(".category span").removeClass("active");
    $(this).addClass("active");

    $(".product:not(#just-for, #most, #just-landed)").addClass("hide");

    $(".hide.slick-initialized").slick("unslick");

    let $active = $("#" + id).removeClass("hide");

    $active.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      prevArrow:
        '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
      nextArrow:
        '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
    });
  });
  
  $(".product:not(.hide)").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    prevArrow:
      '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
  });


  $(".product #just-for").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    prevArrow:
      '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
  });
});
