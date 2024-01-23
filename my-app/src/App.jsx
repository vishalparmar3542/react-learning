import React from 'react';
import './App.css';
import Video from "./components/Video";
const App=()=>{
  let desc1="Dogs can be seen in here"
  let desc2="Cats can be seen in here"
  let desc3="bull can be seen in here"
  let desc4="elephant can be seen in here"
  return (

    <div id="conatainer">
    <Video title="dog" discription={desc1}/>
    <Video title="cat" discription={desc2}/>
    <Video title="bull" discription={desc3}/>
    <Video title="elephant" discription={desc4}/>
    </div>
  );
}
export default App;