import { useState } from 'react'
import axios from 'axios'
import Card from './Card.jsx'
import './App.css'

function App() {

  const [pokemonList, setPokemonList] = useState([])
  const [limit, setLimit] = useState('6')
  const [type, setType] = useState('electric')

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

      //gets part of the response from the poke API and grabs an array of pokemon data objects
      let uglyPokemonObjectArray = response.data.pokemon
      //turns array of pokemon objects into an array of the strings of all the pokemon's names
      let prettyPokemonStringArray = uglyPokemonObjectArray.map((pokeObj) => pokeObj.pokemon.name)

      //let's cut down the array length to be whatever the user input
      if (+limit > 0) {
        //if the user puts in a valid limit input in the form, then make the array -limit- long
        let newPokemonArray = prettyPokemonStringArray.slice(0, +limit)
        setPokemonList(newPokemonArray)
      } else {
        //if the user puts in an invalid limit, then make the array empty
        setPokemonList([])
      }
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
    </div>
  )
}

export default App
