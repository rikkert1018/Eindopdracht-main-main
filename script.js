// Variabelen declareren
let hunger = 50;
let happiness = 50;
let energy = 50;
let isAsleep = false;
let petName = "";

const backgroundlist = ["background1", "background2", "background1-night", "background2-night"]; // lijst van achtergronden

// Selecteer het element voor het invoeren van de naam
var naam = document.querySelector(".name-input"); //bron:Mozilla Developer Network (MDN) Web Docs. (2021). Document.querySelector(). Geraadpleegd op 24 maart 2023, van https://developer.mozilla.org/nl/docs/Web/API/Document/querySelector
// Big chungus sound track
// bron: MDN Web Docs. (n.d.). Document.querySelector(). Geraadpleegd op 24 maart 2023, van https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
const button = document.querySelector('#radioButton');
const audio = document.querySelector('#radioAudio');
let isPlaying = false;
//bron MDN Web Docs. (2021). HTMLMediaElement.play(). Geraadpleegd op 24 maart 2023, van https://developer.mozilla.org/nl/docs/Web/API/HTMLMediaElement/play
//bron MDN Web Docs. (2021). HTMLMediaElement.pause(). Geraadpleegd op 24 maart 2023, van https://developer.mozilla.org/nl/docs/Web/API/HTMLMediaElement/pause
// bron W3Schools. (n.d.). JavaScript Events. Geraadpleegd op 24 maart 2023, van https://www.w3schools.com/js/js_events.asp
button.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
});// Update de informatie over de Tamagotchi
function updatePet() {
	// Selecteer het element voor de Tamagotchi-afbeelding
	const pet = document.getElementById("pet");
	// Wijzig de bron van de afbeelding
	pet.src = "./img/Big_chungus.webp";
	// Selecteer het element voor de honger-waarde
	// bron MDN Web Docs. (n.d.). Element.classList. Geraadpleegd op 24 maart 2023, van https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
	const hungerEl = document.getElementById("hunger");
	// Wijzig de honger-waarde
	hungerEl.textContent = hunger;
	// Selecteer het element voor de blijheid-waarde
	const happinessEl = document.getElementById("happiness");
	// Wijzig de blijheid-waarde
	happinessEl.textContent = happiness;
	// Selecteer het element voor de energie-waarde
	const energyEl = document.getElementById("energy");
	// Wijzig de energie-waarde
	energyEl.textContent = energy;
	// Selecteer het element voor de naam van de Tamagotchi
	const nameEl = document.getElementById("petName");
	// Wijzig de naam van de Tamagotchi
	nameEl.textContent = petName;
}

// Selecteer het element voor de knop om te voeden en voeg een eventlistener toe om te luisteren naar een klik
var feedButton = document.getElementById("feedbutton");
feedButton.addEventListener("click", feed);
// Deze functie geeft 
// functie die de Tamagotchi voedt
function feed() {
	if (hunger < 105 && hunger >= 10) {
		hunger -= 10;
		happiness += 5;
		energy += 5;
		const pet = document.getElementById("pet");
		pet.src = "./img/SVG/Big_chungus_eat.svg";
		setTimeout(function () {
			pet.src = "./img/Big_chungus.webp";
			updatePet();
		}, 10000);
	}
}

// functie die de Tamagotchi laat spelen
var playButton = document.getElementById("playbutton")
playButton.addEventListener("click", play)

function play() {
	if (energy >= 10 && hunger <= 95) { // controleert of de energie en honger van de Tamagotchi binnen acceptabele grenzen vallen
		hunger += 5;
		happiness += 10;
		energy -= 10;
		const pet = document.getElementById("pet"); // selecteert de afbeelding van de Tamagotchi
		pet.src = "./img/SVG/Asset 3.svg"; // verandert de afbeelding van de Tamagotchi om te laten zien dat hij/zij aan het spelen is
		//bron MDN Web Docs. (2021). WindowOrWorkerGlobalScope.setTimeout(). Geraadpleegd op 24 maart 2023, van https://developer.mozilla.org/nl/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
		setTimeout(function () {
			pet.src = "./img/Big_chungus.webp"; // verandert de afbeelding van de Tamagotchi terug naar de normale afbeelding
			updatePet();
		}, 10000);
	}
}

