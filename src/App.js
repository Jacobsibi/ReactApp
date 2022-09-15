import './App.css';
import { useState, useEffect } from 'react';
{/**/}
//arrow function component
const App = () => {
  const name = 'Jacob';
  const lastName = 'Sibi';
  const isNameShowing = false;
  const Person = () => {
    {/* component is a piece of code that returns or renders JSX */}
    return (
      <>
        <h1>Name: Jacob</h1>
        <h2>Last Name: Sibi</h2>
        <h2>Age: 20</h2>
      </>
    );
  }
  //props allow you to pass dynamic data through react components
  //props are arguments you pass into react components via attributes (AKA properties)
    const Boxer = (props) => {
      {/* component is a piece of code that returns or renders JSX */}
      return (
        <>
          <h1>Name: {props.name}</h1>
          <h2>Last Name: {props.lastName}</h2>
          <h2>Age: {props.age}</h2>
        </>
      );
  }

    const Counter = () => {
      //call useState as function to read button click - / +
      //in react this is called a "hook"
      //second variable is a setter function of the first
      const [counter, setCounter] = useState(0);

      useEffect(() => {
        setCounter(100);
      }, //dependency array if left empty, useEffect only rendered once 
        []
      );

      useEffect(() => {
        alert("Count changed to " + counter);
      }, //displays alert every time count changes
        [counter]
      );


      return (
        <div className="count">
          {/* each click is registered and re-renders the view (no page re-loading)*/}
          <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
          <h2>Total Fights</h2>
          <h1>{counter}</h1>
          <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
        </div>
      );
    }
  return (
    
    <div className="App">
      {/* Hello, Jacob */} 
      <h1>Hello, {name}, {lastName}!</h1> 
      {/* is Name showing(?) set to true, show jacob, (:) else, show someone */} 
      <h1>Hello {isNameShowing ? name : 'someone'}</h1>
      {/* 6 + 5 */} 
      <h1>Number: {6 + 5}</h1> 
      {/* Dynamically render larger blocks of code */} 
      {/* (?) if name exists, x else b */}
      {lastName ? (
        <>
          <h1>{lastName}</h1>
        </>
      ): (
        <>
          <h1>test </h1>
          <h2>There is no name</h2>
        </>
      )}
      {/*  self-closing tag */}
      <Person />
      {/* props to pass dynamic data as attributes to component */}
      <Boxer 
        name='Anthony' 
        lastName='Joshua' 
        age={25}
      />
    <Counter />
    </div>
  );
}
export default App;
