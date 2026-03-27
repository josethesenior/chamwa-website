let slides = document.querySelectorAll(".hero-slider img");
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

function changeSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");

    document.getElementById("hero-title").textContent = messages[current].title;
    document.getElementById("hero-text").textContent = messages[current].text; 
}

setInterval(changeSlide, 5000);