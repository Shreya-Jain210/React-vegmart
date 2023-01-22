import React from 'react';
import { PicsList } from "../helpers/PicsList";
import PicsItem from "../components/PicsItems";
import "../styles/Events.css";

function Events() {
  return (
    <div className="events">
        <h1 className="eventsTitle">Our Farm Events</h1>
      <div className="picsList">
        {PicsList.map((picsItem, key) => {
          return (
            <PicsItem
              key={key}
              image={picsItem.image}
              description={picsItem.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Events;
