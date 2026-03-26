let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

setInterval(showSlides, 3000);