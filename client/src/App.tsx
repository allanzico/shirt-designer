
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ShirtSelectionPage from "pages/ShirtSelectionPage";
import CustomizationPage from "pages/CustomizationPage";
import Nav from "components/navigation/Nav";
import CartPage from "pages/CartPage";

function App() {
  return (
    <Router>
      <Nav />
  <Routes>
    <Route path="/" element={<ShirtSelectionPage />} />
    <Route path="/customize/:shirtType" element={<CustomizationPage />} />
    <Route path="/cart" element={<CartPage />} />
  </Routes>
</Router>
  )
}

export default App
