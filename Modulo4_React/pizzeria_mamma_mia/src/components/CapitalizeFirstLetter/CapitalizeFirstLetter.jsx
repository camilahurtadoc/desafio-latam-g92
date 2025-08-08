
const CapitalizeFirstLetter = ({ word }) => {
    const firstLetterCapt = word.charAt(0).toUpperCase()
    const otherLetters = word.slice(1)
    const capitalizedLetter = firstLetterCapt + otherLetters
  return (
    <>{capitalizedLetter}</>
  )
}

export default CapitalizeFirstLetter