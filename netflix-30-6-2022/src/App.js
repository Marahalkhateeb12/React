import {BrowserRouter, Routes,  Route} from 'react-router-dom'; 
import About from './Components/About';
import MovieList from './Components/MovieList';
import Singlemovie from './Components/Singlemovie';
import Nav from './Components/Nav';
import Home from './Components/Home';
function App() {
  return (

    <BrowserRouter>
<div className='App'>
<Nav/>
<Routes>
<Route  path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/Movies" element={<MovieList/>}/>
<Route path="/Movie/:id" element={<Singlemovie/>}/>

</Routes> 
</div>
</BrowserRouter>

   
  );
}

export default App;
