import { useState, useEffect } from 'react';
import './App.css';
import Layout from './layout/Layout';
import Header from './layout/header/Header';
import SearchPage from './pages/search-page/SearchPage';
import DiscoverRecipes from './pages/dicover-recipes/DiscoverRecipes';
import RecipeDetails from './pages/recipe-details/RecipeDetails';
import SetApiPage from './pages/set-api-page/SetApiPage';
import { useRecipeSearch } from './hooks/useRecipeSearch';
import { useRecipeDetails } from './hooks/useRecipeDetails';
import { usePageNavigation } from './hooks/usePageNavigation';
import useAPIStore from './store/useAPIStore';
import Footer from './layout/footer/Footer';

//TODO: creare file router.tsx con configurazione delle rotte
//TODO: sostituire lo switch case con il router provider
//TODO: rimuovere lo stato currentPage, sarà gestito dall'url

function App() {
  const { ApiKey: apiKey } = useAPIStore();

  // usa react router quando possibile, per ora gestiamo le pagine manualmente
  const { currentPage, goToSearch, goToDiscover, goToDetails } = usePageNavigation(
    apiKey ? 'search' : 'setApi'
  );

  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  
  // questo hook si occupa di chiamare l'API quando cambiano gli ingredienti
  const { recipes, loading: recipesLoading, error: recipesError } = useRecipeSearch(
    selectedIngredients, 
    apiKey
  );
  
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState<number>(0);
  
  // quando selezioni una ricetta, questo hook carica automaticamente i dettagli
  const { selectedRecipe, selectRecipe, clearRecipe } = useRecipeDetails(apiKey);

  const handleSearchComplete = (ingredients: string[]) => {
    setSelectedIngredients(ingredients);
    goToDiscover();
    setCurrentRecipeIndex(0);
  };

  const handleApiKeySaved = () => {
    goToSearch();
  };

  const handleRecipeClick = () => {
    goToDetails();
  };

  const handleBackToSearch = () => {
    clearRecipe();
    goToSearch();
  };

  const handleBackToDiscover = (currentIndex: number) => {
    clearRecipe();
    setCurrentRecipeIndex(currentIndex);
    goToDiscover();
  };

  const handleIndexChange = (newIndex: number) => {
    setCurrentRecipeIndex(newIndex);
  };

  // quando cambia l'index, carica i dettagli della ricetta
  useEffect(() => {
    if (recipes && recipes[currentRecipeIndex]) {
      selectRecipe(recipes[currentRecipeIndex].id);
    }
  }, [currentRecipeIndex, recipes, selectRecipe]);

  //TODO: rimuovere questo switch case e usare le rotte react router
  //TODO: le rotte saranno: / (search), /discover (con query string ingredienti), /recipe/:id (dettagli)
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
      if (selectedRecipe) {
        mainContent = (
          <DiscoverRecipes 
            recipes={recipes}
            loading={recipesLoading}
            error={recipesError}
            onRecipeClick={handleRecipeClick}
            onBack={handleBackToSearch}
            id={currentRecipeIndex}
            onIndexChange={handleIndexChange}
            selectedRecipe={selectedRecipe}
          />
        );
      } else {
        mainContent = <div className="loading-text">Caricamento dettagli...</div>;
      }
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