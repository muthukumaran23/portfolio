import React, { useRef, useState } from "react";
import contact1 from "./contact1.png";
import "./Contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    // phone: "",
    email: "",
    // subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const form = useRef();
  const [done, setdone] = useState(false);

  console.log("done", done);
  const formSubmit = (event) => {
    event.preventDefault();
    //   alert(
    //     `My name is ${data.fullname}.
    // My phone number is ${data.phone}.
    // My email address is ${data.email}.
    // My Subject on  ${data.subject}.
    // Here is my message I want to say : ${data.message}.
    // `
    //   );

    emailjs
      .sendForm(
        "service_oid2eit",
        "template_krlccjr",
        form.current,
        "45qHR2LQ7az7WeT0A"
      )
      .then(
        (result) => {
          console.log(result.text);
          setdone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <p>Phone: +91-7806873355</p>
                  <p>Email:muthukumaranmani96@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    {/* <button className="btn_shadow">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-instagram"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-twitter"></i>
                    </button> */}
                    <button
                      className="btn_shadow"
                      onClick={() =>
                        (window.location.href =
                          "https://www.linkedin.com/in/muthukumaran-m-0b3215271/")
                      }
                    >
                      {/* <i class="fab fa-linkedin-in"></i> */}
                      <LinkedInIcon />
                    </button>
                    <button
                      className="btn_shadow"
                      // onClick="window.location.href='https://w3docs.com';"
                      onClick={() =>
                        (window.location.href =
                          "https://github.com/muthukumaran23")
                      }
                    >
                      {/* <i class="fab fa-linkedin-in"></i> */}
                      <GitHubIcon />
                    </button>
                    <button
                      className="btn_shadow"
                      onClick={() =>
                        (window.location.href =
                          "mailto:tvm.muthukumaran007@gmail.com")
                      }
                    >
                      {/* <i class="fab fa-linkedin-in"></i> */}
                      <MailIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form ref={form} onSubmit={formSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  {/* <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div> */}
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                {/* <div className="input">
                  <span>SUBJECT </span>
                  <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                </div> */}
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button type="submit" className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
                {done && (
                  <div>
                    Thanks for contacting me!{" "}
                    <button onClick={() => setdone(false)}>x</button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
