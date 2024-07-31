const hi = fetch(
  "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=068e39e4c521f24bcb1f2324e3714319"
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
console.log(hi);
