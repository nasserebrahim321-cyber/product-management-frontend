import { useState, useEffect } from "react"
import { Link } from "react-router"
import axios from 'axios'
import { getAllProducts, deleteProduct } from '../services/productService'

const AllProductPage = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    const loadAllProducts = async () => {
        try {

            const response = await getAllProducts();
            setProducts(response)
        } catch (err) {
            setError(err.response.data.message)
        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id)
            loadAllProducts()
        } catch (err) {
            setError(err.response?.data?.message || "Failed to delete product")
        }
    }

    useEffect(() => { loadAllProducts() }, [])

    return (
        <>
            <h1>All Pets</h1>

            {products.map((p) =>
                <>
                    <div key={`${p._id}`}>
                        <p> product Name : {p.title},
                            description : {p.description},
                            category : {p.category},
                            price : {p.price},
                            quantity : {p.quantity}
                            <br />
                            <button onClick={() => { handleDelete(p._id) }} >Delete</button>
                            <Link to={`/products/${p._id}/edit`}>Edit</Link>
                            <Link to={`/products/${p._id}/details`} >Details</Link>
                        </p>
                    </div>
                </>
            )}
        </>
    )
}

export default AllProductPage
