import { useState } from 'react';
import './App.css';
import Layout from './layout/Layout';
import Header from './layout/header/Header';
import SearchPage from './pages/SearchPage';
import DiscoverRecipes from './pages/DiscoverRecipes';
import RecipeDetails from './pages/RecipeDetails';
import { getRecipeInformation } from './service/utils';
import type { Page, Recipe, RecipeByIngredients } from './types';

// componente principale che gestisce routing e stato globale
function App() {
  
  // quale pagina mostrare
  const [currentPage, setCurrentPage] = useState<Page>('search');
  
  // ricette trovate dalla ricerca
  const [recipes, setRecipes] = useState<RecipeByIngredients[]>([]);
  
  // ricetta selezionata per vedere dettagli
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  
  // ingredienti che ha scelto l'utente
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  
  // indice corrente nel carousel
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState<number>(0);
  
  // quando finisce la ricerca nella search page
  const handleSearchComplete = (foundRecipes: RecipeByIngredients[], ingredients: string[]) => {
    setRecipes(foundRecipes);
    setSelectedIngredients(ingredients);
    setCurrentPage('discover');
  };
  
  // quando clicchi su una ricetta
  const handleRecipeClick = (recipe: RecipeByIngredients, currentIndex: number) => {
    // todo: qui andrà chiamata api per i dettagli
    const fullRecipe = getRecipeInformation(recipe.id);
    
    if (fullRecipe) {
      setSelectedRecipe(fullRecipe);
      setCurrentRecipeIndex(currentIndex);
      setCurrentPage('details');
    }
  };
  
  // torna indietro dai dettagli
  const handleBackToDiscover = (currentIndex: number) => {
    setSelectedRecipe(null);
    setCurrentRecipeIndex(currentIndex);
    setCurrentPage('discover');
  };
  
  // torna alla ricerca
  const handleBackToSearch = () => {
    setRecipes([]);
    setSelectedRecipe(null);
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
          recipes={recipes}
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