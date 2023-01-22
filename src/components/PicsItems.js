import React from "react";

function PicsItem({ image, description }) {
  return (
    <div className="picsItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <p> {description} </p>
    </div>
  );
}

export default PicsItem;