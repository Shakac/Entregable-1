import getRandomElementFromArray from "../utils/randomElementFromArray"
import phrase from '../utils/phrases.json'

const ButtonPhrase = ({ setPhraseRandom, setPathRandom, arrBackground }) => {

    const handleRandomPhrase = () => {
        const newRandomPhrase = getRandomElementFromArray(phrase)
        setPhraseRandom(newRandomPhrase)
        const newPath = getRandomElementFromArray(arrBackground)
        setPathRandom(newPath)
    }

    return (
        <button onClick={handleRandomPhrase}>Probar mi Suerte</button>
    )
}
 
export default ButtonPhrase