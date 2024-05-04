import '../../Style/Style.css';
import { useEffect, useState } from 'react';
import ElectronicDeviceCart from './ElectronicDeviceCart';
import AdvertisingBuySellCart from './AdvertisingBuySellCart';
const ElectronicDevice = () => {
    const [products, setProducts] = useState([]);
    const [advertisingRentServices, setAdvertisingRentServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/buySell')
            .then(res => res.json())
            .then(data => {
                const buyProducts = data.filter(item => item.
                    category === 'electronicDevice');
                setProducts(buyProducts)
            })
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/createAdvertisings')
            .then(res => res.json())
            .then(data =>{
                const buyProducts = data.filter(item => item.
                    category === 'electronicDevice');
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
                    products.map(item => <ElectronicDeviceCart
                        key={item._id}
                        item={item}
                    ></ElectronicDeviceCart>)
                }
            </div>
        </div>
    );
};

export default ElectronicDevice;