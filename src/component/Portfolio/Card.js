import React, { useState } from "react";
import { RiLiveLine } from "react-icons/ri";
import {
  AiOutlineGithub,
  AiFillGithub,
  AiFillMail,
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="box btn_shadow ">
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="category d_flex">
          <span>{props.title}</span>
        </div>

        <h3 style={{ textAlign: "center", fontSize: "14px" }}>
          React,Nodejs,Expressjs,MongoDB
        </h3>
        <p
          style={{ color: "grey", textAlign: "center", fontSize: "14px" }}
          className="proj-description"
        >
          {" "}
          {props.discription}
        </p>
        <div className="sourcecode-icons">
          <a href={props.sourceLink} target="_blank">
            <AiOutlineGithub style={{ fontSize: "30px" }} className="ai-icon" />
          </a>

          <a href={props.deployLink} target="_blank">
            <RiLiveLine style={{ fontSize: "30px" }} className="ai-icon" />
          </a>
        </div>
      </div>

      {/* Popup box */}
    </>
  );
};

export default Card;
