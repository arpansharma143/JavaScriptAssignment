async function getWhetherInfo() {
  let data = {};

  // fetching
  const city = document.getElementById("CityLocation").value;

  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=f1688ad73a56469abe181848222908&q=${city}&aqi=no`,
    {
      method: "GET",
    }
  );

  if (res.status >= 200 && res.status < 300) {
    const newData = await res.json();
    console.log(newData);

    data = newData;
  } else {
    const errmsg = await res.json();
    alert(errmsg.error.message);
  }

  // rendering the data

  const ul = document.getElementById("whetherInfo");

  ul.innerHTML = ``; // just to clear the previos one
  const newLI = document.createElement("li");

  newLI.innerHTML = `
  <img src="${data.current.condition.icon}" alt="whether icon">
  <p> country =>  ${data.location.country}</p>
  <p> city name => ${data.location.name}</p>
  <p> longitude => ${data.location.lon}</p>
  <p> latitude=> ${data.location.lat}</p>
  <p> condition => ${data.current.condition.text}</p>
  
  <p> temrature in celcius => ${data.current.temp_c} </p>
  <p> temrature in farenheit => ${data.current.temp_f} </p>
  <p> humidity => ${data.current.humidity} </p>

  <p> wind direction => ${data.current.wind_dir} </p>
  <p> wind degree => ${data.current.wind_degree} </p>


  `;

  ul.append(newLI);
}

const button = document.getElementById("button");

button.addEventListener("click", getWhetherInfo);
