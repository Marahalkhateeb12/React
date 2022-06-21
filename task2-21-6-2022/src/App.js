import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Card from './components/Card';


function App() {
  return (
    <div class="container ">
      <Nav />
    
    <div class="row">
  <Card name = 'Alaa'/>
  <Card name = 'Ali'/>
  <Card name = 'Sami'/>
  <Card name = 'Ahmad'/>
  </div>
  </div>
   
  );
}

export default App;
