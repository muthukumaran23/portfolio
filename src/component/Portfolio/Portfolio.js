import React from "react";
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

const Portfolio = () => {
  return (
    <>
      <section className="Portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center ">
            {/* <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4> */}
            <h1>My Projects</h1>
          </div>

          <div className="content-box">
            {Portfolio_data.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  category={value.category}
                  totalLike={value.totalLike}
                  title={value.title}
                  discription={value.discription}
                  sourceLink={value.sourceLink}
                  deployLink={value.deployLink}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
