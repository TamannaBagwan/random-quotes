import React, { useEffect, useState } from "react";
import "../assets/quotes.css";
import reload from "../assets/reload.png";

const RandomQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({
    text: "If the why is powerful, the how is easy.",
    author: "Jim Rohn",
  });

  const loadQuotes = async () => {
    try {
      let response = await fetch("https://type.fit/api/quotes");
      let data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.error("Error loading quotes:", error);
    }
  };
  useEffect(() => {
    loadQuotes();
  }, []);

  const random = () => {
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(selectedQuote);
  };

  return (
    <div className="container">
      <div className="quotes">{currentQuote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author"> - {currentQuote.author.split(",")[0]} </div>
          <div className="icon">
          <img src={reload} alt="Reload" onClick={() => random()} />
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default RandomQuotes;
