const fistName = 'Jakub';
const age = 32;
const hobbies = ['juggling', 'coding', 'playing games'];
const car = {
    brand: 'Seat',
    model: 'Altea',
    yearOfProductions: 2010,
};
const isWorking = true;
console.log(name);

const user = {
    firstName,
    age: 15,
    hobbies,
    car,
    isWorking
}

const nameBox = document.getElementById("firstName");
const ageBox = document.querySelector("#age");
const hobbiesBox = document.querySelector("#hobbies");
const carBox = document.querySelector("#car");
const isWorkingBox = document.getElementById("isWorking");
const ageBtn = document.getElementById("ageBtn");
const carBtn = document.getElementById("carBtn");

nameBox.innerText = fistName;
ageBox.innerText = user.age;
hobbiesBox.innerText = hobbies;
carBox.innerText = `${car.brand} ${car.model} - ${car.yearOfProductions}`;
if (isWorking) {
    isWorkingBox.innerText = "is working";
} else {
    isWorkingBox.innerText = "chillin";
}

function changeBackground()
{
    if (user.age < 18) {
        ageBox.style.background = 'red';
    } else
        ageBox.style.background = 'green';   
}

changeBackground();

ageBtn.addEventListener( 'click', () => {    
    user.age++;
    changeBackground();     
    ageBox.innerText = user.age;
});

carBtn.addEventListener( 'click', () => {
    if (car.brand == "Seat") {
    car.brand = 'Ford';
    car.model = 'Focus';
    car.yearOfProductions = 2016;
    
    } else if (car.brand == 'Ford') {
        car.brand = 'Seat';
        car.model = 'Altea';
        car.yearOfProductions = 2010;
    }
    carBox.innerText = `${car.brand} ${car.model} - ${car.yearOfProductions}`;    
});