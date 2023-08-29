import Intro from './Intro';
import Profile from './Profile';
import "./App.css";
import { useState } from 'react';

function App() {
  const [flag, setFlag] = useState(false)
  const [name, setName] = useState("Hamza")

  const handleClick = (e) =>{
    e.preventDefault();
    const tempFlag = !flag

    console.log( tempFlag, "this is temp")
    //there is delay in setFlag so this missbahaves sometimes
    
    setFlag(!flag)
    console.log( flag, "this is flag")

    flag? setName("Alyan"): setName("Umer")
  }
  return (
    <div>
      <Intro name={name}/>
      <button onClick={handleClick}>Change name</button>
      <Profile />
    </div>
  );
  
}

export default App;
