let btn = document.querySelector('.btn-form')
let base = document.querySelector('#base')
let altura = document.querySelector('#altura')

const calculate = (e) => {
  e.preventDefault()

  let res = document.querySelector('.res h3')
  let calc = base.value * altura.value

  res.innerHTML = `A área do <span>Retângulo</span> é: ${calc.toFixed(2)}m²`
  resetInput()
}

const resetInput = () => {
  base.value = ''
  altura.value = ''

  btnActivated()
}

const btnActivated = () => {
  if(base.value > 0 && altura.value > 0){
    btn.removeAttribute('disabled', '')
    btn.classList.remove('disabled')
    return
  }

  btn.setAttribute('disabled', '')
  btn.classList.add('disabled')
}

base.addEventListener('input', btnActivated)
altura.addEventListener('input', btnActivated)
btn.addEventListener('click', calculate)
