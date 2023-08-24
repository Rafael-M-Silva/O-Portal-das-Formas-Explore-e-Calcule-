let raioMaior = document.querySelector('#raio-maior')
let raioMenor = document.querySelector('#raio-menor')

const btn = document.querySelector('.btn-form')

const calculate = (e) => {
  e.preventDefault()

  let res = document.querySelector('.res h3')
  let PI = Math.PI
  let calc = PI * ((raioMaior.value * raioMaior.value) - (raioMenor.value * raioMenor.value))

  if(raioMaior.value == raioMenor.value) {
    res.innerHTML = 'Os numeros são iguais, então não há posibilidade de tirar a diferença!'
    resetInput()
    return
  }

  res.innerHTML = `A área da <span>coroa circular</span> é: ${calc.toFixed(2).replace('.', ',')}m²`

  resetInput()
}

const resetInput = () => {
  raioMaior.value = ''
  raioMenor.value = ''

  btn.setAttribute('disabled', '')
  btn.classList.add('disabled')
}

const btnActivated = () => {
  if(raioMaior.value >= 1 && raioMenor.value >=1){
    btn.classList.remove('disabled')
    btn.removeAttribute('disabled', '')
    return
  }
  btn.classList.add('disabled')
  btn.setAttribute('disabled', '')
}

raioMaior.addEventListener('input', btnActivated)
raioMenor.addEventListener('input', btnActivated)
btn.addEventListener('click', calculate)