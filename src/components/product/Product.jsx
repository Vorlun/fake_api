import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonbek.uz/api/products")
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="product">
      <h2 className="title">Products</h2>
      <div className="container wrapper">
        {data.map((i) => (
          <div className="product-card" key={i.id}>
            <div className="product-card__img">
              <img src={i.image} alt={i.title} />
            </div>
            <div className="product-card__body">
              <h3 className="product-card__title">{i.title}</h3>
              <p className="product-card__desc">{i.description}</p>
              <div className="product-card__meta">
                <span className="product-card__price">{i.price} so'm</span>
                <span className="product-card__rate">⭐ {i.rate}/10</span>
              </div>
              <div className="product-card__extra">
                <span className="product-card__origin">📍 {i.origin}</span>
                <span className="product-card__stock">
                  {i.available ? "✅ Mavjud" : "❌ Tugagan"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
