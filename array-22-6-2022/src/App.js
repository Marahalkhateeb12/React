//import logo from './logo.svg';
import './App.css';
import StringArray from './Components/StringArray';
import Map from './Components/Map';
import Filter from './Components/Filter';
//import React, { useState } from 'react';

// const USERS = [
//   { id: 1, name: 'Andy', age: 32 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Tom', age: 40 },
//   { id: 4, name: 'Marah', age: 50 },
//   { id: 5, name: 'Audra', age: 30 },
//   { id: 6, name: 'Anna', age: 68 },
//   { id: 7, name: 'Ahmad', age: 34 },
//   { id: 8, name: 'Roaa', age: 28 },
//   { id: 9, name: 'Bolo', age: 23 },
// ];
function App() {
  // const [name, setName] = useState('');

  // // the search result
  // const [foundUsers, setFoundUsers] = useState(USERS);

  // const filter = (e) => {
  //   const keyword = e.target.value;

  //   if (keyword !== '') {
  //     const results = USERS.filter((user) => {
  //       return user.name.toLowerCase().indexOf(keyword.toLowerCase())>=0;
  //       // Use the toLowerCase() method to make it case-insensitive
  //     });
  //     setFoundUsers(results);
  //   } else {
  //     setFoundUsers(USERS);
  //     // If the text field is empty, show all users
  //   }

  //   setName(keyword);};
  
  return (
   

    <div className="App">
     <StringArray />
     <Map />
     <Filter />
     {/* <hr/>
     <h1>Filter Example</h1>
     <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
             
              <span className="user-name">{user.name}</span>
              
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div> */}
    
    </div>
  );
}

export default App;
