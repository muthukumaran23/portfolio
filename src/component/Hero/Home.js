// import React from "react";
// import "./Home.css";
// import hero from "../pic/hero.jpg";
// import { Typewriter } from "react-simple-typewriter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import MailIcon from "@mui/icons-material/Mail";

// const Home = () => {
//   return (
//     <>
//       <section className="hero" id="home">
//         <div className="container" id="homecontainer">
//           <div className="left top">
//             <h3>WELCOME TO MY WORLD</h3>
//             <h1>
//               <div> Hi, I’m</div>

//               <div className="myname">MUTHUKUMARAN M</div>
//             </h1>

//             <h2>
//               a
//               <span>
//                 <Typewriter
//                   words={["MERN STACK DEVELOPER", "Full Stack Developer"]}
//                   loop
//                   cursor
//                   cursorStyle="|"
//                   typeSpeed={70}
//                   deleteSpeed={50}
//                   delaySpeed={1000}
//                 />
//               </span>
//             </h2>

//             <p>
//               I am MERN Stack Developer.and I am currently looking teamwork jobs
//               in Developer stream for learning & improve my knowledge.
//             </p>

//             <div className="hero_btn d_flex">
//               <div className="col_1">
//                 <h4>FIND WITH ME</h4>
//                 <div className="button">
//                   <button
//                     className="btn_shadow"
//                     onClick={() =>
//                       (window.location.href =
//                         "https://www.linkedin.com/in/muthukumaran-m-0b3215271/")
//                     }
//                   >
//                     <LinkedInIcon />
//                   </button>
//                   <button
//                     className="btn_shadow"
//                     onClick={() =>
//                       (window.location.href =
//                         "https://github.com/muthukumaran23")
//                     }
//                   >
//                     <GitHubIcon />
//                   </button>
//                   <button
//                     className="btn_shadow"
//                     onClick={() =>
//                       (window.location.href =
//                         "mailto:tvm.muthukumaran007@gmail.com")
//                     }
//                   >
//                     <MailIcon />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <img src={hero} alt="" />
//           </div>

//           {/* <div className="right">
//             <div className="right_img">

//             </div>
//           </div> */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;

import React from "react";
import "./Home.css";
import hero from "../pic/hero.jpg";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

const Homepage = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["MERN Stack Developer", "Full Stack Developer"],
      startDelay: 500,
      backDelay: 1500,
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <div className="homepage" id="home">
      <div className="homepage-content">
        <div className="homepage-content-left">
          <div>Hello..! I Am</div>
          <div className="name">Muthukumaran.M</div>
          <div ref={textRef}></div>

          <a
            href="https://drive.google.com/file/d/1VueLzoMoAApPWTPC4X3MyYdrRBEOqLoU/view"
            target="_blank"
          >
            <div className="hero_btn d_flex">
              <div className="col_1">
                <div className="button">
                  <button
                    className="btn_shadow"
                    onClick={() =>
                      (window.location.href =
                        "https://www.linkedin.com/in/muthukumaran-m-0b3215271/")
                    }
                  >
                    <LinkedInIcon />
                  </button>
                  <button
                    className="btn_shadow"
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/muthukumaran23")
                    }
                  >
                    <GitHubIcon />
                  </button>
                  <button
                    className="btn_shadow"
                    onClick={() =>
                      (window.location.href =
                        "mailto:tvm.muthukumaran007@gmail.com")
                    }
                  >
                    <MailIcon />
                  </button>
                </div>
              </div>
            </div>
            {/* <button className="button homepage-hireme-btn">Resume</button> */}
          </a>
        </div>
        <div className="homepage-content-right">
          <div className="background-circle">
            <img className="mypic" src={hero} alt="profilephoto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
