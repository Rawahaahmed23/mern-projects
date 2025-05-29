import { useQuery } from "@tanstack/react-query"
import { WeatherApiInstance } from "@/api/weather"



export const weather_Key = {
  weather: (coords) => ["weather", coords],
  forecast: (coords) => ["forecast", coords],
  location: (coords) => ["location", coords],
  search: (query) => ["location-search", query],
}

export function useWeatherQuery(coordinate) {
  return useQuery({
    queryKey: weather_Key.weather(coordinate ?? { lat: 0, lon: 0 }),
    queryFn: () =>
      coordinate ? WeatherApiInstance.getCurrentWeather(coordinate) : null,
    enabled: !!coordinate,
  });
}

export function useForecastQuery(coordinate) {
  return useQuery({
    queryKey: weather_Key.forecast(coordinate ?? { lat: 0, lon: 0 }),
    queryFn: () =>
      coordinate ? WeatherApiInstance.getForcast(coordinate) : null,
    enabled: !!coordinate,
  });
}

export function useGeoReverseQuery(coordinate) {
  return useQuery({
    queryKey: weather_Key.location(coordinate ?? { lat: 0, lon: 0 }),
    queryFn: () =>
      coordinate ? WeatherApiInstance.reverseGetCOde(coordinate) : null,
    enabled: !!coordinate,
  });
}

export function useLocationSearch(query){
  return useQuery({
    queryKey: weather_Key.search(query),
    queryFn: () => WeatherApiInstance.SearchLocations({query}),
    enabled:query.length >=3,
  })
}
