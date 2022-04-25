
import Home from "./pages/Home";
import Question from "./pages/Question";
import {Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/question" element={<Question/>} />
    </Routes>
  );
}

export default App;
