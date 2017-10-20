import React from 'react';


const Comment = (props) =>  {
    return (
        <div className="comment flex-container__row">
            <img className="comment__thumbnail" src={props.image} alt="thumbnail"/>
            <div className="flex-container__column comment__content-container">
                <p className="comment__name">{props.author}</p>
                <p className="comment__content">{props.content}</p>
            </div>
            <p className="comment__time">{props.time}</p>
        </div>
    )
}


module.exports = Comment;