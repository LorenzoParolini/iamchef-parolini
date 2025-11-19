import { useState, useEffect } from 'react';
import './App.css';
import Layout from './layout/Layout';
import Header from './layout/header/Header';
import SearchPage from './pages/SearchPage';
import DiscoverRecipes from './pages/DiscoverRecipes';
import RecipeDetails from './pages/RecipeDetails';
import { useApi, getRecipeInformationURL } from './hooks/useApi';
import type { Page, Recipe, RecipeByIngredients } from './types';

// componente principale che gestisce routing e stato globale
function App() {
  
  // quale pagina mostrare
  const [currentPage, setCurrentPage] = useState<Page>('search');
  
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
    setRecipeDetailsURL(getRecipeInformationURL(recipe.id));
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
    setSelectedIngredients([]);
    setCurrentPage('search');
  };

  let mainContent = null;
  
  switch (currentPage) {
    case 'search':
      mainContent = <SearchPage onSearch={handleSearchComplete} />;
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
      header={currentPage !== 'search' ? <Header /> : undefined}
      main={mainContent}
    />
  );
}

export default App;