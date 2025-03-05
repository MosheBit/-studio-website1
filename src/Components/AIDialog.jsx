import React, { useState } from 'react';
import axios from 'axios';
// import { REACT_APP_OPENAI_API_KEY } from 'react-native-dotenv';

const AIDialog = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = "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";

  const handleAskAI = async () => {
    setLoading(true);
    setError(null);
  
    
  try {
    console.log("Question:", question);
    console.log("Request Headers:", {
      Authorization: `Bearer ${apiKey}`,
    });

    // המתן 2 שניות לפני שליחה מחדש
    // await new Promise(resolve => setTimeout(resolve, 2000));

    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question }],
      max_tokens: 100,
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    console.log("Response:", response);
    setAnswer(response.data.choices[0].message.content);
  } catch (err) {
    console.log("Error:", err);
    setError('אירעה שגיאה, נסה שוב');
  } finally {
    setLoading(false);
  }
};
  return (
    <div>
      <h1>שאל את ה-AI</h1>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="שאל שאלה..."
      />
      <button onClick={handleAskAI} disabled={loading}>
        {loading ? 'שולח...' : 'שלח שאלה'}
      </button>

      {error && <p>{error}</p>}
      {answer && <p>תשובה: {answer}</p>}
    </div>
  );
};

export default AIDialog;
