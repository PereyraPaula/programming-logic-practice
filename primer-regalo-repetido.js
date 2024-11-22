// https://adventjs.dev/es/challenges/2023/1

function findFirstRepeated(gifts) {
  const quantityOfEachNumber = {};

  for (let i = 0; i < gifts.length; i++) {
    const actualId = gifts[i];
    let indexes = [];
    let idx = gifts.indexOf(actualId);
    while (idx !== -1) {
      // Busca de los numeros repetidos, sus índices.
      indexes.push(idx);
      idx = gifts.indexOf(actualId, idx + 1);
    }
    quantityOfEachNumber[actualId] = {
      occurrency: (quantityOfEachNumber[actualId]?.occurrency || 0) + 1,
      indexes: indexes.at(-1), // Toma el Indice de la ultima vez que aparece el numero repetido.
    };
  }

  // Filtrar lo que aparecen más de dos veces
  const multipleOccurrence = Object.entries(quantityOfEachNumber).filter(
    (array) => array[1].occurrency === 2,
  );

  // Buscar cual aparece primero repetido
  let number = multipleOccurrence[0];
  for (let i = 1; i < multipleOccurrence.length; i++) {
    if (multipleOccurrence[i][1].indexes < number[1].indexes) {
      number = multipleOccurrence[i];
    }
  }

  return number ? Number(number[0]) : -1;
}

// const giftIds = [2, 1, 3, 5, 3, 2];
// const firstRepeatedId = findFirstRepeated(giftIds);
// console.log(firstRepeatedId); // 3

// const giftIds2 = [1, 2, 3, 4];
// const firstRepeatedId2 = findFirstRepeated(giftIds2);
// console.log(firstRepeatedId2);

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
