import { useCart } from "react-use-cart";
import {Link} from 'react-router-dom';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Cart = () => {
    const { isEmpty, totalUniqueItems, items, totalItems, updateItemQuantity, removeItem, emptyCart } = useCart();
    if (isEmpty) return <h5>You haven't save any color yet!</h5>


    return (
        <>
    {/* <div class="col-lg-4 order-2 order-lg-2 text-center text-lg-start" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", marginBottom: '-20vh' }}> */}
            {/* <h1 data-aos="fade-up" style={{ paddingTop: '2vh', fontFamily: 'emoji', paddingBottom: '2vh' }}><ColorLensIcon />Saved Colors</h1> */}
            <div class="d-flex">
                <Link to="/visualize" class="btn-book-a-table" style={{padding: '8px 18px', borderRadius: '20px', marginBottom: '2vh'}} >Paint your room</Link>
              </div>
            <h5>Cart ({totalUniqueItems})</h5>

            <table className="table table-light table-hover m-0">
                <tbody>
                    {items.map((item, index) => {
                        return (
                            <tr key={index} data-aos="fade-up">
                                <td style={{ width: '30%' }}> <img src={item.img} style={{ width: '16vh', height: '6vh' }} /> </td>
                                <td> <h5>{item.title}</h5> <br /> {item.desc} </td>
                                {/* <td>Quantity ({item.quantity})</td> */}
                                <td style={{ textAlign: 'center', width: '30%' }}> <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)} style={{ borderRadius: '50%', height: '5vh', width: '40px' }} ><DeleteOutlineIcon style={{ fontSize: '20px' }} /></button></td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        {/* </div> */}
        </>
    );
}

export default Cart;