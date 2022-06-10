import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Blogs from './pages/Blogs';
import ContactMe from './pages/ContactMe';
import Home from './pages/Home/Home';
import MyProjects from './pages/MyProjects';
import NotFound from './pages/NotFound';
function App () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact-me' element={<ContactMe />}></Route>
        <Route path='/my-projects' element={<MyProjects />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about-me' element={<AboutMe />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
