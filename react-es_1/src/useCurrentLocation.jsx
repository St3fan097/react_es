import { useState } from "react";

export function useCurrentLocation() {
    const [location, setLocation] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    
    const getCurrentPosition = () => {
        setLoading(true)
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
            setLoading(false)
        },
        (errors) => {
            setError(errors)
            setLoading(false)
        }
        )
    }
    
    return { location, error, loading, getCurrentPosition };


}