import React,{useEffect , useState}  from "react";
import {useParams} from "react-router-dom";
function Singlemovie(){
const {id} = useParams();
const[Movies , setMovies] = useState([]);
useEffect(  ()=> {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
  .then((response)=> response.json())
  .then(data => {setMovies(data);
      console.log(data);
      });
      });
return (
<div class="column col-sm-12" style={{ color: "white", width:'1500px',height:'650px' ,backgroundColor:'black'}}  >

 <div class="card-body">
 <img src={'https://th.bing.com/th/id/OIP.j-t0hJvgwrcS7yv3J3HNfAHaDt?w=322&h=175&c=7&r=0&o=5&dpr=1.25&pid=1.7'}  style={{width:'400px',height:'400px' }}  />
 <h3 class="card-title">{Movies.name}</h3>
     
</div>
</div>
);

}
export default Singlemovie ; 