import '../../Style/Style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import RentHouseCart from './RentHouseCart';
const RentHouse = () => {
    const [rentServices, setRentServices] = useState([]);
    const [advertisingRentServices, setAdvertisingRentServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/rentHouses')
            .then(res => res.json())
            .then(data => setRentServices(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/createAdvertisings')
            .then(res => res.json())
            .then(data =>{
                const buyProducts = data.filter(item => item.
                    category === 'rentHouse');
                    setAdvertisingRentServices(buyProducts)
            })
    }, [])
    return (
        <div className="pt-48">
            <h2 className="text-black text-center my-5 font-extrabold">বাসা ভাড়া নিতে এবং দিতে পারেন খুব সহজেই। </h2>
            <h1 className="text-black text-start my-5 font-extrabold">Advertising Post:</h1>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black">
                
                {
                 advertisingRentServices.map(rentService => <RentHouseCart
                 key={rentService._id}
                 rentService={rentService}
                 ></RentHouseCart>)
                } 
                 
             </div>
             <h1 className="text-black text-start my-5 font-extrabold">All Post</h1>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black">
                
               {
                rentServices.map(rentService => <RentHouseCart
                key={rentService._id}
                rentService={rentService}
                ></RentHouseCart>)
               } 
                
            </div>
        </div>
    );
};

export default RentHouse;