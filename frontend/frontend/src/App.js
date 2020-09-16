import React from 'react';

//Components
import Header from './componets/Header';
import Footer from './componets/Footer';
import Home from './componets/Home';
import Nosotros from './componets/Nosotros'
function App() {
  return (
    <div className="App">
        <Header/>
        <Home></Home>
        <Footer/>
        <Nosotros></Nosotros>
    </div>
  );
}

export default App;
