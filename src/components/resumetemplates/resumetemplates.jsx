import React, { Component, useRef } from 'react';
import "./resumetemplates.css";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import {documentAction} from "../actions/documentAction";
import { motion } from "framer-motion";
import { connect } from 'react-redux';
class Resumetemplates extends Component {
    state = {
        "one": false,
        "two": false,
        "three": false,
        "four": false,
        "five": false,
        "six": false,
        "seven": false,
        "eight": false
    }
    onClickHandler =  (e) => {
        this.props.chnageSkinCode(e.target.id);
        this.props.history.push("/contact");
    }
    mouseEnterHandler = (e) => {
        let id = e.target.id;
        this.setState({
            [id]: true
        })
    }
    mouseLeaveHandler = (e) => {
        let id = e.target.id;
        this.setState({
            [id]: false
        })
    }
    render() {
        const breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2, itemsToScroll: 0 },
            { width: 768, itemsToShow: 3 },
            { width: 1200, itemsToShow: 4 }
        ];
        return (
            <React.Fragment>
                <div className="templates-upper">
    <h1>Select a resume template to get started </h1>
    <p>You'll be able to edit and change this template later !!</p>
</div>
                    <div className="templates-color"></div>
                    <div ><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    
                    </div>
                        <Carousel breakPoints={breakPoints}>
                            <Item>
                                <div className={this.state.one ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="one" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => { this.mouseEnterHandler(e) }} onMouseLeave={(e) => { this.mouseLeaveHandler(e) }} src="/skin1.svg" alt="" />
                                    
                                </div>
                            </Item>
                            <Item>
                                <div className={this.state.two ? "resume-templates-hover" : "resume-templates-div"} >
                                    <img id="two" onClick={(e) => {this.onClickHandler(e)}} onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin2.svg" alt="" />
                                    
                                </div>

                            </Item>
                            <Item>
                                <div className={this.state.three ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="three" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin3.svg" alt="" />
                                    
                                </div>
                            </Item>
                            <Item>

                                <div className={this.state.four ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="four" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin4.svg" alt="" />
                                    
                                </div>

                            </Item>
                            <Item>

                                <div className={this.state.five ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="five" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin5.svg" alt="" />
                                    
                                </div>
                            </Item>
                            <Item>
                                <div className={this.state.six ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="six" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin6.svg" alt="" />
                                    
                                </div>


                            </Item>
                            <Item>

                                <div className={this.state.seven ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="seven" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin7.svg" alt="" />
                                    
                                </div>
                            </Item>
                            <Item>

                                <div className={this.state.eight ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="eight" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin8.svg" alt="" />
                                    
                                </div>

                            </Item>

                        </Carousel>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        chnageSkinCode: (skinCode) => {dispatch(documentAction(skinCode))}
    }
}

export default connect(null, mapDispatchToProps)(Resumetemplates);