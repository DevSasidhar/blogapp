import React from 'react';
import { Link } from 'react-router-dom';
import blogData from './Data';

const HomePage = () => {
  return (
    <main className="main">
      <section
        className="section hero"
        style={{ backgroundImage: "url(./media/hero.jpg)"}}
      >
        <h1 className="hero__title">
          Expand Your Mind And <br />
          Read What You Love
        </h1>
        <form className="hero__form" action="">
          <div className="form-group">
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <button
              className="button"
              style= {{ paddingTop: '1rem', paddingBottom: '1rem' }}
            >
              Subscribe
            </button>
          </div>
        </form>
      </section>

      <section className="section content container">
        <div className="content__container">
          <div className="content__category">
            <h2 className="content__category-title">Categories</h2>
            <ul className="content__category-list">
              <li className="list-item">
                <a href="#html" className="link-item">Html</a>
              </li>
              <li className="list-item">
                <a href="#css" className="link-item">Css</a>
              </li>
              <li className="list-item">
                <a href="#javascript" className="link-item">Javascript</a>
              </li>
            </ul>
          </div>
          <div className="content__blogs">
            {blogData.map((blog) => (
              <article className="content__blog-item" key={blog.id}>
                <div className="content__img-container">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className='content__img'
                  />
                  <Link to={`/post/${blog.id}`} className="button content__blog-buttton">
                    <i className="bx bx-right-arrow-alt button-arrow"></i>
                  </Link>
                </div>
                <h4 className="content__blog-title">{blog.title}</h4>
                <p className="content__blog-description">
                  {blog.content.slice(0, 100)}...
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage;
