import Carousal from "./Carousal";
import img1 from '../../../assets/home/house.jpg';
import img2 from '../../../assets/home/addvertising.jpeg';
import img3 from '../../../assets/home/table.jpg';
import '../../../Style/Style.css';
import { useEffect, useState } from "react";
import AdvertisingRentHouseCart from "../../RentHouse/AdvertisingRentHouseCart";
const Home = () => {
    const [advertisingRentServices, setAdvertisingRentServices] = useState([]);

    useEffect(() => {
        fetch('https://noakhali-rent-and-trade-hub-server.vercel.app/createAdvertisings')
            .then(res => res.json())
            .then(data => {
                const buyProducts = data.filter(item => item.
                    status === 'confirmed');
                setAdvertisingRentServices(buyProducts)
            })
    }, [])
    return (
        <div className="pt-32">
            <Carousal></Carousal>
            <h1 className="text-xl font-bold text-black my-5">Categorys:</h1>
            <div className="flex flex-row gap-8 mx-auto catagory">
                <div className="card w-96 bg-base-500 shadow-xl image-full">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <a href="/rentHouse" className="btn mt-10">Rent House</a>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                    <a href="/furnitures" className="btn -mt-3">Furnitures</a>
                    <a href="/electronicDevices" className="btn">Electronic Devices</a>
                    <a href="/vehicles" className="btn">Vehicles</a>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <a href="/Addvertising" className="btn mt-10">Advertising</a>
                    </div>
                </div>
                
            </div>
            <h1 className="text-xl font-bold text-black my-5">Advertising Post:</h1>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black">

                {
                    advertisingRentServices.map(advertisingRentService => <AdvertisingRentHouseCart
                        key={advertisingRentService._id}
                        advertisingRentService={advertisingRentService}
                    ></AdvertisingRentHouseCart>)
                }

            </div>

        </div>

    );
};

export default Home;