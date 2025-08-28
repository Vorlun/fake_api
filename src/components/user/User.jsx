import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonbek.uz/api/users?limit=6")
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="users">
      <h2 className="title">Users</h2>
      <div className="container wrapper">
        {data?.map((i) => (
          <div className="user-card" key={i.id}>
            <div className="user-card__header">
              <img
                src={`https://i.pravatar.cc/150?u=${i.id}`}
                alt={i.name}
                className="user-card__avatar"
              />
              <div>
                <h3 className="user-card__name">{i.name}</h3>
                <span className="user-card__username">@{i.username}</span>
              </div>
            </div>
            <p className="user-card__bio">{i.bio}</p>
            <div className="user-card__info">
              <span>{i.email}</span>
              <span>{i.phone}</span>
              <span>{i.website}</span>
            </div>
            <div className="user-card__extra">
              <span>{i.city}</span>
              <span>{i.profession}</span>
            </div>
            <div className="user-card__hobbies">
              <strong>Hobbies:</strong>
              <ul>
                {i.hobbies?.map((h, idx) => (
                  <li key={idx}>• {h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Users;
