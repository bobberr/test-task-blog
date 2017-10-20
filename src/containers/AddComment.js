import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../action-creators/action-creator';

class AddComment extends React.Component {
    constructor () {
        super (); 
        this.state = {
            toggled: true
        }
        this.submitHandler = this.submitHandler.bind(this);
    }
    submitHandler (e) {
        e.preventDefault();
        this.props.actions.postComment(this.author.value, this.content.value);
        this.author.value = '';
        this.content.value = '';
    }
    render () {
        console.log((new Date).getUTCMonth())
        return (
            <div className="add-comment">
                <form 
                    onBlur={() => {this.setState({toggled: true})}}  
                    onFocus={() => {this.setState({toggled: false})}} 
                    className="add-comment__form flex-container__column"
                    onSubmit={this.submitHandler}
                >
                    <input className="add-comment__text-input" type="text" ref={ref => {this.content = ref}} placeholder="Add a comment"/>                    
                    <div className={`add-comment__container flex-container__column ${this.state.toggled ? 'notshowed' : null}`}>
                        <input className="add-comment__text-input" type="text" ref={ref => {this.author = ref}} placeholder="Enter your name"/>
                        <button className="add-comment__submit">Post comment</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

AddComment = connect(mapStateToProps, mapDispatchToProps)(AddComment);


module.exports = AddComment;