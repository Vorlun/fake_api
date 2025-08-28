import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

const Articles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonbek.uz/api/posts?limit=6")
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="articles">
      <h2 className="title">Articles</h2>
      <div className="container wrapper">
        {data?.map((i) => (
          <div className="articles-card" key={i.id}>
            <h3 className="articles-card__title">{i.title}</h3>
            <p className="articles-card__body">{i.body}</p>
            <div className="articles-card__footer">
              <span className="articles-card__author">{i.author}</span>
              <span className="articles-card__date">{i.date}</span>
            </div>
            <div className="articles-card__meta">
              <span>❤️ {i.likes}</span>
              <span className="articles-card__category">#{i.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
