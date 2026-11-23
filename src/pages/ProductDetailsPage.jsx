import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getProductById } from "../services/productService"

function ProductDetailsPage() {
    const [product, setProduct] = useState(null)

    const { productID } = useParams()

    const getProduct = async () => {
        try {
            const response = await getProductById(productID)
            setProduct(response)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    if (!product) return <p>Loading...</p>

    return (
        <div>
            <h1>Product Details</h1>
            <p>Product Name: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    )
}

export default ProductDetailsPage