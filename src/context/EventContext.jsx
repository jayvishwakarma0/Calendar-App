import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [eventTime, setEventTime] = useState({ hours: "00", minutes: "00" });
  const [eventText, setEventText] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [editingEvent, setEditingEvent] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [showEventDetail, setShowEventDetail] = useState(false);

  const handleEventSubmit = () => {
    const newEvent = {
      id: editingEvent ? editingEvent.id : Date.now(),
      date: selectedDate,
      time: `${eventTime.hours.padStart(2, "0")}:${eventTime.minutes.padStart(
        2,
        "0"
      )}`,
      text: eventText,
      category: eventCategory,
    };

    let updatedEvents = [...events];

    if (editingEvent) {
      updatedEvents = updatedEvents.map((event) =>
        event.id === editingEvent.id ? newEvent : event
      );
    } else {
      updatedEvents.push(newEvent);
    }

    updatedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    setEvents(updatedEvents);
    setEventTime({ hours: "00", minutes: "00" });
    setEventText("");
    setEventCategory("");
    setShowEventPopup(false);
    setEditingEvent(null);
  };

  const handleEditEvent = (event) => {
    setSelectedDate(new Date(event.date));
    setEventTime({
      hours: event.time.split(":")[0],
      minutes: event.time.split(":")[1],
    });
    setEventText(event.text);
    setEventCategory(event.category);
    setEditingEvent(event);
    setShowEventPopup(true);
  };

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  const handleEventDetail = () => {
    setShowEventDetail(true);
  };

  return (
    <EventContext.Provider
      value={{
        events,
        selectedDate,
        setSelectedDate,
        showEventPopup,
        setShowEventPopup,
        eventTime,
        setEventTime,
        eventText,
        setEventText,
        eventCategory,
        setEventCategory,
        editingEvent,
        setEditingEvent,
        filterCategory,
        setFilterCategory,
        handleEventSubmit,
        handleEditEvent,
        handleDeleteEvent,
        handleEventDetail,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
