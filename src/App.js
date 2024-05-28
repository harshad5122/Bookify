import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import LoginPage from './views/loginPage'
import './App.css'
import AboutUsPage from './views/AboutUsPage'
import ContactUsPage from './views/ContactUsPage'
import NavBar from './components/NavBar/NavBar'
import { TextProvider } from './context/TextContext'
import BookStorePage from './views/BookStore'
import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import SignupPage from './views/SignupPage'

function App() {
  return (
    <div className="App">
      <TextProvider>
        <BrowserRouter>
          <AuthProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
              <Route path="/bookstore" element={<PrivateRoute><BookStorePage /></PrivateRoute>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/about" element={<PrivateRoute><AboutUsPage /></PrivateRoute>} />
              <Route path="/contact" element={<PrivateRoute><ContactUsPage /></PrivateRoute>} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TextProvider>
    </div>
  )
}

export default App