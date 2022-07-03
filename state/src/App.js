//import logo from './logo.svg';
import './App.css';
import Calculatort from './Components/calculator';
import StateHooks from './Components/StateHooks';
import StateExample from './Components/StateExample';
import UseEffect from './Components/UseEffect';

function App() {
  return (
    <div className="App">
      <h1> Example 1</h1>
     <StateHooks />
     <hr/>
     <h1> Example 2</h1>
     <StateExample num={5}/>
    
     <hr/>
     <h1> Example 3</h1>
     <Calculatort />
     <hr/>
     <h1> Example 4</h1>
     <h2>Use Effect/API</h2>
     <UseEffect />
    </div>
  );
}

export default App;
