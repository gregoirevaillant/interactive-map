const allPins = document.querySelectorAll(".pin");
const closeCross = document.querySelectorAll(".closeCross") 
const allCards =  document.querySelectorAll(".card")

let cities = [
  {
    pin: "pinDefault",
    card: "cardDefault"
  },
  {
    pin: "pinMontpellier",
    card: "cardMontpellier",
  },
  {
    pin: "pinAix",
    card: "cardAix",
  },
  {
    pin: "pinBastia",
    card: "cardBastia",
  },
  {
    pin: "pinBugey",
    card: "cardBugey",
  },
  {
    pin: "pinBordeaux",
    card: "cardBordeaux",
  },
  {
    pin: "pinBergerac",
    card: "cardBergerac",
  },
  {
    pin: "pinToulouse",
    card: "cardToulouse",
  },
  {
    pin: "pinNantes",
    card: "cardNantes",
  },
  {
    pin: "pinBourges",
    card: "cardBourges",
  },
  {
    pin: "pinPoitiers",
    card: "cardPoitiers",
  },
  {
    pin: "pinMacon",
    card: "cardMacon",
  },
  {
    pin: "pinGeneve",
    card: "cardGeneve",
  },

  {
    pin: "pinLyon",
    card: "cardLyon",
  },
  {
    pin: "pinLille",
    card: "cardLille",
  },
  {
    pin: "pinParis",
    card: "cardParis",
  },
  {
    pin: "pinMarseille",
    card: "cardMarseille",
  },
  {
    pin: "pinCherbourg",
    card: "cardCherbourg",
  },
  {
    pin: "pinLiege",
    card: "cardLiege",
  },
  {
    pin: "pinMons",
    card: "cardMons",
  },
  {
    pin: "pinHerblay",
    card: "cardHerblay",
  },
  {
    pin: "pinEpinal",
    card: "cardEpinal",
  },
  {
    pin: "pinRennes",
    card: "cardRennes",
  },
];

const cards = cities.card;
const pins = cities.pin;

allPins.forEach(function (clickedPin) {
  clickedPin.addEventListener("click", function () {
    for (let i = 0; i <= Object.keys(cities).length - 1; i++) {
      let cityCard = document.querySelector(`#${cities[i].card}`);
      cityCard.classList.add("hide");
    }
    const indexSelected = cities.findIndex(
      (city) => city.pin === clickedPin.id
    );
    let currentCard = document.querySelector(`#${cities[indexSelected].card}`);
    currentCard.classList.remove("hide");
    cardsWrapper.style("z-index", 1);
  });
});

// Choix du Quiz Room à Paris ###########

function openCity(cityName) {
  const city = document.getElementsByClassName("city");
  for (let i = 0; i < city.length; i++) {
    city[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "flex";
}

function openCity(evt, cityName) {
  let i, city, tablinks;
  city = document.getElementsByClassName("city");
  for (i = 0; i < city.length; i++) {
    city[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < city.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" open", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " open";
}

// Croix pour fermer carte de Ville #######

closeCross.forEach(function (clickedCross){
  clickedCross.addEventListener('click', function (e) {
    e.preventDefault;
    for (let i = 0; i <= Object.keys(cities).length - 1; i++) {
      let cityCard = document.querySelector(`#${cities[i].card}`);
      cityCard.classList.add("hide");
    }
    let cityDefault = document.querySelector(`#${cities[0].card}`);
      cityDefault.classList.remove("hide");
  })
})