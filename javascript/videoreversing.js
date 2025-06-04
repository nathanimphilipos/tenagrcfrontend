const video = document.getElementById('background-video');
let isReversing = false;

video.addEventListener('ended', () => {
  if (!isReversing) {
    reverseVideo();
  } else {
    isReversing = false;
    video.playbackRate = 1;
    video.currentTime = 0;
    video.play();
  }
});

function reverseVideo() {
  isReversing = true;
  video.pause();
  let reverseInterval = setInterval(() => {
    if (video.currentTime <= 0) {
      clearInterval(reverseInterval);
      video.play();
    } else {
      video.currentTime -= 0.1;
    }
  }, 100);
}
