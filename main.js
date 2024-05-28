// EVENTO SCROLL

let navbar = document.querySelector(".navbar")


window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        navbar.classList.add("nav-scrolled")
    } else {
        navbar.classList.remove("nav-scrolled")
    }
})

let numUsers = document.querySelector("#numUsers")
let numArticles = document.querySelector("#numArticles")
let numComments = document.querySelector("#numComments")


// evento numeri 
function createInterval(elementId, finalNumber, frequency){
    let counter = 0
    
    let intervallo = setInterval(() => {
        if(counter < finalNumber){
            counter++
            elementId.innerHTML = counter;
        } else {
            clearInterval(intervallo)
        }
    }, frequency);
}

createInterval(numVisite, 2000, 3)
createInterval(numTatuaggiEffettuati, 1000, 10)
createInterval(numRecensioni, 999, 9)




let isIntersected = false;

//INTERSECTION OBSERVER NUMERI DINAMICI
const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry)=>{
        if(entry.isIntersecting && isIntersected == false){
            
            createInterval(numVisite, 2000, 3)
            createInterval(numTatuaggiEffettuati, 1000, 10)
            createInterval(numRecensioni, 999, 9)
            
            isIntersected = true;
            
            setTimeout(() => {
                isIntersected = false;
            }, 10000);
        }
    } )
})

intersectionObserver.observe(numVisite)