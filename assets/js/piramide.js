let areaBaseMenor = document.querySelector('#area-base-menor')
let areaBaseMaior = document.querySelector('#area-base-maior')
let alturaTronco = document.querySelector('#altura-tronco')

const btn = document.querySelector('.btn-form')

const calculate = (e) => {
e.preventDefault()

let arestaBaseMenor = Number(areaBaseMenor.value)
let arestaBaseMaior = Number(areaBaseMaior.value)
let apotemaBaseMenor = arestaBaseMenor / 2
let apotemaBaseMaior = arestaBaseMaior / 2

let alturaT = alturaTronco.value
let apotemaTronco = Math.pow(alturaT, 2) + Math.pow(apotemaBaseMaior - apotemaBaseMenor, 2);
let arestaLateral = (((arestaBaseMaior + arestaBaseMenor) * Math.sqrt(apotemaTronco)) / 2) * 4

let res = document.querySelector('.res h3')

res.innerHTML = `A área do <span>Tronco de pirâmide</span> é: ${arestaLateral.toFixed(2)}m²`

resetInput()
}

const resetInput = () => {
  areaBaseMenor.value = ''
  areaBaseMaior.value = ''
  alturaTronco.value = ''

  btn.setAttribute('disabled', '')
  btn.classList.add('disabled')
}

const btnActivated = () => {
  if(areaBaseMaior.value > 0 && areaBaseMenor.value && alturaTronco.value > 0) {
    btn.classList.remove('disabled')
    btn.removeAttribute('disabled', '')
    return
  }

  btn.classList.add('disabled')
  btn.setAttribute('disabled', '')
}

alturaTronco.addEventListener('input', btnActivated)
areaBaseMaior.addEventListener('input', btnActivated)
areaBaseMenor.addEventListener('input', btnActivated)
btn.addEventListener('click', calculate)