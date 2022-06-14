import React, {useEffect} from 'react';
import '../styles/App.css'
import Container from "./Container";

function App() {

  useEffect(() => {
    fetch("/api").then((res) => {
      res.json().then((resource) => {
        console.log(resource)
      })
    })
  },[])
  return (
    <div className="main">
      <Container/>
    </div>
  );
}

export default App;
