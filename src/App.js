import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  return (
  <div className="App">
      <div>
        El valor de mi contador es: {contador}
      </div>
  </div>
  );
}

export default App;
