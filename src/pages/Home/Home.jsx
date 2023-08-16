import axiosInstance from "../../axios";
import { useEffect, useState } from "react";
import './Home.css'
import Card from "../../components/Card/Card";

const Home = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const res = await axiosInstance().get('/products')
        console.log(res.data.products)
        setProducts(res.data.products)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <div className="home">
                <div className="home-banner">
                    <div className="banner-content">
                        <h2>fresh and <span>organic</span> products for your daily needs</h2>
                        <h3>healthy food healthy life</h3>
                        <button>Apply for free sample</button>
                    </div>
                </div>

                {/* <h2 className="product-heading">Products <span></span></h2> */}
                <div className="product-heading heading">
                    <span>Products</span>
                </div>
                <div className="home-products">
                    {
                        products.length > 0
                            ?
                            (
                                products.map((product, i) => {
                                    return (
                                        <div key={i}>
                                            <Card id={product._id} name={product.name} desc={product.description} price={product.price} imageUrl={product.imageUrl} quantity={product.quantity} unit={product.unit} category={product.category} />
                                        </div>
                                    )
                                })
                            )
                            : <p>No products found</p>
                    }
                </div>

                <div className="categories-heading  heading">
                    <span>Categories</span>
                </div>
                <div className="categories">
                    <div className="categories-list">
                        <div className="category">
                            <h3>Vegetables</h3>
                        </div>
                    </div>
                </div>

                {/* <h2>Why Grocsy?</h2> */}
                <div className="features-heading heading">
                    <span>features</span>
                </div>
                <div className="features">
                    <div className="features">
                        <div className="why-grocsy-item">
                            <h3>Quality</h3>
                            <p>Our products are of the best quality and are handpicked by our experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;