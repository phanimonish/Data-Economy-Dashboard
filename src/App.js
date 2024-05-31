import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Settings } from "./pages/Settings/Settings";
import { Validations } from "./pages/Validations/Validations";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Settings />} />
          <Route path="/Validations" element={<Validations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
