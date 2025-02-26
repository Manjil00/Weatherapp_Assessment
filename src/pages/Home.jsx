import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const API_KEY= import.meta.env.VITE_WEATHER_API_KEY;

const Home = () => {

    const [location,setLocation]=useState(null);
    const [search,setSearch]=useState('Kathmandu');


    const fetchAPI = async()=>{
        try {
        const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`);
        const data = await res.json();
        setLocation(data.main);
        


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
    fetchAPI();
    },[search])

return (
    <div className='main w-full h-[100vh] flex justify-center items-center'>
        <div className="wetherSection w-[90%] lg:w-[50%] h-auto py-10 bg-gradient-to-r from-blue-300 to-blue-800 rounded-xl flex flex-col justify-evenly items-center gap-10">
            <div className="searchbar h-[60px] lg:h-[50px] w-[90%] lg:w-[600px] bg-white rounded-xl flex justify-center items-center">
                <input
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
                className='p-4 text-base lg:text-xl w-full h-full' placeholder='Seach via City Location'/>
            </div>
            {
                !location ?(
                <div className="skeleton">
                        <h1>No data</h1>
                </div>
                
                ):(
                    <div className="shgowcaseweather flex justify-center items-center w-[90%] h-auto rounded-xl">
                    <div className="wetherleft w-[90%] lg:w-[80%] h-auto bg-black p-8 rounded-xl flex flex-col justify-center items-center gap-10">
                    <h1 className='text-white text-3xl lg:text-6xl'>{search}</h1>
                    <p className='text-white text-base lg:text-3xl'>The weather in {search} is:</p>
                    <h1 className='text-white text-base lg:text-3xl'>{location.temp} Deg C</h1>
                    <h2 className='text-slate-500 text-base lg:text-xl'>Min temp: {location.temp_min}<br/>Max temp:{location.temp_max}</h2>
                    <h2 className='text-slate-500 text-base lg:text-xl'>Sea level: {location.sea_level}<br/>Humidity:{location.humidity}</h2>
                    </div>
    
                    
                </div>
                )
            }

        </div>
    </div>
)
}

export default Home;
