import { createContext, useState } from "react";

const ProductsContext = createContext()

function Provider({children}){
    const [results, setResults] = useState([])

    const fetchProducts = async() => {
        const response = await fetch("http://localhost:3001/categories")
        const data = await response.json()
        console.log(data);
        setResults(data)
    }

    const valueToShare = {
        fetchProducts,
        results
    }

    return <ProductsContext.Provider value={valueToShare}>
        {children}
    </ProductsContext.Provider>
}
export {Provider}
export default ProductsContext;