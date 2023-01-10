import { useState } from 'react';
import CreateUser from './Components/CreateUser';
import ListOfUsers from './Components/ListOfUsers';
import UpdatePassword from './Components/UpdatePassword';
import Search from './Components/Search';
function App() {
  return (
    <div>
      <CreateUser />
      <UpdatePassword />
      <ListOfUsers />
      <Search />
    </div>
  );
}

export default App;
