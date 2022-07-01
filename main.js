// MegaMenu Section

let li = document.querySelector("#mega-menu"),
  megaMenu = document.querySelector(".main-nav > li .mega-menu");

li.addEventListener("click", function () {
  megaMenu.classList.toggle("hide-menu");
  megaMenu.classList.toggle("show-menu");
});

// Skills Section

let spans = document.querySelectorAll(".progress span"),
  skillsSection = document.querySelector("#our-skills");

window.addEventListener("scroll", function () {
  if (window.scrollY >= skillsSection.offsetTop) {
    spans.forEach(span => {
      span.style.width = span.dataset.width;
    });
  }
});

// Event Countdown Section
const currentYear = new Date().getFullYear();

let countDownDate = new Date(
  `January 01 ${currentYear + 1} 00:00:00`
).getTime();

let counter = setInterval(() => {
  // Get Time Now
  let dateNow = new Date();
  // Find The Difference Between Time Now And Time diff
  let dateDiff = countDownDate - dateNow;
  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  // Add Time Units To The Page
  document.getElementById("days").innerHTML =
    days < 100 ? `0${days}` : days < 10 ? `00${days}` : days;
  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// Stats Increase Numbers Section

let statsSection = document.querySelector(".stats"),
  nums = document.querySelectorAll(".stats .number"),
  started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach(num => startCount(num));
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Gallery Section

// Select All Images
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
  img.addEventListener("click", e => {
    // Make Popup Overlay
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    // Make popup Box
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    document.body.appendChild(popupBox);
    // Get Image Alt To Popup Box
    if (img.alt !== null) {
      let imgHeading = document.createElement("h3");
      let imgText = document.createTextNode(img.alt);
      imgHeading.appendChild(imgText);
      popupBox.appendChild(imgHeading);
    }
    // Make Popup Image
    let popupImage = document.createElement("img");
    popupImage.src = img.src;
    popupBox.appendChild(popupImage);
    // Add Close Button
    let closeBtn = document.createElement("span");
    let closeText = document.createTextNode("X");
    closeBtn.className = "close-button";
    closeBtn.appendChild(closeText);
    popupBox.appendChild(closeBtn);
  });
});

// Close Popup

document.addEventListener("click", e => {
  if (e.target.classList.contains("close-button")) {
    e.target.parentElement.remove();
    document.querySelector(".popup-overlay").remove();
  }
  if (e.target.classList.contains("popup-overlay")) {
    e.target.remove();
    document.querySelector(".popup-box").remove();
  }
});

document.onkeyup = e => {
  if (e.key === "Escape") {
    document.querySelector(".popup-box").remove();
    document.querySelector(".popup-overlay").remove();
  }
};

// Arrow Up

let arrowUp = document.querySelector(".fa-arrow-up");

window.addEventListener("scroll", function () {
  if (this.scrollY > 800) {
    arrowUp.classList.remove("show");
  } else {
    arrowUp.classList.add("show");
  }
});

arrowUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});
