function playPause(element, playing, player, currentSongPlaying, arrow) {

    // debugger
    let checkIfPlaying = document.querySelector(".fa-pause")
    console.log(checkIfPlaying)
    playing = false;
    let getPlayer = document.querySelector(".playerIcon")
    if (checkIfPlaying) {
        checkIfPlaying.className = "fa fa-play play-arrow onPlay"
        playing = true

    }
    let checkIfonPlay = document.querySelector(".onPlay")
    checkIfonPlay.classList.remove("onPlay")
    // se clicar na musica que ja esta a tocar vai colocar a musica na pausa e nao vai deixar o 
    if (currentSong == element.src && playing == true) {
        playing = false;
        player.pause();
        arrow.className = "fa fa-play play-arrow onPlay"
        getPlayer.className = "far fa-play-circle fa-3x playerIcon"
    } else {

        arrow.className = "fa fa-pause onPlay"
        getPlayer.className = "far fa-pause-circle fa-3x playerIcon"
        playing = true;

        if (currentSong != element.src) {
            player.src = element.src;
            currentSong = element.src
            currentSongPlaying.innerHTML = element.nome;

        }
        player.play();

    }
}

function playPausePlayer() {
   
    player = document.querySelector(".audio-player")
  
    let currentSongPlaying = document.getElementById("currentSongPlaying").innerHTML
    let getPlayer = document.querySelector(".playerIcon")
    let getPlayerClass = getPlayer.className
    let onPlay = document.querySelector(".onPlay")
    let allMusic = document.querySelectorAll(".aMusic")


    if (getPlayerClass == "far fa-play-circle fa-3x playerIcon") {
        getPlayer.className = "far fa-pause-circle fa-3x playerIcon"
        player.play();
        onPlay.className = "fa fa-pause onPlay onPlay"

    } else {
        getPlayer.className = "far fa-play-circle fa-3x playerIcon"
        player.pause();
        onPlay.className = "fa fa-play play-arrow onPlay"

    }
}

let volumeBar = document.getElementById("volumeSlider")
volumeBar.oninput = (e) => {
    player = document.querySelector(".audio-player")
    let volume = e.target.value
    player.volume = volume
}

const updateProgress = () => {
    player = document.querySelector(".audio-player")
    if (player.currentTime > 0) {
        let progressBar = document.getElementById("progress")
        progressBar.value = (player.currentTime / player.duration) * 100
    }

}