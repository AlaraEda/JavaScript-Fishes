let screenSize = window.innerWidth
let randomNumber = Math.random()*1000


let randomNumber2 = Math.random()*700

//
// geef de vis een random positie en een random kleur
//
let fishes = document.createElement("fish")
document.body.appendChild(fishes)
fishes.style.left = randomNumber + "px"
fishes.style.top = randomNumber2 + "px"
//fishes.style.webkitFilter = "hue-rotate(200deg)"
fishes.style.filter = "hue-rotate(180deg)" //Binnen  0 - 360

// let fish = fishes[0] //Verander hier de nummer en de vis komt ergens anders, bel komt midden in scherm & vis kleur veranderd
//fish.style.left = "200px"
//fish.style.top = "100px"


//
// geef de bubble een random positie
//
let bubbles = document.createElement("bubble")
document.body.appendChild(bubbles)
bubbles.style.left = randomNumber +"px"
bubbles.style.top = "0px"

// let bubble = bubbles[0]// Verander dit en de bel komt midden in het beeld





//
// roep een functie aan als alles geladen is
// Dit word nog niet uitgevoerd.
window.addEventListener("load", function () {
    console.log("start het aquarium")
})
