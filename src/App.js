import React from 'react';

import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import RootPage from './pages/RootPage';
import Basket from './pages/Basket';
import Item from './pages/Item';
import './App.css';

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<RootPage />} />
          <Route exact path="/basket" element={<Basket />} />
          <Route exact path="/item" element={<Item />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
