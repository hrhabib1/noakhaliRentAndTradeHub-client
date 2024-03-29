import { useContext } from 'react';
import img from '../../assets/home/rack1.jpg';
import img1 from '../../assets/home/bkash.png';
import img2 from '../../assets/home/nagad.jpg';
import '../../Style/Style.css';
import { AuthContext } from '../../providers/AuthProviders';
const AdvertisingBuySell = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const handleBuySell = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = user?.email;
        const title = form.title.value;
        const image = form.imgURL.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        const location = form.location.value;
        const mobile = form.mobile.value;
        const date = form.date.value;
        const accountNumber = form.accountNumber.value;
        const refference = form.refference.value;
        const trxID = form.trxID.value;
        const advertisingBuySell = {
            userName: name,
            userPhoto: photoURL,
            email,
            title,
            image,
            price,
            date,
            details,
            location,
            mobile,
            category,
            refference,
            accountNumber,
            trxID

        }
        console.log(advertisingBuySell);
        fetch('http://localhost:5000/createAdvertisings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertisingBuySell)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        form.reset();

    }
    return (
        <div className="pt-32">
            <h1 className=' font-extrabold text-black text-center'>Create Advertising For BuySell Post</h1>
            <div className='border p-5 rounded mx-10 bg-blue-300'>
                <div className='px-10 add flex flex-row gap-10 align-middle justify-center text-center '>
                    <div>
                        <img src={img1} alt="bkash" />
                    </div>
                    <div>
                        <p className=' font-extrabold text-black'>Or,</p>
                    </div>
                    <div>
                        <img src={img2} alt="nagad" />
                    </div>
                </div>
                <h1 className='text-center font-extrabold text-xxl'><span className='text-black'>Send Money:(Bkash/Nagad)</span>  <strong className='text-red-600 text-2xl'>01581105270</strong></h1>
                <p className='text-xxl text-black px-16 py-5'>আপনি আপনার পুরাতন পণ্য বিক্রির পোস্টটি বিজ্ঞাপন দিতে চাইলে আপনাকে প্রথমে বিকাশ অথবা নগদে ২৫টাকা পেমেন্ট করতে হবে। পেমেন্ট করার পর আপনি আপনার বিকাশ অথবা নগদ একাউন্ট নাম্বার, রেফারেন্স নাম্বার এবং ট্রান্সজেকশন নাম্বারটি ফরমের সাথে জমা দিবেন। আপনার তথ্য সঠিক হলে আপনার পোস্টটি এপ্রুপ করা হবে।  </p>
            </div>
            <h1 className="text-2xl mb-5 text-center   text-yellow-500 font-extrabold">A sample post. You can create your post follow its. </h1>
            <div className="card card-compact  bg-yellow-700 shadow-xl post1 text-2xl">

                <div className='grid grid-cols-2 pt-5 pr-40'>
                    <h1 className='text-end pt-32'>Service image:</h1>
                    <figure><img src={img} alt="Shoes" /></figure>

                </div>

                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">Service Title: একটি পুরাতন ওয়ার্ড ড্রপ বিক্রি করা হবে</h2>
                    <p className='px-56 text-start'><strong>Details:</strong>  মাত্র একবছর ব্যবহার করা একটি পুরাতন ওয়ার্ড ড্রপ বিক্রি করা হবে।</p>
                    <p>Location: হাউজিং বালুর মাঠ থেকে পশ্চিমে, হাজেরা মঞ্জিলের তৃতীয় তালা।</p>
                    <p> Price: ১2০০ টাকা </p>
                    <p>Mobile: ০১৫৮১১০৫২৭০।</p>
                </div>
            </div>
            <h1 className="text-2xl text-center mt-5  text-yellow-500 font-bold underline">Please add your new service here: </h1>
            <form onSubmit={handleBuySell} className=" p-10 my-10 bg-blue-800 mx-10 text-white">


                <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>

                    <input type="text" name="name" placeholder='Enter Your  name' className='input input-ghost input-bordered' required />

                    <input type="text" name="photoURL" placeholder='Enter Your photo URL link' className='input input-ghost input-bordered' />

                    <input type="text" name="email" defaultValue={user?.email} placeholder='Enter your email' className='input input-ghost input-bordered' />

                    <input type="text" name="accountNumber" placeholder='Enter Your  Bkash or Nagad Number' className='input input-ghost input-bordered' required />

                    <input type="text" name="refference" placeholder='Enter Your refference name' className='input input-ghost input-bordered' required />

                    <input type="text" name="trxID" placeholder='Enter Your  trxID' className='input input-ghost input-bordered' required />

                    <input type="text" name="title" placeholder='Enter Your Service/Product name/Title' className='input input-ghost input-bordered ' required />

                    <input type="text" name="price" placeholder='Enter Your Product price' className='input input-ghost input-bordered' required />

                    <div>
                        <label>Select Category:</label>
                        <select id="category" name="category" className='px-5 py-2 ml-3 border'>
                            <option value="furniture">furniture</option>
                            <option value="electronicDevice">electronicDevice</option>
                            <option value="vehicle">vehicle</option>
                        </select>
                    </div>



                    <input type="text" name="imgURL" placeholder='Enter Your product image URL link' className='input input-ghost input-bordered ' required />

                    <input type="text" name="location" placeholder='Enter Your product location' className='input input-ghost input-bordered ' required />

                    <input type="text" name="mobile" placeholder='Enter Your mobile number' className='input input-ghost input-bordered ' required />

                    <input type="date" name="date" placeholder='date' className='input input-ghost input-bordered text-white' />

                </div>
                <textarea name='details' className="textarea input input-ghost input-bordered w-full my-5 h-56" placeholder="Enter Your service details" required></textarea>
                <div className='text-center my-5'>
                    <button type="submit" className="btn btn-warning px-10">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default AdvertisingBuySell;