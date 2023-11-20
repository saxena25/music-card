let progress = document.getElementById('progress');
let song = document.getElementById('music');
let ctrlIcon = document.getElementById('ctrlIcon');
let playbtn = document.getElementById('playbtn');

progress.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
        
        song.classList.add('fa-play');
        song.classList.remove('fa-pause');
    }
    // else{
    //     song.play();
    //     song.classList.add('fa-pause');
    //     song.classList.remove('fa-play');
    // }
}

playbtn.addEventListener('click', function playPause(){
    if(playbtn.classList.contains('fa-play')){
        song.play();
        song.classList.remove('fa-play');
        song.classList.add('fa-pause');
    }
})

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    song.classList.add('fa-pause');
    song.classList.remove('fa-play');

}