import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import UserList from './Pages/UserList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" elemnet={<Home />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
