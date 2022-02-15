import React from 'react'
import Header from './Header';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import  Ok from './Ok'
import Test from './Test';
import Login from './Login';
import Default from './Default';
import Message from './Messages';
import Signup from './Signup';
import './App.css'


function App() {
  return (<Router>
    <div className="App">
      <Header/>
          </div> 
          <Routes>
    <Route exact path="/" element={<Test/>}/> 
    <Route exact path="/login" element={<Login/>}/> 
    <Route exact path="/messages" element={<Message/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="/test" element={<Test/>}/>
    </Routes>
    </Router>
  );
}
export default App;


