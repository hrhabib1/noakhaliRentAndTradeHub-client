import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
      logOut()
      .then(() => {console.log('Sign-out successful....')})
      .catch(e => console.error(e))
  }
    return (
        <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-opacity-30 bg-pink-400 p-5 rounded-xl text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl">
            <li><a href="/">Home</a></li>
            <li><a href="/rentHouse">Rent House</a></li>
            <li><a href="/buySell">Buy/Sell Exesories</a></li>
            <li>
              <details>
                <summary>Create Post</summary>
                <ul className="p-2 bg-white w-56">
                  <li><a>For Rent House</a></li>
                  <li><a>For Sell Exesories</a></li>
                </ul>
              </details>
            </li>
            </ul>
          </div>
          <a className="text-decoration-none text-2xl font-extrabold italic"> <span className="text-orange-500 ml-8">Noakhali</span> <br /><span className="text-orange-700">Rent & Trade Hub</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li><a href="/">Home</a></li>
            <li><a href="/rentHouse">Rent House</a></li>
            <li>
              <details>
                <summary>Buy/Sell Exesories</summary>
                <ul className="p-2 bg-white w-56">
                  <li><a href="/furnitures">Furnitures</a></li>
                  <li><a href="/electronicDevices">Electronic Devices</a></li>
                  <li><a href="/vehicles">Vehicles</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Create Post</summary>
                <ul className="p-2 bg-white w-56">
                  <li><a href="/AddRentHouse">For Rent House</a></li>
                  <li><a href="/AddBuySell">For Sell Exesories</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Create Advertising</summary>
                <ul className="p-2 bg-white w-96">
                  <li><a href="/AddvertisingRentHouse">Addvertising For Rent House</a></li>
                  <li><a href="/AddvertisingBuySell">Addvertising For Sell Exesories</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>All Post Request</summary>
                <ul className="p-2 bg-white w-96">
                  <li><a href="/rentHouseReq"> For Rent House</a></li>
                  <li><a href="/buySellReq"> For Buy Sell Exesories</a></li>
                  <li><a href="/advertisingReq"> For Advertising</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>My Post</summary>
                <ul className="p-2 bg-white w-96">
                  <li><a href="/myRentHouse"> My Rent House Post</a></li>
                  <li><a href="/myBuySell"> My Buy Sell Exesories Post</a></li>
                  <li><a href="/MyAdvertising"> My Advertising Post</a></li>
                </ul>
              </details>
            </li>

          </ul>
        </div>
        <div className="navbar-end">
       
              {  
              user?.email ?
               <button onClick={handleSignOut} className="btn btn-active btn-ghost">Sign out</button>
             :
               <a className="btn" href="/register">LogIn/Register</a>
                }
          
        </div>
      </div>
    );
};

export default Navbar;