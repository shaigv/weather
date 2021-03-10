import { useState, useEffect } from 'react';
import weatherApi from '../api/weather'
import keys from '../kyes/key'


const useWeather = () => {
  const [days, setDays] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {

    window.navigator.geolocation.getCurrentPosition(
      pos => {
        search({ lat: pos.coords.latitude, lon: pos.coords.longitude });

      },
      err => {
        setErrorMessage(err.message);
      }
    );

  },[]); //check

  const search = async (position) => {
    const response = await weatherApi.get('/data/2.5/onecall', {
        params: {
            lat:position.lat,
            lon:position.lon,
            exclude:'hourly,minutely',
            mode:'json',
            units:'metric',
            appid:keys.appKey          
            },
    });

    setDays(response.data.daily);
    console.log(response);
  };

  return [days,errorMessage];
};

export default useWeather;