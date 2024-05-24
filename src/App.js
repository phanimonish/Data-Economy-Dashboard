import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Settings } from "./pages/Settings/Settings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
