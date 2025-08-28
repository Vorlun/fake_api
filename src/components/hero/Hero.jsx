import React from "react";
import "./style.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__content">
        <h1 className="hero__title">Fake API Web Site</h1>
        <p className="hero__subtitle">
          Bu sayt orqali dummy/fake API dan ma'lumotlarni olish va ularni
          chiroyli ko'rinishda chiqarishni o'rganamiz.
        </p>
        <button className="hero__btn">Boshlash</button>
      </div>
    </section>
  );
};

export default Hero;
