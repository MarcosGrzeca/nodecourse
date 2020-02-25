console.log("Client side java")

fetch("https://puzzle.mead.io/puzzle").then((response) => {
    response.json().then((data) => {
        console.log(data);
    });
});

const weatherForm = document.querySelector("form");
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    messageOne.textContent = "Loading";
    fetch("/weather?address=" + encodeURIComponent(search.value)).then((response) => {
        response.json().then((data) => {
            console.log(data);
            messageOne.textContent = data.forecast;
        });
    });
})
