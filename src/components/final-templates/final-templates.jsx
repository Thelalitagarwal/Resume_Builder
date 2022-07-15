import React, { Component } from 'react'
import { connect } from 'react-redux';
import {documentAction} from "../actions/documentAction";

class FinalTemplates extends Component {
    state = {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false
    }
    onClickHandler =  (e) => {
        console.log("cicked")
        this.props.chnageSkinCode(e.target.id);
        // this.props.history.push("/contact");
    }
    mouseEnterHandler = (e) => {
        let id = e.target.id;
        console.log(id)
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
        return (<div className="final-right-resumes">

            <div className="final-right-resume-div">
                <img  id="one" src="/skin1.svg" alt="" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => { this.mouseEnterHandler(e) }} onMouseLeave={(e) => { this.mouseLeaveHandler(e) }} />
                
            </div>

            <div className="final-right-resume-div" >
                <img id="two" src="/skin2.svg" alt=""  onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => { this.mouseEnterHandler(e) }} onMouseLeave={(e) => { this.mouseLeaveHandler(e) }} />
                
            </div>

            <div className="final-right-resume-div" id="three" >
                <img id="three" src="/skin3.svg" alt=""  onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => { this.mouseEnterHandler(e) }} onMouseLeave={(e) => { this.mouseLeaveHandler(e) }} />
                
            </div>

            <div className="final-right-resume-div" id="four" >
                <img id="four" src="/skin4.svg" alt=""  onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => { this.mouseEnterHandler(e) }} onMouseLeave={(e) => { this.mouseLeaveHandler(e) }} />
                
            </div>

            <div className="final-right-resume-div" id="five">
                <img id="five" src="/skin5.svg" alt=""  onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => { this.mouseEnterHandler(e) }} onMouseLeave={(e) => { this.mouseLeaveHandler(e) }} />
                            </div>

            <div className="final-right-resume-div" id="six" >
                <img id="six" src="/skin6.svg" alt=""  onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => { this.mouseEnterHandler(e) }} onMouseLeave={(e) => { this.mouseLeaveHandler(e) }} />
            </div>

            <div className="final-right-resume-div" id="seven" >
                <img id="seven" src="/skin7.svg" alt=""  onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => { this.mouseEnterHandler(e) }} onMouseLeave={(e) => { this.mouseLeaveHandler(e) }} />
            </div>

            <div className="final-right-resume-div" id="eight" >
                <img id="eight" src="/skin8.svg" alt=""  onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => { this.mouseEnterHandler(e) }} onMouseLeave={(e) => { this.mouseLeaveHandler(e) }} />
            </div>


        </div>);
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        chnageSkinCode: (skinCode) => {dispatch(documentAction(skinCode))}
    }
}

export default connect(null, mapDispatchToProps)(FinalTemplates);