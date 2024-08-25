import { useState } from 'react';

import './App.css';
import myImage from '../public/write.jpg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="section">
      <div className="image-container">
        <img src={myImage} alt="" />
      </div>
      <div className="content-container">
        <span className="latest">LATEST</span>
        <h1 className="heading">Zambia and Tükiye signs MOU to Boost Economic Growth</h1>
        <span className="date-info">November 10, 2022 | News in Turkey</span>
        <p>The Zambia Ministry of Education signed a Memorandum of understanding with Tükiye Maalif Foundation, a Turkish state led institution that provides high...</p>
        
      </div>
    </section>
  );
}

export default App;