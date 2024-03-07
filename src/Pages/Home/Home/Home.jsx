import Carousal from "./Carousal";
import img1 from '../../../assets/home/house.jpg';
import img2 from '../../../assets/home/flat.jpg';
import img3 from '../../../assets/home/table.jpg';
import img4 from '../../../assets/home/Room1.jpg';
import img5 from '../../../assets/home/Table 2.jpg';
import img6 from '../../../assets/home/Chair.jpg';
import img7 from '../../../assets/home/TableChair.jpg';
import img8 from '../../../assets/home/rack1.jpg';
import img9 from '../../../assets/home/reck2.jpg';
import '../../../Style/Style.css';
const Home = () => {
    return (
        <div className="pt-32">
            <Carousal></Carousal>
            <h1 className="text-xl font-bold text-black my-5">Categorys:</h1>
            <div className="flex flex-row gap-8 mx-auto catagory">
                <div className="card w-96 bg-base-500 shadow-xl image-full">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold mt-16 mx-auto text-white">Rent House</h2>
                        <button>See more</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold mt-16 mx-auto text-white">Rent Flat or Room</h2>
                        <button>See more</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold mt-16 mx-auto text-white">Buy or Sell old Exesories</h2>
                        <button>See more</button>
                    </div>
                </div>
            </div>
            <h1 className="text-xl font-bold text-black my-5">Recent Post:</h1>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black">
                <div className="card card-compact  bg-base-500 shadow-xl">
                    <figure><img src={img4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">মেস মেম্বার আবশ্যক</h2>
                        <p>আগামী এপ্রিল মাস থেকে তিনজনের রুমে দুইটি সীটের জন্য দুইজন মেসম্বার প্রয়োজন। পড়াশোনার মনোরম পরিবেশ। মেসটি সিসি ক্যামেরা দ্বারা পরিচালিত। বুয়া ও ফ্রিজের ব্যবস্থা আছে। সবসময় মিলের হয়।</p>
                        <p>লোকেশনঃ হাউজিং বালুর মাঠ থেকে পশ্চিমে, হাজেরা মঞ্জিলের তৃতীয় তালা।</p>
                        <p>ভাড়াঃ জনপ্রতি ১৮০০টাকা (বুয়াবিল, সিটভাড়া এবং অন্যান্য।) </p>
                        <p>যোগাযোগঃ ০১৫৮১১০৫২৭০।</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-500 shadow-xl">
                    <figure><img src={img5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">একটি পুরাতন টেবিল বিক্রি করা হবে</h2>
                        <p>মাত্র তিনমাস ব্যবহার করা একটি পুরাতন টেবিল বিক্রি করা হবে। টেবিলটি সম্পুর্ন ভালো।</p>
                        <p>লোকেশনঃ হাউজিং বালুর মাঠ থেকে পশ্চিমে, হাজেরা মঞ্জিলের তৃতীয় তালা।</p>
                        <p>মূল্যঃ ৮০০টাকা  </p>
                        <p>যোগাযোগঃ ০১৫৮১১০৫২৭০।</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-500 shadow-xl">
                    <figure><img src={img6} alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">একটি পুরাতন চেয়ার বিক্রি করা হবে</h2>
                        <p>মাত্র তিনমাস ব্যবহার করা একটি পুরাতন চেয়ার বিক্রি করা হবে। </p>
                        <p>লোকেশনঃ হাউজিং বালুর মাঠ থেকে পশ্চিমে, হাজেরা মঞ্জিলের তৃতীয় তালা।</p>
                        <p>মূল্যঃ ৪০০টাকা  </p>
                        <p>যোগাযোগঃ ০১৫৮১১০৫২৭০।</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-500 shadow-xl">
                    <figure><img src={img7} alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">একটি পুরাতন টেবিল ও চেয়ার বিক্রি করা হবে</h2>
                        <p>মাত্র ছয় মাস ব্যবহার করা একটি পুরাতন টেবিল ও চেয়ার বিক্রি করা হবে। </p>
                        <p>লোকেশনঃ হাউজিং বালুর মাঠ থেকে পশ্চিমে, হাজেরা মঞ্জিলের তৃতীয় তালা।</p>
                        <p>মূল্যঃ ১৪০০টাকা  </p>
                        <p>যোগাযোগঃ ০১৫৮১১০৫২৭০।</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-500 shadow-xl">
                    <figure><img src={img8} alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">একটি পুরাতন ওয়ার্ড ড্রপ বিক্রি করা হবে</h2>
                        <p>মাত্র একবছর ব্যবহার করা একটি পুরাতন ওয়ার্ড ড্রপ বিক্রি করা হবে।</p>
                        <p>লোকেশনঃ হাউজিং বালুর মাঠ থেকে পশ্চিমে, হাজেরা মঞ্জিলের তৃতীয় তালা।</p>
                        <p>মূল্যঃ ১৮০০টাকা  </p>
                        <p>যোগাযোগঃ ০১৫৮১১০৫২৭০।</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-500 shadow-xl">
                    <figure><img src={img9} alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">একটি পুরাতন তাক বিক্রি করা হবে</h2>
                        <p>মাত্র তিনমাস ব্যবহার করা একটি পুরাতন তাক বিক্রি করা হবে।</p>
                        <p>লোকেশনঃ হাউজিং বালুর মাঠ থেকে পশ্চিমে, হাজেরা মঞ্জিলের তৃতীয় তালা।</p>
                        <p>মূল্যঃ ৫০০টাকা  </p>
                        <p>যোগাযোগঃ ০১৫৮১১০৫২৭০।</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Home;