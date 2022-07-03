import React ,{Component} from 'react';
import './App.css';


class App extends Component{
  async postData(){
    try{
const result=await fetch('https://webhook.site/1544ea3e-30c2-416f-b8c5-15c712cc739e',{
  method:'post',
  mode:'no-cars',
  heaser:{
    'Accept':'application/json',
'Content-type':'application/json'
  },
  body:JSON.stringify({
    key1:'myusername'
  })
});
console.log('REsult : '+ result);
    }catch(e){
      console.log(e);
    }
  }
  render(){
  return (
    <div className="App">
     <button onClick={()=>this.postData()}>Press Me To Post Data</button>
    </div>
  );
  }
}

export default App;
