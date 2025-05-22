import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { useGeolocation } from "@/hooks/Geolocation";
import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import WeathSkeleton from "@/components/loader-skeleton";

function WeatherDashboard() {
  const {
    COrdinnate,
    error: locationerror,
    isLoading: locationloading,
    getLocation,
  } = useGeolocation();

  const handleRefresh = () => {
    getLocation();
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
          <Button onClick={getLocation} variant="outline" className="w-fit mt-2">
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-4">
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
     
    </div>
  );
}

export default WeatherDashboard;