// functie die de Tamagotchi laat slapen
var sleepButton = document.getElementById("sleepbutton")
sleepButton.addEventListener("click", sleep)

// Hier wordt een functie "sleep" gedefinieerd die de Tamagotchi laat slapen als deze niet al slaapt en de energie lager is dan 90.
function sleep() {
	if (!isAsleep && energy < 90) {
		// Stel de slaapstatus in op "waar" en verander de afbeelding van het huisdier om te laten zien dat het slaapt.
		isAsleep = true;
		const pet = document.getElementById("pet");
		pet.src = "./img/SVG/Big_chungus_sleep.svg";
		// Pas de achtergrondklasse aan op basis van de huidige achtergrondklasse.
		const currentBgClass = document.querySelector("body").classList[0];
		let newBgClass = "";
		if (currentBgClass === "background1") {
			newBgClass = "background1-night";
		} else if (currentBgClass === "background2") {
			newBgClass = "background2-night";
		}
		document.querySelector("body").classList.replace(currentBgClass, newBgClass);
		// Wacht 10 seconden voordat de Tamagotchi weer wakker wordt.
		setTimeout(function () {
			// Stel de slaapstatus in op "onwaar" en verhoog de blijdschap en energie.
			isAsleep = false;
			happiness += 5;
			energy += 10;
			// Werk de afbeelding van het huisdier en de achtergrondklasse bij.
			updatePet();
			pet.src = "./img/Big_chungus.webp";
			document.querySelector("body").classList.replace(newBgClass, currentBgClass);
		}, 10000);
	}
}

// Hier wordt een functie "setName" gedefinieerd die de gebruiker in staat stelt de naam van de Tamagotchi te veranderen via een prompt.
function setName() {
	const newName = prompt("Voer een nieuwe naam in voor je Tamagotchi:");
	if (newName) {
		// Als er een nieuwe naam is ingevoerd, stel dan de naam van de Tamagotchi in en werk deze bij.
		petName = newName;
		updatePet();
	}
}

// Functie om de naam van het Tamagotchi-huisdier in te stellen
function setName() {
	const newName = prompt("Voer een nieuwe naam in voor uw Tamagotchi:");
	if (newName) {
		petName = newName; // wijzigt de naam van het huisdier
		updatePet(); // werkt het uiterlijk van het huisdier bij met de nieuwe naam
	}
}

// Functie om de naam van het Tamagotchi-huisdier bij te werken
function updatePetName() {
	const nameInputEl = document.getElementById("pet-name-input");
	const newName = nameInputEl.value;
	if (newName) {
		petName = newName; // wijzigt de naam van het huisdier
		updatePet(); // werkt het uiterlijk van het huisdier bij met de nieuwe naam
		naam.classList.add("hide") // voegt de "hide" klasse toe aan de "naam" HTML-element
	}
}

// Element om het verzenden van de nieuwe naam van het huisdier te activeren
var submitButton = document.getElementById("submitBtn")
submitButton.addEventListener("click", updatePetName)

// Interval dat elke 10 seconden het huisdier bijwerkt als het niet slaapt
setInterval(function () {
	if (!isAsleep) {
		if (hunger > 0 && hunger <= 100) {
			hunger += 5;
		}
		if (happiness > 0) {
			happiness -= 5;
		}
		if (energy > 0) {
			energy -= 5;
		}
		updatePet();
	}
}, 10000);



// Hier wordt de knop geselecteerd voor het verranderen van de background die luisterd naar "click".
const changeBgBtn = document.getElementById("changeBgBtn");
changeBgBtn.addEventListener("click", function () {
	// Selecteer het element voor het lichaam van de pagina
	const body = document.querySelector("body");
	// Wissel tussen de klassen van de body om de achtergrond te veranderen
	body.classList.toggle(backgroundlist[1]);
	body.classList.toggle(backgroundlist[0]);
});




//hulp van Sem en Sander
//bron W3Schools. (2021). JavaScript HTML DOM. Geraadpleegd op 24 maart 2023, van https://www.w3schools.com/js/js_htmldom.asp
//bron W3Schools. (n.d.). JavaScript Data Types. Geraadpleegd op 24 maart 2023, van https://www.w3schools.com/js/js_datatypes.asp




