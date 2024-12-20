import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import ChatPage from "./pages/ChatPage.js";
import AnalysisPage from "./pages/AnalysisPage.js";
function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={ <Home /> }
        />
        <Route
          path="/chats"
          element={ <ChatPage /> }
        />
        <Route
          path="/analysis"
          element={ <AnalysisPage /> }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
