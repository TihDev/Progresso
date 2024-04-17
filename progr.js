function configurarVideo(id) {
    const video = document.getElementById(id)
    video.oncontextmenu = () => false

    document.querySelector(`[wm-pause=${id}]`).onclick = () => video.pause()
    document.querySelector(`[wm-play=${id}]`).onclick = () => video.play()

    setInterval(() => {
        const valorDiv = document.querySelector(`[wm-progresso=${id}]>div`)
        const percentual = (video.currentTime / video.duration) * 100
        valorDiv.innerHTML = `${percentual.toFixed(1)}%`
        valorDiv.style.width = `${percentual}%`
    }, 100);
}

configurarVideo('meuVideo')