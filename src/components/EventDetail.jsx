import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";
import "../styles/EventDetail.css";

const EventDetail = ({ eventId, monthsOfYear, onClose }) => {
  const { events, handleEditEvent, handleDeleteEvent } =
    useContext(EventContext);

  const event = events.find((event) => event.id === eventId);

  if (!event) {
    return <div className="event-detail">Event not found</div>;
  }

  return (
    <div className="event-detail">
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <div className="event-detail-header">
        <h2>{event.category}</h2>
      </div>
      <div className="event-detail-date-time">
        <div className="event-date">{`${
          monthsOfYear[event.date.getMonth()]
        } ${event.date.getDate()}, ${event.date.getFullYear()}`}</div>
        <div className="event-time">{event.time}</div>
      </div>
      <div className="event-detail-category">
        <strong>Category: </strong>
        {event.category}
      </div>
      <div className="event-detail-description">
        <strong>Description: </strong>
        {event.text}
      </div>
      <div className="event-detail-buttons">
        <button className="edit-btn" onClick={() => handleEditEvent(event)}>
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            handleDeleteEvent(event.id);
            onClose(); // Close the detail view after deleting
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
