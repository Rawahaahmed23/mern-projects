import { APi_config } from "./config"

class WeatherAPi{
    #createUrl(endPoint,params){
      
      const searchParams = new URLSearchParams({
           appid:APi_config.API_Key,
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
         const url = this.#createUrl(`${APi_config.BaseURl}/weather`,{
              lat:lat.toString(),
              lon:lon.toString(),
              units: APi_config.Default_PARAMS.units,
         })
         return this.#fetchData(url)
      
    }    
    async getForcast ({lat,lon}){
            const url = this.#createUrl(`${APi_config.BaseURl}/forcastData`,{
              lat:lat.toString(),
              lon:lon.toString(),
              units: APi_config.Default_PARAMS.units,
         })
         return this.#fetchData(url)
        
    }   async reverseGetCOde({lan,lot}){
            const url = this.#createUrl(`${APi_config.BaseURl}/Geocode`,{
              lat:lat.toString(),
              lon:lon.toString(),
              units: APi_config.Default_PARAMS.units,
         })
         return this.#fetchData(url)
    }
}

export const WeatherAPi =  new WeatherAPi()