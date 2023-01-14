const numerosSorteados = (quant) => {
  const numbers = [];

  while (numbers.length < quant) {
    const numerosAleatorio = Math.floor(Math.random() * 61);
    if (!numbers.includes(numerosAleatorio)) {
      numbers.push(numerosAleatorio);
    }
  }
  return numbers.sort();
};

export default numerosSorteados;
