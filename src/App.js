import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
     <Countries></Countries>
    </div>
  );
}

// ** First make the component
/* 
function Countries(){
  // ** 2 things can happen we can get the data or not, so obostar change hosse we need state
  const [countries,setCountries] = useState([]);
  // ** Load the data from the api
  useEffect(()=>{
    // ** Loader function
    const restCountries = async ()=>{
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        response.ok ? console.log('Successful') : console.log('failed');
        const data = await response.json();
        setCountries(data)
      } catch (error) {
        console.log(error);
      }
    }
    restCountries();
  },[]);

  return(
    <div>
      {
        countries?.map(country => {
         
          const {name:{common},population} = country;

          return <Country name={common} population={population}></Country>
        })
      }
    </div>
  )

};

function Country({name,population}){
  return(
    <div>
      <h1>Country Name: {name}</h1>
      <h4>Country Population: {population}</h4>
    </div>
  )
}
 */

export default App;
