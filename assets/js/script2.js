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
const hobbies1 = hobbies.map((hobby) => {
    if (hobby === "coding") {
        return " " + hobby.toUpperCase();
    } else
    {
        return " " + hobby;
    }
});                             //hobbies.map((hobby) => " " + hobby);
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
hobbiesBox.innerText = hobbies1;
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

const a = 'a';
const b = 'b';
const c = 'c';
console.log(a);
setTimeout(() => {
    console.log(b)
}, 1000);
console.log(c);

// let leftTime = 60;

//  val(() => {
//     leftTime--;
//     console.log('pozostało: ' + leftTime + 'sek');
// }, 1000);

const app = document.getElementById("app");
const box = document.createElement("div");
const activeBox = document.getElementById("activeBox");

app.appendChild(box);
box.className = 'box';
activeBox.addEventListener('click', () => {
    if (box.className.includes("box--active")){
        box.className = 'box';
    } else {
        box.className = 'box box--active';
    }    
});

const listItem = document.getElementsByClassName('list__item');
//listItem.style.backgroundColor = '#00ff00';

//for (let i = 0; i < listItem.length; i++){
    //listItem[i].style.backgroundColor = "#00ff00";
//}

// const btnNext = document.getElementById('btnNext');

// let index = 0;
// btnNext.addEventListener('click', () => {
//     if (index === listItem.length-1)
//         index = 0;
//     else
//         index++;
//     listItem[index].style.backgroundColor = 'red';
// });
// btnNext.addEventListener('click', () => {
//     if (index === listItem.length-1)

// const boxItem = document.getElementsByClassName('box__item');
// for (let i = 0; i < boxItem.length; i++){
//     boxItem[i].style.backgroundColor = 'yellow';
// }

// boxItem[0].style.backgroundColor = 'red';
// const btnColor = document.getElementById('changeColor');
// btnColor.addEventListener('click', () => {

// })


const boxItem = document.getElementsByClassName("box__item");
for (let i = 0; i < boxItem.length; i++) {
	boxItem[i].style.backgroundColor = "yellow";
}
boxItem[0].style.backgroundColor = "red";
let index = 0;
const btnColor = document.getElementById("changeColor");
btnColor.addEventListener("click", () => {
    
	boxItem[index].style.backgroundColor = "yellow";
	if (index == boxItem.length - 1) {
		index = 0;
        boxItem[index].style.backgroundColor = "red";        
		return;
	}
	index++;
	boxItem[index].style.backgroundColor = "red";
	
});
