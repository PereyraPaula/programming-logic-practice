// https://adventjs.dev/es/challenges/2023/2

function manufacture(gifts, materials) {
  const approved = []
  gifts.forEach(gift => {
    const letters = gift.split("")
    const isPresent = letters.every((letter) => materials.includes(letter));
    if (isPresent) approved.push(gift)
  });
  
  return approved;
}

// const gifts = ["tren", "oso", "pelota"];
// const materials = "tronesa";

// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'

const gifts = ['libro', 'ps5']
const materials = 'psli'

console.log(manufacture(gifts, materials));
