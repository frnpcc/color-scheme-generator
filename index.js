document.getElementById('select-color').addEventListener('submit', function(e){

  e.preventDefault()

  let url= 'https://www.thecolorapi.com'
  const colorHex = document.getElementById('color-hex').value
  const mode = document.getElementById('mode-options').value
  url += `/scheme?hex=${colorHex.substring(1)}&mode=${mode}&count=5`

  fetch(url)
    .then(res => res.json())
    .then(data => {

      let colorsHtml = ''

      data.colors.forEach((color, index) => colorsHtml += `
      <img
      id="color-${index + 1}"
      src="${color.image.bare}"
      alt="image for color ${color.name.value}">
      <span class="hex-value" id="hex-${index + 1}">${color.hex.value}</span>
      `)

      renderColorScheme(colorsHtml)
    })

})

function renderColorScheme(html) {

  document.getElementById('colors-container').innerHTML = html

}

document.addEventListener('click', function(e){

  if (e.target.className === 'hex-value'){
    navigator.clipboard.writeText(e.target.innerText)
  }

})
