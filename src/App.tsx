import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Navigation from './components/Navigaton';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>

  );
}

export default App;
