import React from 'react';
import './App.css';
import './style.css';
import FirstComponent from "./Component/Profile/ProfilePhoto"
import SecondComponent from "./Component/Profile/FullName"
import ThirdComponent from "./Component/Profile/Adress"
import FourthComponent from "./Component/Profile/hobbies"

function App() {
  return (
    <section>
    <div className="App">
      
      <FirstComponent />
     <SecondComponent />
     <ThirdComponent />
     <FourthComponent />
    </div>
    </section>
  );
}

export default App;

