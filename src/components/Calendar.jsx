import React, { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import "../styles/Calendar.css";

const Calendar = ({ daysOfWeek, monthsOfYear }) => {
  const { selectedDate, setSelectedDate, setShowEventPopup, handleEditEvent } =
    useContext(EventContext);

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) =>
      currentMonth === 0 ? prevYear - 1 : prevYear
    );
  };

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) =>
      currentMonth === 11 ? prevYear + 1 : prevYear
    );
  };

  const handleDayClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    const today = new Date();

    if (clickedDate >= today || isSameDay(clickedDate, today)) {
      setSelectedDate(clickedDate);
      setShowEventPopup(true);
    }
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <div className="calendar">
      <h1 className="heading">Calendar</h1>
      <div className="navigate-date">
        <h2 className="month">{monthsOfYear[currentMonth]},</h2>
        <h2 className="year">{currentYear}</h2>
        <div className="buttons">
          <i className="bx bx-chevron-left" onClick={prevMonth}></i>
          <i className="bx bx-chevron-right" onClick={nextMonth}></i>
        </div>
      </div>
      <div className="weekdays">
        {daysOfWeek.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="days">
        {[...Array(firstDayOfMonth).keys()].map((_, index) => (
          <span key={`empty-${index}`} />
        ))}
        {[...Array(daysInMonth).keys()].map((day) => (
          <span
            key={day + 1}
            className={
              day + 1 === currentDate.getDate() &&
              currentMonth === currentDate.getMonth() &&
              currentYear === currentDate.getFullYear()
                ? "current-day"
                : "other-day"
            }
            onClick={() => handleDayClick(day + 1)}
          >
            {day + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

// import React, { useState } from "react";
// import "./Calendar.css";

// export default function Calendar() {
//   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const monthsOfYear = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const currentDate = new Date();

//   const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
//   const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
//   const [selectedDate, setSelectedDate] = useState(currentDate);
//   const [showEventPopup, setShowEventPopup] = useState(false);
//   const [eventTime, setEventTime] = useState({ hours: "00", minutes: "00" });
//   const [eventText, setEventText] = useState("");
//   const [eventCategory, setEventCategory] = useState("");
//   const [editingEvent, setEditingEvent] = useState(null);

//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//   const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

//   const prevMonth = () => {
//     setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
//     setCurrentYear((prevYear) =>
//       currentMonth === 0 ? prevYear - 1 : prevYear
//     );
//   };

//   const nextMonth = () => {
//     setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
//     setCurrentYear((prevYear) =>
//       currentMonth === 11 ? prevYear + 1 : prevYear
//     );
//   };

//   const handleDayClick = (day) => {
//     const clickedDate = new Date(currentYear, currentMonth, day);
//     const today = new Date();

//     if (clickedDate >= today || isSameDay(clickedDate, today)) {
//       setSelectedDate(clickedDate);
//       setShowEventPopup(true);
//       setEventTime({ hours: "00", minutes: "00" });
//       setEventText("");
//       setEventCategory("");
//       setEditingEvent(null);
//     }
//   };

//   const isSameDay = (date1, date2) => {
//     return (
//       date1.getFullYear() === date2.getFullYear() &&
//       date1.getMonth() === date2.getMonth() &&
//       date1.getDate() === date2.getDate()
//     );
//   };

//   return (
//     <div className="calendar">
//       <h1 className="heading">Calendar</h1>
//       <div className="navigate-date">
//         <h2 className="month">{monthsOfYear[currentMonth]},</h2>
//         <h2 className="year">{currentYear}</h2>
//         <div className="buttons">
//           <i className="bx bx-chevron-left" onClick={prevMonth}></i>
//           <i className="bx bx-chevron-right" onClick={nextMonth}></i>
//         </div>
//       </div>
//       <div className="weekdays">
//         {daysOfWeek.map((day) => (
//           <span key={day}>{day}</span>
//         ))}
//       </div>
//       <div className="days">
//         {[...Array(firstDayOfMonth).keys()].map((_, index) => (
//           <span key={`empty-${index}`} />
//         ))}
//         {[...Array(daysInMonth).keys()].map((day) => (
//           <span
//             key={day + 1}
//             className={
//               day + 1 === currentDate.getDate() &&
//               currentMonth === currentDate.getMonth() &&
//               currentYear === currentDate.getFullYear()
//                 ? "current-day"
//                 : ""
//             }
//             onClick={() => handleDayClick(day + 1)}
//           >
//             {day + 1}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }
