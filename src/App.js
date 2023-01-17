
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Features/users/AddUser';
import EditUser from './Features/users/EditUser';
import UserList from './Features/users/UserList';

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/add-user' element={<AddUser/>}/>
        <Route path='/edit-user/:id' element={<EditUser/>}/>

      </Routes>
      
  
    </div>
  );
}

export default App;

