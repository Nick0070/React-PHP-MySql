import './App.scss';
import EditUser from './components/EditUser';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import ExportXsls from './components/ExportXsls';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 
 
function App() {
  return (
    <div className="container">
   
      <div className='text'>  Информация из базы данных </div>
 
      <BrowserRouter>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
        
      </BrowserRouter>
      
    
    </div>
  );
}
 
export default App;