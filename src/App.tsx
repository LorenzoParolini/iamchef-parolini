import { useState, useEffect } from 'react';
import './App.css';
import Layout from './layout/Layout';
import Header from './layout/header/Header';
import SearchPage from './pages/search-page/SearchPage';
import DiscoverRecipes from './pages/dicover-recipes/DiscoverRecipes';
import RecipeDetails from './pages/recipe-details/RecipeDetails';
import SetApiPage from './pages/set-api-page/SetApiPage';
import { useApi, getRecipeInformationURL } from './hooks/useApi';
import useAPIStore from './store/useAPIStore';
import type { Page, Recipe, RecipeByIngredients } from './types';
import Footer from './layout/footer/Footer';

// componente principale che gestisce routing e stato globale
function App() {
  
  // Ottieni l'API key dallo store
  const apiKey = useAPIStore((state) => state.ApiKey);
  
  // quale pagina mostrare
  const [currentPage, setCurrentPage] = useState<Page>('setApi');
  
  // ricetta selezionata per vedere dettagli
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  
  // ingredienti che ha scelto l'utente
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  
  // indice corrente nel carousel
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState<number>(0);

  // URL per chiamata API dettagli ricetta
  const [recipeDetailsURL, setRecipeDetailsURL] = useState<string>("");

  // chiamata API per dettagli ricetta
  const { data: recipeDetails } = useApi<Recipe>(recipeDetailsURL);
  
  // quando finisce la ricerca nella search page
  const handleSearchComplete = (ingredients: string[]) => {
    setSelectedIngredients(ingredients);
    setCurrentPage('discover');
  };
  
  // quando clicchi su una ricetta
  const handleRecipeClick = (recipe: RecipeByIngredients, currentIndex: number) => {
    setCurrentRecipeIndex(currentIndex);
    setRecipeDetailsURL(getRecipeInformationURL(recipe.id, apiKey));
  };

  // quando arrivano i dettagli della ricetta, passa alla pagina dettagli
  useEffect(() => {
    if (recipeDetails) {
      setSelectedRecipe(recipeDetails);
      setCurrentPage('details');
    }
  }, [recipeDetails]);
  
  // torna indietro dai dettagli
  const handleBackToDiscover = (currentIndex: number) => {
    setSelectedRecipe(null);
    setCurrentRecipeIndex(currentIndex);
    setCurrentPage('discover');
  };
  
  // torna alla ricerca
  const handleBackToSearch = () => {
    setSelectedRecipe(null);
    setCurrentPage('search');
  };

  // quando l'utente salva l'API key
  const handleApiKeySaved = () => {
    setCurrentPage('search');
  };


  let mainContent = null;
  
  switch (currentPage) {
    case 'setApi':
      mainContent = <SetApiPage onApiKeySaved={handleApiKeySaved} />;
      break;
    case 'search':
      mainContent = <SearchPage 
        onSearch={handleSearchComplete} 
        initialIngredients={selectedIngredients}
      />;
      break;
    case 'discover':
      mainContent = (
        <DiscoverRecipes 
          selectedIngredients={selectedIngredients}
          onRecipeClick={handleRecipeClick}
          onBack={handleBackToSearch}
          id={currentRecipeIndex}
        />
      );
      break;
    case 'details':
      if (selectedRecipe) {
        mainContent = (
          <RecipeDetails 
            recipe={selectedRecipe}
            selectedIngredients={selectedIngredients}
            onBack={handleBackToDiscover}
            id={currentRecipeIndex}
          />
        );
      }
      break;
  }

  return (
    <Layout
      header={currentPage !== 'setApi' ? <Header onHomeClick={handleBackToSearch} /> : undefined}
      main={mainContent}
      footer={<Footer />}
    />
  );
}

export default App;