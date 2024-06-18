import React, { useState } from 'react';
import './JokeGenerator.css';

const JokeGenerator = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke('Failed to fetch a joke, please try again.');
    }
  };

  return (
    <div className="joke-container">
      <h1>Joke Generator</h1>
      <div className="joke-box">
        <p>{joke}</p>
      </div>
      <button onClick={fetchJoke} className="joke-button">Get a new joke</button>
    </div>
  );
};

export default JokeGenerator;
