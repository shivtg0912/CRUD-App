import logo from './logo.svg';
import './App.css';
import DeleteUser from './components/DeleteUser';
import AllUsers from './components/AllUsers';
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import TeeGee from './components/TeeGee';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='' element={<TeeGee/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/all' element={<AllUsers/>}/>
        <Route path='/delete' element={<DeleteUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
