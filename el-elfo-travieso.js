// https://2023.adventjs.dev/es/challenges/2023/3

function findNaughtyStep(original, modified) {
  const longerString = original.length > modified.length ? original : modified

  for (let i = 0; i < longerString.length; i++) {
    if (original[i] != modified[i]) {
      return longerString[i]
    }
  }
  return ""
}

const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e' 

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
findNaughtyStep(original3, modified3)

console.log(findNaughtyStep('iiiii', 'iiiii'))