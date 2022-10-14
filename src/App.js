import { Header } from "./components/Header/Header.jsx";
import { Intro } from "./components/Intro/Intro.jsx";
import { About } from "./components/About/About.jsx";
import { Benefits } from "./components/Benefits/Benefits.jsx";
import { Features } from "./components/Features/Features.jsx";
import { Register } from "./components/Register/Register.jsx";
import { Blog } from "./components/Blog/Blog.jsx";
import { Access } from "./components/Access/Access.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { useRef } from "react";
import "./style/style.scss";

export const App = () => {
  const home = useRef();
  const about = useRef();
  const features = useRef();
  const blog = useRef();
  const earlyAccess = useRef();

  const options = {
    behavior: "smooth",
    block: "center",
  };

  const access = (
    <p className="earlyaccess" onClick={() => earlyAccess.current.scrollIntoView(options)}>
      Request Early Access to Get Started
    </p>
  );

  const title = `The possibilities are beyond your imagination`;

  return (
    <div>
      <Header home={home} about={about} features={features} blog={blog} options={options} />
      <Intro home={home} />
      <About about={about} access={access} title={title} />
      <Benefits />
      <Features features={features} access={access} title={title} />
      <Register />
      <Blog blog={blog} />
      <Access earlyAccess={earlyAccess} />
      <Footer />
    </div>
  );
};
