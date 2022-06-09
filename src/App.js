import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactMe from './pages/ContactMe';
import Home from './pages/Home/Home';
import MyProjects from './pages/MyProjects';
function App () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact-me' element={<ContactMe />}></Route>
        <Route path='/my-projects' element={<MyProjects />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
