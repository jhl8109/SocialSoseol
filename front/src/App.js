import './App.css';
import Novel from './component/Novel';
import Sign from './component/Sign';
import {Route, Routes, BrowserRouter, useRoutes, Router} from 'react-router-dom';
import { AlignHorizontalCenter } from '@mui/icons-material';


function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/main" element={<Novel/>} />
      </Routes>
    </BrowserRouter>
  )


}

export default App;
