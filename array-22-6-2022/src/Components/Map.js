import react from 'react';

class Map extends react.Component{

    render(){
        this.state=[
            {id: 1 , name: "Apple",  color: "Yellow"},
  {id: 2 , name: "Strawberry", color: "Red"},
  {id: 3 , name: "Kiwi", color: "Green"}

          ];



        return(
<div>
    <br></br><br></br><hr/>
    <h1>Map Task</h1>
    <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Color</th>
        </tr>
        {this.state.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.color}</td>
            </tr>
          )
        })}
      </table>
  
</div>
        );
        }
}

export default Map;