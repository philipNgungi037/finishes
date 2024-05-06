import './App.css';
import { ProductProvider } from './components/contexts/product-context/ProductContext';
import Header from './components/header/Header';
import LandingPage from './pages/langing-page/LandingPage';
import { Route, Routes } from "react-router";
import Signin from './pages/authentication-pages/Signin'

function App() {
  return (
    <ProductProvider>
      <div className="app-main">
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='signin' element={<Signin />} />
          
        </Routes>
        {/* <LandingPage /> */}
      </div>
    </ProductProvider>
  );
}

export default App;
