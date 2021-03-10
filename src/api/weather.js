import axios from 'axios';


export default axios.create({
    baseURL : 'https://api.openweathermap.org',
    
});



// https://api.openweathermap.org/data/2.5/onecall
// ?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&mode=json&appid=92fd0a622f89752949c6bda1cc2c3b62