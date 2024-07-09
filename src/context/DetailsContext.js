import React from "react";

const DetailsContext = React.createContext({
    productsList : [],
    addProductItem : () => {},
    deleteProductItem : () => {}
})

export default DetailsContext