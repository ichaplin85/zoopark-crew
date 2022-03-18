// const wolfAudio = new Audio("./audio/wolf.mp3")
// const bearAudio = new Audio("./audio/bear.mp3")
// const lionAudio = new Audio("./audio/lion.mp3")

console.log('hiii');
const animals = document.querySelectorAll('.carusel');
animals.forEach((element) => {
    element.addEventListener('click', event => {
        const audio = new Audio(`/audio/${element.id}.mp3`)
        audio.play()
    })
});