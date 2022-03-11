import "./Navbar.scss";

export const Navbar = ({ home, about, features, blog }) => {
  const options = {
    behavior: "smooth",
    block: "center",
  };

  return (
    <nav className="header__nav">
      <button
        onClick={() => home.current.scrollIntoView(options)}
        className="header__nav__link"
        id="home"
      >
        Home
      </button>
      <button
        onClick={() => about.current.scrollIntoView(options)}
        className="header__nav__link"
        id="about"
      >
        What is GPT?
      </button>
      <button
        onClick={() => features.current.scrollIntoView(options)}
        className="header__nav__link"
        id="features"
      >
        Open AI
      </button>
      <button
        onClick={() => blog.current.scrollIntoView(options)}
        className="header__nav__link"
        id="blog"
      >
        Blog
      </button>
    </nav>
  );
};
