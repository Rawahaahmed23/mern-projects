import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react";

function CurrentWeather({ data, locationName }) {
  const {
    weather:[currentWeather],
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
  } = data;

  const formtemp = (temp) => `${Math.round(temp)}°`;
  
  return (
    <Card className=" overflow-hidden border-gray-600">
      <CardContent className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <h2 className="text-2xl font-bold">{location.name}</h2>
                {location.state && (
                  <span className="text-muted-foreground">
                    , {location.state}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {location.country}
              </p>
            </div>

            <div className="flex items-center gap-2 text-7xl font-bold">
              <p>{formtemp(temp)}</p>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground-4">
                  Feels Like {formtemp (feels_like)}
                </p>
                <div className="flex gap-2 text-sm font-medium">
                  <span className="flex items-center gap-1 text-blue-500">
                    <ArrowDown className="h-3 w-3" />
                    {formtemp(temp_min)}
                  </span>
                  <span className="flex items-center gap-1 text-red-500">
                    <ArrowUp className="h-3 w-3" />
                    {formtemp(temp_max)}
                  </span>
                </div>
              </div>
            </div>
        <div className="grid grid-cols-2 gap-4">
  {/* Humidity */}
  <div className="flex items-center gap-2">
    <Droplets className="h-6 w-5 text-blue-500" />
    <div className="space-y-0.5">
      <p className="text-sm font-medium">Humidity</p>
      <p className="text-sm text-muted-foreground">{humidity}%</p>
    </div>
  </div>

  {/* Wind */}
  <div className="flex items-center gap-2">
    <Wind className="h-6 w-5 text-blue-500" />
    <div className="space-y-0.5">
      <p className="text-sm font-medium">Wind</p>
      <p className="text-sm text-muted-foreground">{speed} km/h</p>
    </div>
  </div>
</div>
 
          </div>



       <div>
          <div className="relative flex aspect-square w-full max-w-[200px] items-center justify-center">
             <img src={`https://openweathermap.org/img/wn/${currentWeather.icon}@4x.png`}
             alt={`${currentWeather.description}`} className="h-full w-full object-contain" /> 
             <div className="absolute bottom-0 text-center">
              <p className="text-sm font-medium capitalize">{currentWeather.description}</p>
              </div> 
          </div>
        </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CurrentWeather;
