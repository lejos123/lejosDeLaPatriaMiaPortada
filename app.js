document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.play();

    document.getElementById('alertBox').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});

document.getElementById('pauseButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.pause();
});
