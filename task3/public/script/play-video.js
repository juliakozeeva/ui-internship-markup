const video = document.getElementById("video");
const btn = document.getElementById ("play-button");

function playVideo() {
  if (video.paused) {
    video.play();
    btn.classList.remove( 'play-button_stop' );
  } else {
    video.pause();
    btn.classList.add( 'play-button_stop' );
  }
}
