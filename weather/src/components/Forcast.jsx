import React from 'react'
import { format } from 'date-fns';
import {
  Card,
  CardContent,
 
  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowDown, ArrowUp, Droplet, Wind } from 'lucide-react';

function WeatherForcast({data}) {

    const dailyForcast = data.list.reduce((acc,forcast)=>{
        const date = format(new Date(forcast.dt *1000),"yyyy-MM-dd")
        if(!acc[date]){
            acc[date]={ 
                temp_min: forcast.main.temp_min,
                temp_max: forcast.main.temp_max,
                humidity: forcast.main.humidity,
                wind: forcast.wind.speed,
                weather:forcast.weather[0],
                date:forcast.dt
            };
            
        }
        else{
            acc[date].temp_min = Math.min(acc[date].temp_min, forcast.main.temp_min),
            acc[date].temp_max = Math.max(acc[date].temp_max,forcast.main.temp_max)
        }

        return acc
    },{})
      const formtemp = (temp) => `${Math.round(temp)}°`;
    const nextday= Object.values(dailyForcast).slice(0,6)
  return (
  <>
  <Card className={'border-gray-600'}>
  <CardHeader>
    <CardTitle>5 Day forcast</CardTitle>
   
  </CardHeader>
  <CardContent>
    <div className='grid gap-4 '> 
        {nextday.map((day)=>{
         return <div key={day.date} className='grid gird-cols-3 items-center gap-4 rounded-lg border border-gray-600 p-4'> 
         <div>
            <p>{format(new Date(day.date*1000 ),"EEE,MMM,d")}</p>
            <p>{day.weather.description}</p>

         </div>
         <div className='flex justify-center gap-4'>
            <span className='flex items-center text-blue-500'>
                <ArrowDown className='mr-1 h-4 w-4'/>
                {formtemp(day.temp_min)}
            </span>   
             <span className='flex items-center text-red-500'>
                <ArrowUp className='mr-1 h-4 w-4'/>
                {formtemp(day.temp_max)}
            </span>
         </div>
         <div className='flex justify-end gap-4 '>
            <span className='flex items-center gap-1'>
                <Droplet className='h-4 w-4 text-blue-500' />
                <span className='text-sm'>{day.humidity}%</span> 

            </span>   
            
             <span className='flex items-center gap-1'>
                <Wind className='h-4 w-4 text-red-500' />
                <span className='text-sm'>{day.wind}m/s</span> 

            </span>
                  
         </div>
         
         </div>
        })}
    </div>
  </CardContent>

</Card>
  </>
  )
}

export default WeatherForcast