import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyBookingRowReq from "./MyBookingRowReq";

const MyOrderRequest = () => {
   
            const { user } = useContext(AuthContext);
            const [orders, setOrders] = useState([]);
            const url = `http://localhost:5000/myOrders?email=${user?.
            email}`;
            useEffect(() => {
                fetch(url)
                    .then(res => res.json())
                    .then(data => setOrders(data))
            }, [url]);
            const handlePostConfirm = id =>{
                const proceed = confirm('Are you sure you want to confirm it?');
                if(proceed){
                  fetch(`http://localhost:5000/orders/${id}`, {
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
                          const remaining = orders.filter(order=> order._id !== id);
                          const update = orders.find(order=> order._id === id);
                          update.status = 'confirmed'
                          const newOrders = [update, ...remaining]
                          setOrders(newOrders);
                      }
                  })
                }
          }
            const handleDelete = id => {
                const proceed = confirm('Are you sure you want to delete it?');
                if (proceed) {
                    fetch(`http://localhost:5000/orders/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deleteCount > 0) {
                                const remaining = orders.filter(order => order._id !== id);
                                setOrders(remaining);
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
                                        <th>Customer Name & Email</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map(order => <MyBookingRowReq
                                            key={order._id}
                                            order={order}
                                            handleDelete={handleDelete}
                                            handlePostConfirm={handlePostConfirm}
                                        ></MyBookingRowReq>)
                                    }
        
                                </tbody>
        
                            </table>
                        </div>
                    </div>
                </div>
            );
        };

export default MyOrderRequest;