const apiId = "068e39e4c521f24bcb1f2324e3714319";

let weatherData;

const locationInput = document.querySelector(".search-text");
const searchInput = document.querySelector(".search-input");
const loadingDiv = document.querySelector(".loading");
const errorFetching = document.querySelector(".error-fetching");
const userDenied = document.querySelector(".user-denied");
const locationButton = document.querySelector(".location-button");

searchInput.addEventListener("submit", async (e) => {
  e.preventDefault();
  loadingDiv.style.display = "block";
  errorFetching.style.display = "none";
  userDenied.style.display = "none";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=${apiId}&units=metric`
    );

    const data = await response.json();

    console.log(data.name);
    weatherData = data;

    if (!response.ok) {
      throw new Error();
    }

    const queryString = new URLSearchParams({
      name: data.name,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      icon: data.weather[0].icon,
    }).toString();
    console.log(data);

    window.location.href = `weather.html?${queryString}`;
  } catch (error) {
    errorFetching.style.display = "block";
  } finally {
    loadingDiv.style.display = "none";
  }
  console.log(weatherData);
});

locationButton.addEventListener("click", async () => {
  loadingDiv.style.display = "block";
  errorFetching.style.display = "none";
  userDenied.style.display = "none";

  try {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}&units=metric`
        );

        console.log(response);

        const data = await response.json();

        console.log(data.name);
        weatherData = data;

        if (!response.ok) {
          userDenied.style.display = "block";
          throw new Error();
        }
        const queryString = new URLSearchParams({
          name: data.name,
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          icon: data.weather[0].icon,
        }).toString();
        console.log(data);

        window.location.href = `weather.html?${queryString}`;
      });
    } else {
      userDenied.style.display = "block";
    }
  } catch (error) {
    userDenied.style.display = "block";
  } finally {
    loadingDiv.style.display = "none";
  }
  console.log(weatherData);
});
