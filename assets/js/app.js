// ===========================
// LIMARSAT APP 2026
// ===========================

// Fade Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{threshold:0.2});

document.querySelectorAll(
".card,.gallery-card,.about-box div,.contact-card,.stat"
).forEach(el=>{
    el.classList.add("fade");
    observer.observe(el);
});

// Header Effect
const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

// Counter Animation
const counters=document.querySelectorAll(".stat h2");

let started=false;

window.addEventListener("scroll",()=>{

    const stats=document.querySelector(".stats");

    if(!stats) return;

    if(window.scrollY>stats.offsetTop-500 && !started){

        started=true;

        counters.forEach(counter=>{

            const target=parseInt(counter.innerText);

            if(isNaN(target)) return;

            let count=0;

            const speed=Math.max(10,target/80);

            const update=()=>{

                count+=speed;

                if(count<target){
const suffix = counter.innerText.replace(/[0-9]/g,"");

counter.innerText = Math.floor(count) + suffix;

                    requestAnimationFrame(update);

                }else{

                  counter.innerText = target + suffix;

                }

            };

            update();

        });

    }

});

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.id="topButton";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

Object.assign(topBtn.style,{
    position:"fixed",
    right:"25px",
    bottom:"100px",
    width:"55px",
    height:"55px",
    border:"none",
    borderRadius:"50%",
    background:"#1565ff",
    color:"#fff",
    fontSize:"22px",
    cursor:"pointer",
    display:"none",
    zIndex:"9999",
    boxShadow:"0 8px 20px rgba(0,0,0,.25)"
});

window.addEventListener("scroll",()=>{

    topBtn.style.display=
    window.scrollY>350?"block":"none";

});

topBtn.onclick=()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

// Footer Year

const footer=document.querySelector("footer p");

if(footer){

    footer.innerHTML=
    "© "+new Date().getFullYear()+" Limarsat | Hannover | Germany";

}
