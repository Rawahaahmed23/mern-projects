import { useForecastQuery, useWeatherQuery } from '@/hooks/use-weather'
import React, { use } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Alert, AlertTitle, AlertDescription} from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

import CurrentWeather from "./CurrentWeather";  
import Hourly from "@/components/hourly";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherForcast from "@/components/Forcast";


import WeathSkeleton from '@/components/loader-skeleton';
import Favorite_Button from '@/components/favorite_Button';


function CityPage() {
  const [searchParams] =useSearchParams()
  const params = useParams()
  const lat  = parseFloat(searchParams.get("lat")||"0")
  const lon = parseFloat(searchParams.get("lon")||"0")
  const coordinate = {lat,lon};
  const weatherQuery = useWeatherQuery(coordinate);
  const forcastQuery = useForecastQuery(coordinate);



  
  if (weatherQuery.error || forcastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
       failed to fetch weather data please try again
  
        </AlertDescription>
      </Alert>
    );
  }

    if (!weatherQuery.data || !forcastQuery.data|| !params.cityName) {
    return <WeathSkeleton />;
  }



  
  return (
 <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{params.cityName},{weatherQuery.data.sys.country}</h1>
      <div><Favorite_Button data={{...weatherQuery.data,name:params.cityName}} /></div> 
      </div>
      

      <div className="main grid gap-6">
        <div className="flex flex-col gap-4">
          <CurrentWeather data={weatherQuery.data}  />
          <Hourly data={forcastQuery.data}/>
        </div>
          <div className="grid gap-6  md:grid-cols-2 items-start">
            {/* detaisl  */}
            <WeatherDetails data=  {weatherQuery.data} />
            <WeatherForcast data = {forcastQuery.data}/>
            
        </div>
      </div>
    </div>
  )
}

export default CityPage