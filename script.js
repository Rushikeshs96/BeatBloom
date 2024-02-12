console.log("Welcome to Music Player");

// Initialize variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songs = [
    { songName: "Warriyo - Mortals ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Bad Boy", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Coldplay-Hymn-For-The-Weekend", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let me love you", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Bones", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Industry Baby", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Play Date", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "shape of you", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "On and On", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "24kGoldn-Mood", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
];

// Function to initialize song list
function initializeSongs() {
    let songItems = document.querySelectorAll('.songItem');
    songItems.forEach((element, i) => {
        let img = element.querySelector('img');
        let songName = element.querySelector('.songName');
        img.src = songs[i].coverPath;
        songName.innerText = songs[i].songName;
    });
}

// Function to toggle play/pause
function togglePlayPause() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
}

// Function to play next song
function playNextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong();
}

// Function to play previous song
function playPreviousSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong();
}

// Function to load the selected song
function loadSong() {
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    togglePlayPause();
}

// Event listeners
masterPlay.addEventListener('click', togglePlayPause);
document.getElementById('next').addEventListener('click', playNextSong);
document.getElementById('previous').addEventListener('click', playPreviousSong);

window.addEventListener('load', () => {
    loadSong(); // Load the first song
});

// Initialize song list
initializeSongs();
