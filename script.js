//your JS code here. If required.
const apiKey = "b55e2180d1903b459d72a0fa636c2003";

const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const main = document.getElementsByClassName("main")[0];
const getData = async() => {
    const data = await fetch(apiurl + "london" + `&appid=${apiKey}`);
    const json = await data.json();
    console.log(json.weather[0].main)

    const div = document.createElement('div');
    div.textContent = "Current weather in London: " + `${json.weather[0].main}`
    main.append(div)

}