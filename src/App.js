import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './bootstrap/bootstrap.min.css';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';



function App() {
  return (
    <div className='App container'>
      <h5 className='mt-2 text-center'>React CRUD usando API and MySQL</h5>
        <BrowserRouter>
          <nav className='row text-center'>
            <ul>
              <li>
                <Link to="/" className="btn btn-outline-success">List Users</Link>
              </li>
              <li>
                <Link to="user/create" className="btn btn-outline-success">Create User</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route index element={<ListUser />} />
            <Route path='user/create' element={<CreateUser />} />
            <Route path='user/id/edit' element={<EditUser />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
