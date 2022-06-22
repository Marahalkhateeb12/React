import react from 'react';

class StringArray extends react.Component{

    state={
        names:['Z','A','Q','B','C','Y','S','W']
    }


    ascOrder(){
this.setState(this.state.names.sort(function(a,b){
    return a.localeCompare(b);
}))
    }

    descOrder(){
        this.setState(this.state.names.sort(function(a,b){
            return b.localeCompare(a);
        }))
            }

    render(){
        return(
<div>
    <h1>Sorting Task</h1>
    <button onClick={()=>this.ascOrder()}>A-Z</button>&nbsp;&nbsp;|&nbsp;&nbsp;
    <button onClick={()=>this.descOrder()}>Z_A</button><br/><br/>
    <strong>Names : {this.state.names.join(', ')}</strong>
</div>
        );
        }
}

export default StringArray;