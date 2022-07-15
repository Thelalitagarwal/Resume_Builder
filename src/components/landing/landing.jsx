import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import P from "../p";

import "./landing.css";
import { connect } from 'react-redux';
class Landing extends Component {
    state = {
    }
    render() {
        return (
            <motion.div>
                <div className="landing-h1">
                <strong><h1>Create Your Own Resume!!</h1></strong>    
                
                </div>
                <div className="landing-h4">
                    <strong><h4>Create a resume that perfectly describes your skills and job profile.</h4></strong>
                </div>
                <Link to="/resume-templates">
                    <div className="landing-btn">
                        <motion.button

                         whileHover={{
                            cursor:'pointer',
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255, 255, 255",
                            boxShadow: "0px 0px 8px rgb(255, 255, 255",
                            transition: {
                                yoyo: Infinity
                            }
                        }}
                        >
                            Get Started For Free
                        </motion.button>
                    </div>
                </Link>
                <div className="landing-img">
                    { <img src="/resume.png" alt="" /> }
                </div>
            </motion.div>
        );
    }
}

export default Landing;