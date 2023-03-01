import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Card from './components/Card/Card.js';
import CardList from './components/Card/CardList.js';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
     
     <CardList>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
     </CardList>
      
    </React.Fragment>
     
  );
}

export default App;
