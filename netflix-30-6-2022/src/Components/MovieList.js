import React,{useEffect , useState}  from "react";
import Singlemovie from './Singlemovie';
import { NavLink } from "react-router-dom";
document.body.style.backgroundColor = "black"; 

function MovieList(){
const[Movies , setMovies] = useState([]);
useEffect(  ()=> {
  fetch('https://jsonplaceholder.typicode.com/users') 
.then((response)=> response.json())
.then(data => {setMovies(data);
    console.log(data);
    });
    });
  
return (
<div class="row" style={{ color: "white",backgroundColor:'black',height:'650px' }} >
    {Movies.map(m =>(
 <div class="column col-sm-3">
 <div class="card-body" >
    <div><img src={'https://th.bing.com/th/id/OIP.j-t0hJvgwrcS7yv3J3HNfAHaDt?w=322&h=175&c=7&r=0&o=5&dpr=1.25&pid=1.7'}  style={{width:'200px',height:'100px' }}  /></div>

 <div class="card-title">{m.name}</div>
 
      <a class="btn btn-danger" >
      <NavLink  to={`/Movie/${m.id}`}  style={{ color: "white" , textDecoration:" none" }}>View Movie</NavLink>
      </a>
</div>
</div>)
    )
    }
    </div>
);

}
export default MovieList ; 
