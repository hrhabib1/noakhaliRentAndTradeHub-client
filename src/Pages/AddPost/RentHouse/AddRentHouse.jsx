import { useContext } from 'react';
import img from '../../../assets/home/Room1.jpg';
import '../../../Style/Style.css';
import { AuthContext } from '../../../providers/AuthProviders';
const AddRentHouse = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const handleRentHouse = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = user?.email;
        const title = form.title.value;
        const image = form.imgURL.value;
        const price = form.price.value;
        const gender = form.gender.value;
        const details = form.details.value;
        const location = form.location.value;
        const mobile = form.mobile.value;
        const date = form.date.value;
        const category = form.category.value;
        const rentHouse = {
            userName: name,
            userPhoto: photoURL,
            email,
            title,
            image,
            price,
            gender,
            date,
            details,
            location,
            mobile,
            category,
        }
        console.log(rentHouse);
        fetch('http://localhost:5000/rentHouses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rentHouse)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

            form.reset();

    }
    return (
        <div className="pt-32">
            <h1 className="text-2xl mb-5 text-center   text-yellow-500 font-extrabold">A sample post. You can create your post follow its. </h1>
            <div className="card card-compact  bg-red-700 shadow-xl post1 text-2xl">

                <div className='grid grid-cols-2 pt-5 pr-40'>
                    <h1 className='text-end pt-32'>Service image:</h1>
                    <figure><img src={img} alt="Shoes" /></figure>

                </div>

                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">Service Title:মেস মেম্বার আবশ্যক</h2>
                    <p>Member Type: Male</p>
                    <p className='px-56 text-start'><strong>Details:</strong>  আগামী এপ্রিল মাস থেকে তিনজনের রুমে দুইটি সীটের জন্য দুইজন মেসম্বার প্রয়োজন। পড়াশোনার মনোরম পরিবেশ। মেসটি সিসি ক্যামেরা দ্বারা পরিচালিত। বুয়া ও ফ্রিজের ব্যবস্থা আছে। সবসময় মিলের হয়।</p>
                    <p>Location: হাউজিং বালুর মাঠ থেকে পশ্চিমে, হাজেরা মঞ্জিলের তৃতীয় তালা।</p>
                    <p>Rent Price: জনপ্রতি ১৮০০টাকা (বুয়াবিল, সিটভাড়া এবং অন্যান্য।) </p>
                    <p>Mobile: ০১৫৮১১০৫২৭০।</p>
                </div>
            </div>
            <h1 className="text-2xl text-center mt-5  text-yellow-500 font-bold underline">Please add your new service here: </h1>
            <form onSubmit={handleRentHouse} className=" p-10 my-10 bg-black mx-10 text-white">


                <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>

                    <input type="text" name="name" placeholder='Enter Your  name' className='input input-ghost input-bordered' required />

                    <input type="text" name="photoURL" placeholder='Enter Your photo URL link' className='input input-ghost input-bordered' />

                    <input type="text" name="email" defaultValue={user?.email} placeholder='Enter your email' className='input input-ghost input-bordered' />

                    <input type="text" name="title" placeholder='Enter Your Service name/Title' className='input input-ghost input-bordered ' required />

                    <input type="text" name="price" placeholder='Enter Your Rent price' className='input input-ghost input-bordered' required />

                    {/* <input type="text" name="gender" placeholder='Enter Your Member Type (Male/Female)' className='input input-ghost input-bordered' required /> */}
                    <div>
                        <label>Select gender:</label>
                        <select id="gender" name="gender" className='px-5 py-2 ml-3 border'>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>



                    <input type="text" name="imgURL" placeholder='Enter Your Service (House/Flat/Room) image URL link' className='input input-ghost input-bordered ' required />

                    <input type="text" name="location" placeholder='Enter Your Service (House/Flat/Room) location' className='input input-ghost input-bordered ' required />

                    <input type="text" name="mobile" placeholder='Enter Your mobile number' className='input input-ghost input-bordered ' required />

                    <input type="date" name="date" placeholder='date' className='input input-ghost input-bordered text-white' />

                    <input type="text" name="category" value='rentHouse' className='input input-ghost input-bordered text-white' />

                </div>
                <textarea name='details' className="textarea input input-ghost input-bordered w-full my-5 h-56" placeholder="Enter Your service details" required></textarea>



                <div className='text-center my-5'>
                    <button type="submit" className="btn btn-warning px-10">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default AddRentHouse;