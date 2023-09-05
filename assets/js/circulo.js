let btn = document.querySelector('.btn-form')
let raio = document.querySelector('#raio')

const calculateCircle = (e) => {
  e.preventDefault()

  let pi = Math.PI
  let calcArea = pi * Math.pow(raio.value, 2)
  let res = document.querySelector('.res h3')

  res.innerHTML = `A área do <span>Círculo</span> é: ${calcArea.toFixed(2).replace('.', ',')}m²`
  resetInput()
}

const resetInput = () => {
  raio.value = ''
  btnActivated()
}

const btnActivated = (e) => {
  if(e.target.value >= 1) {
    btn.classList.remove('disabled')
    btn.removeAttribute('disabled', '')
    return
  }

  btn.classList.add('disabled')
  btn.setAttribute('disabled', '')
}

raio.addEventListener('input', btnActivated)
btn.addEventListener('click', calculateCircle)