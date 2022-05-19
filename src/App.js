import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Courseentry from './component/Courseentry';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Courseentry/>}/>


     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
