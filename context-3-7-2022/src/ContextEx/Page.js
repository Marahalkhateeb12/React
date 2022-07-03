import React from 'react';
import Layout from './Layout';

const user = { name: 'Marah' };
const theme = { name: 'BlackTheme' };

export const UserContext = React.createContext();
export const ThemeContext = React.createContext();

function Page(props) {
  return (<div>
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={theme}>
        <Layout />
      </ThemeContext.Provider>
    </UserContext.Provider>
      <span> {user.name}</span>
      </div>
  );
}

export default Page;
