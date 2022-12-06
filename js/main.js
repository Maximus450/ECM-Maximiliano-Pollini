let yourname = prompt("Enter your name");

function saludar(yourname) {
    console.log("Hola " + yourname);
}
saludar(yourname);

let hour = prompt("Enter the time");

if (hour >= 7 && hour < 13) {
    alert("Good morning!");
} else if (hour >= 13 && hour < 21) {
    alert("Good evening!");
} else {
    alert("Good night!");
}

for (let u = 0; u < 3; u++) {
    console.log("Loop number " + u);
    alert("Loop number " + u)

    for (let i = 0; i < 2; i++) {
        console.log("Secondary loop number " + i);
        alert("Secondary loop number " + i)
    }
}