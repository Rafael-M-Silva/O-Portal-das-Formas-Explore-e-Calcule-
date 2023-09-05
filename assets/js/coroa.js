let raioMaior = document.querySelector('#raio-maior')
let raioMenor = document.querySelector('#raio-menor')

const btn = document.querySelector('.btn-form')

const calculate = (e) => {
  e.preventDefault()


  let res = document.querySelector('.res h3')
  let PI = Math.PI
  let calc = PI * (Math.pow(raioMaior.value , 2) - Math.pow(raioMenor.value , 2))

  if(parseInt(raioMaior.value) == parseInt(raioMenor.value)) {
    res.innerHTML = 'Os números são iguais, então não há possibilidade de encontrar diferenças!'
  }else if(parseInt(raioMaior.value) < parseInt(raioMenor.value)){
    res.innerHTML = 'Você inseriu um número <span>maior</span> no raio menor!'
  }else {
    res.innerHTML = `A área da <span>coroa circular</span> é: ${calc.toFixed(2).replace('.', ',')}m²`
  }

  resetInput()
}

const resetInput = () => {
  raioMaior.value = ''
  raioMenor.value = ''

  btnActivated()
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