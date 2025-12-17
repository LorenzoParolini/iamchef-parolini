import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAPIStore from '../../store/useAPIStore';
import './SetApiPage.css'

// pagina per configurare l'api key
function SetApiPage() {
  const navigate = useNavigate();
  const { ApiKey, setAPI } = useAPIStore();
  const [inputValue, setInputValue] = useState('');

  // redirect se api key già presente
  useEffect(() => {
    if (ApiKey) {
      navigate('/', { replace: true });
    }
  }, [ApiKey, navigate]);

  const isValidFormat = (key: string) => {
    return /^[a-zA-Z0-9]{32}$/.test(key);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidFormat(inputValue)) {
      setAPI(inputValue);
      navigate('/');
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
        {
          !isValidFormat(inputValue) && inputValue.length > 0 && (
            <p className="api-error-message">Invalid API key format. Please enter a valid 32-character alphanumeric key.</p>
          )
        }
        <button type="submit" className="api-submit-button">Save & Continue</button>
      </form>
    </div>
  );
}

export default SetApiPage;
