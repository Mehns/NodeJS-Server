 document.addEventListener("DOMContentLoaded", init, false);
	

function init(){

	var v1 = document.getElementById("v1");
	

	var playBtn1 = document.getElementById("playBtn1");
	playBtn1.addEventListener("click", function(){vidplay(v1, playBtn1)});

	var stopBtn2 = document.getElementById("stopBtn1");
	stopBtn2.addEventListener("click", function(){vidStop(v1, stopBtn2)});

}



function vidplay(videoID, buttonID) {
  
       if (videoID.paused) {
          videoID.play();
          buttonID.textContent = "||";
       } else {
          videoID.pause();
          buttonID.textContent = ">";
       }
    };

function vidStop(videoID, playButtonID) {
	videoID.pause();
	videoID.currentTime = 0;

};