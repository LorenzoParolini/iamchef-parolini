import { useState, useEffect } from 'react';
import './App.css';
import Layout from './layout/Layout';
import Header from './layout/header/Header';
import SearchPage from './pages/search-page/SearchPage';
import DiscoverRecipes from './pages/dicover-recipes/DiscoverRecipes';
import RecipeDetails from './pages/recipe-details/RecipeDetails';
import SetApiPage from './pages/set-api-page/SetApiPage';
import { useApi, getRecipeInformationURL, getRecipesByIngredientsURL } from './hooks/useApi';
import useAPIStore from './store/useAPIStore';
import type { Page, Recipe, RecipeByIngredients } from './types';
import Footer from './layout/footer/Footer';

//TODO: creare file router.tsx con configurazione delle rotte
//TODO: sostituire lo switch case con il router provider
//TODO: rimuovere lo stato currentPage, sarà gestito dall'url

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

  // URL per chiamata API ricette per ingredienti
  const [findByIngredientsURL, setFindByIngredientsURL] = useState<string>("");

  // URL per chiamata API dettagli ricetta
  const [recipeDetailsURL, setRecipeDetailsURL] = useState<string>("");

  // chiamata API per ricette per ingredienti
  const { data: recipes, loading: recipesLoading, error: recipesError } = useApi<RecipeByIngredients[]>(findByIngredientsURL);

  // chiamata API per dettagli ricetta
  const { data: recipeDetails } = useApi<Recipe>(recipeDetailsURL);
  
  // quando finisce la ricerca nella search page
  const handleSearchComplete = (ingredients: string[]) => {
    setSelectedIngredients(ingredients);
    setFindByIngredientsURL(getRecipesByIngredientsURL(ingredients, apiKey));
    setCurrentPage('discover');
    setCurrentRecipeIndex(0);
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
    setRecipeDetailsURL(""); // Resetta l'URL per evitare chiamate duplicate
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
      mainContent = (
        <DiscoverRecipes 
          recipes={recipes}
          loading={recipesLoading}
          error={recipesError}
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