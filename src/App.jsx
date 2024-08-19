// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { EventProvider } from "./context/EventContext";
// import Calendar from "./components/Calendar";
// import Events from "./components/Events";

// function App() {
//   return (
//     <EventProvider>
//       <Router>
//         <div className="container">
//           <Routes>
//             <Route path="/" element={<Calendar />} />
//             <Route path="/events" element={<Events />} />
//           </Routes>
//         </div>
//       </Router>
//     </EventProvider>
//   );
// }

// export default App;

import CalendarApp from "./components/CalendarApp";

function App() {
  return (
    <div className="container">
      <CalendarApp />
    </div>
  );
}

export default App;
