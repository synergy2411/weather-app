const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const forecast = document.querySelector("#forecast");
const address = document.querySelector("#address");

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(search);
    fetch("http://localhost:3000/weather?address=" + search.value)
        .then(response => {
            response.json().then(data => {
                if (data.error) {
                    console.log("ERROR")
                    forecast.textContent = data.error;
                } else {
                    console.log(JSON.stringify(data, undefined, 2));
                    forecast.textContent = data.forecast;
                    address.textContent = data.location;
                }

            })
                .catch(err => forecast.textContent = err);

        })
})
