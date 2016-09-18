window.onload = function() {
	// livestream
	var livestream = document.getElementById("livestream");

	//buttons
	var playButton = document.getElementById("play-pause");
	var DJInfoButton = document.getElementById("dj-info");
}

playButton.addEventListener("click", function() {
	if(livestream.paused == true) {
		//play livestream
		livestream.play();

		//update button text to pause
		playButton.innerHTML = "Pause";
	} else {
		// pause livestream
		livestream.pause();

		// update button text to play
		playButton.innerHTML = "Play";
	}
})