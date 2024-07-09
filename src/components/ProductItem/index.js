import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./index.css"

const ProductItem = (props) => {
    const {productItem,deleteProductItem} = props 
    const {id,name,price,location,quantity,brand} = productItem 
    
    const deleteIconClicked = () => {
        deleteProductItem(id)
    }

    return(
        <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{brand}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td>{location}</td>
                    <td>
                    <Link to={`/update/${id}`}>
                        <button type="button" className="icon"><HiOutlinePencilAlt/></button>
                        </Link>
                        <button type="button" className="icon" onClick={deleteIconClicked}><AiTwotoneDelete/></button>
                    </td>
                </tr>
            </tbody>
    )
}

export default ProductItem