import { useState } from 'react';
import './SearchBar.css'
import AddButton from './add-button/AddButton';
import { searchIngredientbyName } from '../../service/utils';

function SearchBar() {

  const [selectedIngredientName, setSelectedIngredientName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputValue = formData.get('search') as string;
    console.log('Input submitted:', inputValue);
    setSelectedIngredientName(inputValue);
  };

  // selectedIngredients.push(searchIngredientbyName(selectedIngredientName));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <ul>
            <li>
              <input 
                type="text" 
                name="search"
                placeholder="Cook with us..." 
              />
            </li>
            <li className="hint">Hint</li>
            <li className="hint">Hint</li>
            <li className="hint">Hint</li>
          </ul>
        </div>
        <AddButton />
      </form>
    </>
  );
}

export default SearchBar;
