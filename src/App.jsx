// App.js
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Navbar from "./components/layout/Navbar";
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import Footer from './components/layout/Footer';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import { useSelector, useDispatch } from 'react-redux';
import {login} from './Redux/authSlice'

import AdminLayout from './pages/AdminLayout'
import AdminPage from './components/admin/AdminPage'
import AdminDashboard from './components/admin/AdminDashboard'
import NotFoundPage from './pages/NotFoundPage';


function App() {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.auth);
  console.log('App User auth:', userAuth);

  useEffect(() => {
    const verifyUserToken = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/verifyToken`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include cookies for authentication
        });

        if (response.ok) {
          const data = await response.json();
          dispatch(login({ user: data.user }));
        }
      } catch (error) {
        console.error('Error verifying token:', error);
      }
    };

    verifyUserToken();
  }, [dispatch]);


  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-28 md:pt-32"> {/* Adjusted for navbar height */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Book_price_cal" element={<CalculatorPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {
              userAuth.isLoggedIn ? (
                <Route path="/dashboard" element={<DashboardPage />} />
              ) : (
                <Route path="/dashboard" element={<NotFoundPage />} />
              )
            }

{
              userAuth.isLoggedIn ? (
                <Route path='/admin' element={<AdminLayout />} >
                  <Route index element={<AdminPage />} />
                  <Route path='dashboard/:userId' element={<AdminDashboard />} />
                </Route>
              ) : (
                <Route path='/admin' element={<NotFoundPage />} >
                  <Route index element={<AdminPage />} />
                  <Route path='dashboard/:userId' element={<NotFoundPage />} />
                </Route>
              )
            }
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;