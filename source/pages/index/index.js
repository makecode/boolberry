import './index.sass';
import 'ress';

// import images
import './images/logo.svg';
import './images/bg_tooltip.svg';
import './images/play.png';

$( document ).ready(function() {
  console.log( "ready!" );

  const nav = document.getElementById('navigation');
  const nav2 = document.getElementById('navigation-two');
  const navClass = 'navigation';

  const onScroll = () => {
    const topOffset = window.pageYOffset;
    if (topOffset >= 830) {
      nav.className = `${navClass} is-fixed`;
    } else {
      nav.className = navClass;
    };
  }
  window.addEventListener('scroll', onScroll);

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
});