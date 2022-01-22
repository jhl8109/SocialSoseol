import './App.css';
import Novel from './component/Novel';
import Sign from './component/Sign';
import {Route, Routes, BrowserRouter, useRoutes, Router} from 'react-router-dom';
import Navbar from './component/Navbar';
import { AlignHorizontalCenter } from '@mui/icons-material';


function App() {
  return ( 
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/novel" element={<Novel/>} />
      </Routes>
    </BrowserRouter>
  )


}

export default App;
