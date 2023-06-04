// const user = {
//     firstName: "Natalia",
//     lastName: "Kowalska",
//     age: 13
// };

// for (let i=0; i < user.length; i++)
// {
//     const li = document.createElement("li");    
//     li.innerHTML = 
// }
// const app = document.querySelector(".user");
// //li.innerHTML = `${user.firstName}`
// app.appendChild(li);


const user = {
    firstName: 'Andrzej',
    lastName: 'Gołota',
    age: 13
  }
  
  const itemList = document.createElement("li");
  const listBox = document.getElementById('users')
      
  for (let i in user){
    const itemList = document.createElement("li");
    itemList.className = "list__item";
    itemList.innerText = user[i];
    listBox.appendChild(itemList);
    console.log(itemList.innerText = user[i]);
  }
  const listItem = document.querySelectorAll(".listItem");
  const ageBtn = document.getElementById("age");
  const image = document.querySelector(".image");
  ageBtn.addEventListener("click", () => {    
    user.age++;
    listItem[2].innerText = user.age;
    if (user.age >= 18)
    {
        image.style.display = "block";
        alert("Teraz możesz upić swoje zwycięstwo!");
    }        
  });
