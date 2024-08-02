const backArrow = document.querySelector(".back-arrow");

backArrow.addEventListener("click", async () => {
  window.location.href = `index.html`;
});

const params = new URLSearchParams(window.location.search);

const city = params.get("name");
const temp = params.get("temp");
const feels_like = params.get("feels_like");
const description = params.get("description");
const humidity = params.get("humidity");
const icon = params.get("icon");

document.querySelector(".location span").textContent = city;
document.querySelector(".humidity .texts span").textContent = humidity;
document.querySelector(".feels-like .texts span").textContent = feels_like;
document.querySelector(".description").textContent = description;
document.querySelector(".temp span").textContent = temp;
const newSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
document.querySelector(".weather-img").src = newSrc;
