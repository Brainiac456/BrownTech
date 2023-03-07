
import './App.css';
import Index from './pages/home/index'
import {Route , Routes} from 'react-router-dom'
import Navbar from './components/navbar';
import About from './pages/about/about'

function App() {
  return (
    <>
        <Navbar/>
      <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/about' element={<About />}/>
      </Routes>

    </>
  );
}

export default App;
