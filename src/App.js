import './App.css';
import { ProductProvider } from './components/contexts/product-context/ProductContext';
import Header from './components/header/Header';
import LandingPage from './pages/langing-page/LandingPage';

function App() {
  return (
    <ProductProvider>
      <div className="app-main">
        <Header />
        <LandingPage />
      </div>
    </ProductProvider>
  );
}

export default App;
