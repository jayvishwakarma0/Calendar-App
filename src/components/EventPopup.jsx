import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";
import "../styles/EventPopup.css";
import "../styles/SelectCustom.css";

const EventPopup = () => {
  const {
    showEventPopup,
    setShowEventPopup,
    eventTime,
    setEventTime,
    eventText,
    setEventText,
    eventCategory,
    setEventCategory,
    handleEventSubmit,
    editingEvent,
  } = useContext(EventContext);

  const categories = [
    "Work",
    "Personal",
    "Festival",
    "Family",
    "Health",
    "Other",
  ];

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setEventTime((prevTime) => ({
      ...prevTime,
      [name]: value.padStart(2, "0"),
    }));
  };

  if (!showEventPopup) return null;

  return (
    <div className="event-popup">
      <div className="time-input">
        <div className="event-popup-time">TIME</div>
        <input
          type="number"
          name="hours"
          min={0}
          max={24}
          className="hours"
          value={eventTime.hours}
          onChange={handleTimeChange}
        />
        <input
          type="number"
          name="minutes"
          min={0}
          max={60}
          className="minutes"
          value={eventTime.minutes}
          onChange={handleTimeChange}
        />
      </div>
      <div className="event-category">
        <label htmlFor="category-select">Category: </label>
        <select
          id="category-select"
          className="select-custom"
          value={eventCategory}
          onChange={(e) => setEventCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <textarea
        placeholder="Enter Event Text (Maximum 60 Characters)"
        value={eventText}
        onChange={(e) => {
          if (e.target.value.length <= 60) {
            setEventText(e.target.value);
          }
        }}
      ></textarea>

      <button className="event-popup-btn" onClick={handleEventSubmit}>
        {editingEvent ? "Update Event" : "Add Event"}
      </button>
      <button
        className="close-event-popup"
        onClick={() => setShowEventPopup(false)}
      >
        <i className="bx bx-x"></i>
      </button>
    </div>
  );
};

export default EventPopup;
