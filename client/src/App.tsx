
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ShirtsList from "pages/ShirtsList";
import ShirtSelectionPage from "pages/ShirtSelectionPage";
import CustomizationPage from "pages/CustomizationPage";
import Nav from "components/navigation/Nav";

function App() {
  return (
    <Router>
      <Nav />
  <Routes>
    <Route path="/" element={<ShirtSelectionPage />} />
    <Route path="/customize/:shirtType" element={<CustomizationPage />} />
  </Routes>
</Router>
  )
}

export default App
