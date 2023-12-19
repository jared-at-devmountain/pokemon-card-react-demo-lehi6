import { useState } from 'react'
import axios from 'axios'
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

  function formSubmitListener(event) {
    event.preventDefault()

    axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    .then((response) => {
      //wow! successfully logs a pokemon! The first of it's type!
      console.log(response.data.pokemon[0].pokemon.name)
    })
    .catch((error) => {
      console.log('that was a very bad song, johnny!')
      console.log(error)
    })
  }

  return (
    <div>
      <h1>Here are some pokemon!</h1>
      <form onSubmit={formSubmitListener}>
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
