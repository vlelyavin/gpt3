import "./Navbar.scss";

export const Navbar = (props) => {
  return (
    <nav className="header__nav">
      <button onClick={() => props.home.current.scrollIntoView(props.options)} className="header__nav__link" id="home">
        Home
      </button>
      <button
        onClick={() => props.about.current.scrollIntoView(props.options)}
        className="header__nav__link"
        id="about"
      >
        What is GPT?
      </button>
      <button
        onClick={() => props.features.current.scrollIntoView(props.options)}
        className="header__nav__link"
        id="features"
      >
        Open AI
      </button>
      <button onClick={() => props.blog.current.scrollIntoView(props.options)} className="header__nav__link" id="blog">
        Blog
      </button>
    </nav>
  );
};
