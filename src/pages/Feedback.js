import React from "react";
import LeftImg from "../assests/veg.jpg";
import "../styles/Feedback.css";

function Feedback() {
  return (
    <div className="feedback">
      <div className="leftSide" style={{ backgroundImage: `url(${LeftImg})` }}></div>
      <div className="rightSide">
        <h1> Feedback Form </h1>
        <form id="feedback-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Feedback</label>
          <textarea rows="6" placeholder="Enter feedback..." name="message" required ></textarea>
          <button type="submit"> Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;