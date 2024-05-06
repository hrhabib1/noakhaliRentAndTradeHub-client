import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyAdvertisingPostRow from "./MyAdvertisingPostRow";

const MyAdvertisingPost = () => {
       
                const { user } = useContext(AuthContext);
                const [posts, setPosts] = useState([]);
                const url = `https://noakhali-rent-and-trade-hub-server.vercel.app/createAdvertisings=${user?.email}`;
                useEffect(() => {
                    fetch(url)
                        .then(res => res.json())
                        .then(data => setPosts(data))
                }, [url]);
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
                                    posts.map(post => <MyAdvertisingPostRow
                                      key={post._id}
                                      post={post}
                                      handleDelete={handleDelete}
                                    ></MyAdvertisingPostRow>)
                                  }
                                   
                                </tbody>
        
                            </table>
                        </div>
                    </div>
                </div>
                );
            };

export default MyAdvertisingPost;