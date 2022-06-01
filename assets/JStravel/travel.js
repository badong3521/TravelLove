const Selector = document.querySelector.bind(document);
const SelectorAll = document.querySelectorAll.bind(document);

// const contacts = $(".container__tab--contact");
// const contact = $(".contact");
// const advanced = $("#bar__search-advanced");
// const quick = $("#bar__search-quick");
// const quickAdvance = $(".bar__search-quick-advanced");
const placeItem = Selector(".city-container");
const tourismIMG = Selector(".container__tourism");

const app = {
  places: [
    {
      placeName: "Berlin",
      image: "./img/email/package-berlin.jpg",
      continents: "Europe",
      impressive: "Cultural",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.",
      prices: "$1500",
    },
    {
      placeName: "New Delhi",
      image: "./img/email/package-newdelhi-150x150.jpg",
      continents: "Asia",
      impressive: "History",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.",
      prices: "$900",
    },
    {
      placeName: "London",
      image: "./img/email/package-london-150x150.jpg",
      continents: "England",
      impressive: "Sport",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.",
      prices: "$599",
    },
    {
      placeName: "Cuba",
      image: "./img/email/package-cuba.jpg",
      continents: "America",
      impressive: "Relax",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.",
      prices: "$700",
    },
    {
      placeName: "Rome",
      image: "./img/email/package-rome-150x150.jpg",
      continents: "Italy",
      impressive: "History",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.",
      prices: "$690",
    },
    {
      placeName: "Dubai",
      image: "./img/email/package-dubai.jpg",
      continents: "Asia",
      impressive: "Sport",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.",
      prices: "$1200",
    },
  ],
  destinations: [
    {
      img: "./img/email/destination-10 (1).jpg",
      name: "OCEANIA",
    },
    {
      img: "./img/email/destination-6.jpg",
      name: "AFRICA",
    },
    {
      img: "./img/email/destination-20.jpg",
      name: "AMERICA",
    },
    {
      img: "./img/email/destination-7.jpg",
      name: "ASIA",
    },
  ],
  render: function () {
    const HTML = this.places.map((place, index) => {
      return `
                        <div data-index="${index}" class="city-container-item col l-4">
                                <div class="city-container-item-total">
                                        <div class="city-container-item-img container-details">
                                                <img class="container-details-img" src="${place.image}">
                                                <div class="overlay-details"></div>
                                                <div class="button-details"><a href="#"> DETAILS </a></div>
                                        </div>
                                                <div class="city-container-item-prices">${place.prices}</div>
                                        
                                        <div class="city-container__adress"><span>${place.placeName}</span>
                                        </div>
                                        <div class="city-container__countrys">
                                        <span class="city-container__continents">${place.continents}</span>
                                        <span class="city-container__category">${place.impressive}</span>
                                        </div>
                                        <div class="city-container__adress--ders">
                                        <p>${place.description}</p>
                                        </div>
                                        <div class="city-container__adress--details">
                                        <button>DETAILS</button>
                                        </div>
                                </div>
                        </div>
                        `;
    });

    placeItem.innerHTML = HTML.join("\n");

    const htmlDestinations = this.destinations.map((destination, index) => {
      return `
                        <div key=${index} class="container__tourism-list  col l-3">
                        <figure class="container__tourism-list-img snip0019">
                        <img src="${destination.img}" alt="photo">
                                <figcaption>
                                <div><h2>Which<span> country </span> do you want to go to?</h2></div>
                                <div><p>Go and experience new and exciting things.</p></div>
                                <a href="#"></a>
                                </figcaption>   
                                </figure>
                        <p>${destination.name}</p>
                    </div>
                        `;
    });
    tourismIMG.innerHTML = htmlDestinations.join("\n");
  },
  renderBg: function () {
    const bgCategory = SelectorAll(".city-container__category");
    bgCategory.forEach((item, index) => {
      item.style.backgroundColor = "#fff";
      if (index == 0) {
        item.style.backgroundColor = "#c17fde";
      }
      if (index == 1) {
        item.style.backgroundColor = "#2cc0d9";
      }
      if (index == 2) {
        item.style.backgroundColor = "#f8757f";
      }
      if (index == 3) {
        item.style.backgroundColor = "#32c3a5";
      }
      if (index == 4) {
        item.style.backgroundColor = "#f4ad7a";
      }
      if (index == 5) {
        item.style.backgroundColor = "#ffd71e";
      }
    });

    const bgContinents = SelectorAll(".city-container__continents");

    bgContinents.forEach((item, index) => {
      item.style.backgroundColor = "#fff";
      if (index == 0) {
        item.style.backgroundColor = "#ba71da";
      }
      if (index == 1) {
        item.style.backgroundColor = "#14b9d5";
      }
      if (index == 2) {
        item.style.backgroundColor = "#f76570";
      }
      if (index == 3) {
        item.style.backgroundColor = "#1bbc9b";
      }
      if (index == 4) {
        item.style.backgroundColor = "#f3a46b";
      }
      if (index == 5) {
        item.style.backgroundColor = "#ffd205";
      }
    });
  },

  handleEvent: function () {},
  start: function () {
    this.handleEvent();
    this.render();
    this.renderBg();
  },
};
app.start();
