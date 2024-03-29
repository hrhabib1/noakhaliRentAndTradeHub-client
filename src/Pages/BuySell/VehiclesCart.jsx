const VehiclesCart = ({ item }) => {
    const { title, image, details, location, price, mobile, date } = item;

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
                    <button className="btn btn-primary">See Details...</button>
                </div>
            </div>
        </div>
    );
};

export default VehiclesCart;
