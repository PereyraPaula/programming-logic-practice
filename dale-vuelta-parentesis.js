function decode (message) {
  const nestRegex = /\(([\w\s]+)\)/g

  while (nestRegex.test(message)) {
    message = message.replaceAll(nestRegex, (_match, subgroup) => {
      return [...subgroup].reverse().join('')
    })
  }

  return message
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus

