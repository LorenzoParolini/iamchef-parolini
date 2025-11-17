import { useState } from 'react';
import './SearchBar.css'
import AddButton from './add-button/AddButton';
import { autocompleteIngredients } from '../../service/utils';
import type { Ingredient, SearchBarProps } from '../../types';

function SearchBar({ onAddIngredient }: SearchBarProps) {

  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<Ingredient[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // todo: qui andrà chiamata api
    if (value.length >= 1) {
      const results = autocompleteIngredients(value);
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
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
              
              {showSuggestions && suggestions.length > 0 && (
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
