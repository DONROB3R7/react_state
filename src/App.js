import './App.css';
import { useState } from 'react';
import Fragment  from 'react'

function App() {
  // Counter useState
  const [count, setCount] = useState(0);

  // Toggle Theme useState
  const [theme, setTheme] = useState('light');

  // Added the array element
  const numbersList = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];
  const students = ['Marc', 'Lucy', 'Anna'];

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

    {/* Add students list with map function */}
    <div className="list">
      <h2>List of students</h2>
      { students.map((name, index) => {
        return <p key={index} > { name } </p>
      })}

      {/* List of numbers */}
      <h2>List of students</h2>
      <ul>
        { numbersList.map((list, index, array) => {
          return  <span key={index}>{list}</span>
        })}
      </ul>
    </div>
    </>

  );
}

export default App;
