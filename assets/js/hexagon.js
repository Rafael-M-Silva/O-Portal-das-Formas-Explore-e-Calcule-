const btn = document.querySelector('.btn-form')
let lenghtInput = document.querySelector('#tamanho')

const calculate = (e) => {
  e.preventDefault()

  let calcHexagon = (Math.pow(lenghtInput.value , 2) / 4 ) * 6
  let res =document.querySelector('.res h3')

   res.innerHTML = `A área do <span>Hexágono Regular</span> é: ${calcHexagon}√³`
  

  resetInput()
}


const resetInput = () => {
  lenghtInput.value = ''
  btn.classList.add('disabled')
  btn.setAttribute('disabled', '')
}

const btnActivated = (e) => {
  if(e.target.value > 0){
    btn.classList.remove('disabled')
    btn.removeAttribute('disabled', '')
    return
  }

  btn.classList.add('disabled')
  btn.setAttribute('disabled', '')
}

lenghtInput.addEventListener('input', btnActivated)
btn.addEventListener('click', calculate)