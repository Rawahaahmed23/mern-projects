import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  useGeoReverseQuery,
  useForecastQuery,
  useWeatherQuery,
} from "@/hooks/use-weather";
import { useGeolocation } from "@/hooks/Geolocation";
import WeathSkeleton from "@/components/loader-skeleton";
import CurrentWeather from "./CurrentWeather";
import Hourly from "@/components/hourly";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherForcast from "@/components/Forcast";
import Favorite from "@/components/Favorite";

function WeatherDashboard() {
  const {
    coordinate,
    error: locationerror,
    getLocation,
    isLoading: locationloading,
  } = useGeolocation();

  // const location = useForecastQuery(coordinate)
  //  console.log(location);
  const useforcast = useForecastQuery(coordinate);


  const weatherQuery = useWeatherQuery(coordinate);
  const forcastQuery = useForecastQuery(coordinate);
  const locationQuery = useGeoReverseQuery(coordinate);

  const handleRefresh = () => {
    getLocation();
    if (coordinate) {
      weatherQuery.refetch();
      forcastQuery.refetch();
      locationQuery.refetch();
    }
  };

  if (locationloading) {
    return <WeathSkeleton />; // loading component jab location load ho rahi ho
  }

  if (locationerror) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription>
          <p>{locationerror}</p>
          <Button
            onClick={getLocation}
            variant="outline"
            className="w-fit mt-2"
          >
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }
  if (!coordinate) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location required</AlertTitle>
        <AlertDescription>
          <p>Please enable location acess to see your location weather.</p>
          <Button
            onClick={getLocation}
            variant="outline"
            className="w-fit mt-2"
          >
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }
  const location = locationQuery.data?.[0];

  if (weatherQuery.error || forcastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          <p>failed to fetch weather data please try again</p>
          <Button
            onClick={handleRefresh}
            variant="outline"
            className="w-fit mt-2"
          >
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }
console.log("locationQuery.data[0]:", locationQuery.data?.[0]);
  if (!weatherQuery.data || !forcastQuery.data) {
    return <WeathSkeleton />;
  }
  return (
    <div className="space-y-4">
      <Favorite />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My location</h1>
        <Button
          variant="outline"
          size="icon"
          onClick={handleRefresh}
          className="cursor-pointer"
        >
          <RefreshCw />
        </Button>
      </div>

      <div className="main grid gap-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <CurrentWeather data={weatherQuery.data} locationName={location} />
          <Hourly data={forcastQuery.data}/>
        </div>
          <div className="grid gap-6  md:grid-cols-2 items-start">
            {/* detaisl  */}
            <WeatherDetails data=  {weatherQuery.data} />
            <WeatherForcast data = {forcastQuery.data}/>
            
        </div>
      </div>
    </div>
  );
}

export default WeatherDashboard;
