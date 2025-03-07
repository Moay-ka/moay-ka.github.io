const opvWrap = document.querySelector('#opv-wrap');
const opVideo = document.querySelector('video');
const pageConts = document.querySelector('#page-wrap');

opVideo.addEventListener('play', () => {

  const playTime = opVideo.duration * 1000 - 1000;
  const videoDuration = opVideo.duration * 1000;

  setTimeout(function(){
    opvWrap.classList.add("playEnd");
    pageConts.classList.add("startView");
  }, playTime);

  setTimeout(function(){
    opvWrap.style.display ="none";
  }, videoDuration);

});