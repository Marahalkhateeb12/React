import { useState } from "react";


const Filter = () => {
  let names = ["Khozama", "Mohammad", "Lujain", "Nada", "Ayman"];
  const [search, searchHandler] = useState('');
  const ChangeHandler = (event) => {
    let filteredArr = names.filter(e => e.includes(event.target.value));
    searchHandler(filteredArr);
  }
  return (
    <div>
      <h1>Filter Task</h1><hr />
      <form>
        <input type="text" onChange={ChangeHandler} />
        <h5>{search}</h5>
        {names.map((val, key) => {
          return (
            <div>
              {val}<br></br>
            </div>
          )
        })}
      </form>
    </div>
  );
}
export default Filter;