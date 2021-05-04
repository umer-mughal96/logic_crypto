import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700">
            <div className="container ad-container">
                <div className="row">
                    <div className="col-md-12 header-navbar">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link className="navbar-brand header-logo" to="/"><img src="files/images/knowledgepage/header-logo.svg" alt="" /></Link>
                            <button className="navbar-toggler header-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav ml-auto ad-navbar">
                                    <a className="nav-item nav-link active" href="#">About<span className="sr-only">(current)</span></a>
                                    <a className="nav-item nav-link" href="#">Pricing</a>
                                    <a className="nav-item nav-link" href="#">Learn</a>
                                    <a className="nav-item nav-link" href="#">Invest</a>
                                    <a className="nav-item nav-link" href="#">Sign in</a>
                                    <a className="nav-item nav-link sign-up" href="#">Free className*</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
