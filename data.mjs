// Instance Files for new Instances of classes and funcCall()
// import { getPhotos } from "./app.mjs";
import { getTemp } from "./weather.mjs";
import { gettempTwo } from "./weatherTwo.mjs";

// ----------------------------------------[INSTANCES]
// getPhotos();
getTemp();
gettempTwo();

// --------- Night and Day

const body = document.querySelector("body");
const btn = document.getElementById("btn");

function toggleBtn() {
    btn.classList.toggle("active");
    if (btn.classList.contains("active")) {
        body.style.backgroundImage = 'url("https://windowscustomization.com/wp-content/uploads/2019/05/Firewatch-Cycle.gif?w=300")';
        body.style.backgroundSize = "cover"
        body.style.backgroundPosition = "center"
        body.style.transition = "2s";
    } else {
        body.style.background = 'url("https://windowscustomization.com/wp-content/uploads/2018/08/fire-watch.gif")';
        body.style.backgroundSize = "cover"
        body.style.backgroundPosition = "center"
        body.style.transition = "2s";
    }
}

btn.addEventListener("click", toggleBtn);





// ---------- Scroll up button


function toggleButton(){
    window.scrollTo({top: 0, behavior:'smooth'});
}
let scrollBtn = document.querySelector(".scrollUp");
scrollBtn.addEventListener("click", toggleButton);