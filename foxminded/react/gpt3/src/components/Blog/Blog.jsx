import "./Blog.scss";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import blog4 from "../../images/blog4.png";
import blog5 from "../../images/blog5.png";

export const Blog = ({ blog }) => {
  const blogList1 = [
    {
      title: `GPT-3 and Open AI is the future. Let us exlore how it is?`,
      date: `Sep 26, 2021`,
      linkText: `Read full article`,
      image: blog2,
      id: 2,
    },
    {
      title: `GPT-3 and Open AI is the future. Let us exlore how it is?`,
      date: `Sep 26, 2021`,
      linkText: `Read full article`,
      image: blog3,
      id: 3,
    },
  ];
  const blogList2 = [
    {
      title: `GPT-3 and Open AI is the future. Let us exlore how it is?`,
      date: `Sep 26, 2021`,
      linkText: `Read full article`,
      image: blog4,
      id: 4,
    },
    {
      title: `GPT-3 and Open AI is the future. Let us exlore how it is?`,
      date: `Sep 26, 2021`,
      linkText: `Read full article`,
      image: blog5,
      id: 5,
    },
  ];
  return (
    <section className="blog">
      <div className="container">
        <h1 className="blog__title title" ref={blog}>
          A lot is happening,
          <br />
          We are blogging about it.
        </h1>
        <div className="blog__inner">
          <div className="blog__column large">
            <img
              src={blog1}
              alt="blogImageLarge"
              className="blog__column__image"
            />
            <div className="blog__column__content">
              <p className="blog__column__date">Sep 26, 2021</p>
              <h1 className="blog__column__title">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </h1>
              <a href="#f" className="blog__column__link">
                Read full article
              </a>
            </div>
          </div>
          <div className="blog__rows">
            <ul className="blog__row">
              {blogList1.map((blogItem) => (
                <li className="blog__column" key={blogItem.id}>
                  <img
                    class="blog__column__image"
                    src={blogItem.image}
                    alt="blogImage"
                  />
                  <div className="blog__column__content">
                    <p className="blog__column__date">{blogItem.date}</p>
                    <h1 className="blog__column__title">{blogItem.title}</h1>
                    <a href="#blogs" className="blog__column__link">
                      {blogItem.linkText}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="blog__row">
              {blogList2.map((blogItem) => (
                <li className="blog__column">
                  <img
                    class="blog__column__image"
                    src={blogItem.image}
                    alt=""
                  />
                  <div className="blog__column__content">
                    <p className="blog__column__date">{blogItem.date}</p>
                    <h1 className="blog__column__title">{blogItem.title}</h1>
                    <a href="#blogs" className="blog__column__link">
                      {blogItem.linkText}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
