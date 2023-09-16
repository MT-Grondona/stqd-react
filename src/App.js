import Navbar from './components/Navbar';
import Main from './components/Main';
import CartProvider from './CartContext'
import './firebase'
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Toogle from './components/Toogle';


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
        <Navbar></Navbar>
        <Toogle></Toogle>
        <Main></Main>
        <Footer></Footer>
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;
