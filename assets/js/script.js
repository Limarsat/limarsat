// ==========================
// LIMARSAT 2026
// ==========================


window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("fade");
    observer.observe(section);
});
