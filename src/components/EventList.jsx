import React, { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import EventDetail from "./EventDetail"; // Import the EventDetail component
import "../styles/EventList.css";
import "../styles/SelectCustom.css";

const EventList = ({ monthsOfYear }) => {
  const {
    events,
    filterCategory,
    setFilterCategory,
    handleEditEvent,
    handleDeleteEvent,
  } = useContext(EventContext);

  const [selectedEventId, setSelectedEventId] = useState(null);

  const filteredEvents =
    filterCategory === "All"
      ? events
      : events.filter((event) => event.category === filterCategory);

  const categories = [
    "Work",
    "Personal",
    "Festival",
    "Family",
    "Health",
    "Other",
  ];

  const handleEventClick = (eventId) => {
    setSelectedEventId(eventId);
  };

  const handleCloseDetail = () => {
    setSelectedEventId(null);
  };

  return (
    <div className="events">
      {!selectedEventId ? (
        <>
          <div className="event-filter">
            <label htmlFor="category-filter">Filter by Category: </label>
            <select
              id="category-filter"
              className="select-custom"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="All">All</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {filteredEvents.map((event, index) => (
            <div
              className="event"
              key={index}
              onClick={() => handleEventClick(event.id)} // Handle event click
            >
              <div className="event-date-wrapper">
                <div className="event-date">{`${
                  monthsOfYear[event.date.getMonth()]
                } ${event.date.getDate()}, ${event.date.getFullYear()}`}</div>
                <div className="event-time">{event.time}</div>
              </div>
              <div className="event-category">{event.category}</div>
              {/* <div className="event-text">{event.text}</div> */}
              {/* <div className="event-buttons">
                <i
                  className="bx bxs-edit-alt"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditEvent(event);
                  }}
                ></i>
                <i
                  className="bx bxs-message-alt-x"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteEvent(event.id);
                  }}
                ></i>
              </div> */}
            </div>
          ))}
        </>
      ) : (
        <EventDetail
          eventId={selectedEventId}
          monthsOfYear={monthsOfYear}
          onClose={handleCloseDetail} // Handle closing the detail view
        />
      )}
    </div>
  );
};

export default EventList;

// import React, { useContext } from "react";
// import { EventContext } from "../context/EventContext";
// import "../styles/EventList.css";
// import "../styles/SelectCustom.css";

// const EventList = ({ monthsOfYear }) => {
//   const {
//     events,
//     filterCategory,
//     setFilterCategory,
//     handleEditEvent,
//     handleDeleteEvent,
//   } = useContext(EventContext);

//   const filteredEvents =
//     filterCategory === "All"
//       ? events
//       : events.filter((event) => event.category === filterCategory);

//   const categories = [
//     "Work",
//     "Personal",
//     "Festival",
//     "Family",
//     "Health",
//     "Other",
//   ];

//   return (
//     <div className="events">
//       <div className="event-filter">
//         <label htmlFor="category-filter">Filter by Category: </label>
//         <select
//           id="category-filter"
//           className="select-custom"
//           value={filterCategory}
//           onChange={(e) => setFilterCategory(e.target.value)}
//         >
//           <option value="All">All</option>
//           {categories.map((category, index) => (
//             <option key={index} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//       {filteredEvents.map((event, index) => (
//         <div className="event" key={index}>
//           <div className="event-date-wrapper">
//             <div className="event-date">{`${
//               monthsOfYear[event.date.getMonth()]
//             } ${event.date.getDate()}, ${event.date.getFullYear()}`}</div>
//             <div className="event-time">{event.time}</div>
//           </div>
//           <div className="event-category">{event.category}</div>
//           <div className="event-text">{event.text}</div>
//           <div className="event-buttons">
//             <i
//               className="bx bxs-edit-alt"
//               onClick={() => handleEditEvent(event)}
//             ></i>
//             <i
//               className="bx bxs-message-alt-x"
//               onClick={() => handleDeleteEvent(event.id)}
//             ></i>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventList;
