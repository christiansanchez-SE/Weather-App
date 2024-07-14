let result = document.getElementById("result");
let searchButton = document.getElementById("searchBtn");
let cityRef = document.getElementById("city");
let weatherIcon = document.querySelector(".weatherIcon");

export async function getTemp() {
  let cityValue = cityRef.value;
  if (cityValue.length === 0) {
    result.innerHTML = `Please enter a city name`;
  } else {

    let capitalizedString = capitalizeEachWord(cityValue);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${capitalizedString}&appid=aa459fca760500cc0965198c715b1e6e&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        let capitalizedDescription = capitalizeEachWord(
          json.weather[0].description
        );

        result.innerHTML = `${capitalizedString} <br>
              ${capitalizedDescription} <br>
               Temperature: ${json.main.temp}°C <br>
               Feels Like: ${json.main.feels_like}°C <br>
               `;

        let iconCode = json.weather[0].icon;
        let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
        weatherIcon.src = iconUrl;
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
        result.innerHTML = "Error fetching data. Please try again later.";
      });
  }
}

function capitalizeEachWord(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

searchButton.addEventListener("click", getTemp);

