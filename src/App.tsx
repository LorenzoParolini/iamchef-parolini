
import { useState } from 'react'
import './App.css'
import Badges from './components/badges/Badges'
import Header from './components/header/Header'
import ReadyButton from './components/ready-button/ReadyButton'
import Recipecarousel from './components/recipe-carousel/Recipecarousel'
import ResultCounter from './components/result-counter/ResultCounter'
import SearchBar from './components/search-bar/SearchBar'


function App() {

  const [showCarousel, setShowCarousel] = useState(false);
  const showCarouselHandler = () => {
    setShowCarousel(true);
  }

  //FIXME: aggiungi una funzione handleSearch
  return (
    <>
      <Header />
      
      {showCarousel && 
      <>
        <ResultCounter />
        <Recipecarousel />
      </>
      }
      {!showCarousel && 
      <>z
        <div className='Logo'>
          <img src="./src/assets/logo.png" alt="logo" />
          <h1>I am Chef!</h1>
        </div>

        <SearchBar />

        <Badges />
        {true && <ReadyButton />} 
      </>
      }
    </>
  )
}

export default App
