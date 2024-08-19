import React from "react";
import "../styles/CalendarApp.css";
import { EventProvider } from "../context/EventContext";
import Calendar from "./Calendar";
import EventList from "./EventList";
import EventPopup from "./EventPopup";

function CalendarApp() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <EventProvider>
      <div className="calendar-app">
        <Calendar daysOfWeek={daysOfWeek} monthsOfYear={monthsOfYear} />
        <EventList monthsOfYear={monthsOfYear} />
        <EventPopup />
      </div>
    </EventProvider>
  );
}

export default CalendarApp;
