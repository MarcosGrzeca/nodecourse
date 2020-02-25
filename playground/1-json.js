const fs = require("fs")

const book = {
    title: "Ego",
    author: "Marcos"
}

const bookJson = JSON.stringify(book);
fs.writeFileSync("1-json.json", bookJson);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title)