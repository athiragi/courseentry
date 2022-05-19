import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Courseentry from './component/Courseentry';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Viewcourse from './component/Viewcourse';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Courseentry/>}/>
       <Route path="/view" exact element={<Viewcourse/>}/>



     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
