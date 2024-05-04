import { Link } from "react-router-dom";
const AdvertisingRentHouseCart = ({advertisingRentService}) => {
        const { title, image, details, location, price, mobile, gender, date, _id } = advertisingRentService;
    
        return (
    
            <div className="card card-compact  bg-base-500 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="grid grid-cols-2 gap-10 ">
                        <h2 className="card-title">{title}</h2>
                        <p> <strong>Member Type:</strong> {gender}</p>
                    </div>
                    <p>{details}</p>
                    <p>লোকেশনঃ {location}</p>
                    <p>ভাড়াঃ {price} </p>
                    <p>যোগাযোগঃ {mobile} </p>
                    <div className="card-actions justify-end">
                        <p>Date: {date}</p>
                        <Link to={`/advertisingBooking/${_id}`}>
                            <button className="btn btn-primary">Booking Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

export default AdvertisingRentHouseCart;