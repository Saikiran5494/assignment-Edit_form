import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import DetailsContext from "../../context/DetailsContext"
import ProductItem from "../ProductItem"
import "./index.css"

const ViewPost =  () => (

    <DetailsContext.Consumer>
        {value => {
            const {productsList,deleteProductItem} = value

           const renderNoTasksView = () => {
                
                    return (<div className="no-items-container">
                            <img src="https://img.freepik.com/premium-vector/hand-drawn-no-data-illustration_23-2150696443.jpg" 
                            alt="No-data"
                            className="no-data-image"/>
                            <h1>No Data Found!!</h1>
                            <Link to="/create">
                            <button type="button" className="button-create">Create Post</button>
                            </Link>
                    </div>)
                
            }

            const renderProductsView = () => {
                return(
                <div className="bg-container">
                    <table>
                    <thead className="table-head">
                        <tr>
                            <th>Product Name</th>
                            <th>Brand Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {productsList.map(each => (<ProductItem key={each.id} productItem={each} deleteProductItem={deleteProductItem}/>))}            
                </table>
                <Link to="/create">
                <button type="button" className="back-button"><IoMdArrowRoundBack className="back-icon"/>Back</button>
                </Link>
                </div> )
            }
        
        return(
           productsList.length > 0 ?  renderProductsView() : renderNoTasksView()
)
    }}
                    
    </DetailsContext.Consumer>
)

export default ViewPost