function calcularPi(n) {
  let pi = 0;
  for (let i = 0; i < n i++) {
    pi += 4 * Math.pow(-1, i) / (2 * i + 1); //Usa una librería Math.pow
  }
  return pi;
}
const numeroDeIteraciones = 1000;
