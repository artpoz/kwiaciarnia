console.log("hello world");
let a = 7;
let b = 8;
let c = "7";
console.log(a+b);
console.log(a*b);

if (a > b) {
    alert("a jest większe niż b")
}

typeof(b);
console.log(c+a); //77

let isRaining = false;

if (!isRaining){
    console.log('Pada deszcze!');    
} else {
    console.log('Jest słonecznie');
}

if (a == c)  // true - sprowadza do tych samych typów
{
    console.log("a jest rowne c");
}

if (a === c)  // false
{
    console.log("a jest rowne c");
}

function getWeather() {
    if (isRaining){
        console.log('Pada deszcze!');    
    } else {
        console.log('Jest słonecznie');
    }

    isRaining = !isRaining;
}

getWeather();

const btn = document.getElementById("rainBtn");

const nav = document.getElementById("nav");

btn.addEventListener('click', () => {
    getWeather();
    nav.style.backgroundColor = "black";
});

// let tax = 1.23;

// function countTax(v, t = tax) {
//     console.log(v * t);
// }

// countTax(1);
// countTax(56);
// countTax(300, 1.21);
// countTax(10);

// for (let i = 1; i <= 100; i++){
//     console.log("uzytkownik nr."+i);
// }

// const members = ['Adam', 'Jarek', 'Jakub', 'Kamil', 'Michal', 'Natalia'];

// for (let j =0; j<members.length; j++) {
//     if (j===2) // members[j] == "Jakub"
//     continue;

//     console.log('Przeslij materialy do nauki dla uczestnika' + members[j]);
// }
// // ------------------------------------------------------
// for (let m=0; m < 5; m++) {
//     if (m!==3){
//         console.log(m);
//     } else {
//         console.log('numer - ' +m);        
//     }
// }

// const name = "Radek";
// const surname = 'Nowak';
// let age = 28;

// const car = {
//     brand: "Ford",
//     model: "Focus",
//     yearOfProduction: 2018,
//     power: 104,
//     tuning: function() {
//         this.power += 20;
//     },
// };

// car.tuning();
// console.log(car.power);

//const box = ['Text', 1 , true, false, ['Tytuł', 'opis', 1992], { name: "Adam", yearOfBirth: 1982 }]

// const members = [
//     "Adam_B",
//     "Adrian",
//     "Artur",
//     "Iryna",
//     "Jacek",
//     "Jarek",
//     "Kacper",
//     "Kamil",
//     "Karol",
//     "Krzysztof",
//     "Mateusz",
//     "Michał",
//     "Natalia T",
//     "Natalia Tomasz",
//     "Oleh",
//     "Paweł",
//     "Radek",
//   ];

//   members.push("Jakub");
//   members[0]="Andy";
// const czterejOstatni = members.slice(-4);
// console.log(czterejOstatni);
// for(let i =0; i< members.length;i++){
//     if (members[i]=== "Jarek"){
//         console.log("Jarek jest z nami!");
//     }
//     if(members[i]==="Michał"){
//         console.log(i+1);
//     }
// }

// const title = document.getElementById("title");

// const actionBtn = document.getElementById('actionBtn');
// actionBtn.addEventListener("click", () => {
//     title.style.color = "yellow";
// });

const movies = [
    {
        title: 'The Lord of the rings',
        yearOfProdaction: 2001,
        likes: 507
    },
    {
        title: 'Harry Potter',
        yearOfProdaction: 2000,
        likes: 655
    },
    {
        title: 'Matrix',
        yearOfProdaction: 1999,
        likes: 737
    }
];

let title = document.querySelector('.titleOfFilm');
let year = document.querySelector('.yearOfProduction');
let likes = document.querySelector('.likes');
let moviesBtn = document.querySelector('.movies__btn');

title.innerHTML = movies[0].title;
year.innerHTML = movies[0].yearOfProdaction;
likes.innerHTML = 'Likes ' + movies[0].likes;

moviesBtn.addEventListener('click', () => {
    movies[0].likes++;
    likes.innerHTML = 'Likes ' + movies[0].likes;
});