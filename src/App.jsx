import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'

//we are going to pretend that this is data we got from an API
const theList = ['raichu', 'voltorb', 'Rhydon']

function App() {

  const [pokemonList, setPokemonList] = useState(theList)
  const [limit, setLimit] = useState('6')
  const [type, setType] = useState('electric')

  function handleClick() {
    setPokemonList([...pokemonList, 'Mewtwo'])
  }

  function handleLimitChange(event) {
    setLimit(event.target.value)
  }

  function handleTypeChange(event) {
    setType(event.target.value)
  }

  return (
    <div>
      <h1>Here are some pokemon!</h1>
      <form>
        <label htmlFor="limit-input">Limit</label>
        <input id="limit-input" value={limit} onChange={handleLimitChange}/>
        <label htmlFor="type-input">Type</label>
        <input id="type-input" value={type} onChange={handleTypeChange}/>
        <button>Submit</button>
      </form>
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
