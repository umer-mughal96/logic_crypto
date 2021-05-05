import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700">
            <div class="container ad-container">
                <div class="row">
                    <div class="col-md-12 header-navbar">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <Link class="navbar-brand header-logo" to="/"><img src="files/images/knowledgepage/header-logo.svg" alt="" /></Link>
                            <button class="navbar-toggler header-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav ml-auto ad-navbar">
                                    <Link class="nav-item nav-link active" to='/enth'>About<span class="sr-only">(current)</span></Link>
                                    <Link class="nav-item nav-link" to='/pricing'>Pricing</Link>
                                    <Link class="nav-item nav-link" to='/categories'>Learn</Link>
                                    <Link class="nav-item nav-link" to='/invest'>Invest</Link>
                                    <Link class="nav-item nav-link" to='/signin'>Sign in</Link>
                                    <Link class="nav-item nav-link sign-up" to='/'>Free class*</Link>
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
