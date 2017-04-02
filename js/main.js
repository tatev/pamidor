'use strict';

function startCountdown() {
	$('body h3')[0].innerHTML = '00:05';
	var currentVal = $('body h3')[0].innerHTML;
	var splitted = currentVal.split(':');
	var currentMin = +splitted[0];
	var currentSec = +splitted[1];

	var currentTime = new Date().getTime();
	// console.log('currentTime', currentTime);
	var countDownTo;// = currentTime + currentMin * 60 * 1000 + currentSec * 1000;
	// console.log('countDownTo', countDownTo);

	var audio = new Audio('audio/toaster-oven-ding.wav');

	var interval = setInterval(function () {
		currentTime = new Date().getTime();
		if (!countDownTo) {
			countDownTo = currentTime + currentMin * 60 * 1000 + currentSec * 1000;
		}

		var remainingTime = countDownTo - currentTime;
		
		// console.log('currentTime1', currentTime);
		var mins = Math.floor(remainingTime / (60 * 1000));
		var secs = Math.floor((remainingTime % (60 * 1000)) / 1000);
		// secs = secs - mins * 60;
		
		if (remainingTime <= 0) {
			$('body h3')[0].innerHTML = '00:00';
			audio.play();
			var notification = new Notification('yay, time\'s up!', {
			  body: 'Do you like my body?',
			});
			clearInterval(interval);
			notification.onclick = function () {
		      window.focus();
		    };
		    return;
		}
		$('body h3')[0].innerHTML = (mins < 10 ? '0' + mins : mins) + ':' + (secs < 10 ? '0' + secs : secs);
	}, 1000);
}