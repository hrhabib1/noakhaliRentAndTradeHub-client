import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const AdvertisingBooking = () => {    
            const services = useLoaderData();
            const {user} = useContext(AuthContext);
            const { title, image, location, price, _id, gender,email } = services;
            const handleBooking = event => {
                event.preventDefault();
                const form = event.target;
                const title = form.title.value;
                const customerName = form.name.value;
                const cutomerEmail = form.email.value;
                const phone = form.phone.value;
                const date = form.date.value;
                const quantity = form.quantity.value;
                const addBookingPost = {
                    title,
                    customerName,
                    cutomerEmail,
                    email,
                    date,
                    phone,
                    image,
                    service_id: _id,
                    price,
                    quantity
        
                }
                console.log(addBookingPost);
                fetch('http://localhost:5000/bookings', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(addBookingPost)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
        
                form.reset();
        
            }
            return (
                <div className="pt-28">
                    <h1 className=" text-3xl text-center font-extrabold text-warning py-5">Booking Service:</h1>
                    <div className="px-52">
                    <div className="hero  bg-base-200 mb-0">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-3xl font-bold">{title}</h1>
                                <p>Location: {location}</p>
                                <p>Price: {price}</p>
                                <p>Gender: {gender}</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleBooking} className="py-16 px-32 w-full bg-purple-200 text-black  mx-auto mb-10 rounded text-xl">
                        <h1 className="text-2xl pb-5 font-extrabold text-center">Booking Here</h1>
                        <div>
                            <p>Enter Your Name:</p>
                            <input className="bg-white text-black px-10 py-4 w-full" type="text" name="name" id=""  defaultValue={user?.displayName} required />
                        </div>
                        <div>
                            <p className="mt-5">Enter Your Phone Number:</p>
                            <input className="bg-white text-black px-10 py-4 w-full" type="text" name="phone" id="" placeholder="Phone Number" required />
                        </div>
                        <div>
                            <p className="mt-5">Enter Your Email Address:</p>
                            <input className="bg-white text-black px-10 py-4 w-full" type="email" name="email" id="" defaultValue={user?.email} required />
                        </div>
                        <div>
                            <p className="text-black mt-5">Booking Name:</p>
                            <input className="bg-white text-black px-10 py-4 w-full" type="text" name="title" value={title} id=""  required />
                        </div>
                        <div>
                            <p className="text-black mt-5">Enter the Seat number you want:</p>
                            <input className="bg-white text-black px-10 py-4 w-full" type="number" name="quantity" id="" placeholder="Write surely " required />
                        </div>
                        <div>
                            <p className="text-black mt-5">Enter your Booking date:</p>
                            <input type="date" name="date" placeholder='date' className='input input-ghost input-bBookinged text-white w-full' />
                        </div>
                        <button className="bg-blue-500 rounded py-5 px-10 my-5 btn-block" type="submit">Booking Confirm</button>
                    </form>
                    </div>
                </div>
            );
        };

export default AdvertisingBooking;