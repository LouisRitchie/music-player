/* music-player.js
simple text-based music player.
author: Louis Ritchie
March 16th-17th, 2016
*/

var interval, div, prev, play, pause, next, stop;
// grabbing html elements from the DOM - May be improved with jquery
about = document.getElementById("about");
timer = document.getElementById("timer");
prev = document.getElementById("prev");
play = document.getElementById("play");
pause = document.getElementById("pause");
next = document.getElementById("next");
stop = document.getElementById("stop");

// play is the only button that will do anything when done loading.
play.addEventListener("click", _handlePlay);

// moment.js might do a better job of managing times - for now we Date array
var times = [];

// global variable `i` will keep track of what song we're on,
// `paused` boolean will keep track of pause/play state
var i; 
var paused = true;

// test data - pre-filled arrays of songs and song lengths (2 arrays) 
var songs = new Array();
var lengths = [3,4,3];
songs.push("hair");
songs.push("dunsel");
songs.push("reign");

//we must convert the lengths to their equivalent in ms.
lengths = lengths.map(function timesBy1000(length) {
	return length = length * 1000;
});


//begins playing songs as they are ordered in the list.
function init() {
	times[0] = times[1] = new Date().getTime();
	times[2] = 0;
	interval = setInterval(playing, 1000);
	paused = false;
	// adding event handlers to buttons except play.
	prev.addEventListener("click", _handlePrev);	
	pause.addEventListener("click", _handlePause);
	next.addEventListener("click", _handleNext);
	stop.addEventListener("click", _handleStop);
	i = 0;
}

/* playing()
Writes current song time, song info to html every second
*/
function playing() {
	times[1] = new Date().getTime();
	about.innerHTML = songs[i];	
	var seconds = times[1] - times[0]
	writeTimeToHTML(seconds);
	// if the current amount of seconds is  within 200ms of song length
	// we must increment `i` to get to the next song.
	if(lengths[i] - 200 < seconds && lengths[i] + 200 > seconds) {
		i++;
		times[0] = new Date().getTime();
	}
}

/* writeTimeToHTML
formats the time into seconds:ms.
*/
function writeTimeToHTML(t) {
        output = (t/1000).toString().split(".");
        timer.innerHTML = output[1]
}

//Handlers for all five buttons: prev, play, pause, next, and stop.
function _handlePrev() {

}

function _handlePlay() {
	if (i == null) { // if init() has not been called we call it here.
		init();
	}
	if (paused) {
		// here we add total time paused to times[0]
		times[0] += new Date().getTime() - times[2];
		interval = setInterval(playing, 1000);
		paused = false;
	} 
	else {
		// do nothing - already playing
	}
}

function _handlePause() {
	if (paused) {
		// do nothing - already paused
	}
	else {
		clearInterval(interval);
		times[2] = new Date().getTime();
		paused = true;
	}
}

function _handleNext() {
	
}

function _handleStop() {

}
