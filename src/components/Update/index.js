import { Component } from "react"
import {Link} from "react-router-dom"
import DetailsContext from "../../context/DetailsContext"
import { IoMdArrowRoundBack } from "react-icons/io";
import "./index.css"

class Update extends Component{
    state = {product: ""}

    componentDidMount(){
        this.getEditProduct()
    }

    getEditProduct = () => (
        <DetailsContext.Consumer>
            {value => {                                                     
                const {productsList} = value
                const {match} = this.props
                const {params} = match
                const {id} = params
                const editProduct = productsList.filter(each => (each.id === id))
                //const {name,brand,price,location,quantity} = editProduct[0]
                console.log(editProduct)
                console.log(id)
            }}    
    </DetailsContext.Consumer>
    )

    

formClicked = () => {
    console.log("yes")
}

productClicked = (event) => {
    console.log(event.targret.value)
}

brandClicked = (event) => {
    console.log(event.targret.value)
}

priceClicked = (event) => {
    console.log(event.targret.value)
}

locationClicked = (event) => {
    console.log(event.targret.value)
}

quantityClicked = (event) => {
    console.log(event.targret.value)
}



    
    
    renderEditView = () => {
        const {name,brand,price,location,quantity} = this.state
                
                return(
                <div className="edit-post-container">
                <h1 className="edit">Edit Your Post</h1>
                <form className="edit-form-container" onSubmit={this.formClicked}>
                    <label className="label" htmlFor="name">Name<span>*</span></label>
                    <input id="name" placeholder="Enter Productname" value={name}  type="text" onChange={this.productClicked}/>
                    <label className="label" htmlFor="brand">Brand<span>*</span></label>
                    <input placeholder="Enter Brandname" id="brand" type="text" value={brand} onChange={this.brandClicked}/>
                    <label className="label" htmlFor="price">Price<span>*</span></label>
                    <input id="price" placeholder="Enter Price"  type="text" value={price} onChange={this.priceClicked}/>
                    <label className="label" htmlFor="location">Location<span>*</span></label>
                    <input placeholder="Enter Location" id="location"  type="text" value={location} onChange={this.locationClicked}/>
                    <label className="label" htmlFor="quantity">Quantity<span>*</span></label>
                    <select onChange={this.quantityClicked} value={quantity}>
                        <option defaultChecked>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <button type="submit" className="button-create">Update</button>
                    <Link to="/view">
                    <button typeof="button" className="back-button"><IoMdArrowRoundBack className="back-icon"/>Back</button>
                    </Link>
                </form>
                
            </div>
            )
        }

    render(){
        return(
            this.renderEditView()
        )
    }
}

export default Update