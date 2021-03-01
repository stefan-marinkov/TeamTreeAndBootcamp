let = html = "";
const main = document.querySelector("main");

for( let prop in pets) {
    let pet = pets[prop]
    html += `
      <h2>${pet.name}</h2>
      <h3>${pet.type} | ${pet.breed}</h3>
      <p>Age : ${pet.age}</p>
      <img src="${pet.photo}" alt="${pet.breed}">
    `;
}

main.insertAdjacentHTML("beforeend", html)