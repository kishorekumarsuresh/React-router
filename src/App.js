import { Routes, Route } from 'react-router-dom'
import  Home from './components/Home';
import Create from './components/Create';
import Nav from './components/Nav'
import Edit from './components/Edit';

function App() {
  return (
    
    <>
  
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}/>   
      <Route path='/Create' element={<Create/>} />
      <Route path='/Edit' element={<Edit/>} />
    </Routes>
    </>
    
  )
}

export default App;
