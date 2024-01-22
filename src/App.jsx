import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AdminPanelComponent } from './AdminPanel/Index';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path='/' Component={AdminPanelComponent} />
      </Routes>
    </>
  );
}

export default App;
