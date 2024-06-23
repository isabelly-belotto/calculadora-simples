const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const selector = document.getElementById("selector")
const resultado = document.getElementById("resultado")
const botao = document.getElementById("botao")

function calcular() {
  let calculo
  switch (selector.value) {
    
    
    case "+":
       calculo = (parseFloat(n1.value) + parseFloat(n2.value))
      resultado.innerHTML = `Resultado da soma de ${n1.value} + ${n2.value} = ${calculo}`
      break;

      case "-":
       calculo = (parseFloat(n1.value) - parseFloat(n2.value))
      resultado.innerHTML = `Resultado da subtracao de ${n1.value} - ${n2.value} = ${calculo}`
      break;

      case "/":
       calculo = (parseFloat(n1.value) / parseFloat(n2.value))
      resultado.innerHTML = `Resultado da divisao de ${n1.value} / ${n2.value} = ${calculo}`
      break;

      case "*":
       calculo = (parseFloat(n1.value) * parseFloat(n2.value))
      resultado.innerHTML = `Resultado da multiplicacao de ${n1.value} * ${n2.value} = ${calculo}`
      break;
  }

}

botao.addEventListener("click", () => {
  calcular()
})

