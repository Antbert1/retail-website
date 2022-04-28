import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <StoreProvider store={store}>
      <div>TEST</div>
    </StoreProvider>
  );
}

export default App;
