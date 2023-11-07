import logo from './logo.svg';
import './App.css';
import{ Routes,Route, BrowserRouter} from "react-router-dom";

import HomePage from './components/HomePage';
import Videoplay from './components/videoplay';
<link rel="stylesheet" href="HomePade.css"></link>;
<link rel="stylesheet" href="videoplay.css"></link>
function App() {
  return (
  // <div className="App"><TableComponent></TableComponent></div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/video" element={<Videoplay/>}></Route>
     
    </Routes>
  </BrowserRouter>
  )
}

export default App;
