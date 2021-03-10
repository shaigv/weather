import React from 'react';
import useWeather from '../hooks/useWeather';
import {useMemo} from 'react';
import './App.css';

const App = () => {
  
const hotDegree =28;
 const [days,errorMessage] = useWeather();

 //Hot days - using Memo hook
 const hotDays = useMemo(()=>
 days.filter(day=>{

  return day.temp.max >hotDegree;
 }),
 [days]);

  if (errorMessage) {

    return <div>errorMessage</div>
  }
  else {

    const renderedResults = days.map((day) => {
      const date = new Date(day.dt * 1000).toLocaleDateString("en-US");

      return (
        <div key={day.dt} className="shadow card">
          <div className="greyCenter" >

            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} />
          </div>
          <div className="  content myContent"  >
            <div className="header" > {date}</div>
            {/* <div className="meta">
              <a>Friends</a>
            </div> */}
            <div className="description">
              {day.weather[0].description}
        </div>
          </div>
          <div className="extra content">
            <span className="right floated">
            {Math.round(day.temp.max)} °C 
        </span>
            <span>
              {/* <i className="user icon"></i> */}
              {Math.round(day.temp.min)} °C         </span>
          </div>
        </div>
      );
    });

    return (
      <div className=" ui-container">
      <div className="ui link cards">
        {renderedResults}
      </div>
      </div>

    );



  }
};

export default App;
