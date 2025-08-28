import React, { useEffect, useState } from "react";
import "./style.scss";

const Articles = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true)
        
  });

  return (
    <section className="articles">
      <h2 className="title">Article</h2>
      <div className="container wrapper">
        <div className="articles-card"></div>
      </div>
    </section>
  );
};

export default Articles;
