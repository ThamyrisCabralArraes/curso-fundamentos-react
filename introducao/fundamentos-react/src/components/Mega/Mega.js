const numerosSorteados = (quant) => {
  const numbers = [];

  while (numbers.length < quant) {
    const numerosAleatorio = Math.floor(Math.random() * 8);
    if (!numbers.includes(numerosAleatorio)) {
      numbers.push(numerosAleatorio);
    }
  }
  return numbers;
};
console.log(numerosSorteados(7));
