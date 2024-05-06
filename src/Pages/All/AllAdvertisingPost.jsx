import { useEffect, useState } from "react";
import AllAdvertisingPostRow from "./AllAdvertisingPostRow";

const AllAdvertisingPost = () => {
        const [posts, setPosts] = useState([]);
        useEffect(() => {
            fetch('https://noakhali-rent-and-trade-hub-server.vercel.app/createAdvertisings')
                .then(res => res.json())
                .then(data => setPosts(data))
        }, []);
        const handlePostConfirm = id =>{
            const proceed = confirm('Are you sure you want to confirm it?');
            if(proceed){
              fetch(`https://noakhali-rent-and-trade-hub-server.vercel.app/createAdvertisings/${id}`, {
                  method: 'PATCH',
                  headers:{
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify({status: 'confirmed'})
              })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if(data.modifiedCount > 0){
                      const remaining = posts.filter(post=> post._id !== id);
                      const update = posts.find(post=> post._id === id);
                      update.status = 'confirmed'
                      const newPosts = [update, ...remaining]
                      setPosts(newPosts);
                  }
              })
            }
      }
      const handleDelete= id =>{
        const proceed = confirm('Are you sure you want to delete it?');
        if(proceed){
          fetch(`https://noakhali-rent-and-trade-hub-server.vercel.app/createAdvertisings/${id}`, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.deleteCount > 0){
                  const remaining = posts.filter(post=> post._id !== id);
                  setPosts(remaining);
                  alert('deleted successful');
              }
          })
        }
    }
        return (
            <div>
                <div className="pt-28">
                    <div className="overflow-x-auto border-red-400 bg-white text-black text-xl">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Service Name</th>
                                    <th>Buyer Name & Email</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Payment Details</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                posts.map(post => <AllAdvertisingPostRow
                                  key={post._id}
                                  post={post}
                                  handlePostConfirm={handlePostConfirm}
                                  handleDelete={handleDelete}
                                ></AllAdvertisingPostRow>)
                              }
                               
                            </tbody>
    
                        </table>
                    </div>
                </div>
            </div>
        );
    };

export default AllAdvertisingPost;