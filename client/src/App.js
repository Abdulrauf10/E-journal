import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

function App(content) {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
