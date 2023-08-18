let btn = document.querySelector('#btn')

const calculate = (e) => {
  e.preventDefault()

  let res = document.querySelector('.res h3')
  let base = document.querySelector('#base').value
  let altura = document.querySelector('#altura').value

  let calc = base * altura

  res.innerHTML = `A área do <span>Retângulo</span> é: ${calc}m²`
  clear()
}

const clear = () => {
  document.querySelector('#base').value = ''
  document.querySelector('#altura').value = ''
}

btn.addEventListener('click', calculate)
