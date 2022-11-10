const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if (nome !== '' && altura !== '' && peso !== '') {
    const valorImc = (peso / (altura * altura)).toFixed(2)

    let classiicação = ''

    if (valorImc < 18.5) {
      classiicação = 'abaixo do peso.'
    } else if (valorImc < 25) {
      classiicação = 'com peso ideal. Parabéns!'
    } else if (valorImc < 30) {
      classiicação = 'levemente acima do peso.'
    } else if (valorImc < 35) {
      classiicação = 'com obesidade grau I.'
    } else if (valorImc < 40) {
      classiicação = 'com obesidade grau II.'
    } else {
      classiicação = 'com obesidade grau III. Cuidado!!!'
    }

    resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classiicação}`
  } else {
    resultado.textContent = 'Preencha todos os campos!!'
  }
}

calcular.addEventListener('click', imc)
