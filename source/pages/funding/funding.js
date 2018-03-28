import 'ress';
import './funding.sass';

const progresssData = [
  {
    title: '1 of 10 milestones',
    progress : '10'
  },
  {
    title: '0 of 2 milestones',
    progress : '0'
  },
  {
    title: '3 of 8 milestones',
    progress : '5'
  },
  {
    title: '2 out of 20 BTC',
    progress : '50'
  },
  {
    title: '100 of out 200k BBR',
    progress : '0'
  },
  {
    title: '80k out of 100k BBR',
    progress : '80'
  }
];

$( document ).ready(function() {
  const progressEls = $('.progress');

  progressEls.map((index, el) => {
    const bar = $(el).find('.progress__bar');
    const title = $(el).find('.progress__title');

    $(bar).css('width', `${progresssData[index].progress}%`);
    title.html(progresssData[index].title);
  });
});

