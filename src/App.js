import { useEffect, useState } from 'react';
import Launchpad from './components/Launchpad';
import './App.css';

export default function App() {
  const [launchpads, setLaunchpads] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/launchpads')
    .then(resp => resp.json())
    .then(data => {
      setLaunchpads(data);
    })
  }, [])

  // function sendData(id){
  //   console.log(id)
  // }

  const lpElement = launchpads.map(pad => (
    <Launchpad 
      key={pad.id}
      name={pad.name}
      status={pad.status}
      details={pad.details}
      launches={pad.launches}/>
  ))

  return (
    <div className="App">
      {lpElement}
    </div>
  );
}