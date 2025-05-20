export const  APi_config = {
    BaseURl : "https://api.openweathermap.org/data/2.5",
    Geo_coding: 'http://api.openweathermap.org/geo/1.0',
    API_Key: import.meta.env.VITE_API_KEY,
    Default_PARAMS:{
        units: 'metric',
        appid:import.meta.env.VITE_API_KEY 
    }
    
}