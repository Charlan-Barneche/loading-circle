const BTN = document.querySelector (".btn-loading");
const LOADING_CIRCLE = document.querySelector (".loading-content")

BTN.addEventListener ("click", click);


function click() {
    BTN.classList.toggle ("active")
    LOADING_CIRCLE.classList.toggle ("active")
        if (BTN.textContent == "active"){
            BTN.textContent =  ("desactive")
        }   else {
            BTN.textContent =  ("active")
        }

    console.log (BTN.textContent)
    console.log (LOADING_CIRCLE)
}