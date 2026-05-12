import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState(0);
  const [value, setValue] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(allClicks + 1);
    setValue(value + 1);
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(allClicks + 1);
    setValue(value + 0);
  }
  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(allClicks + 1);
    setValue(value - 1);
  }

  let average = value / allClicks;
  let positive = good/allClicks;
  
  return(
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allClicks}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  )
}

export default App;