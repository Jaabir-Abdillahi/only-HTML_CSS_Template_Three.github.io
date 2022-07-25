// scroll top
let span = document.querySelector(".up");

window.onscroll = function () {
    // if (this.scrollY >= 300) {
    //     span.classList.add("show");
    // } else {
    //     span.classList.remove("show");
    // }
    this.scrollY >= 300 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// section Stats
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {

    // Stats Increase Number
    if (window.scrollY >= statsSection.offsetTop - 250) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 3000 / goal);
};
// skilss progress
let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

window.onscroll = function () {
    // Skills Animate Width
    if (window.scrollY >= section.offsetTop - 250) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};

// titme

let CountDownDate = new Date("dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();

    // Find The Date Difference Between Now And Countdown Date
    let datediff = CountDownDate - dateNow;

    // Get Time Units
    let days = Math.floor(datediff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((datediff % (1000 * 60)) / (1000));

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}0` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (datediff < 0) {
        clearInterval(counter);
    }
}, 1000);