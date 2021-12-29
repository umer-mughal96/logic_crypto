import React from 'react'

const GettingStarted = (props) => {
    return (
        <div>
            <div className="container-fluid crypto-container">
        <div className="row">
          <div className="col-12 update-form mt-4">
            <h1>{props?.value?.heading ? props?.value?.heading : 'Getting Started Is Easy!'}</h1>
            
            <p>{props?.value?.paragraph ? props?.value?.paragraph : 'Sign Up Today or Simply Get Market Updates In Your Inbox'}</p>
            <form
              action=""
              method="GET"
              id="update-form"
              style={{ position: "relative" }}
            >
              <input
                className="form-control my-0 py-1 amber-border"
                type="email"
                placeholder="Email Address"
                name="keyword"
                value=""
              />
              <a className="btn">Get updates</a>
            </form>
          </div>
        </div>
      </div>
        </div>
    )
}

export default GettingStarted
