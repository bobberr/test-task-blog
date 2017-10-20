import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../action-creators/action-creator';
import {Scrollbars} from 'react-custom-scrollbars';

import Comment from '../components/Comment';
import AddComment from '../containers/AddComment';

class CommentPanel extends React.Component {
    constructor () {
        super ();
        this.state = {
            hiddenComments: false
        }
        this.hideHandler = this.hideHandler.bind(this);
    }
    hideHandler () {
        this.setState((prevState, props) => {
            return {hiddenComments: !prevState.hiddenComments}
        })
    }
    render () {
        const user = this.props.data[0];
        const comments = this.props.data[0].comments.map((comment, i) => {
            return <Comment key={i} 
                            image={comment.thumbnail} 
                            author={comment.name} 
                            content={comment.text} 
                            time={comment.time}
                    />
        });
        return (
             <div className="comment-panel">
                 <button className="comment-panel__button" onClick={this.hideHandler}>{this.state.hiddenComments ? 'Show comments' : 'Hide comments'} ({user.comments.length})</button>
                 <div className={`flex-container__column comment-panel__container ${this.state.hiddenComments ? 'notshowed' : null}`}>
                    <Scrollbars className="scroll" style={{ width: '100%', height: '460px' }}>       
                        {comments}
                    </Scrollbars>
                    <AddComment/>                                     
                 </div>
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

CommentPanel = connect(mapStateToProps, mapDispatchToProps)(CommentPanel);


module.exports = CommentPanel;