document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");
    const stopButton = document.getElementById("stop-button");

    playButton.addEventListener("click", function () {
        audio.play();
    });

    pauseButton.addEventListener("click", function () {
        audio.pause();
    });

    stopButton.addEventListener("click", function () {
        audio.pause();
        audio.currentTime = 0;
    });
});
