import React from 'react';
import { Link } from "react-router-dom"
import "./header.css";
import {motion} from "framer-motion";
import { connect } from 'react-redux';
import { useLocation } from "react-router";



const Header = () => {
    const location = useLocation();
    let clss = location.pathname;
    if(clss === "/final"){
        clss = "header-final";
    }
    else if(clss === "/education" || clss === "/experience" || clss === "/contact" || clss === "/contact-us"){
        clss = "header-change";
    }
    else{
        clss = "header";
    }
    return (<>{/*<React.Fragment>*/}
        <div className = {clss}>
                <div className="header-links">
                    <Link className="a" to="/resume-templates">
                        <div  className="resume-templates"> Templates</div>
                    </Link>
                    <Link className="a" to="/about-us">
                        <div className="about-us">About Us</div>
                    </Link>
                    <Link className="a" to="/contact-us">
                        <div className="about-us">Contact Us</div>
                    </Link>
                    <div className="sign-in" >
                        <Link className="a" to="/">
                            Sign out
                </Link>
                <Link className="a" to="/sign-in">
                        <div className="sign-in">
                            Sign In
                        </div>
                    </Link>
                    </div>
                </div>
         </div>
            
{/*</React.Fragment>);*/}
</>)}


const mapStateToProps = (state)=>{
    return {
        auth: state.auth.auth,
        header: state.document.header
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        logOut: () => { dispatch({type: "LOGOUT" } ) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);