import './App.css';
import { ProductProvider } from './components/contexts/product-context/ProductContext';
import Header from './components/header/Header';
import LandingPage from './pages/langing-page/LandingPage';
import { Route, Routes } from "react-router";
import Signin from './pages/authentication-pages/Signin'
import Signup from './pages/authentication-pages/Signup';
import { AuthProvider } from './components/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <div className="app-main">
          {/* <Header /> */}
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='signin' element={<Signin />} />
            <Route path='register' element={<Signup />} />

          </Routes>
          {/* <LandingPage /> */}
        </div>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
