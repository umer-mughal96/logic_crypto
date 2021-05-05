import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../actions/auth/auth";
import {withRouter} from 'react-router-dom'


const Sidebar = withRouter(({history}) => {


  const dispatch = useDispatch();
  const { loading , user} = useSelector((s) => s.Auth);
  return (
    <div className="s-layout__sidebar">
      <Link to='/' className="s-sidebar__trigger" >
        <i className="fa fa-bars"></i>
      </Link>
      <nav className="s-sidebar__nav">
        <ul>
          <li>
            <Link to='/'>
              <img src="files/images/knowledgepage/header-logo.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link to='/rule-dsh' className="s-sidebar__nav-link" >
              {" "}
              <i className="fab fa-stumbleupon-circle"></i>
              <span>Rules</span>{" "}
            </Link>
          </li>
          <li>
            <Link to='/exchange-dsh' className="s-sidebar__nav-link" >
              {" "}
              <i className="fas fa-exchange-alt"></i>
              <span>Exchange</span>{" "}
            </Link>
          </li>
          <li>
            <Link to='/setting-dsh' className="s-sidebar__nav-link" >
              {" "}
              <i className="fas fa-cog"></i>
              <span>Settings</span>{" "}
            </Link>
          </li>
        </ul>
        <div className="row sidebar-button">
          <div className="offset-2 col-8">
            <Link to='/' className="btn d-block">
              Get plans
            </Link>
          </div>
          <div className="offset-2 col-8">
            <Link to='/' className="btn d-block">
              Help Center
            </Link>
          </div>
          <div className="offset-3 col-6 mt-2 pl-4">
              <i className="fas fa-sign-out-alt mr-1" onClick={() => dispatch(userLogout(history))}></i>Logout
           
          </div>
        </div>
      </nav>
    </div>
  );
});

export default Sidebar;
