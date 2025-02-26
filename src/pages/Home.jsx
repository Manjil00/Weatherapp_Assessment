import React, { useEffect, useState } from 'react';
//ICONS
import { FaSearch } from "react-icons/fa";

const API_KEY= import.meta.env.VITE_WEATHER_API_KEY;

const Home = () => {
    const fetchAPI = async()=>{
        try {
        const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`);
        const data = await res.json();
        console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
    fetchAPI();
    },[])

    const [location,setLocation]=useState(null);
    const [search,setSearch]=useState('Kathmandu');

    
return (
    <div className='main w-full h-[100vh] flex justify-center items-center'>
        <div className="wetherSection w-[90%] h-[80%] bg-slate-400 rounded-xl flex flex-col justify-evenly items-center gap-10">
            <div className="searchbar h-[60px] lg:h-[70px] w-[90%] lg:w-[600px] bg-white rounded-xl flex justify-center items-center">
                <input
                onChange={(e)=>setLocation(e.target.value)}
                value={search}
                className='p-4 text-base lg:text-xl w-full h-full' placeholder='Seach via Country'/>
                <button
                // onClick={}
                className='h-[50px] w-[50px] cursor-pointer'><FaSearch className='h-[50px] w-[50px]'/></button>
            </div>

            <div className="shgowcaseweather flex w-[90%] h-[500px]">
                <div className="wetherleft w-[50%] h-full bg-green-800 p-5 flex flex-col justify-center items-center gap-10">
                <h1 className='text-white text-3xl lg:text-6xl '>Nepal</h1>
                <h1 className='text-white text-3xl lg:text-6xl '>{location}</h1>
                <h1 className='text-white text-base lg:text-3xl '>The weather in Kathmandu is:</h1>
                <h1 className='text-white text-base lg:text-3xl '>30 deg C</h1>
                </div>

                <div className="weatherright  w-[50%] h-full bg-yellow-500">

                </div>
            </div>

        </div>
    </div>
)
}

export default Home;
