import { useState } from "react"
import { useNavigate } from "react-router"
import { createNewProduct } from "../services/productService"

function CreateProductPage() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        price: 0,
        quantity: 0
    })

    const navi = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await createNewProduct(formData);
        navi('/products');
    }

    return (
        <div>
            <h1>Create Product</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Product Title" value={formData.title} onChange={handleChange} required />

                <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />

                <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />

                <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />

                <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />

                <button type="submit">Create Product</button>
            </form>
        </div>
    )
}

export default CreateProductPage