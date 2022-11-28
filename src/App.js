import './App.css';
import { useState } from 'react';

function App() {
  // Counter useState
  const [count, setCount] = useState(0);

  // Toggle Theme useState
  const [theme, setTheme] = useState('light');

  return (
    <>  
    <div className='Counter'>
      <h2>Counter</h2>
      
      <p>You clicked {count} times!</p>
      <button onClick={( ) => setCount(count  - 1)}>-</button>
      <button onClick={( ) => setCount(count  + 1)}>+</button>
    </div>

    <div className={'app ' + theme}>
      <h2>React - state and events</h2>
   
      {/* Add the following "select" dropdown */}
      <select onChange={ event => setTheme(event.target.value) }>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
    </>

  );
}

export default App;
