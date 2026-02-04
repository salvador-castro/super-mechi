import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import OnlineOrder from './components/OnlineOrder';
import Location from './components/Location';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <OnlineOrder />
      <Location />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<ProductsPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
