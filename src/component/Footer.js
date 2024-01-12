import React from "react";
import logo1 from "./pic/footer.jpg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="conatiner text-center top">
          <div>
            <img src={logo1} alt="" className="image" />
          </div>
          <p>by M.Muthukumaran </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
