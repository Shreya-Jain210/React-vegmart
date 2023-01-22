import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assests/veggies.jpg";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer" >
        <h1>today's special</h1>
        <p> vegies are good for health</p>
        <Link to="/gifts">
          <button>order</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
