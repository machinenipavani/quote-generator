import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      
      const response = await fetch('https://type.fit/api/quotes');
      const quotes = await response.json();
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author || 'Unknown');
    } catch (error) {
      console.error('Fetching quote failed:', error);
      setQuote('Please try again later.');
      setAuthor('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>"{quote}"</p>
        {author && <p>- {author}</p>}
        <button onClick={fetchQuote}>New Quote</button>
      </header>
    </div>
  );
};

export default App;
