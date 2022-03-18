// const wolfAudio = new Audio("./audio/wolf.mp3")
// const bearAudio = new Audio("./audio/bear.mp3")
// const lionAudio = new Audio("./audio/lion.mp3")

const animals = document.querySelectorAll('.carusel');
console.log(animals);
animals.forEach((element) => {
  element.addEventListener('click', (event) => {
    const audio = new Audio(`/audio/${element.id}.mp3`);
    audio.play();
  });
});
