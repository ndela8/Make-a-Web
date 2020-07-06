function play(btn,vid){
	var vid = document.getElementById(vid);
	if(vid.paused){
		vid.play();
		hitung();
	}
}

function pause(btn,vid){
	var vid = document.getElementById(vid);
	if(vid.played){
		vid.pause();
	}
}

function stop(btn,vid){
	var vid = document.getElementById(vid);
	vid.pause();
	vid.currentTime = 0;
}

function hitung(){

			const cachekey = "NUMBER";
			const count = document.querySelector("#count");
			let number = sessionStorage.getItem(cachekey);
			number++;
			sessionStorage.setItem(cachekey, number);
			count.innerText = sessionStorage.getItem(cachekey);
}

var btn2 = document.getElementById("btnPlayy");
btn2.addEventListener("click", play);

var btn1 = document.getElementById("btnPlay");
btn1.addEventListener("click", play);
