import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'

//we are going to pretend that this is data we got from an API
const theList = ['raichu', 'voltorb', 'Rhydon']

function App() {

  const [pokemonList, setPokemonList] = useState(theList)

  function handleClick() {
    setPokemonList([...pokemonList, 'Mewtwo'])
  }

  return (
    <div>
      <h1>Here are some pokemon!</h1>
      {
        pokemonList.map((element, index, array) => {
          return <Card pokemon={element}/>
        })
      }
      <input></input>
      <button onClick={handleClick}>Add pokemon</button>
    </div>
  )
}

export default App
