import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyPostRow from "./MyPostRow";

const MyBuySellPost = () => {
    
            const { user } = useContext(AuthContext);
            const [posts, setPosts] = useState([]);
            const url = `https://noakhali-rent-and-trade-hub-server.vercel.app/buySell?email=${user?.email}`;
            useEffect(() => {
                fetch(url)
                    .then(res => res.json())
                    .then(data => setPosts(data))
            }, [url]);
            const handleDelete= id =>{
                const proceed = confirm('Are you sure you want to delete it?');
                if(proceed){
                  fetch(`https://noakhali-rent-and-trade-hub-server.vercel.app/rentHouses/${id}`, {
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
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                posts.map(post => <MyPostRow
                                  key={post._id}
                                  post={post}
                                  handleDelete={handleDelete}
                                ></MyPostRow>)
                              }
                               
                            </tbody>
    
                        </table>
                    </div>
                </div>
            </div>
            );
        };

export default MyBuySellPost;