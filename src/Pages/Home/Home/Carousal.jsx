import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/home/oldGoods.jpeg';
import img2 from '../../../assets/home/flat.jpg';
import img3 from '../../../assets/home/house.jpg';
import '../../../Style/Style.css';
const Banner = () => {
    return (
        <div className='px-32 py-10 bg-purple-300'>
        <div className="carousel py-5 h-96 rounded-[35px]">
 <div id="slide1" className="carousel-item relative w-full">
   <img src={img1} alt='' className="w-full" />
   <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/3 text-center mx-auto pr-16">
     <h1 className='text-5xl text-black opacity-40 bg-slate-100'>আপনি আপনার প্রয়োজনীয় পুরাতন জিনিসপত্র ক্রয় করতে এবং কিনতে পারেন আমাদের ওয়েবসাইটের মাধ্যমে। </h1>
   </div>
   <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
     <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
     <a href="#slide2" className="btn btn-circle">❯</a>
   </div>
 </div> 
 <div id="slide2" className="carousel-item relative w-full">
   <img src={img2} alt='' className="w-full" />
   <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/3 text-center mx-auto pr-16">
   <h1 className='text-5xl text-black opacity-40 bg-slate-100'>বাসা বা মেস খুজতে অথবা বাসা বা মেস ভাড়া দিতে পারেন আমাদের ওয়েবসাইটের মাধ্যমে। </h1>
   </div>
   <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
     <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
     <a href="#slide3" className="btn btn-circle">❯</a>
   </div>
 </div> 
 <div id="slide3" className="carousel-item relative w-full">
   <img src={img3} alt='' className="w-full" />
   <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/3 text-center mx-auto pr-16">
   <h1 className='text-5xl text-black opacity-40 bg-slate-100'>বাড়ি ভাড়া দিতে অথবা খুজতে পারেন আমাদের ওয়েবসাইটের মাধ্যমে। </h1>
   </div>
   <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
     <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
     <a href="#slide1" className="btn btn-circle">❯</a>
   </div>
 </div> 
</div>
      </div>
    );
};

export default Banner;