import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './bootstrap/bootstrap.min.css';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';



function App() {
  return (
    <div className='App'>
      <h5>React CRUD usando API and MySQL</h5>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">List Users</Link>
              </li>
              <li>
                <Link to="user/create">Create User</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route index element={<ListUser />} />
            <Route path='user/create' element={<CreateUser />} />
            <Route path='user/:id/edit' element={<EditUser />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
