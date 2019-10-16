const video = document.getElementsByClassName("video")[0];
const btn = document.getElementsByClassName("play-button")[0];

function playVideo() {
  if (video.paused) {
    video.play();
    btn.classList.add( 'play-button_stop' );
  } else {
    video.pause();
    btn.classList.remove( 'play-button_stop' );
  }
}
