import img4 from '../../assets/home/Room1.jpg';
import img5 from '../../assets/home/Room2.jpg';
import img6 from '../../assets/home/flat.jpg';
import '../../Style/Style.css';
const RentHouse = () => {
    return (
        <div className="pt-48">
          <h2 className="text-black text-center my-5 font-extrabold">বাসা ভাড়া নিতে এবং দিতে পারেন খুব সহজেই। </h2>  
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
                    <h2 className="card-title">মেস মেম্বার আবশ্যক</h2>
                        <p>আগামী এপ্রিল মাস থেকে দুই জনের রুমে একটি সীটের জন্য দুইজন মেসম্বার প্রয়োজন। পড়াশোনার মনোরম পরিবেশ। মেসটি সিসি ক্যামেরা দ্বারা পরিচালিত। বুয়া ও ফ্রিজের ব্যবস্থা আছে। সবসময় মিলের হয়।</p>
                        <p>লোকেশনঃ হাউজিং বালুর মাঠ থেকে পশ্চিমে, হাজেরা মঞ্জিলের তৃতীয় তালা।</p>
                        <p>ভাড়াঃ ১৭০০টাকা (বুয়াবিল, সিটভাড়া এবং অন্যান্য।) </p>
                        <p>যোগাযোগঃ ০১৫৮১১০৫২৭০।</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-500 shadow-xl">
                    <figure><img src={img6} alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">বাসা ভাড়া দেওয়া হবে</h2>
                        <p>আগামী এপ্রিল মাস থেকে তিনটই বেডরুম, ড্রয়িং, ডাইনিং, কিচেন এবং তিনটি ওয়াশরুম ওয়ালা একটি বাসা ভাড়া দেওয়া হবে। ২৪ ঘন্টা সিসি ক্যামারা দ্বারা নিয়ন্ত্রিত।</p>
                        <p>লোকেশনঃ হাউজিং বালুর মাঠ থেকে পশ্চিমে, হাজেরা মঞ্জিলের তৃতীয় তালা।</p>
                        <p>ভাড়াঃ জনপ্রতি ১৩০০০টাকা। </p>
                        <p>দ্রষ্টব্যঃ একমাসের ভাড়া এডভান্স দিতে হবে। </p>
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

export default RentHouse;