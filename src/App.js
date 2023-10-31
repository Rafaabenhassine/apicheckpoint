import './App.css';
import { Route, Routes } from 'react-router-dom';

import UserList from './Pages/UserList';

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
