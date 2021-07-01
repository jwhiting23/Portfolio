const characterAmountRange = documenent.getElementById('characterAmountRange')
const characterAmountNumber = documenent.getElementById('characterAmountNumber')
const form = docuement.getElementById('passwordGeneratorForm')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = charcacterAmountNumber.value
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

