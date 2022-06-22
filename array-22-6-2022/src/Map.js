import react from 'react';

class Map extends react.Component{

    render(){
        this.state=[
            {  name:'marah',age:26},
            {  name:'ahmad',age:'26'},
            {  name:'ali',age:'22'}
          ];



        return(
<div>
    <br></br><br></br><hr/>
    <h1>Map Example</h1><hr />

    {this.state.map((studens)=>{
        return(
            <div>
               <strong> {studens.name}  </strong>  
           <span> {studens.age}</span>
           
          
            </div>
            
            );
    })}
    

</div>
        );
        }
}

export default Map;