document.getElementById('playButton').addEventListener('click', function() {
    // Reproducir el audio
    var audio = document.getElementById('audio');
    audio.play();

    // Ocultar la alerta
    document.getElementById('alertBox').style.display = 'none';
    
    // Mostrar el contenido
    document.getElementById('content').style.display = 'block';

});

document.getElementById('pauseButton').addEventListener('click', function(){
    var audio = document.getElementById('audio');
    audio.pause();
});