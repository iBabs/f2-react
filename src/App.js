import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './components/RootLayout';
import ContactUs from './pages/ContactUs';
import Details from './components/Details';
import Update from './components/Update';
import NotFound from './pages/NotFound';







function App() {


  return (
    <div className="App">

      <Routes>
        {/* The root layout houses the layout of the web application */}
        <Route path='/' element={<RootLayout />}>
          {/* This is where you put the routes to your pages */}
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} >
            <Route path='details' element={<Details/>}/>
            <Route path='update' element={<Update/>}/>
          </Route>
          <Route path='/service' element={<ContactUs />} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
