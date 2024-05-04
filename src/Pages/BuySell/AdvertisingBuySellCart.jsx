import { Link } from "react-router-dom";

const AdvertisingBuySellCart = ({item}) => {
    const { title, image, details, location, price, mobile, date, _id } = item;

    return (

        <div className="card card-compact  bg-base-500 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <p>লোকেশনঃ {location}</p>
                <p>Price: {price} </p>
                <p>যোগাযোগঃ {mobile} </p>
                <div className="card-actions justify-end">
                    <p>Date: {date}</p>
                    <Link to={`/advertisingOrder/${_id}`}>
                        <button className="btn btn-primary">Order Now</button>
                    </Link>

                </div>
            </div>
        </div >
    );
};

export default AdvertisingBuySellCart;