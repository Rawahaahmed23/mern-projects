
import { useEffect, useState } from "react";

export function useGeolocation() {
  const [locationData, setLocationData] = useState({
    COrdinnate: null,
    error: null,
    isLoading: true,
  });

  const getLocation = () => {
    setLocationData((prev) => ({ ...prev, isLoading: true, error: null }));

    if (!navigator.geolocation) {
      setLocationData({
        COrdinnate: null,
        error: "Geolocation is not supported by browser",
        isLoading: false,
      });
      return;
    }

    // === FIXED HERE ===
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationData({
          COrdinnate: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
          error: null,
          isLoading: false,  // was null, should be false
        });
      },
      (error) => {
        let errorMessage;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Location permission denied. Please enable location access in settings.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "The request to get your location timed out.";
            break;
          default:
            errorMessage = "An unknown error occurred.";
        }

        setLocationData({
          COrdinnate: null,
          error: errorMessage,
          isLoading: false,
        });
      },
      {
        enableHighAccuracy: true, // fixed typo (was enableHightacuressy)
        timeout: 5000,
        maximumAge: 0, // fixed typo (was maximumage)
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return {
    ...locationData,
    getLocation,
  };
}
