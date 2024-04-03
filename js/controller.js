



$('.faq-heading').click(function () {
  
  $(this).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();
});


// $(document).ready(function() {
//   // Smooth scroll to section
//   $('nav a.page').on('click', function(e) {
//       e.preventDefault();
//       var targetSection = $($(this).attr('href'));
//       $('html, body').animate({
//           scrollTop: targetSection.offset().top
//       }, 1000); // Adjust the animation speed (in milliseconds) as needed
//   });
// });


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 80,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1400: {
        slidesPerView: 3,
        spaceBetween: 80,
     },

     320: {
        slidesPerView: 1,
        spaceBetween: 10,
     },
   }
   

});


var swiper = new Swiper(".mySwiperTeam", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },

  breakpoints: {
    1400: {
        slidesPerView: "auto",
        spaceBetween: 30,
     },
     320: {
        slidesPerView: 1,
        spaceBetween: 10,
     },
   }
   

});



var swiper = new Swiper('.swiper-loop', {
  loop: true,
  autoplay: {
    delay: 1,
  },
  freeMode: true,
  speed: 5000,
  slidesPerView: "auto",
  spaceBetween: 0,

  breakpoints: {
    1400: {
        slidesPerView: 7,
        spaceBetween: 20,
        centeredSlides: true,
     },
     320: {
        slidesPerView: 3,
        spaceBetween: 20,
     },
   }
   
});

$(".swiper-loop").hover(function () {
  (this).swiper.autoplay.stop();
}, function () {
  (this).swiper.autoplay.start();
});

$(document).ready(function() {
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    $('.prx').css('object-position', 'center ' + (scrollTop / 2) + 'px'); // Adjust the division factor for speed
  });
});


$(document).ready(function() {
  var fixedActive = $('.fixed-active');
  var fixedTop = fixedActive.offset().top;
  var portfolio = $('#portfolio');
  var portfolioBottom = portfolio.offset().top + portfolio.outerHeight();
  var removeOffset =350; // Adjust this value to determine how far above the bottom the class should be removed

  console.log('Top offset of .fixed-active:', fixedTop);
  console.log('Bottom offset of #portfolio:', portfolioBottom);

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > fixedTop && scrollTop < portfolioBottom - removeOffset) {
      fixedActive.addClass('fixed-top');
    } else {
      fixedActive.removeClass('fixed-top');
    }
  });
});




function copyToClipboard() {
  // Create a temporary input element
  var tempInput = document.createElement("input");
  // Assign the Ethereum address to its value
  tempInput.value = "0xE13288c36f5a792d95e1091bA603959d82085B2b";
  // Append it to the DOM
  document.body.appendChild(tempInput);
  // Select the text in the input
  tempInput.select();
  // Copy the selected text
  document.execCommand("copy");
  // Remove the temporary input
  document.body.removeChild(tempInput);
  // Provide some visual feedback (optional)
  alert("Address copied to clipboard: 0xE13288c36f5a792d95e1091bA603959d82085B2b");
}


  var swiper = new Swiper(".mySwiperPast", {
    grabCursor: true,
    centeredSlides:true,
    slidesPerView: 3,
     spaceBetween: 30,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

        
  breakpoints: {
    1400: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
     },
     320: {
        slidesPerView: 1,
        spaceBetween: 20,
     },
   }
   

  });



  $(document).ready(function() {
    // Toggle menu on click
    $('.drop-trigger').click(function() {
      // Find the drop-menu inside the parent relative div and slide toggle
      $(this).siblings('.drop-menu').slideToggle();
    });
  });

  $(document).ready(function() {
    // Open mobile menu on click
    $('.mobile-trigger').click(function() {
      $('.mobile-menu').slideDown();
    });

    // Close mobile menu on click
    $('.close-btn').click(function() {
      $('.mobile-menu').slideUp();
    });
  });