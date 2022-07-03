import React,{useState} from "react";



function StateHooks(){
//let counter=0;
const [counter,setCounter]=useState(0);
const increment=()=>{
//counter+=1;
setCounter(counter+1);
console.log(counter);

}


return(
    <div>
<span  style={{color:'red'}}>{counter} {' '}</span>
<button onClick={increment}>Inctement</button>
</div>
);
}
export default StateHooks;