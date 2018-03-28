import 'ress';
import './index.sass';

// import images
// import './images/logo.svg';
// import './images/bg_tooltip.svg';

$( document ).ready(function() {
  const isMobile = (window.innerWidth < 1000) ? true : false;
  const headerOffset = isMobile ? 0 : 790;

  const header = document.getElementById('header');
  const nav = document.getElementById('navigation');
  const nav2 = document.getElementById('navigation-two');
  const headerClass = 'header';
  const hamburger = document.getElementById('hamburger');
  
  // on sroll callback
  const onScroll = () => {
    const topOffset = window.pageYOffset;
    
    if (topOffset >= headerOffset) {
      header.className = `${headerClass} is-fixed`;
    } else {
      header.className = headerClass;
    };
  }

  // show menu on hamburger click
  $(hamburger).on('click', function() {
    $(this).toggleClass('menu-opened');
    $(nav).toggleClass('is-visible');
  });

  // animation on go to section
  $(nav).on("click","a", function (event) {
    var margin = 0,
        id  = $(this).attr('href'),
        top = $(id).offset().top;

    event.preventDefault();

    $('body,html').animate({scrollTop: top - margin}, 1000);
  });

  $(nav2).on("click","a", function (event) {
    var margin = 0,
        id  = $(this).attr('href'),
        top = $(id).offset().top;

    event.preventDefault();

    $('body,html').animate({scrollTop: top - margin}, 1000);
  });

  // add listeners
  window.addEventListener('scroll', onScroll);  
});