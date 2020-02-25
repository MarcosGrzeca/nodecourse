console.clear()
const squareOld = function (x) {
    return x * x;
}

const squarev1 = (x) => {
    return x * x;
}

//const square = (x) => x * x;

const event = {
    name: 'Birthday Party',
    guestList: ["Andrew", "Jen", "Mike"],
    printGuestList() {
        console.log("Guest list for " + this.name);
        this.guestList.forEach((nome) => {
            console.log(nome + " is attending " + this.name)
        })
    }
}

//console.log(square(3));
event.printGuestList()