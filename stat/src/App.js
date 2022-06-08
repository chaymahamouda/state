import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[person, setPerson]=useState({
    Fullname:"chaima",
    Bio:"chaima hamouda",
    Imagesrc:"image.jpg",
    Profession:"dev fullstack"

  });
  const[show, setShow]=useState(false);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="App">
 <button onClick={()=>setShow(!show)}>click here</button>
 
 {show ?(
   <div style={{backgroundColor:'#ffffff00' ,width:"40%",height:"10%", margin:"0 auto"}}>
   <img src={person.Imagesrc}width="250px" style={{borderRadius:"50%"}}></img>
   <h1> {person.Fullname}</h1>
   <h1>{person.Bio}</h1>
   <h1>{person.Profession}</h1>
  
   </div>

 ):null
 }
 <h1>{seconds} seconds have elapsed since mounting.</h1>
    </div>
  );
}

export default App;
