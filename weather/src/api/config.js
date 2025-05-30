export const ApiConfig = {
    BaseURL: "https://api.openweathermap.org/data/2.5",    
GeoCoding: 'https://api.openweathermap.org/geo/1.0',
    APIKey: import.meta.env.VITE_API_KEY,                      
    DefaultParams: {
        units: 'metric',
        appid: import.meta.env.VITE_API_KEY,                    
    }
};

