"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 10000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${
          data.languages[Object.keys(data.languages)[0]]
        }</p>
        <p class="country__row"><span>💰</span>${
          data.currencies[Object.keys(data.currencies)[0]].name
        }</p>
      </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = "1";
};

const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=2987549403914129990x1623`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);
      const country = data.country.toLowerCase();
      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((err) => console.error(`Something went wrong.${err.message}!`));
};

btn.addEventListener("click", function () {
  whereAmI(52.508, 13.381);
});

// whereAmI(52.508, 13.381);
