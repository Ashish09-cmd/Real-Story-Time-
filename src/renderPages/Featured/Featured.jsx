import React from 'react'

function Featured() {
  return (
    <section className="py-10 rstnews">
    <div className="container">
      <h2>Featured</h2>
      <div className="row mt-3">
        <div className="col-lg-6">
          <h3>Nothing Found</h3>
          <p>
            It seems we can’t find what you’re looking for. Perhaps searching
            can help.
          </p>
          <div className="input-group mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search Here ..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              Search
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Featured