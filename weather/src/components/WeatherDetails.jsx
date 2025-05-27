
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Compass, Gauge, Sunrise, Sunset } from "lucide-react"

import { format} from 'date-fns'

import React from 'react'

function WeatherDetails({data}) {
  
  const {wind, main, sys}=data

  const formatTime = (timeStamp)=>{
    return format(new Date(timeStamp *1000),"h:mm a")
  }
  const getwindDirection=(degree)=>{
    const direction = ["N","NE","E","SE","S","SW","W","Nw"]
    const index =Math.round(((degree %=360)<0 ? degree+360:degree)/45)%8
    return direction[index]
  } 
  const detail= [
    {
        title: "Sunrize",
        value:formatTime(sys.sunrise),
        icon : Sunrise,
        color: "text-orange-600"
    },
     {
        title: "Sunset",
        value:formatTime(sys.sunrise),
        icon : Sunset,
        color: "text-blue-600"
    }, 
    
    {
        title: "Wind direction",
        value:`${getwindDirection(wind.deg)}(${wind.deg}°`,
        icon : Compass,
        color: "text-green-600"
    },  
    {
        title: "Preasure",
        value:`${main.pressure}hPa`,
        icon : Gauge,
        color: "text-purple-600"
    }
  ]
    return (
    <>
     <Card className={'border-gray-600'}>
  <CardHeader>
    <CardTitle>Weather Details</CardTitle>

  </CardHeader>
  <CardContent>
   <div className="grid gap-6 sm:grid-cols-2">
    {detail.map((detail)=>{
        return (
            <div key={detail.title}
           className="flex items-center gap-3 rounded-lg border border-gray-600 p-4">

                <detail.icon  className={`h-5 w-5 ${detail.color}`}/>
                <div>
                    <p className="font-medium">{detail.title}</p>
                    <p className="text-sm text-muted-foreground">{detail.value}</p>
                </div>
            </div>
        )
    })}
   </div>
  </CardContent>
 
</Card>
    </>
  )
}

export default WeatherDetails