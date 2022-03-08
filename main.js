import './style.css';
import "./skills_cards.css"
import VanillaTilt from 'vanilla-tilt';

// Conocer las dimenciones de la pantalla

let min800px = window.matchMedia("(min-width: 800px)");

const cards = document.querySelectorAll("#skills .card");

screenTest(min800px)

function screenTest(e) {
    if(e.matches) {
        cards.forEach(card=> {
            VanillaTilt.init(card)
        })
    }else {
        if(cards[0].vanillaTilt) {
            cards.forEach(card=> {
                card.vanillaTilt.destroy()
            })
        }
    }
}

min800px.addListener(screenTest)


// Responsive button
const responsiveBtn = document.querySelector(".responsive_menu");

const responsiveMenu = document.querySelector(".header ul "); 




function toggle_showMenu() {
    responsiveMenu.classList.toggle("show_menu")
}

const max700px = window.matchMedia("(max-width: 700px)")

if (max700px.matches) {
    responsiveBtn.addEventListener("click",toggle_showMenu)
}

function handleMediaClicks(e){
    if (e.matches) {
        hideMenu()
        responsiveBtn.addEventListener("click",toggle_showMenu)
    }else {
        showMenu()
        responsiveBtn.removeEventListener("click",toggle_showMenu)
    }
} 

max700px.addListener(handleMediaClicks)

