import { NavLink } from "react-router-dom";
function Nav(){

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" >
  <div class="container-fluid" >
    <a class="navbar-brand" href="/" >Netflex</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item nav-link">
        <NavLink  exact to="/" style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'white'})}>Home</NavLink>
        </li>
        <li class="nav-item nav-link">
        <NavLink   style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'white'})} to="/about">
              About
            </NavLink>
        </li>
        <li class="nav-item nav-link active">
        <NavLink exact to="/Movies" style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'white'})}>Movies</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Nav ;

