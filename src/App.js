import './App.css';
import { Route , Routes, useNavigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Order from './components/Order';
import Nores from './components/Nores';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './Users';
import SearchParams from './components/SearchParams';
function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='order-summary' element={<Order/>}></Route>
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}></Route>
          <Route path='Featured' element={<FeaturedProducts/>}></Route>
          <Route path='new' element={<NewProducts/>}></Route>
        </Route>
        <Route path='users' element={<Users/>}>
          {/* <Route path=':userId' element={<Order/>}></Route> */}
          <Route path=':userID' element={<SearchParams/>}></Route>
        </Route>
        <Route path='*' element={<Nores/>}></Route>
      </Routes>
      <button onClick={() => navigate('order-summary')}>Place Order </button>
    </div>
  );
}

export default App;
