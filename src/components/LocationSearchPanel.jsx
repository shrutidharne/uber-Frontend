import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
        // setVehiclePanel(true)
        // setPanelOpen(false)
    }

    return (

        <div>
            {/* Displnetstat -ano | findstr :4000
netstat -ano | findstr :4000

netstat -ano | findstr :4000
netstat -ano | findstr :4000
taskkill /PID 2788 /F
y fetched suggestions */}
            {
                suggestions.map((elem, idx) => (
                    <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start text-black'>
                        <h2 className='bg-[#eeeeee] h-8 flex items-center justify-center w-12 rounded-full text-black'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                ))
            }
            
        </div>
    )
}

export default LocationSearchPanel