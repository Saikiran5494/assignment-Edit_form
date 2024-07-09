import { Component } from "react";
import {Route, Switch} from "react-router-dom"
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import ViewPost from './components/ViewPost';
import DetailsContext from "./context/DetailsContext";
import Update from "./components/Update";

class App extends Component{
  state={productsList: []}
  
  addProductItem = (product) => {
    this.setState(prevState => ({productsList: [...prevState.productsList,product]}))
  }

  deleteProductItem = (id) => {
    const {productsList} = this.state 
    const filteredList = productsList.filter(each => (each.id !== id)) 
    this.setState({productsList: filteredList})
  }
  render(){
    const {productsList} = this.state
    return(
    <DetailsContext.Provider value={{productsList,addProductItem:this.addProductItem,deleteProductItem:this.deleteProductItem}}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/create" component={CreatePost}/>
        <Route exact path="/view" component={ViewPost}/>
        <Route eact path="/update/:id" component={Update}/>
      </Switch>
      </DetailsContext.Provider>
      )
  }
}


export default App;
