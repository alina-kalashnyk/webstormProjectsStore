let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    carouselIndicator = document.querySelectorAll(".carousel-indicator"),
    current = 0;

// Clear all images
function reset() {
    sliderImages.forEach(image => image.style.display = "none" );
    carouselIndicator.forEach(indicator => indicator.classList.remove("current-slide"));
}

// Init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
    carouselIndicator[0].classList.add("current-slide");
}

// Show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    carouselIndicator[current - 1].classList.add("current-slide");
    current--;
}

// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    carouselIndicator[current + 1].classList.add("current-slide");
    current++;
}

// Left arrow click
arrowLeft.addEventListener("click", () => {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", () => {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();