let slides = document.querySelectorAll(".hero-slider img");
let dots = document.querySelectorAll(".dot");
let current = 0;

const messages = [
    {
        title: "High-Quality Fortified Maize Flour",
        text: "Affordable, safe, and high quality maize flour."
    },
    {
        title: "Supporting Local Farmers",
        text: "We source maize directly from small-scale farmers."
    },
    {
        title: "Zero Waste Production",
        text: "All by-products are converted into animal feed."
    }
];

function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    document.getElementById("hero-title").textContent = messages[index].title;
    document.getElementById("hero-text").textContent = messages[index].text;

    current = index;
}

/* AUTO SLIDE */
function autoSlide() {
    let next = (current + 1) % slides.length;
    showSlide(next);
}

setInterval(autoSlide, 4000);

/* BUTTONS */
document.querySelector(".next").onclick = () => {
    let next = (current + 1) % slides.length;
    showSlide(next);
};

document.querySelector(".prev").onclick = () => {
    let prev = (current - 1 + slides.length) % slides.length;
    showSlide(prev);
};

/* DOT CLICK */
function goToSlide(index) {
    showSlide(index);
}