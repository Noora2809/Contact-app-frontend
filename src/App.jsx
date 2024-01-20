import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import View from './Components/View';
import Add from './Components/Add';
import Info from './Components/Info';
import PageNotFound from './Components/PageNotFound';
import Edit from './Components/Edit';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/add' element= {<Add/>}/>
        <Route path='/info/:id' element={<Info/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='*' element={<PageNotFound/>}/>

      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
