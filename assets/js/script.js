document.addEventListener("DOMContentLoaded", () => {

    // Fade In Animation
    const elements = document.querySelectorAll(
        ".card, .gallery-card, .about-box div, .stat, .contact-card"
    );

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold:0.2
    });

    elements.forEach(el=>{
        el.classList.add("fade");
        observer.observe(el);
    });

    // Header Scroll
    const header = document.querySelector("header");

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 60){
            header.style.background = "rgba(13,20,35,.95)";
            header.style.boxShadow = "0 8px 30px rgba(0,0,0,.25)";
        }else{
            header.style.background = "rgba(20,20,20,.85)";
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,.15)";
        }
    });

});
