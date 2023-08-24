let areaBaseMenor = document.querySelector('#area-base-menor')
let areaBaseMaior = document.querySelector('#area-base-maior')

const btn = document.querySelector('.btn-form')

const calculate = (e) => {
  e.preventDefault()

  /* https://www.youtube.com/watch?v=yblOIPtFONc */

  let arestaBaseMenor = null
  let arestaBaseMaior = null 
  let arestaLateral = null 
  let apotemaTronco = null 
  let apotemaBaseMenor = null 
  let apotemaBaseMaior = null

  let alturaTronco = null

  let res = document.querySelector('.res h3')

  res.innerHTML = `A área do <span>Tronco de pirâmide</span> é: √³`

resetInput()
}

const resetInput = () => {
  areaBaseMenor.value = ''
  areaBaseMaior.value = ''

  btn.setAttribute('disabled', '')
  btn.classList.add('disabled')
}

const btnActivated = () => {
  if(areaBaseMaior.value > 0 && areaBaseMenor.value) {
    btn.classList.remove('disabled')
    btn.removeAttribute('disabled', '')
    return
  }

  btn.classList.add('disabled')
  btn.setAttribute('disabled', '')
}

areaBaseMaior.addEventListener('input', btnActivated)
areaBaseMenor.addEventListener('input', btnActivated)
btn.addEventListener('click', calculate)