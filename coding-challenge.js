"use strict";
/*
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

const renderError = function (message) {
  countriesContainer.insertAdjacentText("beforeend", message);
};

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=2987549403914129990x1623`
//   )
//     .then((response) => {
//       console.log(response);
//       if (!response.status) {
//         throw new Error(`Problem with geocode.${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // if (!data.city || !data.country) {
//       //   throw new Error("Please provide some valid coordinates");
//       // }
//       console.log(`You are in ${data.city}, ${data.country}`);
//       const country = data.country.toLowerCase();
//       return fetch(`https://restcountries.com/v3.1/name/${country}`);
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
//     })
//     .catch((err) => {
//       renderError(`Something went wrong.${err.message}!`);
//       console.error(`${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = "1";
//     });
// };

// btn.addEventListener("click", function () {
//   whereAmI(19.037, 72.873);
// });

const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=2987549403914129990x1623`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Some problem with geocode(${res.status})`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);

      // Find the country
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Country not found!`);
      }
      return res.json();
    })
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((err) => {
      console.log(`${err.message} 🚫`);
    });
};

// whereAmI(19.037, 72.873);
whereAmI(52.508, 13.381);
whereAmI(-33.933, 18.474);
whereAmI(23.811056, 90.407608);

*/
