import '../../Style/Style.css';
import { useEffect, useState } from 'react';
import VehiclesCart from './VehiclesCart';
import AdvertisingBuySellCart from './AdvertisingBuySellCart';
const Vehicles = () => {
    const [products, setProducts] = useState([]);
    const [advertisingRentServices, setAdvertisingRentServices] = useState([]);
    useEffect(() => {
        fetch('https://noakhali-rent-and-trade-hub-server.vercel.app/buySell')
            .then(res => res.json())
            .then(data => {
                const buyProducts = data.filter(item => item.
                    category === 'vehicle' && item.status === 'confirmed');
                setProducts(buyProducts)
            })
    }, [])
    useEffect(() => {
        fetch('https://noakhali-rent-and-trade-hub-server.vercel.app/createAdvertisings')
            .then(res => res.json())
            .then(data =>{
                const buyProducts = data.filter(item => item.
                    category === 'vehicle' && item.status === 'confirmed');
                    setAdvertisingRentServices(buyProducts)
            })
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
                    advertisingRentServices.map(item => <AdvertisingBuySellCart
                        key={item._id}
                        item={item}
                    ></AdvertisingBuySellCart>)
                }
                 
             </div>
             <h1 className="text-black text-start my-5 font-extrabold">All Post:</h1>

            <div className="grid grid-cols-2 gap-10 mb-10 post text-black">
                {
                    products.map(item => <VehiclesCart
                        key={item._id}
                        item={item}
                    ></VehiclesCart>)
                }
            </div>
        </div>
    );
};

export default Vehicles;