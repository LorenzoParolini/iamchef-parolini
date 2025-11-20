import { useState } from 'react';
import useAPIStore from '../../store/useAPIStore';
import './SetApiPage.css'

interface SetApiPageProps {
  onApiKeySaved: () => void;
}

function SetApiPage({ onApiKeySaved }: SetApiPageProps) {

  
const setApiKey = useAPIStore((state) => state.setAPI);
const [inputValue, setInputValue] = useState('');

const isValidFormat = (key: string) => {
  return /^[a-zA-Z0-9]{32}$/.test(key);
};

const handleSubmit = (e: React.FormEvent) => {
  if (isValidFormat(inputValue)) {
    e.preventDefault();
    setApiKey(inputValue);
    onApiKeySaved();
  } else {
    e.preventDefault();
    alert("Invalid API key format. \nPlease enter a valid 32-character alphanumeric key.");
  }
};

  return (
    <div className="api-page-container">
     <h1 className="api-page-title">Welcome on IamChef</h1>
     <form onSubmit={handleSubmit} className="api-form">
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="To start, enter your API key here..." 
        className="api-input"
      />
      <button type="submit" className="api-submit-button">Save & Continue</button>
     </form>
    </div>
  );
}

export default SetApiPage;
