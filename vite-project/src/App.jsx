import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Images from './components/Images';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
