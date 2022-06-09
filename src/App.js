import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ContactMe from './pages/Home/ContactMe';
import Home from './pages/Home/Home';
function App () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact-me' element={<ContactMe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
