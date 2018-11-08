import React from 'react'
import { NavLink } from 'react-router-dom';
import cherry from '../css/assets/Befresh_Smoothie_8.gif'
import acai from '../css/assets/Befresh_Smoothie_6.jpg'
import chocolate from '../css/assets/Befresh_bowl_6.jpg'

function TopPicks(props) {
  return (
     <React.Fragment>
        <h1 className="top-picks">Top Picks</h1>
        <div className="home-top-picks">
          <div className="home-top-pick"><img src={cherry} className="App-logo" alt="logo" /><p className="home-name">Strawberry & Peach</p><p className="home-kind">Smoothie</p><NavLink
          className="home-products"
          to="/products"> See all products </NavLink></div>
        <div className="home-top-pick"><img src={chocolate} className="App-logo" alt="logo" /><p className="home-name">Chocolate</p><p className="home-kind">Harvest Bowl</p><NavLink
          className="home-products"
          to="/products"> See all products </NavLink></div>
        <div className="home-top-pick"><img src={acai} className="App-logo" alt="logo" /><p className="home-name">Acai & Raspberry</p><p className="home-kind">Smoothie</p><NavLink
          className="home-products"
          to="/products"> See all products </NavLink></div>
       </div>
    </React.Fragment>
  );
}

export default TopPicks
