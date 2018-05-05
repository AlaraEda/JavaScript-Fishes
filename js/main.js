//
//For-Loop die 100 visjes creeert
//
let i;
for (i = 0; i < 100; i++) {
    //console.log(i)

    //Random nummer voor de scherm grootte
    let screenSize = window.innerWidth * 0.9
    let screenSize2 = window.innerHeight * 0.8 

    let randomNumber = Math.random() * screenSize
    let randomNumber2 = Math.random() * screenSize2
    let randomNumber3 = Math.random() * 360

    //Vis creeeren
    let fishes = document.createElement("fish")                 //Creert vis in de DOM
    document.body.appendChild(fishes)                           //Zorgt dat de vis in de body van de DOM gestopt word

    //Posities/locaties
    fishes.style.left = randomNumber + "px"
    fishes.style.top = randomNumber2 + "px"

    //fishes.style.webkitFilter = "hue-rotate(200deg)"
    fishes.style.filter = "hue-rotate("+randomNumber3 +"deg)"   //Binnen  0 - 360
}

//
//For-Loop die 10 bubbles creert
//
let q;
for (q = 0; q<100; q++) {
    //Random nummer voor de scherm grootte
    let screenSize = window.innerWidth * 0.9
    let screenSize2 = window.innerHeight

    let randomNumber4 = Math.random() * screenSize      //links-rechts
    let randomNumber5 = Math.random() * screenSize2     //Hoogte

    //Bubbel creeeren
    let bubbles = document.createElement("bubble")      //Creert bubbel via DOM
    document.body.appendChild(bubbles)                  //Zorgt dat de bubbel in de body van de DOM bevind

    //Posities/Locaties
    bubbles.style.left = randomNumber4 + "px"
    bubbles.style.top = randomNumber5 + "px"
}

// let bubble = bubbles[0]// Verander dit en de bel komt midden in het beeld


//
// roep een functie aan als alles geladen is
// Dit word nog niet uitgevoerd.
window.addEventListener("load", function () {
    console.log("start het aquarium")
})
