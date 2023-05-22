
import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrases from './utils/phrases.json'
import getRandomElementFromArray from './utils/randomElementFromArray'
import fondo1 from './assets/react.svg'

const arrBackground = [1, 2, 3, 4, 5, 6, 7, 8]

function App() {

    const initialPhrase = randomElementFromArray(phrases)
    const inicialPath = randomElementFromArray(arrBackground)

    const [phraseRandom, setPhraseRandom] = useState (initialPhrase)
    const [PathRandom, setPathRandom] = useState(inicialPath)

    const objStyle = {
      backgroundImage: `url('/images/fondo${PathRandom}.png')`
    }

  return (
        <div style={objStyle} className='app'>
         <h1>Galleta de la fortuna</h1>
         <ButtonPhrase 
            setPhraseRandom={setPhraseRandom} 
            setPathRandom={setPathRandom}
            arrBackground={arrBackground}
            />
         <PhrasesCard phraseRandom={phraseRandom} />
      </div> 
  )
}

export default App
