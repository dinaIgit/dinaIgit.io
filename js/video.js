const video = document.querySelectorAll(".video-container video");
const popup = document.querySelector(".popup-video");
const popupVideo = document.querySelector(".popup-video video");
const close = document.querySelector(".popup-video span");

video.forEach((vid) => {
  vid.onclick = () => {
    popup.style.display = "block";
    popupVideo.src = vid.getAttribute("src");
  };
});

close.onclick = () => {
  popup.style.display = "none";
  popupVideo.pause();
  popupVideo.currentTime = 0;
};
