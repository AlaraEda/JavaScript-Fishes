//
// geef de vis een random positie en een random kleur
//

let fish = fishes[0] //Verander hier de nummer en de vis komt ergens anders, bel komt midden in scherm & vis kleur veranderd
fish.style.left = "200px"
fish.style.top = "100px"
fish.style.webkitFilter = "hue-rotate(200deg)"
fish.style.filter = "hue-rotate(200deg)"

//
// geef de bubble een random positie
//

let bubble = bubbles[0]// Verander dit en de bel komt midden in het beeld
bubble.style.left = "200px"
bubble.style.top = "0px" //Hoog getal = kleur vis veranderd en geen bel


let element = document.createElement("bubble")
document.body.appendChild(element)

let fishh = document.createElement("fishh")
document.body.appendChild(fishh)

//
// roep een functie aan als alles geladen is
// Dit word nog niet uitgevoerd.
window.addEventListener("load", function () {
    console.log("start het aquarium")
})
