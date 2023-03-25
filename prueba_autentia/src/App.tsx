import SignInPage from './pages/SignInPage'
import HomePage from './pages/HomePage'
import './App.css'
import { initializeApp } from 'firebase/app'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { firebase } from './config/firebase'
import AuthRoute from './components/Auth/AuthRoute'

initializeApp(firebase.firebaseConfig)

function App() {
  const data = ''

  return (
    <>
      <AuthRoute>
        <HomePage/>
      </AuthRoute>
    </>
  )
}
export default App
