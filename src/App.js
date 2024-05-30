import './App.css';
import MainNav from './UI/MainNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './component/Home';
import Login from './component/Login';
import Subway from './component/Subway';

function App() {
  
  return (
    <BrowserRouter>
    <RecoilRoot>
    <div className="flex flex-col w-full max-w-screen-xl h-screen mx-auto">
      <div>
        <MainNav /> 
      </div>
      <div className='grow overflow-y-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subway" element={<Subway />} />
        </Routes>
      </div>
    </div>
    </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
