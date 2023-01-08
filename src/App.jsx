import useCall from './hooks/useCall'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import CocktalInfo from './components/CocktailInfo'

function App() {

  //Url de la Api a consumir
  const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?'

  //Funcion que establece el valor a buscar
  const [search, setSearch] = useState('')

  const getSearch = (e)=>{
    e.preventDefault()
    setSearch(e.target[0].value)
  }

  //Regresar al inicio
  const goHome = ()=>{
    setSearch('')
  }

  //Llamada a la Api
  const [cocktail] = useCall(baseURL + `s=${search}`,(response)=> response.data.drinks)

  //Orden de los Cockteles Alfabeticamente
  cocktail != null && cocktail.sort(( a , b) => a.strDrink.localeCompare(b.strDrink))

  //Funcion que obtiene la info de un Cocktail cuando es seleccionado
  const [cocktailData, setCocktailData] = useState({})
  const cocktailInfo = (cocktail)=>{
    document.querySelector('.info__background').classList.toggle('show')
    setCocktailData(cocktail)
  }

  return (
    <div className="App">
      <CocktalInfo cocktail={cocktailData} />
      <Navbar callback={ getSearch } home={ goHome } ></Navbar>
      <section className='container'>
        {
          cocktail != null ?
          cocktail.map((element, index)=> <Card cocktail={element} callback={ cocktailInfo } key={`key-${index}`} /> ) : 
          'No hay resultados'
        }
      </section>
    </div>
  )
}

export default App
