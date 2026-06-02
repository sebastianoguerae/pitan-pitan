jQuery(function ($) {


    $(document).ready(function() {
        
      function verMenu() {
        $('html, body').animate({ scrollTop: 0 });
        $("header").addClass('act');
        $("footer").addClass('act');
        $("a#botonmenu").fadeOut();
        $("a#cerrarmenu").fadeIn();

      }

      function cerrarMenu() {
        $("footer").removeClass('act');
        $("header").removeClass('act');
        $("a#cerrarmenu").fadeOut();
        $("a#botonmenu").fadeIn();
        menu_on = false;

      }
 
      // Properly handle cartVisible variable

     
   
            // Handle copy button click
            $('#shareThis').click(function() {
                 // Create a temporary input element
                const tempInput = $('<input>');
                $('body').append(tempInput);
                
                // Set the input value to the current URL
                tempInput.val(window.location.href).select();
                
                // Copy the value to clipboard
                document.execCommand('copy');
                
                // Remove the temporary input
                tempInput.remove();
                
                // Show notification with toggleClass
                const notification = $('#notification');
                notification.toggleClass('show');
                
                // Hide notification after 5 seconds with fade animation
                setTimeout(function() {
                    notification.addClass('fade-out');
                    
                    // Reset the notification after fade out completes
                    setTimeout(function() {
                        notification.removeClass('show fade-out');
                    }, 800); // Match the duration of the fade-out transition
                }, 3000);
            });
        });
        
        

  // Dropdown MENU
  $('header nav ul li').hover(function () {
    $(this).addClass("activo");
    $(this).children('ul').stop();
    $(this).children('ul').slideDown(300).css({ 'display': 'grid' });
  }, function () {
    $(this).removeClass("activo");
    $(this).children('ul').stop();
    $(this).children('ul').slideUp(300);
  });

  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({ 'overflow': 'visible' });

  const $countdown = $('#countdown');
  if ($countdown.length) {
    const targetDate = new Date($countdown.data('countdown-target')).getTime();
    const $days = $('#days');
    const $hours = $('#hours');
    const $minutes = $('#minutes');
    const $seconds = $('#seconds');

    function padTime(value) {
      return String(Math.max(0, value)).padStart(2, '0');
    }

    function renderCountdown() {
      const remaining = Number.isFinite(targetDate) ? targetDate - Date.now() : 0;

      if (remaining <= 0) {
        $days.text('00');
        $hours.text('00');
        $minutes.text('00');
        $seconds.text('00');
        return false;
      }

      const totalSeconds = Math.floor(remaining / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      $days.text(padTime(days));
      $hours.text(padTime(hours));
      $minutes.text(padTime(minutes));
      $seconds.text(padTime(seconds));

      return true;
    }

    if (renderCountdown()) {
      const countdownTimer = setInterval(function () {
        if (!renderCountdown()) {
          clearInterval(countdownTimer);
        }
      }, 1000);
    }
  }
	
	

  // Improved smooth scroll handler for anchor links with better mobile support
  $('a[href^="#"]').on('click', function (e) {
    const hash = $(this).attr('href');
    if (!hash || hash === "#") return;

    let $target = $(hash);
    if (!$target.length) $target = $(`[id="${hash.replace('#','')}"]`);
    if (!$target.length) return;

    e.preventDefault();

    // Detect if header is visible and sticky/fixed
    let headerH = 0;

    // Only consider header height on desktop (header is hidden in mobile/tablet)
    // On mobile, since header is `display:none`, we skip its height.
    if (window.matchMedia("(min-width: 1080px)").matches) {
      headerH = $('header').outerHeight() || 0;
    } else {
      // On mobile, header is hidden. Let's check if any other fixed position/bars may exist,
      // but since site hides header with display:none, we set offset to 0.
      headerH = 0;
    }

    // Fix: If in mobile and target is at bottom edge, jump so it's flush with top, not bottom (common visual bug).
    let targetTop = 0;
    if ($target.length && $target.offset()) {
      targetTop = $target.offset().top;
      // Check if we are in mobile, and target would appear at bottom of viewport
      if (window.matchMedia("(max-width: 1079px)").matches) {
        // If the target's height + its top is less than viewport, just scroll to top of the target
        // Otherwise, ensure there's a bit of padding
        const winH = window.innerHeight || $(window).height();
        const targetH = $target.outerHeight() || 0;
        // If section is tall or flush to bottom, try to bring it to the top with a small margin
        if (targetTop + Math.min(targetH, winH) > $(document).height() - 10) {
          // Edge: last element too close to bottom, so scroll as high as possible
          targetTop = $(document).height() - winH + 10;
        }
      }
    }

    $("html, body").stop().animate({
      scrollTop: Math.max(0, targetTop - headerH)
    }, 500, function() {
      // Make sure area is focusable for accessibility
      $target.attr('tabindex', -1).focus();
    });

    // Remove 'act' from header if clicked element is inside header.act
    const $header = $('header');
    if ($header.hasClass('act') && $.contains($header[0], this)) {
      $header.removeClass('act');
    }
  });
	


  $("a#menu").on('click', function (e) {
    e.preventDefault();
    $("header").toggleClass("act");
    $("body").toggleClass("freeze");
    $('html, body').animate( { scrollTop: $("header").offset().top }, 500, 'linear' );

  });




  $(document).on('click', '.galeria li', function (e) {
    e.preventDefault();
    const url = $(this).data('img');
    if (!url) return;
    const $img = $('.fotograma');
    if ($img.length) {
        $img.fadeOut(200, function () {
        $img.css('background-image', 'url(' + url + ')').fadeIn(200); });
    } else {
         $('.fotograma').fadeOut(200, function () { $(this).css('background-image', 'url(' + url + ')').fadeIn(200); });
    }
  });


  $(".carrusel").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    centerMode: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    speed: 300,
    fade: false,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          infinite: true,
		      slidesToShow: 1,
          dots: true,
          arrows: true
        }
      }
    ]
  });

  $("#modalInfo").on('click', function (e) {
    e.preventDefault();
    $("#modalInfo").removeClass('act');
  });


  $("#scrollDown").on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $("section.quote").offset().top }, "slow");
  });


});
