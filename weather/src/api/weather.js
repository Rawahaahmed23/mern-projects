import { ApiConfig } from "./config"

class WeatherAPi{
    #createUrl(endPoint,params){
      
      const searchParams = new URLSearchParams({
           appid:ApiConfig.APIKey,
           ...params
      })
        return `${endPoint}?${searchParams.toString()}`
       
    }
  async #fetchData(url) {
    const response = await fetch(url)
    if(!response.ok){
         throw new Error(`weather Api Error: ${response.statusText}`)
     }

     return response.json()
  }

    async getCurrentWeather ({lat,lon}){
         const url = this.#createUrl(`${ApiConfig.BaseURL}/weather`,{
              lat:lat.toString(),
              lon:lon.toString(),
              units: ApiConfig.DefaultParams.units,
         })
         return this.#fetchData(url)
      
    }    
    async getForcast ({lat,lon}){

            const url = this.#createUrl(`${ApiConfig.BaseURL}/forecast`,{
              lat:lat.toString(),
              lon:lon.toString(),
              units: ApiConfig.DefaultParams.units,
             
         })
         return this.#fetchData(url)
        
    } 
    
    async reverseGetCOde({ lat, lon }) {
  const url = this.#createUrl(`${ApiConfig.GeoCoding}/reverse`, {
    lat: lat.toString(),
    lon: lon.toString(),
    limit:1,  
  })
  return this.#fetchData(url)
}
}

export const WeatherApiInstance =  new WeatherAPi()