const MyAdvertisingPostRow = ({ post, handleDelete}) => {
    const { _id, name, title, details, email, price, date, image, refference, accountNumber, trxID } = post;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="mask mask-squircle w-32 h-32 mt-10 mr-2">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                    <div>
                        <div className="font-bold pt-5 ml-2">{title}</div>
                        <p className="w-56 h-56">{details}</p>
                    </div>
                </div>
            </td>
            <td>
                {name} <br />
                {email}

            </td>
            <td>{price}</td>
            <td>{date}</td>
            <td>
                {refference} <br />
                {accountNumber} <br />
                {trxID}
            </td>
            <th>
              Pending
            </th>
        </tr>
    );
};

export default MyAdvertisingPostRow;