const apiId = "068e39e4c521f24bcb1f2324e3714319";

let weatherData;

// document.addEventListener("DOMContentLoaded", () => {
const locationInput = document.querySelector(".search-text");
const searchButton = document.querySelector(".search-button");
const loadingDiv = document.querySelector(".loading");
const errorFetching = document.querySelector(".error-fetching");
const userDenied = document.querySelector(".user-denied");
const locationButton = document.querySelector(".location-button");

console.log(navigator.geolocation);

// locationButton.addEventListener("click", () => {
//   if (navigator.geolocation) {
//     console.log("checking");
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//   } else {
//     console.log("eroorr");
//     // locationInfo.textContent = "Geolocation is not supported by this browser.";
//   }
// });

// function successCallback(position) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;

//   locationInfo.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
// }

// function errorCallback(error) {
//   switch (error.code) {
//     case error.PERMISSION_DENIED:
//       locationInfo.textContent = "User denied the request for Geolocation.";
//       break;
//     case error.POSITION_UNAVAILABLE:
//       locationInfo.textContent = "Location information is unavailable.";
//       break;
//     case error.TIMEOUT:
//       locationInfo.textContent = "The request to get user location timed out.";
//       break;
//     case error.UNKNOWN_ERROR:
//       locationInfo.textContent = "An unknown error occurred.";
//       break;
//   }
// }

searchButton.addEventListener("click", async () => {
  loadingDiv.style.display = "block";
  errorFetching.style.display = "none";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=${apiId}`
    );

    const data = await response.json();

    console.log(data.name);
    weatherData = data;

    if (!response.ok) {
      throw new Error();
    }
  } catch (error) {
    errorFetching.style.display = "block";
  } finally {
    loadingDiv.style.display = "none";
  }
  console.log(weatherData);
});

locationButton.addEventListener("click", async () => {
  loadingDiv.style.display = "block";
  userDenied.style.display = "none";
  try {
    console.log(latitude);
    console.log(longitude);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}.44&${longitude}=-94.04&appid=${apiId}`
    );

    console.log(response);

    const data = await response.json();

    console.log(data.name);
    weatherData = data;

    if (!response.ok) {
      throw new Error();
    }
  } catch (error) {
    userDenied.style.display = "block";
  } finally {
    loadingDiv.style.display = "none";
  }
  console.log(weatherData);
});

// });
