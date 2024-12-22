import { Route, Routes } from "react-router-dom";
import Map from "./pages/Map";
import Details from "@pages/Details";
import Sign from "@pages/Sign";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/sign" element={<Sign />} />
        <Route
          path="/map"
          element={
            <div className="flex">
              <Map />
              <Details />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
