import React from 'react';
 import { useState, useEffect } from 'react';
import useWeather from '../hooks/useWeather';

const App = () => {
  const[position,setPosition]=useState({lat:'33',lon:'-39'}) ;
  const[errorMessage,setErrorMessage]=useState(null) ;

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setstate!!!!
        setPosition({lat:position.coords.latitude,lon:position.coords.longitude});

      },
      err => {
        setErrorMessage(err.message);
      }
    );

  },[]); //check



  const [days] = useWeather(position);
  if(errorMessage){

    return <div>errorMessage</div>
  }
  else{

  const renderedResults = days.map((day) => {
    const date = new Date(day.dt*1000).toLocaleDateString("en-US");

    return (  
     <  div key={day.dt} className="four wide column" >
    <div className="item" style={{padding:'1px',boxshadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'    }}></div>
    <h2>{date}</h2>
      <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.temp.description}/>
       <h3>Max : {Math.round(day.temp.max)} °C </h3>
      <h3>Min : {Math.floor(day.temp.min)} °C</h3>
     </div>
     ); 
  });









  return (
    <div>
     <div className="ui container" >
      <div className="ui grid">
        
        {renderedResults}
        
      </div>
    </div> 
   </div>

  );



  }
};

export default App;
