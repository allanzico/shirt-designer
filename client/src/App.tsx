
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ShirtsList from "pages/ShirtsList";
import ShirtSelectionPage from "pages/ShirtSelectionPage";
import CustomizationPage from "pages/CustomizationPage";

function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<ShirtSelectionPage />} />
    <Route path="/customize/:shirtType" element={<CustomizationPage />} />
  </Routes>
</Router>
  )
}

export default App
