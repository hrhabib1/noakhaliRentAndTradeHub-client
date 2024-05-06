import { useContext, useEffect, useState } from "react";
import MyOrderRow from "./MyOrderRow";
import { AuthContext } from "../../providers/AuthProviders";

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const url = `http://localhost:5000/orders?email=${user?.
    email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [url]);
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
                                <th>Name & Email</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <MyOrderRow
                                    key={order._id}
                                    order={order}
                                    handleDelete={handleDelete}
                                ></MyOrderRow>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;