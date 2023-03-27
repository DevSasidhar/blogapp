import React from 'react'

const Write = () => {
  return (
    <main className="main">
      <section
        className="section section__write"
        style={{ backgroundImage: 'url(../media/bg-detail.jpg)' }}
      >
        <h1 className="hero__title">Share your story</h1>
      </section>
      <section className="section write container">
        <div className="write__post">
          <form action="">
            <input type="text" placeholder="your title" />
            <textarea
              id="description"
              cols="30"
              rows="10"
              placeholder="Description"
            ></textarea>
          </form>
        </div>
        <div className="write__publish">
          <div className="write__publish-box">
            <h6 className="write__publish-box-title">Publish</h6>

            <p className="write__publish-paragraph">
              <span className="write__publish-status">Status</span> : Draft
            </p>
            <p className="write__publish-paragraph">
              <span className="write__publish-visibility">Visibility</span> : Public
            </p>
            <label
              className="write__publish-paragraph upload-image"
              htmlFor="upload-image"
              >upload image</label
            >
            <input type="file" id="upload-image" style={{ display: 'none' }} />
            <div className="write__publish-btn">
              <button className="write__publish-btn-draft">Save as a draft</button>
              <button className="write__publish-btn-update">Update</button>
            </div>
          </div>
          <div className="write__publish-box">
            <h6 className="write__publish-box-title">Category</h6>
            <form action="">
              <div className="write__publish-form-group">
                <label htmlFor="html">Html</label>
                <input type="radio" />
              </div>
              <div className="write__publish-form-group">
                <label for="css">Css</label>
                <input type="radio" />
              </div>
              <div className="write__publish-form-group">
                <label for="javascript">Javascript</label>
                <input type="radio" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Write