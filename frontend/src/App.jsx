import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const analyzeSentiment = async () => {
    if (!text.trim()) return;

    try {
      const response = await axios.post('http://localhost:5000/analyze', {
        text: text
      });

      setResult(response.data);
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      setResult({ error: 'Something went wrong' });
    }
  };

  return (
    <div className="app">
      <h1>Sentiment Analyzer 💬</h1>
      <textarea
        rows="4"
        placeholder="Type your message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={analyzeSentiment}>Analyze</button>

      {result && (
        <div className="result">
          {result.error ? (
            <p style={{ color: 'red' }}>{result.error}</p>
          ) : (
            <>
              <p><strong>Sentiment:</strong> {result.sentiment}</p>
              <p><strong>Polarity:</strong> {result.polarity}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
