import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import ShirtsCollar from './shirt/ShirtsCollar'
import Shirts from 'pages/Shirts';
import IconsPage from 'pages/Shirts';
import EditIconPage from 'pages/EditIconPage';

function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<IconsPage />} />
    <Route path="/edit/:id" element={<EditIconPage />} />
  </Routes>
</Router>
  )
}

export default App
