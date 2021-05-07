import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ConnectFour from "./ConnectFour";


class App extends Component {
   render(){
       return(
        <Router>
		<div className="main">
        <h1 style={{textAlign: 'center'}}>
            <span style={{color: 'firebrick'}}>C</span>
            <span style={{color: 'olive'}}>o</span>
            <span style={{color: 'blue'}}>n</span>
            <span style={{color:'darkgreen'}}>n</span>
            <span style={{color: 'darkorange'}}>e</span>
            <span style={{color: 'Indigo'}}>c</span>
            <span style={{color: 'green'}}>t</span>
        &nbsp;
            <span style={{color: 'red'}}>F</span>
            <span style={{color: 'ForestGreen'}}>o</span>
            <span style={{color: 'salmon'}}>u</span>
            <span style={{color: 'navy'}}>r</span>
        </h1>
            <Link to="/" className="navbar">Home</Link> &nbsp;&nbsp;&nbsp;
			<Link to="/about" className="navbar">About</Link> &nbsp;&nbsp;&nbsp;
			<Link to="/dashboard" className="navbar">Game</Link> &nbsp;&nbsp;&nbsp;
		
			<hr />
			<hr/>
		</div>
		<Switch>
		  <Route exact path="/">
			<Home />
		  </Route>
		  <Route path="/about">
			<About />
		  </Route>
		  <Route path="/dashboard">
          <ConnectFour />
		  </Route>
		   
		 		</Switch>
	</Router>
       )
   }
}


function Home() {
  return (
    <div className="home">
      <h2>Welcome!!</h2>
      
      <p>It’s the classic game you love to play with your friends and family.
      Everybody knows and loves the even simpler version of this game,(Tic-Tac-Toe)  <br/>
      in which you only have to connect 3 in order to win.It is the popular little game you can simply draw
       on the street with colorfur chalk and get going right away. <br/> Connect 4 is very similar but more 
       complex as you have more possibilities to place your disk.  <br/>Can you master this legendary strategy game? 
      Play Connect 4 game against the mercyless CPU or challenge your best pals. Have fun!</p>
    </div>
  );
}

function About() {
		
  return (
    <div className="about">
      <h2>About</h2>
      <h3>Rules to play the game:</h3>
      <ul>
          <li>This game is played on a vertical board wich has seven hollow columns and six rows.</li> 
          <li>Before starting, players decide randomly which of them will be the beginner; 
              moves are made alternatively, one by turn.</li>
          <li>Each player will drop in one checker piece at a time.</li>
          <li>The aim for both players is to make a straight line of four own pieces; 
              the line can be vertical, horizontal or diagonal.</li>
          <li>The first person to reach the goal is the winner.</li>
      </ul>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="game">
      <h2>Dashboard</h2>
    </div>
  );
}


export default App;
