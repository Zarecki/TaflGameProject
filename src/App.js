import {useState} from "react";
import './App.css';
import Game from './containers/Game'
import Rules from './components/Rules'

function App() {

  function beginGameToggle(){
    console.log("Triggered")
    beginGame? setBeginGame(false) : setBeginGame(true);
  };

  const [beginGame, setBeginGame]= useState(false);

  if (beginGame){
    return (
      <>
        <h1>Hello, World!</h1>
        <Game/>
      </>
    );
  }

  return (
    <>
      <h1>Hello, World!</h1>
      <Rules/>
      <button onClick={beginGameToggle}>ToggleBeginGame</button>
    </>
  );
}

export default App;
