import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductListing.module.scss"; // Import the SCSS module

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching plant data
    const fetchProducts = async () => {
      const plantData = [
        {
          id: 1,
          title: "Aloe Vera",
          description: "Aloe Vera is a succulent plant species known for its medicinal properties.",
          price: 12.99,
          image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/aloe-vera-1869483_1280.jpg",
        },
        {
          id: 2,
          title: "Snake Plant",
          description: "Snake Plant is a hardy indoor plant that purifies the air.",
          price: 15.99,
          image: "https://cdn.pixabay.com/photo/2020/06/17/20/43/snake-plant-5310910_1280.jpg",
        },
        {
          id: 3,
          title: "Peace Lily",
          description: "Peace Lily is a beautiful flowering plant that thrives indoors.",
          price: 18.99,
          image: "https://cdn.pixabay.com/photo/2017/08/06/22/01/peace-lily-2595242_1280.jpg",
        },
        {
          id: 4,
          title: "Fiddle Leaf Fig",
          description: "Fiddle Leaf Fig is a popular indoor plant with large, glossy leaves.",
          price: 25.99,
          image: "https://cdn.pixabay.com/photo/2020/05/11/14/57/fiddle-leaf-fig-5159827_1280.jpg",
        },
      ];
      setProducts(plantData);
    };

    fetchProducts();
  }, []);

  return (
    <main className={styles["product-listing"]}>
      <h1>Our Plants</h1>
      <div className={styles["product-grid"]}>
        {products.map((product) => (
          <div className={styles["product-card"]} key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className={styles["product-image"]}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Link to={`/products/${product.id}`} className={styles["view-details"]}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductListing;