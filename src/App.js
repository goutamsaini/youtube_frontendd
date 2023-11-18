import './App.css';
import{ Routes,Route, BrowserRouter} from "react-router-dom";
import HomePage from './components/HomePage';
import Videoplay from './components/videoplay';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/video/:id" element={<Videoplay/>}></Route>
      <Route path="/login" element={<LoginComponent />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
