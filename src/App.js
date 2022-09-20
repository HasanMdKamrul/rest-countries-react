import { useEffect } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// ** First make the component

function Countries(){
  // ** Load the data from the api
  useEffect(()=>{
    // ** Loader function
    const restCountries = async ()=>{
      try {
        
      } catch (error) {
        console.log(error);
      }
    }
  },[])
  return(
    <div>
      <h1>Rest Countries .....</h1>
    </div>
  )
}


export default App;
