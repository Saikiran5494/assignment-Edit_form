import { Component } from "react";
import { Link } from "react-router-dom";
import {v4 as uuidv4} from "uuid"
import DetailsContext from "../../context/DetailsContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import "./index.css";

class CreatePost extends Component{
    state = {
        name: "",
        brand: "",
        price: "",
        location: "",
        quantity: 1,
        showProductNameError: false,
        showBrandNameError: false,
        showPriceNameError: false,
        showLocationError: false,
        showErrorFileds: false,
        productsList: []
    }

    productClicked = (event) => {
        this.setState({name:event.target.value})
    }

    brandClicked = (event) => {
        this.setState({brand: event.target.value})
    }

    priceClicked = (event) => {
        this.setState({price: event.target.value})
    }

    locationClicked = (event) => {
        this.setState({location: event.target.value})
    }

    quantityClicked = (event) => {
        this.setState({quantity: event.target.value})
    }

    focusName = () => {
        const isValidProductName = this.validateProductName();
        this.setState({showProductNameError: !isValidProductName});
    }

    validateProductName = () => {
        const {name} = this.state 
        
        return name !== ""
    }

    focusBrand = () => {
        const isValidBrandName = this.validateBrandName()
        this.setState({showBrandNameError: !isValidBrandName})
    }

    validateBrandName = () => {
        const {brand} = this.state

        return brand !== ""
    }

    focusPrice = () => {
        const isValidPriceName = this.validatePriceName()
        this.setState({showPriceNameError: !isValidPriceName})
    }

    validatePriceName = () => {
        const {price} = this.state 

        return price !== ""
    }

    focusLocation = () => {
        const isValidLocationName = this.validateLoction()
        this.setState({showLocationError: !isValidLocationName})
    }

    validateLoction = () => {
        const {location} = this.state 

        return location !== ""
    }    

    
    renderCreatePostView = () => (
        <DetailsContext.Consumer>
            {value => {
                const {addProductItem} = value
                const {name,brand,price,quantity,location,showPriceNameError,showBrandNameError,showLocationError,showProductNameError,showErrorFileds} = this.state
            
                const formClicked = (event) => {
                    event.preventDefault()
                    const {name,brand,price,location,quantity} = this.state
                    const isValidName = this.validateProductName()
                    const isValidBrand = this.validateBrandName()
                    const isValidPrice = this.validatePriceName()
                    const isValidLocation = this.validateLoction()
                    
                    if(isValidName && isValidBrand && isValidPrice && isValidLocation){
                        this.setState({showErrorFileds: false})
                        const product = {
                            'id': uuidv4(),
                            name,
                            brand,
                            price,
                            location,
                            quantity}
                        this.setState({name:"",brand:"",price:"",location:'',showViewCard: true})
                        addProductItem({...product})
                    }else{
                        this.setState({showErrorFileds: true})
                    }
                }
            
            
                return(
            <div className="create-post-container">
                <h1>Welocme User Create Your Post</h1>
                <form className="form-container" onSubmit={formClicked}>
                    <label htmlFor="name">Name<span>*</span></label>
                    <input id="name" placeholder="Enter Productname" value={name} type="text" onChange={this.productClicked} onBlur={this.focusName}/>
                    {showProductNameError?(<p className="required">* fields are required</p>):""}
                    <label htmlFor="brand">Brand<span>*</span></label>
                    <input placeholder="Enter Brandname" id="brand" value={brand} type="text" onChange={this.brandClicked} onBlur={this.focusBrand}/>
                    {showBrandNameError? (<p className="required">* fields are required</p>) : ""}
                    <label htmlFor="price">Price<span>*</span></label>
                    <input id="price" placeholder="Enter Price" value={price} type="text" onChange={this.priceClicked} onBlur={this.focusPrice}/>
                    {showPriceNameError?(<p className="required">* fields are required</p>) : ""}
                    <label htmlFor="location">Location<span>*</span></label>
                    <input placeholder="Enter Location" id="location" value={location} type="text" onChange={this.locationClicked} onBlur={this.focusLocation}/>
                    {showLocationError? (<p className="required">* fields are required</p>) : ""}
                    <label htmlFor="quantity">Quantity<span>*</span></label>
                    <select value={quantity} onChange={this.quantityClicked}>
                        <option defaultChecked>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    {showErrorFileds?(<p className="required">* fields are mandatory</p>):""}
                    <button type="submit" className="button-create">Create Post</button>
                    <div>
                    <Link to="/">
                    <button typeof="button" className="back-button"><IoMdArrowRoundBack className="back-icon"/>Back</button>
                    </Link>
                    <Link to="/view">
                    <button type="button" className="button2">ViewPosts<IoMdArrowForward className="back-icon"/></button>
                    </Link>
                    </div>
                </form>
                
            </div>
        )
            }}
        
        </DetailsContext.Consumer>
        
    )

    isDeleteClicked = (id) => {
        console.log(id)
        const {productsList} = this.state 
        const filteredList = productsList.find(each => each.id !== id)
        console.log(filteredList)
    }

    

    render(){
        return(
           this.renderCreatePostView()
        )
    }
}

export default CreatePost