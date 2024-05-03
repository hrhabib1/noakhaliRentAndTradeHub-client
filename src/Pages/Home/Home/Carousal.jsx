import { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/oldGoods.jpeg';
import img2 from '../../../assets/home/flat.jpg';
import img3 from '../../../assets/home/house.jpg';
import '../../../Style/Style.css';

const Banner = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='px-32 py-10 bg-purple-300'>
            <Carousel
                showArrows={false}
                selectedItem={slideIndex}
                autoPlay={false}
                interval={3000} // This value is ignored when autoPlay is set to true
                infiniteLoop
            >
                <div>
                    <img src={img1} alt='' className="w-full" />
                    <div className="legend">
                        <h1 className='text-5xl text-black opacity-40 bg-slate-100'>আপনি আপনার প্রয়োজনীয় পুরাতন জিনিসপত্র ক্রয় করতে এবং কিনতে পারেন আমাদের ওয়েবসাইটের মাধ্যমে। </h1>
                    </div>
                </div>
                <div>
                    <img src={img2} alt='' className="w-full" />
                    <div className="legend">
                        <h1 className='text-5xl text-black opacity-40 bg-slate-100'>বাসা বা মেস খুজতে অথবা বাসা বা মেস ভাড়া দিতে পারেন আমাদের ওয়েবসাইটের মাধ্যমে। </h1>
                    </div>
                </div>
                <div>
                    <img src={img3} alt='' className="w-full" />
                    <div className="legend">
                        <h1 className='text-5xl text-black opacity-40 bg-slate-100'>বাড়ি ভাড়া দিতে অথবা খুজতে পারেন আমাদের ওয়েবসাইটের মাধ্যমে। </h1>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
