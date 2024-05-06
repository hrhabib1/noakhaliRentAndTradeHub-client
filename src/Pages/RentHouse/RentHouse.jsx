import '../../Style/Style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import RentHouseCart from './RentHouseCart';
import AdvertisingRentHouseCart from './AdvertisingRentHouseCart';
const RentHouse = () => {
    const [rentServices, setRentServices] = useState([]);
    const [advertisingRentServices, setAdvertisingRentServices] = useState([]);

    useEffect(() => {
        fetch('https://noakhali-rent-and-trade-hub-server.vercel.app/rentHouses')
            .then(res => res.json())
            .then(data => {
                const rent = data.filter(item => item.
                    status === 'confirmed');
                setRentServices(rent)
            })
    }, [])
    useEffect(() => {
        fetch('https://noakhali-rent-and-trade-hub-server.vercel.app/createAdvertisings')
            .then(res => res.json())
            .then(data => {
                const buyProducts = data.filter(item => item.
                    category === 'rentHouse' && item.
                    status === 'confirmed');
                setAdvertisingRentServices(buyProducts)
            })
    }, [])
    return (
        <div className="pt-48">
            <h2 className="text-black text-center my-5 font-extrabold">বাসা ভাড়া নিতে এবং দিতে পারেন খুব সহজেই। </h2>
            <h1 className="text-black text-start my-5 font-extrabold">Advertising Post:</h1>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black">

                {
                    advertisingRentServices.map(advertisingRentService => <AdvertisingRentHouseCart
                        key={advertisingRentService._id}
                        advertisingRentService={advertisingRentService}
                    ></AdvertisingRentHouseCart>)
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