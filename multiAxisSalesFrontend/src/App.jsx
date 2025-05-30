import axios from 'axios'
import './App.css'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Chat from './component/Chat';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  return (
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  )
}

export default App
