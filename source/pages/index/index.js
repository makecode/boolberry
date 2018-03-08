import './index.sass';
import 'ress';

// import images
import './images/logo.svg';
import './images/bg_tooltip.svg';
import './images/play.png';

const nav = document.getElementById('navigation');
const navClass = 'navigation';

const onScroll = () => {
  const topOffset = window.pageYOffset;
  if (topOffset >= 830) {
    nav.className = `${navClass} is-fixed`;
  } else {
    nav.className = navClass;
  };
  console.log(topOffset);
}
window.addEventListener('scroll', onScroll);
// console.log(nav);