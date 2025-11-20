import { useEffect, useState } from 'react';
import './SearchBar.css'
import AddButton from './add-button/AddButton';
import type { Ingredient, SearchBarProps } from '../../types';
import { useDebounce } from '../../hooks/useDebounce';
import { getIngredientURL, useApi } from '../../hooks/useApi';
import useAPIStore from '../../store/useAPIStore';

function SearchBar({ onAddIngredient }: SearchBarProps) {

  // State per il valore dell'input e le suggerimenti
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue, 300);

  // Ottieni l'API key dallo store
  const apiKey = useAPIStore((state) => state.ApiKey);

  // url per chiamata api
  const [apiURL, setApiURL] = useState<string>("");

  // state per i suggerimenti ottenuti
  const { data: suggestions, loading, error } = useApi<Ingredient[]>(apiURL);

  // State per mostrare/nascondere le suggerimenti
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (debouncedInputValue.length >= 1) { //se ha almeno 1 carattere
      setApiURL(getIngredientURL(debouncedInputValue, apiKey));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
    
  }, [debouncedInputValue, apiKey]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSelectSuggestion = (ingredient: Ingredient) => {
    onAddIngredient(ingredient.name);
    setInputValue('');
    setShowSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (inputValue.trim()) {
      onAddIngredient(inputValue.trim());
      setInputValue('');
      setShowSuggestions(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <ul>
            <li style={{ position: 'relative' }}>
              <input 
                type="text" 
                name="search"
                value={inputValue}
                onChange={handleInputChange}
                
                placeholder="Cook with us..." 
              />
              
              {/* ⏳ Indicatore di caricamento */}
              {loading && inputValue.length > 0 && (
                <div className="loading-text">Caricamento...</div>
              )}
              
              {/* ❌ Messaggio di errore */}
              {error && inputValue.length > 0 && (
                <div className="error-text">Errore: {error}</div>
              )}
              
              {/* 📋 Lista suggerimenti */}
              {showSuggestions && suggestions && suggestions.length > 0 && (
                <ul className="suggestions-dropdown">
                  {suggestions.map(ingredient => (
                    <li 
                      key={ingredient.id}
                      onClick={() => handleSelectSuggestion(ingredient)}
                      className="suggestion-item"
                    >
                      {ingredient.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
        <AddButton />
      </form>
    </>
  );
}

export default SearchBar;
