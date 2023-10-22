let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-input");
searchBtn.addEventListener("click", () => {
    let countryName = countryInput.value;
    let URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(URL);
    fetch(URL).then((response) => response.json()).then((data) => {
        console.log(data)
        result.innerHTML = `<img src = "${data[0].flags.svg}" class = "flag-img">
        <h2>${data[0].name.common}</h2>
        <div class = "wrapper">
            <div class = "data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = "data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = "data-wrapper">
                <h4>Sub-region:</h4>
                <span>${data[0].subregion}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = "data-wrapper">
                <h4>Area (in km<sup>2</sup>):</h4>
                <span>${(data[0].area)}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = "data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = "data-wrapper">
                <h4>Currency:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = "data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages).toString().split(", ").join(", ")}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = "data-wrapper">
                <h4>Time Zone(s):</h4>
                <span>${(data[0].timezones[0])}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = "data-wrapper">
                <h4>Start of Week:</h4>
                <span>${(data[0].startOfWeek)}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = "data-wrapper">
                <h4>Independent:</h4>
                <span>${(data[0].independent)}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = "data-wrapper">
                <h4>Member of UN:</h4>
                <span>${data[0].unMember}</span>
            </div>
        </div>`
    });
});