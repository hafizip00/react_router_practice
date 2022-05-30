import './App.css';
import { Route , Routes, useNavigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Order from './components/Order';
import Nores from './components/Nores';
function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='order-summary' element={<Order/>}></Route>
        <Route path='*' element={<Nores/>}></Route>
      </Routes>
      <button onClick={() => navigate('order-summary')}>Place Order </button>
    </div>
  );
}

export default App;
