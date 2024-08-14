import { useState } from 'react';
import './App.css'

function App() {
  const [value, setvalue] = useState("May Allah project us from jealusly");

 const quotes = [
    "Allah will help him who moves in the way of Allah. ...",
    "hanks to Allah, I trust myself to distinguish between right and wrong. ",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "It is never too late to be what you might have been. - George Eliot",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only person you should try to be better than is the person you were yesterday. - Anonymous",
    "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Everything has beauty, but not everyone can see. - Confucius",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "Nothing in life is to be feared, it is only to be understood. - Marie Curie",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
    "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
    "The way I see it, if you want the rainbow, you gotta put up with the rain. - Dolly Parton",
    "It is during our darkest moments that we must focus to see the light. - Aristotle"
];

  function handleChangeQoute(){
    const randomQoutes = Math.floor(Math.random() * quotes.length);
    setvalue(quotes[randomQoutes]);
  
  }
  return (
    <div className='mainContainer'>
      <div className="QouteContainer">
        <h1>Random Qoutes Generator</h1>
        <h3>{value}</h3>
        <button onClick={handleChangeQoute}>Generate</button>
      </div>
    </div>
  )
}

export default App