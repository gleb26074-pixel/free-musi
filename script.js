const input = document.querySelector("input");
const playlist = document.getElementById("playlist");
const player = document.getElementById("player");
const trackName = document.getElementById("track-name");
const playBtn = document.getElementById("play");

let audio = new Audio();
let currentTrack = null;

input.onchange = () => {
  const file = input.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  const div = document.createElement("div");
  div.textContent = file.name;

  div.onclick = () => {
    audio.src = url;
    audio.play();
    trackName.textContent = file.name;
    playBtn.textContent = "⏸";
    currentTrack = url;
  };

  playlist.appendChild(div);
};

playBtn.onclick = () => {
  if (!audio.src) return;
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
};
