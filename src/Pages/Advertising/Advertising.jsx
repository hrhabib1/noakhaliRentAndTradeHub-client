import '../../Style/Style.css';
import { useEffect, useState } from 'react';
import AdvertisingCart from './AdvertisingCart';
const Advertising = () => {
    const [advertisingRentServices, setAdvertisingRentServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/createAdvertisings')
            .then(res => res.json())
            .then(data => setAdvertisingRentServices(data))
    }, [])
    return (
        <div className="pt-48">
            <div className='pb-5 text-center'>
                <input className='w-96 bg-blue-500 text-white border rounded py-5 px-16 text-xxl font-bolder' type="search" placeholder='Search Furniture' name="search" id="search" />
            </div>
            <h1 className='text-black text-center my-5 font-extrabold'>আপনি আপনার পুরাতন জিনিসপত্র খুব সহজেই এখানে বিক্রি করতে পারেন এবং আপনার প্রয়োজন মতো পুরাতন জিনিসপত্র কিনতে পারেন।</h1>
            <h1 className="text-black text-start my-5 font-extrabold">Advertising Post:</h1>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black">
                
            {
                    advertisingRentServices.map(item => <AdvertisingCart
                        key={item._id}
                        item={item}
                    ></AdvertisingCart>)
                }
                 
             </div>
        </div>
    );
};

export default Advertising;